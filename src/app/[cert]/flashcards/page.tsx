"use client";

import { use, useState, useMemo } from "react";
import Link from "next/link";
import { getCertification } from "@/data/certs";
import { getQuestions } from "@/data/questions";
import { updateFlashcardProgress } from "@/lib/storage";
import FlashCard from "@/components/FlashCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shuffle } from "lucide-react";

export default function FlashcardsPage({
  params,
}: {
  params: Promise<{ cert: string }>;
}) {
  const { cert: certId } = use(params);
  const cert = getCertification(certId);
  const allQuestions = useMemo(() => getQuestions(certId), [certId]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState(() =>
    [...allQuestions].sort(() => Math.random() - 0.5)
  );

  if (!cert) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Certification not found</p>
      </div>
    );
  }

  const handleRate = (status: "learning" | "known") => {
    const question = questions[currentIndex];
    updateFlashcardProgress(certId, question.id, status);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Reshuffle when we reach the end
      setQuestions([...allQuestions].sort(() => Math.random() - 0.5));
      setCurrentIndex(0);
    }
  };

  const shuffle = () => {
    setQuestions([...allQuestions].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No flashcards available.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <header className="border-b bg-card">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link
            href={`/${certId}`}
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {cert.name}
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Flashcards</h1>
              <p className="text-muted-foreground">{cert.name} - {cert.title}</p>
            </div>
            <Button variant="outline" onClick={shuffle} className="gap-2">
              <Shuffle className="h-4 w-4" />
              Shuffle
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <FlashCard
          question={questions[currentIndex]}
          cardNumber={currentIndex + 1}
          totalCards={questions.length}
          onRate={handleRate}
          onNext={handleNext}
        />
      </div>
    </main>
  );
}
