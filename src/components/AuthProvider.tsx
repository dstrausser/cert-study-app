"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  getCurrentUserSnapshot,
  getServerUserSnapshot,
  signIn as signInLib,
  signOut as signOutLib,
  signUp as signUpLib,
  subscribeToAuth,
  updateProfile as updateProfileLib,
} from "@/lib/auth";
import { PublicUser } from "@/lib/types";

interface AuthContextValue {
  user: PublicUser | null;
  ready: boolean;
  signIn: (input: { username: string; password: string }) => Promise<void>;
  signUp: (input: {
    username: string;
    password: string;
    displayName?: string;
    email?: string;
  }) => Promise<void>;
  signOut: () => void;
  updateProfile: (patch: { displayName?: string; email?: string }) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const user = useSyncExternalStore(
    subscribeToAuth,
    getCurrentUserSnapshot,
    getServerUserSnapshot
  );
  const ready = useSyncExternalStore(
    subscribeToAuth,
    () => true,
    () => false
  );

  const signIn = useCallback(
    async (input: { username: string; password: string }) => {
      await signInLib(input);
    },
    []
  );

  const signUp = useCallback(
    async (input: {
      username: string;
      password: string;
      displayName?: string;
      email?: string;
    }) => {
      await signUpLib(input);
    },
    []
  );

  const signOut = useCallback(() => {
    signOutLib();
  }, []);

  const updateProfile = useCallback(
    (patch: { displayName?: string; email?: string }) => {
      if (!user) return;
      updateProfileLib(user.id, patch);
    },
    [user]
  );

  const value = useMemo<AuthContextValue>(
    () => ({ user, ready, signIn, signUp, signOut, updateProfile }),
    [user, ready, signIn, signUp, signOut, updateProfile]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
