"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import QuestionCard from "./QuestionCard";
import { Question, ExamResult } from "@/lib/types";
import { saveExamResult } from "@/lib/storage";
import { getCertification } from "@/data/certs";
import {
  ChevronLeft,
  ChevronRight,
  Flag,
  Clock,
  Trophy,
  RotateCcw,
} from "lucide-react";

interface ExamRunnerProps {
  questions: Question[];
  certId: string;
  timed: boolean;
  timeLimit: number; // minutes
  onComplete: (result: ExamResult) => void;
  onRestart: () => void;
}

export default function ExamRunner({
  questions,
  certId,
  timed,
  timeLimit,
  onComplete,
  onRestart,
}: ExamRunnerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit * 60);
  const [startTime] = useState(Date.now());
  const [aiExplanations, setAiExplanations] = useState<Record<string, string>>(
    {}
  );
  const [loadingExplanation, setLoadingExplanation] = useState<string | null>(
    null
  );

  const cert = getCertification(certId);

  const submitExam = useCallback(() => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    const domainScores: Record<string, { correct: number; total: number }> = {};

    let correctCount = 0;
    questions.forEach((q) => {
      const userAnswers = answers[q.id] || [];
      const isCorrect =
        q.correctAnswers.length === userAnswers.length &&
        q.correctAnswers.every((a) => userAnswers.includes(a));

      if (isCorrect) correctCount++;

      if (!domainScores[q.domainId]) {
        domainScores[q.domainId] = { correct: 0, total: 0 };
      }
      domainScores[q.domainId].total++;
      if (isCorrect) domainScores[q.domainId].correct++;
    });

    const result: ExamResult = {
      id: Date.now().toString(),
      certId,
      date: new Date().toISOString(),
      score: Math.round((correctCount / questions.length) * 100),
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      timeSpent,
      domainScores,
      answers,
    };

    saveExamResult(result);
    setSubmitted(true);
    onComplete(result);
  }, [answers, certId, onComplete, questions, startTime]);

  useEffect(() => {
    if (!timed || submitted) return;
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          submitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timed, submitted, submitExam]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleExplain = async (questionId: string) => {
    if (aiExplanations[questionId]) return;
    setLoadingExplanation(questionId);

    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: question.question,
          options: question.options,
          correctAnswers: question.correctAnswers,
          userAnswers: answers[questionId] || [],
          explanation: question.explanation,
          certName: cert?.name || certId,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setAiExplanations((prev) => ({ ...prev, [questionId]: data.explanation }));
      } else {
        setAiExplanations((prev) => ({
          ...prev,
          [questionId]: "Unable to generate AI explanation. Please try again.",
        }));
      }
    } catch {
      setAiExplanations((prev) => ({
        ...prev,
        [questionId]: "Unable to generate AI explanation. Please try again.",
      }));
    }
    setLoadingExplanation(null);
  };

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const progressPercent = (answeredCount / questions.length) * 100;

  if (submitted && !reviewMode) {
    const correctCount = questions.filter((q) => {
      const userAnswers = answers[q.id] || [];
      return (
        q.correctAnswers.length === userAnswers.length &&
        q.correctAnswers.every((a) => userAnswers.includes(a))
      );
    }).length;
    const score = Math.round((correctCount / questions.length) * 100);
    const passed = cert ? score >= (cert.passingScore / 10) : score >= 70;

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-4 p-8 rounded-xl bg-card border">
          <Trophy
            className={`h-16 w-16 mx-auto ${passed ? "text-yellow-500" : "text-muted-foreground"}`}
          />
          <h2 className="text-3xl font-bold">
            {passed ? "Congratulations!" : "Keep Studying!"}
          </h2>
          <div className="text-6xl font-bold" style={{ color: passed ? "#22c55e" : "#ef4444" }}>
            {score}%
          </div>
          <p className="text-muted-foreground">
            {correctCount} of {questions.length} correct
          </p>
          <p className="text-sm text-muted-foreground">
            Time: {formatTime(Math.round((Date.now() - startTime) / 1000))}
          </p>

          {/* Domain breakdown */}
          <div className="mt-6 space-y-2 text-left">
            <h3 className="font-semibold text-sm">Domain Breakdown:</h3>
            {cert?.domains.map((domain) => {
              const domainQs = questions.filter(
                (q) => q.domainId === domain.id
              );
              if (domainQs.length === 0) return null;
              const domainCorrect = domainQs.filter((q) => {
                const ua = answers[q.id] || [];
                return (
                  q.correctAnswers.length === ua.length &&
                  q.correctAnswers.every((a) => ua.includes(a))
                );
              }).length;
              const pct = Math.round((domainCorrect / domainQs.length) * 100);
              return (
                <div key={domain.id} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="truncate mr-2">{domain.name}</span>
                    <span className="font-medium">
                      {domainCorrect}/{domainQs.length} ({pct}%)
                    </span>
                  </div>
                  <Progress value={pct} className="h-1.5" />
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 justify-center pt-4">
            <Button onClick={() => setReviewMode(true)} variant="outline" className="gap-2">
              <Flag className="h-4 w-4" />
              Review Answers
            </Button>
            <Button onClick={onRestart} className="gap-2">
              <RotateCcw className="h-4 w-4" />
              New Exam
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            {answeredCount}/{questions.length} answered
          </span>
          <Progress value={progressPercent} className="w-32 h-2" />
        </div>
        {timed && !submitted && (
          <div
            className={`flex items-center gap-2 text-sm font-mono ${timeRemaining < 300 ? "text-red-600" : ""}`}
          >
            <Clock className="h-4 w-4" />
            {formatTime(timeRemaining)}
          </div>
        )}
      </div>

      {/* Question */}
      <QuestionCard
        question={currentQuestion}
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        selectedAnswers={answers[currentQuestion.id] || []}
        onSelect={(selected) =>
          setAnswers((prev) => ({ ...prev, [currentQuestion.id]: selected }))
        }
        showResult={submitted || reviewMode}
        onExplain={
          submitted || reviewMode
            ? () => handleExplain(currentQuestion.id)
            : undefined
        }
        explanation={aiExplanations[currentQuestion.id]}
        loadingExplanation={loadingExplanation === currentQuestion.id}
      />

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        {/* Question dots */}
        <div className="flex gap-1 flex-wrap justify-center max-w-md">
          {questions.map((q, i) => {
            let dotColor = "bg-muted";
            if (answers[q.id]) dotColor = "bg-blue-500";
            if (submitted || reviewMode) {
              const ua = answers[q.id] || [];
              const correct =
                q.correctAnswers.length === ua.length &&
                q.correctAnswers.every((a) => ua.includes(a));
              dotColor = correct ? "bg-green-500" : ua.length > 0 ? "bg-red-500" : "bg-muted";
            }
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${dotColor} ${i === currentIndex ? "ring-2 ring-blue-400 ring-offset-2" : ""}`}
              />
            );
          })}
        </div>

        {currentIndex < questions.length - 1 ? (
          <Button
            onClick={() =>
              setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))
            }
            className="gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        ) : !submitted ? (
          <Button
            onClick={submitExam}
            variant="default"
            className="gap-2 bg-green-600 hover:bg-green-700"
          >
            <Flag className="h-4 w-4" />
            Submit Exam
          </Button>
        ) : (
          <Button onClick={onRestart} className="gap-2">
            <RotateCcw className="h-4 w-4" />
            New Exam
          </Button>
        )}
      </div>
    </div>
  );
}
