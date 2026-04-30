"use client";

import Link from "next/link";
import { ArrowLeft, Route } from "lucide-react";
import { learningPaths } from "@/data/learningPaths";
import LearningPathCard from "@/components/LearningPathCard";

export default function PathsIndex() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Link
          href="/"
          className="mb-6 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="rounded-lg border border-border bg-muted/45 p-2.5 text-primary">
              <Route className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary">
                Sequenced certification roadmaps
              </p>
              <h1 className="mt-1 text-3xl font-semibold">Learning Paths</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                Choose the track closest to your role, then work through the
                certifications in order with estimated study time and rationale
                for each step.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((path) => (
            <LearningPathCard key={path.id} path={path} />
          ))}
        </div>
      </div>
    </main>
  );
}
