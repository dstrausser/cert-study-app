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
      <section className="border-b border-border/70 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 md:grid-cols-[1.45fr_1fr] md:items-end">
          <div>
            <span className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              Enterprise-aligned cloud and security certification prep
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              {user
                ? `Welcome back, ${user.displayName}`
                : "Master your IT certifications"}
            </h1>
            <p className="mt-3 max-w-3xl text-base text-muted-foreground md:text-lg">
              Practice exams, flashcards, and AI-powered explanations covering
              Azure security, identity, compliance, and operations.
              {!user && " Create an account to track progress across devices."}
            </p>
          </div>
          <div className="rounded-xl border border-border/70 bg-card p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Why teams choose CertStudy
            </p>
            <ul className="mt-3 space-y-2 text-sm text-foreground">
              <li>• Structured exam domains across major Azure certifications</li>
              <li>• Progress indicators for repeatable, measurable upskilling</li>
              <li>• Learning paths that map to security-focused role goals</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
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
