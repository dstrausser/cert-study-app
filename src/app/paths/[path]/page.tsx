"use client";

import { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLearningPath } from "@/data/learningPaths";
import { getCertification } from "@/data/certs";

export default function PathDetail({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path: pathId } = use(params);
  const router = useRouter();
  const path = getLearningPath(pathId);

  if (!path) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg">Learning path not found</p>
          <Button onClick={() => router.push("/paths")}>All paths</Button>
        </div>
      </div>
    );
  }

  const totalHours = path.steps.reduce((s, st) => s + st.estimatedHours, 0);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Link
          href="/paths"
          className="mb-5 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All learning paths
        </Link>

        <div className="mb-8 flex items-start gap-4 rounded-lg border border-border bg-card p-6 shadow-sm">
          <div
            className="rounded-lg border border-border p-3"
            style={{ backgroundColor: `${path.color}20` }}
          >
            <GraduationCap className="h-6 w-6" style={{ color: path.color }} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="secondary">
                {path.level.charAt(0).toUpperCase() + path.level.slice(1)}
              </Badge>
              <Badge variant="outline">{path.steps.length} certs</Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />~{totalHours}h
              </Badge>
            </div>
            <h1 className="text-3xl font-semibold">{path.title}</h1>
            <p className="mt-2 text-muted-foreground">{path.description}</p>
            <p className="mt-3 text-sm">
              <span className="font-medium">Best for: </span>
              <span className="text-muted-foreground">{path.audience}</span>
            </p>
          </div>
        </div>

        <ol className="space-y-4">
          {path.steps.map((step, idx) => {
            const cert = getCertification(step.certId);
            if (!cert) return null;
            const isLast = idx === path.steps.length - 1;
            return (
              <li key={step.certId} className="relative">
                {!isLast && (
                  <div
                    aria-hidden
                    className="absolute left-6 top-12 bottom-[-1rem] w-px bg-border"
                  />
                )}
                <Card className="shadow-sm transition hover:border-primary/35 hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                        style={{ backgroundColor: cert.color }}
                      >
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{cert.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {cert.title}
                        </p>
                      </div>
                      <Badge variant="outline">
                        {(cert.level ?? "associate").charAt(0).toUpperCase() +
                          (cert.level ?? "associate").slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-16">
                    <p className="text-sm text-muted-foreground mb-3">
                      {step.rationale}
                    </p>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />~{step.estimatedHours}{" "}
                        hours
                      </p>
                      <Link href={`/${cert.id}`}>
                        <Button size="sm" variant="outline">
                          Study {cert.name}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ol>
      </div>
    </main>
  );
}
