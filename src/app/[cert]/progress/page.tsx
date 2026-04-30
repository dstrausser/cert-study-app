"use client";

import { use, useMemo, useSyncExternalStore } from "react";
import Link from "next/link";
import { getCertification } from "@/data/certs";
import {
  makeProgressSnapshot,
  subscribeToProgress,
} from "@/lib/storage";
import ProgressChart from "@/components/ProgressChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Trophy,
  Flame,
  Target,
  Clock,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export default function ProgressPage({
  params,
}: {
  params: Promise<{ cert: string }>;
}) {
  const { cert: certId } = use(params);
  const cert = getCertification(certId);

  const getSnapshot = useMemo(() => makeProgressSnapshot(certId), [certId]);
  const snap = useSyncExternalStore(subscribeToProgress, getSnapshot, () => null);
  const progress = snap?.progress ?? null;
  const streak = snap?.streak ?? 0;

  if (!cert) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Certification not found</p>
      </div>
    );
  }

  if (!progress) return null;

  const results = progress.examResults;
  const bestScore = results.length > 0 ? Math.max(...results.map((r) => r.score)) : null;
  const avgScore =
    results.length > 0
      ? Math.round(results.reduce((s, r) => s + r.score, 0) / results.length)
      : null;

  // Score trend
  const recentResults = results.slice(-5);
  const olderResults = results.slice(-10, -5);
  const recentAvg =
    recentResults.length > 0
      ? recentResults.reduce((s, r) => s + r.score, 0) / recentResults.length
      : 0;
  const olderAvg =
    olderResults.length > 0
      ? olderResults.reduce((s, r) => s + r.score, 0) / olderResults.length
      : 0;
  const trending = recentResults.length > 0 && olderResults.length > 0 ? recentAvg > olderAvg : null;

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${mins}m`;
    return `${mins}m`;
  };

  // Domain performance
  const domainStats = cert.domains.map((domain) => {
    let correct = 0;
    let total = 0;
    results.forEach((r) => {
      if (r.domainScores[domain.id]) {
        correct += r.domainScores[domain.id].correct;
        total += r.domainScores[domain.id].total;
      }
    });
    return {
      ...domain,
      correct,
      total,
      percentage: total > 0 ? Math.round((correct / total) * 100) : 0,
    };
  });

  const weakestDomain = domainStats.filter((d) => d.total > 0).sort((a, b) => a.percentage - b.percentage)[0];

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
          <h1 className="text-2xl font-bold">Progress & Stats</h1>
          <p className="text-muted-foreground">
            {cert.name} - {cert.title}
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <Flame className="h-8 w-8 mx-auto mb-2 text-orange-500" />
              <p className="text-3xl font-bold">{streak}</p>
              <p className="text-xs text-muted-foreground">Day Streak</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <p className="text-3xl font-bold">
                {bestScore !== null ? `${bestScore}%` : "--"}
              </p>
              <p className="text-xs text-muted-foreground">Best Score</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <p className="text-3xl font-bold">
                {avgScore !== null ? `${avgScore}%` : "--"}
              </p>
              <p className="text-xs text-muted-foreground">Average Score</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <p className="text-3xl font-bold">
                {progress.totalStudyTime > 0
                  ? formatTime(progress.totalStudyTime)
                  : "--"}
              </p>
              <p className="text-xs text-muted-foreground">Study Time</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              {trending === true ? (
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
              ) : trending === false ? (
                <TrendingDown className="h-8 w-8 mx-auto mb-2 text-red-500" />
              ) : (
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              )}
              <p className="text-3xl font-bold">
                {trending === true ? "Up" : trending === false ? "Down" : "--"}
              </p>
              <p className="text-xs text-muted-foreground">Trend</p>
            </CardContent>
          </Card>
        </div>

        {/* Score History Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Score History</CardTitle>
          </CardHeader>
          <CardContent>
            <ProgressChart results={results} />
          </CardContent>
        </Card>

        {/* Domain Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Domain Performance</CardTitle>
            {weakestDomain && (
              <p className="text-sm text-muted-foreground">
                Focus area:{" "}
                <span className="text-red-500 font-medium">
                  {weakestDomain.name}
                </span>{" "}
                ({weakestDomain.percentage}%)
              </p>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            {domainStats.map((domain) => (
              <div key={domain.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium truncate mr-4">
                    {domain.name}
                  </p>
                  <div className="flex items-center gap-2">
                    {domain.total > 0 ? (
                      <>
                        <Badge
                          variant={
                            domain.percentage >= 70 ? "default" : "destructive"
                          }
                        >
                          {domain.percentage}%
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          ({domain.correct}/{domain.total})
                        </span>
                      </>
                    ) : (
                      <span className="text-xs text-muted-foreground">
                        No data
                      </span>
                    )}
                  </div>
                </div>
                <Progress
                  value={domain.total > 0 ? domain.percentage : 0}
                  className="h-2"
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Exam History */}
        <Card>
          <CardHeader>
            <CardTitle>Exam History</CardTitle>
          </CardHeader>
          <CardContent>
            {results.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No exams taken yet. Start a practice exam to see results here.
              </p>
            ) : (
              <div className="space-y-2">
                {[...results].reverse().map((result, i) => (
                  <div
                    key={result.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div>
                      <p className="text-sm font-medium">
                        Exam {results.length - i}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(result.date).toLocaleDateString()} &middot;{" "}
                        {formatTime(result.timeSpent)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-lg font-bold ${result.score >= 70 ? "text-green-600" : "text-red-600"}`}
                      >
                        {result.score}%
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {result.correctAnswers}/{result.totalQuestions}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
