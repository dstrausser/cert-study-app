"use client";

import { PublicUser, User } from "./types";

const USERS_KEY = "cert-study-users";
const SESSION_KEY = "cert-study-session";
const AUTH_EVENT = "cert-study:auth-changed";

function emitAuthChanged() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(AUTH_EVENT));
}

export function subscribeToAuth(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const onStorage = (e: StorageEvent) => {
    if (!e.key || e.key === SESSION_KEY || e.key === USERS_KEY) cb();
  };
  window.addEventListener(AUTH_EVENT, cb);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(AUTH_EVENT, cb);
    window.removeEventListener("storage", onStorage);
  };
}

function readUsers(): User[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as User[]) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: User[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function toPublic(user: User): PublicUser {
  const { passwordHash: _passwordHash, ...rest } = user;
  void _passwordHash;
  return rest;
}

/**
 * Lightweight client-side hash. Not a substitute for server-side auth — this
 * app stores all data in the browser, so we just want to avoid keeping the
 * raw password in localStorage.
 */
async function hashPassword(password: string, salt: string): Promise<string> {
  const enc = new TextEncoder();
  const data = enc.encode(`${salt}:${password}`);
  if (typeof crypto !== "undefined" && crypto.subtle) {
    const buf = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }
  // Fallback for very old environments — still better than plaintext.
  let h = 0;
  for (let i = 0; i < data.length; i++) {
    h = (h * 31 + data[i]) | 0;
  }
  return `fallback-${h}`;
}

const GLOBAL_SALT = "cert-study-app::v1";

export async function signUp(input: {
  username: string;
  password: string;
  displayName?: string;
  email?: string;
}): Promise<PublicUser> {
  const username = input.username.trim().toLowerCase();
  if (!username) throw new Error("Username is required.");
  if (!/^[a-z0-9_.-]{3,32}$/.test(username)) {
    throw new Error(
      "Username must be 3-32 chars: lowercase letters, numbers, dot, dash, underscore."
    );
  }
  if (!input.password || input.password.length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }
  const users = readUsers();
  if (users.some((u) => u.username === username)) {
    throw new Error("That username is already taken.");
  }
  const passwordHash = await hashPassword(input.password, GLOBAL_SALT);
  const user: User = {
    id: `user_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    username,
    displayName: input.displayName?.trim() || username,
    email: input.email?.trim() || undefined,
    passwordHash,
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  writeUsers(users);
  setSession(user.id);
  return toPublic(user);
}

export async function signIn(input: {
  username: string;
  password: string;
}): Promise<PublicUser> {
  const username = input.username.trim().toLowerCase();
  const users = readUsers();
  const user = users.find((u) => u.username === username);
  if (!user) throw new Error("Invalid username or password.");
  const passwordHash = await hashPassword(input.password, GLOBAL_SALT);
  if (passwordHash !== user.passwordHash) {
    throw new Error("Invalid username or password.");
  }
  setSession(user.id);
  return toPublic(user);
}

export function signOut() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
  emitAuthChanged();
}

export function setSession(userId: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SESSION_KEY, userId);
  emitAuthChanged();
}

export function getCurrentUserId(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(SESSION_KEY);
}

export function getCurrentUser(): PublicUser | null {
  const id = getCurrentUserId();
  if (!id) return null;
  const user = readUsers().find((u) => u.id === id);
  return user ? toPublic(user) : null;
}

let cachedSnapshot: PublicUser | null = null;
let cachedSnapshotKey: string | null = null;

/** Stable snapshot for useSyncExternalStore. Reuses the same object reference
 *  until the underlying user data changes. */
export function getCurrentUserSnapshot(): PublicUser | null {
  if (typeof window === "undefined") return null;
  const id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    if (cachedSnapshotKey !== null) {
      cachedSnapshotKey = null;
      cachedSnapshot = null;
    }
    return null;
  }
  const usersRaw = localStorage.getItem(USERS_KEY) ?? "";
  const key = `${id}::${usersRaw}`;
  if (key === cachedSnapshotKey) return cachedSnapshot;
  cachedSnapshotKey = key;
  cachedSnapshot = getCurrentUser();
  return cachedSnapshot;
}

export function getServerUserSnapshot(): PublicUser | null {
  return null;
}

export function listUsers(): PublicUser[] {
  return readUsers().map(toPublic);
}

export function updateProfile(
  userId: string,
  patch: { displayName?: string; email?: string }
): PublicUser {
  const users = readUsers();
  const idx = users.findIndex((u) => u.id === userId);
  if (idx < 0) throw new Error("User not found.");
  if (patch.displayName !== undefined)
    users[idx].displayName = patch.displayName.trim() || users[idx].username;
  if (patch.email !== undefined) users[idx].email = patch.email.trim() || undefined;
  writeUsers(users);
  emitAuthChanged();
  return toPublic(users[idx]);
}

export const GUEST_USER_ID = "__guest__";
