"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { learningPaths } from "@/data/learningPaths";
import LearningPathCard from "@/components/LearningPathCard";

export default function PathsIndex() {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Learning Paths</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Sequenced certification roadmaps for the most common Microsoft
          security and Azure career tracks. Pick the path that matches your
          role and follow the certs in order.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {learningPaths.map((path) => (
            <LearningPathCard key={path.id} path={path} />
          ))}
        </div>
      </div>
    </main>
  );
}
