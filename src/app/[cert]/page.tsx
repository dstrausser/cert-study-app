"use client";

import { use, useMemo, useSyncExternalStore } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getCertification } from "@/data/certs";
import { getQuestions } from "@/data/questions";
import {
  makeProgressSnapshot,
  subscribeToProgress,
} from "@/lib/storage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  ClipboardList,
  BarChart3,
  ChevronRight,
  Flame,
  ArrowLeft,
  Clock,
  Target,
} from "lucide-react";

export default function CertDashboard({
  params,
}: {
  params: Promise<{ cert: string }>;
}) {
  const { cert: certId } = use(params);
  const router = useRouter();
  const cert = getCertification(certId);

  const getSnapshot = useMemo(() => makeProgressSnapshot(certId), [certId]);
  const snap = useSyncExternalStore(subscribeToProgress, getSnapshot, () => null);
  const progress = snap?.progress ?? null;
  const examsCount = progress?.examResults.length ?? 0;
  const avgScore =
    progress && examsCount > 0
      ? Math.round(
          progress.examResults.reduce((s, r) => s + r.score, 0) / examsCount
        )
      : 0;
  const stats = {
    streak: snap?.streak ?? 0,
    examsCount,
    avgScore,
    totalTime: progress?.totalStudyTime ?? 0,
    flashcardsReviewed: progress
      ? Object.keys(progress.flashcardProgress).length
      : 0,
  };

  if (!cert) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg">Certification not found</p>
          <Button onClick={() => router.push("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const questions = getQuestions(certId);
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${mins}m`;
    return `${mins}m`;
  };

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border/70 bg-card">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link
            href="/"
            className="mb-5 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Certifications
          </Link>
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <Badge
                  style={{
                    backgroundColor: `${cert.color}20`,
                    color: cert.color,
                  }}
                >
                  {cert.vendor.toUpperCase()}
                </Badge>
              </div>
              <h1 className="text-3xl font-semibold md:text-4xl">
                {cert.name}
              </h1>
              <p className="mt-2 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
                {cert.title}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                {cert.description}
              </p>
            </div>
            {stats.streak > 0 && (
              <div className="flex w-fit items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-orange-600 shadow-sm">
                <Flame className="h-5 w-5" />
                <span className="text-xl font-semibold">{stats.streak}</span>
                <span className="text-sm text-muted-foreground">day streak</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card className="shadow-sm">
            <CardContent className="pt-2">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <ClipboardList className="h-4 w-4" />
                <span className="text-xs">Exams Taken</span>
              </div>
              <p className="text-2xl font-bold">{stats.examsCount}</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardContent className="pt-2">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Target className="h-4 w-4" />
                <span className="text-xs">Avg Score</span>
              </div>
              <p className="text-2xl font-bold">
                {stats.avgScore > 0 ? `${stats.avgScore}%` : "--"}
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardContent className="pt-2">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <BookOpen className="h-4 w-4" />
                <span className="text-xs">Cards Reviewed</span>
              </div>
              <p className="text-2xl font-bold">{stats.flashcardsReviewed}</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardContent className="pt-2">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Clock className="h-4 w-4" />
                <span className="text-xs">Study Time</span>
              </div>
              <p className="text-2xl font-bold">
                {stats.totalTime > 0 ? formatTime(stats.totalTime) : "--"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Study modes */}
        <h2 className="mb-4 text-xl font-semibold">Study Modes</h2>
        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          <Link href={`/${certId}/exam`} className="block h-full">
            <Card className="h-full border-border shadow-sm transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md">
              <CardHeader>
                <div className="w-fit rounded-lg border border-border bg-muted/45 p-3">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Practice Exam</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Simulate the real exam with timed or untimed practice tests.
                  Choose question count and filter by domain.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  {questions.length} questions available
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                  Configure exam
                  <ChevronRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href={`/${certId}/flashcards`} className="block h-full">
            <Card className="h-full border-border shadow-sm transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md">
              <CardHeader>
                <div className="w-fit rounded-lg border border-border bg-muted/45 p-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Flashcards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Review key concepts with flip cards. Spaced repetition helps
                  you focus on weak areas.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  {stats.flashcardsReviewed}/{questions.length} reviewed
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                  Review cards
                  <ChevronRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href={`/${certId}/progress`} className="block h-full">
            <Card className="h-full border-border shadow-sm transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md">
              <CardHeader>
                <div className="w-fit rounded-lg border border-border bg-muted/45 p-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Progress & Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track your scores over time, identify weak domains, and
                  monitor your study progress.
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                  View analytics
                  <ChevronRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Exam domains */}
        <h2 className="mb-4 text-xl font-semibold">Exam Domains</h2>
        <div className="space-y-3">
          {cert.domains.map((domain) => {
            const domainQuestions = questions.filter(
              (q) => q.domainId === domain.id
            );
            return (
              <Card key={domain.id} className="shadow-sm">
                <CardContent className="py-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <p className="font-medium">{domain.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {domainQuestions.length} questions &middot;{" "}
                        {domain.weight}% of exam
                      </p>
                    </div>
                    <div className="w-full sm:w-28">
                      <Progress value={domain.weight} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {cert.studyResources && cert.studyResources.length > 0 && (
          <>
            <h2 className="mb-1 mt-10 text-xl font-semibold">
              Official Microsoft study materials
            </h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Free resources from Microsoft Learn - start with the exam page to
              see the latest &ldquo;Skills measured&rdquo; outline.
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {cert.studyResources.map((res) => (
                <a
                  key={res.url}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="h-full shadow-sm transition hover:border-primary/35 hover:shadow-md">
                    <CardContent className="py-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-1.5 text-[10px] uppercase tracking-wide">
                            {res.type.replace("-", " ")}
                          </Badge>
                          <p className="font-medium text-sm">{res.title}</p>
                          {res.description && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {res.description}
                            </p>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">Open</span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
