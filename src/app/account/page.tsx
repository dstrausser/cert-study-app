"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/AuthProvider";
import { PublicUser } from "@/lib/types";
import { certifications } from "@/data/certs";
import { getProgress, subscribeToProgress } from "@/lib/storage";

interface AggregateStats {
  examsTaken: number;
  avgScore: number;
  cardsReviewed: number;
  totalTime: number;
}

const EMPTY_AGG: AggregateStats = {
  examsTaken: 0,
  avgScore: 0,
  cardsReviewed: 0,
  totalTime: 0,
};

function makeAggregateSnapshot() {
  let cached: AggregateStats | null = null;
  let cachedKey = "";
  return () => {
    let exams = 0;
    let scoreSum = 0;
    let cards = 0;
    let time = 0;
    let key = "";
    for (const cert of certifications) {
      const p = getProgress(cert.id);
      exams += p.examResults.length;
      scoreSum += p.examResults.reduce((s, r) => s + r.score, 0);
      cards += Object.keys(p.flashcardProgress).length;
      time += p.totalStudyTime;
      key += `${cert.id}:${p.examResults.length}:${cards}:${time};`;
    }
    if (cached && key === cachedKey) return cached;
    cached = {
      examsTaken: exams,
      avgScore: exams ? Math.round(scoreSum / exams) : 0,
      cardsReviewed: cards,
      totalTime: time,
    };
    cachedKey = key;
    return cached;
  };
}

export default function AccountPage() {
  const { user, ready, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (ready && !user) router.replace("/");
  }, [ready, user, router]);

  const getSnapshot = useMemo(() => makeAggregateSnapshot(), []);
  const stats = useSyncExternalStore(
    subscribeToProgress,
    getSnapshot,
    () => EMPTY_AGG
  );

  if (!ready || !user) return null;

  return <AccountForm key={user.id} user={user} stats={stats} signOut={signOut} />;
}

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  if (hours > 0) return `${hours}h ${mins}m`;
  return `${mins}m`;
}

function AccountForm({
  user,
  stats,
  signOut,
}: {
  user: PublicUser;
  stats: AggregateStats;
  signOut: () => void;
}) {
  const { updateProfile } = useAuth();
  const [displayName, setDisplayName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email ?? "");
  const [savedAt, setSavedAt] = useState<number | null>(null);

  const inputClass =
    "w-full rounded-md border bg-background px-2.5 py-1.5 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50";

  function save() {
    updateProfile({ displayName, email });
    setSavedAt(Date.now());
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Your account</h1>
        <p className="text-muted-foreground mt-1">
          Signed in as{" "}
          <span className="font-medium text-foreground">@{user.username}</span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          <Card>
            <CardContent className="pt-5">
              <p className="text-xs text-muted-foreground">Exams taken</p>
              <p className="text-2xl font-bold">{stats.examsTaken}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-5">
              <p className="text-xs text-muted-foreground">Average score</p>
              <p className="text-2xl font-bold">
                {stats.avgScore ? `${stats.avgScore}%` : "--"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-5">
              <p className="text-xs text-muted-foreground">Cards reviewed</p>
              <p className="text-2xl font-bold">{stats.cardsReviewed}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-5">
              <p className="text-xs text-muted-foreground">Study time</p>
              <p className="text-2xl font-bold">
                {stats.totalTime ? formatTime(stats.totalTime) : "--"}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-xs font-medium text-muted-foreground">
                Display name
              </label>
              <input
                className={inputClass}
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                maxLength={48}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">
                Email
              </label>
              <input
                className={inputClass}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <Button variant="outline" onClick={signOut}>
                Sign out
              </Button>
              <div className="flex items-center gap-3">
                {savedAt && (
                  <span className="text-xs text-muted-foreground">Saved</span>
                )}
                <Button onClick={save}>Save changes</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-xs text-muted-foreground mt-6">
          Accounts and study progress are stored locally in this browser. Your
          data is separate from other users on this device.
        </p>
      </div>
    </main>
  );
}
