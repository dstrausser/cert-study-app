"use client";

import Link from "next/link";
import { certifications } from "@/data/certs";
import { learningPaths } from "@/data/learningPaths";
import CertCard from "@/components/CertCard";
import LearningPathCard from "@/components/LearningPathCard";
import { useAuth } from "@/components/AuthProvider";

export default function Home() {
  const { user } = useAuth();
  const securityCerts = certifications.filter((c) => c.category === "security");
  const otherCerts = certifications.filter((c) => c.category !== "security");

  return (
    <main className="min-h-screen">
      <section className="border-b border-border/60 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
          <span className="mb-4 inline-flex items-center rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground">
            Azure & Security Certification Prep
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            {user
              ? `Welcome back, ${user.displayName}`
              : "Master your IT certifications"}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
            Practice exams, flashcards, and AI-powered explanations covering
            Azure security, identity, compliance, and operations.
            {!user && " Create an account to track progress across devices."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/paths"
              className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              View Learning Paths
            </Link>
            <Link
              href="/az-500"
              className="inline-flex h-9 items-center rounded-md px-4 text-sm font-medium text-foreground hover:bg-muted/60"
            >
              Start Practice Exam
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <section>
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-semibold">Recommended Learning Paths</h2>
            <Link
              href="/paths"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningPaths.slice(0, 3).map((path) => (
              <LearningPathCard key={path.id} path={path} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            Azure & Microsoft Security Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityCerts.map((cert) => (
              <CertCard key={cert.id} cert={cert} />
            ))}
          </div>
        </section>

        {otherCerts.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Foundations & Adjacent Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
