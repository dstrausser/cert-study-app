"use client";

import Link from "next/link";
import { certifications } from "@/data/certs";
import { learningPaths } from "@/data/learningPaths";
import CertCard from "@/components/CertCard";
import LearningPathCard from "@/components/LearningPathCard";
import { useAuth } from "@/components/AuthProvider";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  ClipboardCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const { user } = useAuth();
  const securityCerts = certifications.filter((c) => c.category === "security");
  const otherCerts = certifications.filter((c) => c.category !== "security");
  const totalQuestions = certifications.reduce(
    (sum, cert) => sum + cert.totalQuestions,
    0
  );
  const totalPathHours = learningPaths.reduce(
    (sum, path) =>
      sum + path.steps.reduce((stepSum, step) => stepSum + step.estimatedHours, 0),
    0
  );

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border/70 bg-[linear-gradient(180deg,var(--background)_0%,color-mix(in_oklab,var(--muted)_72%,transparent)_100%)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              Microsoft certification command center
            </span>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              {user
                ? `Welcome back, ${user.displayName}`
                : "Build a sharper Microsoft certification routine"}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Practice exams, flashcards, official study resources, and role-based
              paths for Azure security, identity, compliance, and operations.
              {!user && " Create an account to keep progress synced on this device."}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/az-500"
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Start practice
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/paths"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-medium text-foreground shadow-sm transition hover:bg-muted/70"
              >
                View learning paths
              </Link>
            </div>
          </div>

          <div className="grid gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
            <div className="flex items-start justify-between gap-4 rounded-lg bg-muted/50 p-4">
              <div>
                <p className="text-xs font-medium uppercase text-muted-foreground">
                  Readiness engine
                </p>
                <p className="mt-2 text-2xl font-semibold">{certifications.length}</p>
                <p className="text-sm text-muted-foreground">
                  Microsoft exams covered
                </p>
              </div>
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-border bg-background p-4">
                <ClipboardCheck className="h-4 w-4 text-primary" />
                <p className="mt-3 text-xl font-semibold">{totalQuestions}</p>
                <p className="text-xs text-muted-foreground">Practice questions</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-4">
                <BookOpenCheck className="h-4 w-4 text-primary" />
                <p className="mt-3 text-xl font-semibold">{totalPathHours}h</p>
                <p className="text-xs text-muted-foreground">Guided study plans</p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <BarChart3 className="h-4 w-4 text-primary" />
                Track performance by exam domain
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Review score trends, flashcard coverage, and weak domains as you
                move from fundamentals to expert-level work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-10">
        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-primary">Role-based plans</p>
              <h2 className="mt-1 text-2xl font-semibold">
                Recommended learning paths
              </h2>
            </div>
            <Link
              href="/paths"
              className="hidden items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground sm:inline-flex"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {learningPaths.slice(0, 3).map((path) => (
              <LearningPathCard key={path.id} path={path} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-5">
            <p className="text-sm font-medium text-primary">Security track</p>
            <h2 className="mt-1 text-2xl font-semibold">
              Azure and Microsoft security certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {securityCerts.map((cert) => (
              <CertCard key={cert.id} cert={cert} />
            ))}
          </div>
        </section>

        {otherCerts.length > 0 && (
          <section>
            <div className="mb-5">
              <p className="text-sm font-medium text-primary">Platform basics</p>
              <h2 className="mt-1 text-2xl font-semibold">
                Foundations and adjacent certifications
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {otherCerts.map((cert) => (
                <CertCard key={cert.id} cert={cert} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
