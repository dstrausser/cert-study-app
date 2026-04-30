"use client";

import { ExamResult, FlashcardProgress, StudyProgress } from "./types";
import { GUEST_USER_ID, getCurrentUserId, subscribeToAuth } from "./auth";

const LEGACY_KEY = "cert-study-progress";
const STORAGE_PREFIX = "cert-study-progress::";
const PROGRESS_EVENT = "cert-study:progress-changed";

function storageKey(userId: string) {
  return `${STORAGE_PREFIX}${userId}`;
}

function activeUserId(): string {
  return getCurrentUserId() ?? GUEST_USER_ID;
}

function emitProgressChanged() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(PROGRESS_EVENT));
}

export function subscribeToProgress(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const onStorage = (e: StorageEvent) => {
    if (!e.key || e.key.startsWith(STORAGE_PREFIX)) cb();
  };
  window.addEventListener(PROGRESS_EVENT, cb);
  window.addEventListener("storage", onStorage);
  // Auth changes flip the active user, so progress effectively changes too.
  const unsubAuth = subscribeToAuth(cb);
  return () => {
    window.removeEventListener(PROGRESS_EVENT, cb);
    window.removeEventListener("storage", onStorage);
    unsubAuth();
  };
}

export interface ProgressSnapshot {
  progress: StudyProgress;
  /** Streak adjusted for current date (0 if no study yesterday/today). */
  streak: number;
}

/** Returns a stable getSnapshot for useSyncExternalStore. Reuses the
 *  same object reference until the underlying user/cert data changes. */
export function makeProgressSnapshot(certId: string) {
  let cached: ProgressSnapshot | null = null;
  let cachedKey = "";
  const empty: ProgressSnapshot = {
    progress: {
      certId,
      examResults: [],
      flashcardProgress: {},
      streak: 0,
      lastStudyDate: "",
      totalStudyTime: 0,
    },
    streak: 0,
  };
  return (): ProgressSnapshot => {
    const userId = activeUserId();
    if (typeof window === "undefined") return empty;
    const raw = localStorage.getItem(storageKey(userId)) ?? "";
    const today = new Date().toISOString().split("T")[0];
    const yesterday = new Date(Date.now() - 86400000)
      .toISOString()
      .split("T")[0];
    const key = `${userId}::${today}::${raw}`;
    if (cached && key === cachedKey) return cached;
    const progress = getProgress(certId, userId);
    const streak =
      progress.lastStudyDate === today || progress.lastStudyDate === yesterday
        ? progress.streak
        : 0;
    cached = { progress, streak };
    cachedKey = key;
    return cached;
  };
}

function migrateLegacyIfNeeded() {
  if (typeof window === "undefined") return;
  const legacy = localStorage.getItem(LEGACY_KEY);
  if (!legacy) return;
  const guestKey = storageKey(GUEST_USER_ID);
  if (!localStorage.getItem(guestKey)) {
    localStorage.setItem(guestKey, legacy);
  }
  localStorage.removeItem(LEGACY_KEY);
}

function getStorage(userId = activeUserId()): Record<string, StudyProgress> {
  if (typeof window === "undefined") return {};
  migrateLegacyIfNeeded();
  try {
    const data = localStorage.getItem(storageKey(userId));
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

function saveStorage(
  data: Record<string, StudyProgress>,
  userId = activeUserId()
) {
  if (typeof window === "undefined") return;
  localStorage.setItem(storageKey(userId), JSON.stringify(data));
}

export function getProgress(certId: string, userId?: string): StudyProgress {
  const storage = getStorage(userId ?? activeUserId());
  return (
    storage[certId] || {
      certId,
      examResults: [],
      flashcardProgress: {},
      streak: 0,
      lastStudyDate: "",
      totalStudyTime: 0,
    }
  );
}

export function saveExamResult(result: ExamResult) {
  const userId = activeUserId();
  const storage = getStorage(userId);
  const progress = getProgress(result.certId, userId);

  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  if (progress.lastStudyDate === yesterday) {
    progress.streak += 1;
  } else if (progress.lastStudyDate !== today) {
    progress.streak = 1;
  }
  progress.lastStudyDate = today;

  progress.examResults.push(result);
  progress.totalStudyTime += result.timeSpent;
  storage[result.certId] = progress;
  saveStorage(storage, userId);
  emitProgressChanged();
}

export function updateFlashcardProgress(
  certId: string,
  questionId: string,
  status: FlashcardProgress["status"]
) {
  const userId = activeUserId();
  const storage = getStorage(userId);
  const progress = getProgress(certId, userId);
  const now = new Date().toISOString();

  const existing = progress.flashcardProgress[questionId];
  const reviewCount = existing ? existing.reviewCount + 1 : 1;

  const intervals: Record<string, number> = {
    new: 0,
    learning: 1 * 24 * 60 * 60 * 1000,
    known: 7 * 24 * 60 * 60 * 1000,
  };

  progress.flashcardProgress[questionId] = {
    questionId,
    certId,
    status,
    lastReviewed: now,
    reviewCount,
    nextReview: new Date(Date.now() + intervals[status]).toISOString(),
  };

  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  if (progress.lastStudyDate === yesterday) {
    progress.streak += 1;
  } else if (progress.lastStudyDate !== today) {
    progress.streak = 1;
  }
  progress.lastStudyDate = today;

  storage[certId] = progress;
  saveStorage(storage, userId);
  emitProgressChanged();
}

export function getExamHistory(certId: string): ExamResult[] {
  return getProgress(certId).examResults;
}

export function getStreak(certId: string): number {
  const progress = getProgress(certId);
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  if (
    progress.lastStudyDate === today ||
    progress.lastStudyDate === yesterday
  ) {
    return progress.streak;
  }
  return 0;
}

/** Aggregate the user's overall streak across every certification. */
export function getOverallStreak(): number {
  if (typeof window === "undefined") return 0;
  const storage = getStorage();
  let best = 0;
  let mostRecent = "";
  for (const p of Object.values(storage)) {
    if (p.lastStudyDate > mostRecent) {
      mostRecent = p.lastStudyDate;
      best = p.streak;
    } else if (p.lastStudyDate === mostRecent) {
      best = Math.max(best, p.streak);
    }
  }
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  if (mostRecent === today || mostRecent === yesterday) return best;
  return 0;
}
