"use client";

import { certifications } from "@/data/certs";
import CertCard from "@/components/CertCard";
import { GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600 text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">CertStudy</h1>
              <p className="text-sm text-muted-foreground">
                Master your IT certifications with practice exams, flashcards &
                AI
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Cert Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-6">
          Choose a Certification
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </main>
  );
}
