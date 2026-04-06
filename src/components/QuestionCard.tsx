"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Question } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, Lightbulb, Loader2 } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswers: string[];
  onSelect: (answers: string[]) => void;
  showResult: boolean;
  onExplain?: () => void;
  explanation?: string;
  loadingExplanation?: boolean;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswers,
  onSelect,
  showResult,
  onExplain,
  explanation,
  loadingExplanation,
}: QuestionCardProps) {
  const [showExplanation, setShowExplanation] = useState(false);

  const isCorrect =
    showResult &&
    question.correctAnswers.length === selectedAnswers.length &&
    question.correctAnswers.every((a) => selectedAnswers.includes(a));

  const handleSelect = (optionId: string) => {
    if (showResult) return;

    if (question.type === "multiple") {
      if (selectedAnswers.includes(optionId)) {
        onSelect(selectedAnswers.filter((a) => a !== optionId));
      } else {
        onSelect([...selectedAnswers, optionId]);
      }
    } else {
      onSelect([optionId]);
    }
  };

  const difficultyColors: Record<string, string> = {
    easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
          <div className="flex gap-2">
            <Badge className={difficultyColors[question.difficulty]}>
              {question.difficulty}
            </Badge>
            {question.type === "multiple" && (
              <Badge variant="outline">Select multiple</Badge>
            )}
            {question.type === "scenario" && (
              <Badge variant="outline">Scenario</Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg font-medium leading-relaxed">
          {question.question}
        </p>

        <div className="space-y-2">
          {question.options.map((option) => {
            const isSelected = selectedAnswers.includes(option.id);
            const isCorrectOption = question.correctAnswers.includes(option.id);

            let optionStyle = "";
            if (showResult) {
              if (isCorrectOption) {
                optionStyle =
                  "border-green-500 bg-green-50 dark:bg-green-950/30";
              } else if (isSelected && !isCorrectOption) {
                optionStyle = "border-red-500 bg-red-50 dark:bg-red-950/30";
              }
            } else if (isSelected) {
              optionStyle = "border-blue-500 bg-blue-50 dark:bg-blue-950/30";
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                disabled={showResult}
                className={cn(
                  "w-full text-left p-4 rounded-lg border-2 transition-all duration-150",
                  "hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/20",
                  "disabled:hover:border-inherit disabled:hover:bg-inherit",
                  optionStyle || "border-border"
                )}
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-sm font-bold text-muted-foreground mt-0.5">
                    {option.id.toUpperCase()}.
                  </span>
                  <span className="flex-1">{option.text}</span>
                  {showResult && isCorrectOption && (
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                  )}
                  {showResult && isSelected && !isCorrectOption && (
                    <XCircle className="h-5 w-5 text-red-600 shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="space-y-3 pt-2">
            <div
              className={cn(
                "flex items-center gap-2 p-3 rounded-lg",
                isCorrect
                  ? "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200"
                  : "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200"
              )}
            >
              {isCorrect ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                <XCircle className="h-5 w-5" />
              )}
              <span className="font-medium">
                {isCorrect ? "Correct!" : "Incorrect"}
              </span>
            </div>

            <div className="p-4 rounded-lg bg-muted/50">
              <p className="text-sm font-medium mb-1">Explanation:</p>
              <p className="text-sm text-muted-foreground">
                {question.explanation}
              </p>
            </div>

            {onExplain && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setShowExplanation(true);
                  onExplain();
                }}
                disabled={loadingExplanation}
                className="gap-2"
              >
                {loadingExplanation ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Lightbulb className="h-4 w-4" />
                )}
                AI Deep Dive Explanation
              </Button>
            )}

            {showExplanation && explanation && (
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
                <p className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-blue-600" />
                  AI Explanation
                </p>
                <div className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {explanation}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
