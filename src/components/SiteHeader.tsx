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
    <header className="border-b bg-card">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-600 text-white">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="font-semibold">CertStudy</span>
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
