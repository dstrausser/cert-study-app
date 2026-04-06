"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Question } from "@/lib/types";
import { cn } from "@/lib/utils";
import { RotateCcw, ThumbsUp, ThumbsDown, Eye } from "lucide-react";

interface FlashCardProps {
  question: Question;
  cardNumber: number;
  totalCards: number;
  onRate: (status: "learning" | "known") => void;
  onNext: () => void;
}

export default function FlashCard({
  question,
  cardNumber,
  totalCards,
  onRate,
  onNext,
}: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleRate = (status: "learning" | "known") => {
    onRate(status);
    setFlipped(false);
    onNext();
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Card {cardNumber} of {totalCards}
        </span>
        <Badge variant="outline">{question.domainId}</Badge>
      </div>

      <div
        className="perspective-1000 cursor-pointer"
        onClick={() => setFlipped(!flipped)}
        style={{ perspective: "1000px" }}
      >
        <div
          className={cn(
            "relative w-full transition-transform duration-500",
            "preserve-3d"
          )}
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <Card
            className="min-h-[300px]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <CardContent className="p-8 flex flex-col items-center justify-center min-h-[300px]">
              <p className="text-lg font-medium text-center leading-relaxed">
                {question.question}
              </p>
              <p className="text-sm text-muted-foreground mt-6 flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Click to reveal answer
              </p>
            </CardContent>
          </Card>

          {/* Back */}
          <Card
            className="min-h-[300px] absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <CardContent className="p-8 min-h-[300px]">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-green-600 mb-2">
                    Correct Answer:
                  </p>
                  {question.options
                    .filter((o) => question.correctAnswers.includes(o.id))
                    .map((o) => (
                      <p key={o.id} className="text-lg font-medium">
                        {o.id.toUpperCase()}. {o.text}
                      </p>
                    ))}
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Explanation:</p>
                  <p className="text-sm text-muted-foreground">
                    {question.explanation}
                  </p>
                </div>
                {question.options
                  .filter((o) => !question.correctAnswers.includes(o.id))
                  .length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      Other options:
                    </p>
                    {question.options
                      .filter((o) => !question.correctAnswers.includes(o.id))
                      .map((o) => (
                        <p
                          key={o.id}
                          className="text-xs text-muted-foreground"
                        >
                          {o.id.toUpperCase()}. {o.text}
                        </p>
                      ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Rating buttons */}
      {flipped && (
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => handleRate("learning")}
            className="gap-2 border-red-300 hover:bg-red-50 dark:hover:bg-red-950/30"
          >
            <ThumbsDown className="h-4 w-4 text-red-500" />
            Still Learning
          </Button>
          <Button
            variant="outline"
            onClick={() => handleRate("known")}
            className="gap-2 border-green-300 hover:bg-green-50 dark:hover:bg-green-950/30"
          >
            <ThumbsUp className="h-4 w-4 text-green-500" />
            Got It!
          </Button>
        </div>
      )}

      {!flipped && (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => {
              setFlipped(false);
              onNext();
            }}
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Skip
          </Button>
        </div>
      )}
    </div>
  );
}
