"use client";

import Link from "next/link";
import { Shield, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Certification } from "@/lib/types";
import { getProgress } from "@/lib/storage";
import { getQuestions } from "@/data/questions";
import { useEffect, useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Award,
  BookOpen,
};

export default function CertCard({ cert }: { cert: Certification }) {
  const [stats, setStats] = useState({ exams: 0, avgScore: 0, questionsStudied: 0 });
  const Icon = iconMap[cert.icon] || Shield;
  const totalQuestions = getQuestions(cert.id).length;

  useEffect(() => {
    const progress = getProgress(cert.id);
    const exams = progress.examResults.length;
    const avgScore =
      exams > 0
        ? Math.round(
            progress.examResults.reduce((sum, r) => sum + r.score, 0) / exams
          )
        : 0;
    const questionsStudied = Object.keys(progress.flashcardProgress).length;
    setStats({ exams, avgScore, questionsStudied });
  }, [cert.id]);

  const studyPercent = totalQuestions > 0 ? Math.round((stats.questionsStudied / totalQuestions) * 100) : 0;

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
            <Badge variant="secondary" className="text-xs">
              {cert.vendor.toUpperCase()}
            </Badge>
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
