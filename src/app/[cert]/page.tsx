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
    <main className="min-h-screen">
      <header className="border-b bg-card">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Certifications
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge
                  style={{
                    backgroundColor: `${cert.color}20`,
                    color: cert.color,
                  }}
                >
                  {cert.vendor.toUpperCase()}
                </Badge>
                <h1 className="text-3xl font-bold">{cert.name}</h1>
              </div>
              <p className="text-lg text-muted-foreground">{cert.title}</p>
            </div>
            {stats.streak > 0 && (
              <div className="flex items-center gap-2 text-orange-500">
                <Flame className="h-6 w-6" />
                <span className="text-2xl font-bold">{stats.streak}</span>
                <span className="text-sm">day streak</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <ClipboardList className="h-4 w-4" />
                <span className="text-xs">Exams Taken</span>
              </div>
              <p className="text-2xl font-bold">{stats.examsCount}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Target className="h-4 w-4" />
                <span className="text-xs">Avg Score</span>
              </div>
              <p className="text-2xl font-bold">
                {stats.avgScore > 0 ? `${stats.avgScore}%` : "--"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <BookOpen className="h-4 w-4" />
                <span className="text-xs">Cards Reviewed</span>
              </div>
              <p className="text-2xl font-bold">{stats.flashcardsReviewed}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
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
        <h2 className="text-xl font-semibold mb-4">Study Modes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href={`/${certId}/exam`}>
            <Card className="hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer h-full">
              <CardHeader>
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-950 w-fit">
                  <ClipboardList className="h-6 w-6 text-blue-600" />
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
              </CardContent>
            </Card>
          </Link>

          <Link href={`/${certId}/flashcards`}>
            <Card className="hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer h-full">
              <CardHeader>
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-950 w-fit">
                  <BookOpen className="h-6 w-6 text-green-600" />
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
              </CardContent>
            </Card>
          </Link>

          <Link href={`/${certId}/progress`}>
            <Card className="hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer h-full">
              <CardHeader>
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-950 w-fit">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Progress & Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track your scores over time, identify weak domains, and
                  monitor your study progress.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Exam domains */}
        <h2 className="text-xl font-semibold mb-4">Exam Domains</h2>
        <div className="space-y-3">
          {cert.domains.map((domain) => {
            const domainQuestions = questions.filter(
              (q) => q.domainId === domain.id
            );
            return (
              <Card key={domain.id}>
                <CardContent className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium">{domain.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {domainQuestions.length} questions &middot;{" "}
                        {domain.weight}% of exam
                      </p>
                    </div>
                    <div className="w-24">
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
            <h2 className="text-xl font-semibold mt-10 mb-1">
              Official Microsoft study materials
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Free resources from Microsoft Learn — start with the exam page to
              see the latest &ldquo;Skills measured&rdquo; outline.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cert.studyResources.map((res) => (
                <a
                  key={res.url}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="hover:shadow-md transition-shadow h-full">
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
                        <span className="text-xs text-muted-foreground">↗</span>
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
