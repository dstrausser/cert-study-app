"use client";

import Link from "next/link";
import { GraduationCap, LogOut, User as UserIcon } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import AuthDialog from "@/components/AuthDialog";
import { useState } from "react";

export default function SiteHeader() {
  const { user, ready, signOut } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

  function open(mode: "signin" | "signup") {
    setAuthMode(mode);
    setAuthOpen(true);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur supports-[backdrop-filter]:bg-background/82">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-lg border border-border bg-card p-2 text-primary shadow-sm">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold">
              CertStudy
            </span>
            <span className="hidden text-[11px] text-muted-foreground sm:inline">
              Exam Prep Platform
            </span>
          </div>
        </Link>
        <nav className="flex min-w-0 items-center gap-2 text-sm">
          <Link
            href="/paths"
            className="hidden rounded-lg px-3 py-2 text-muted-foreground transition hover:bg-muted/60 hover:text-foreground sm:inline-flex"
          >
            Learning Paths
          </Link>
          {!ready ? (
            <div className="h-7 w-20 rounded bg-muted animate-pulse" />
          ) : user ? (
            <div className="flex items-center gap-2">
              <Link
                href="/account"
                className="flex min-w-0 items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-muted/60"
              >
                <UserIcon className="h-4 w-4" />
                <span className="max-w-28 truncate font-medium sm:max-w-40">
                  {user.displayName}
                </span>
              </Link>
              <Button variant="ghost" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign out</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={() => open("signin")}>
                Sign in
              </Button>
              <Button size="sm" onClick={() => open("signup")}>
                Create account
              </Button>
            </div>
          )}
        </nav>
      </div>
      <AuthDialog
        open={authOpen}
        onOpenChange={setAuthOpen}
        defaultMode={authMode}
      />
    </header>
  );
}
