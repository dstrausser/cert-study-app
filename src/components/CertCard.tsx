"use client";

import Link from "next/link";
import {
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
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Certification } from "@/lib/types";
import { getProgress, subscribeToProgress } from "@/lib/storage";
import { getQuestions } from "@/data/questions";
import { useMemo, useSyncExternalStore } from "react";

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

  return (
    <Link href={`/${cert.id}`}>
      <Card className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer border-2 hover:border-blue-500/50">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: `${cert.color}20` }}
            >
              <Icon className="h-6 w-6" style={{ color: cert.color }} />
            </div>
            <div className="flex flex-col items-end gap-1">
              <Badge variant="secondary" className="text-xs">
                {cert.vendor.toUpperCase()}
              </Badge>
              {cert.level && (
                <Badge variant="outline" className="text-[10px] capitalize">
                  {cert.level}
                </Badge>
              )}
            </div>
          </div>
          <CardTitle className="text-xl mt-2">{cert.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{cert.title}</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {cert.description}
          </p>
          <div className="space-y-3">
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
        </CardContent>
      </Card>
    </Link>
  );
}
