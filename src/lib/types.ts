export interface Domain {
  id: string;
  name: string;
  weight: number; // percentage of exam
}

export interface Certification {
  id: string;
  name: string;
  title: string;
  vendor: string;
  description: string;
  domains: Domain[];
  color: string;
  icon: string;
  totalQuestions: number;
  passingScore: number;
  examDuration: number; // minutes
  level?: "fundamentals" | "associate" | "expert" | "specialty";
  category?: string;
}

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  certId: string;
  domainId: string;
  type: "single" | "multiple" | "scenario";
  question: string;
  options: Option[];
  correctAnswers: string[];
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface ExamConfig {
  certId: string;
  questionCount: number;
  domainFilter?: string[];
  timed: boolean;
  timeLimit?: number; // minutes
}

export interface ExamResult {
  id: string;
  certId: string;
  date: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number; // seconds
  domainScores: Record<string, { correct: number; total: number }>;
  answers: Record<string, string[]>;
}

export interface FlashcardProgress {
  questionId: string;
  certId: string;
  status: "new" | "learning" | "known";
  lastReviewed: string;
  reviewCount: number;
  nextReview: string;
}

export interface StudyProgress {
  certId: string;
  examResults: ExamResult[];
  flashcardProgress: Record<string, FlashcardProgress>;
  streak: number;
  lastStudyDate: string;
  totalStudyTime: number; // seconds
}

export interface User {
  id: string;
  username: string;
  email?: string;
  displayName: string;
  passwordHash: string;
  createdAt: string;
}

export interface PublicUser {
  id: string;
  username: string;
  email?: string;
  displayName: string;
  createdAt: string;
}

export interface LearningPathStep {
  certId: string;
  /** Short reason this cert is in the path. */
  rationale: string;
  /** Estimated study time in hours. */
  estimatedHours: number;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  audience: string;
  level: "beginner" | "intermediate" | "advanced";
  color: string;
  icon: string;
  steps: LearningPathStep[];
}
