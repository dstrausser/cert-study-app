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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 supports-[backdrop-filter]:bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-md border border-primary/15 bg-primary/10 p-1.5 text-primary">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight">CertStudy</span>
            <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Certification Intelligence Platform
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          <Link
            href="/paths"
            className="px-2.5 py-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground"
          >
            Learning Paths
          </Link>
          {!ready ? (
            <div className="h-7 w-20 rounded bg-muted animate-pulse" />
          ) : user ? (
            <div className="flex items-center gap-2">
              <Link
                href="/account"
                className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-muted"
              >
                <UserIcon className="h-4 w-4" />
                <span className="font-medium">{user.displayName}</span>
              </Link>
              <Button variant="ghost" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4" />
                Sign out
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
