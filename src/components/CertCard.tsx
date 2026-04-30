"use client";

import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  Award,
  BookOpen,
  ChevronRight,
  Lock,
  Cloud,
  CloudCog,
  Radar,
  KeyRound,
  FileLock2,
  Server,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Certification } from "@/lib/types";
import { getProgress, subscribeToProgress } from "@/lib/storage";
import { getQuestions } from "@/data/questions";
import { useMemo, useSyncExternalStore } from "react";
import { useAuth } from "@/components/AuthProvider";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  ShieldCheck,
  Award,
  BookOpen,
  Lock,
  Cloud,
  CloudCog,
  Radar,
  KeyRound,
  FileLock2,
  Server,
};

interface CertStats {
  exams: number;
  avgScore: number;
  questionsStudied: number;
}

const EMPTY_STATS: CertStats = { exams: 0, avgScore: 0, questionsStudied: 0 };

function makeSnapshot(certId: string) {
  let cached: CertStats | null = null;
  let cachedKey = "";
  return () => {
    const p = getProgress(certId);
    const exams = p.examResults.length;
    const studied = Object.keys(p.flashcardProgress).length;
    const lastResult = p.examResults[p.examResults.length - 1];
    const key = `${exams}:${studied}:${p.lastStudyDate}:${lastResult?.id ?? ""}`;
    if (cached && key === cachedKey) return cached;
    const avg =
      exams > 0
        ? Math.round(p.examResults.reduce((s, r) => s + r.score, 0) / exams)
        : 0;
    cached = { exams, avgScore: avg, questionsStudied: studied };
    cachedKey = key;
    return cached;
  };
}

export default function CertCard({ cert }: { cert: Certification }) {
  const { user } = useAuth();
  const Icon = iconMap[cert.icon] || Shield;
  const totalQuestions = getQuestions(cert.id).length;

  const getSnapshot = useMemo(() => makeSnapshot(cert.id), [cert.id]);
  const stats = useSyncExternalStore(
    subscribeToProgress,
    getSnapshot,
    () => EMPTY_STATS
  );

  const studyPercent =
    totalQuestions > 0
      ? Math.round((stats.questionsStudied / totalQuestions) * 100)
      : 0;
  const levelLabel = cert.level
    ? cert.level.charAt(0).toUpperCase() + cert.level.slice(1)
    : "Certification";

  return (
    <Link href={`/${cert.id}`} className="block h-full">
      <Card className="h-full border-border bg-card shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div
              className="rounded-lg border border-border p-2.5"
              style={{ backgroundColor: `${cert.color}20` }}
            >
              <Icon className="h-6 w-6" style={{ color: cert.color }} />
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <Badge variant="secondary" className="text-[11px]">
                {cert.vendor.toUpperCase()}
              </Badge>
              {cert.level && (
                <Badge variant="outline" className="text-[11px]">
                  {levelLabel}
                </Badge>
              )}
            </div>
          </div>
          <div className="mt-3">
            <CardTitle className="text-xl font-semibold">{cert.name}</CardTitle>
            <p className="mt-1 text-sm leading-5 text-muted-foreground">
              {cert.title}
            </p>
          </div>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col">
          <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
            {cert.description}
          </p>
          {user ? (
            <div className="mt-5 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Study Progress</span>
                <span className="font-medium">{studyPercent}%</span>
              </div>
              <Progress value={studyPercent} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{stats.exams} exams taken</span>
                {stats.avgScore > 0 && <span>Avg: {stats.avgScore}%</span>}
              </div>
            </div>
          ) : (
            <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div className="rounded-md border border-border bg-muted/35 px-3 py-2">
                <span className="block font-medium text-foreground">
                  {totalQuestions}
                </span>
                Questions
              </div>
              <div className="rounded-md border border-border bg-muted/35 px-3 py-2">
                <span className="block font-medium text-foreground">
                  {cert.examDuration}m
                </span>
                Exam time
              </div>
            </div>
          )}
          <div className="mt-auto flex items-center justify-between pt-5 text-sm font-medium text-primary">
            <span>Open workspace</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
