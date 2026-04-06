"use client";

import { ExamResult, FlashcardProgress, StudyProgress } from "./types";

const STORAGE_KEY = "cert-study-progress";

function getStorage(): Record<string, StudyProgress> {
  if (typeof window === "undefined") return {};
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

function saveStorage(data: Record<string, StudyProgress>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getProgress(certId: string): StudyProgress {
  const storage = getStorage();
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
  const storage = getStorage();
  const progress = getProgress(result.certId);

  // Update streak
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
  saveStorage(storage);
}

export function updateFlashcardProgress(
  certId: string,
  questionId: string,
  status: FlashcardProgress["status"]
) {
  const storage = getStorage();
  const progress = getProgress(certId);
  const now = new Date().toISOString();

  const existing = progress.flashcardProgress[questionId];
  const reviewCount = existing ? existing.reviewCount + 1 : 1;

  // Simple spaced repetition: next review based on status
  const intervals: Record<string, number> = {
    new: 0,
    learning: 1 * 24 * 60 * 60 * 1000, // 1 day
    known: 7 * 24 * 60 * 60 * 1000, // 7 days
  };

  progress.flashcardProgress[questionId] = {
    questionId,
    certId,
    status,
    lastReviewed: now,
    reviewCount,
    nextReview: new Date(Date.now() + intervals[status]).toISOString(),
  };

  // Update streak
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  if (progress.lastStudyDate === yesterday) {
    progress.streak += 1;
  } else if (progress.lastStudyDate !== today) {
    progress.streak = 1;
  }
  progress.lastStudyDate = today;

  storage[certId] = progress;
  saveStorage(storage);
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
