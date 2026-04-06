"use client";

import { use, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getCertification } from "@/data/certs";
import { getRandomQuestions } from "@/data/questions";
import { ExamResult, Question } from "@/lib/types";
import ExamRunner from "@/components/ExamRunner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Clock, Hash } from "lucide-react";

export default function ExamPage({
  params,
}: {
  params: Promise<{ cert: string }>;
}) {
  const { cert: certId } = use(params);
  const router = useRouter();
  const cert = getCertification(certId);

  const [examStarted, setExamStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionCount, setQuestionCount] = useState(25);
  const [timed, setTimed] = useState(false);
  const [timeLimit, setTimeLimit] = useState(60);
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);

  if (!cert) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Certification not found</p>
      </div>
    );
  }

  const startExam = () => {
    const domains = selectedDomains.length > 0 ? selectedDomains : undefined;
    const qs = getRandomQuestions(certId, questionCount, domains);
    if (qs.length === 0) {
      alert("No questions available for the selected filters.");
      return;
    }
    setQuestions(qs);
    setExamStarted(true);
  };

  const handleComplete = (result: ExamResult) => {
    // Result already saved in ExamRunner
  };

  const handleRestart = () => {
    setExamStarted(false);
    setQuestions([]);
  };

  if (examStarted && questions.length > 0) {
    return (
      <main className="min-h-screen">
        <header className="border-b bg-card">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge
                  style={{
                    backgroundColor: `${cert.color}20`,
                    color: cert.color,
                  }}
                >
                  {cert.name}
                </Badge>
                <span className="text-sm font-medium">Practice Exam</span>
              </div>
              <Button variant="ghost" size="sm" onClick={handleRestart}>
                Exit Exam
              </Button>
            </div>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <ExamRunner
            questions={questions}
            certId={certId}
            timed={timed}
            timeLimit={timeLimit}
            onComplete={handleComplete}
            onRestart={handleRestart}
          />
        </div>
      </main>
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
          <h1 className="text-2xl font-bold">Practice Exam Setup</h1>
          <p className="text-muted-foreground">
            Configure your practice exam for {cert.name}
          </p>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Question Count */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Hash className="h-4 w-4" />
              Number of Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              {[10, 25, 50].map((count) => (
                <Button
                  key={count}
                  variant={questionCount === count ? "default" : "outline"}
                  onClick={() => setQuestionCount(count)}
                  className="flex-1"
                >
                  {count}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Timer */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Timer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-3">
              <Button
                variant={!timed ? "default" : "outline"}
                onClick={() => setTimed(false)}
                className="flex-1"
              >
                Untimed
              </Button>
              <Button
                variant={timed ? "default" : "outline"}
                onClick={() => setTimed(true)}
                className="flex-1"
              >
                Timed
              </Button>
            </div>
            {timed && (
              <div className="flex gap-3">
                {[30, 60, 90, 120].map((mins) => (
                  <Button
                    key={mins}
                    variant={timeLimit === mins ? "default" : "outline"}
                    onClick={() => setTimeLimit(mins)}
                    size="sm"
                    className="flex-1"
                  >
                    {mins}m
                  </Button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Domain Filter */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Domain Filter</CardTitle>
            <p className="text-xs text-muted-foreground">
              Leave all unchecked for questions from all domains
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {cert.domains.map((domain) => (
                <label
                  key={domain.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedDomains.includes(domain.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedDomains([...selectedDomains, domain.id]);
                      } else {
                        setSelectedDomains(
                          selectedDomains.filter((d) => d !== domain.id)
                        );
                      }
                    }}
                    className="rounded"
                  />
                  <div className="flex-1">
                    <p className="text-sm">{domain.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {domain.weight}% of exam
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Start Button */}
        <Button onClick={startExam} size="lg" className="w-full gap-2">
          <Play className="h-5 w-5" />
          Start Practice Exam
        </Button>
      </div>
    </main>
  );
}
