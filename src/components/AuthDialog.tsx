"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/AuthProvider";

type Mode = "signin" | "signup";

export default function AuthDialog({
  open,
  onOpenChange,
  defaultMode = "signin",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultMode?: Mode;
}) {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<Mode>(defaultMode);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (open) {
      setMode(defaultMode);
      setError(null);
      setPassword("");
    }
  }, [open, defaultMode]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      if (mode === "signin") {
        await signIn({ username, password });
      } else {
        await signUp({ username, password, displayName, email });
      }
      onOpenChange(false);
      setUsername("");
      setPassword("");
      setDisplayName("");
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  const inputClass =
    "w-full rounded-md border bg-background px-2.5 py-1.5 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "signin" ? "Sign in" : "Create your account"}
          </DialogTitle>
          <DialogDescription>
            {mode === "signin"
              ? "Welcome back. Sign in to track your study progress."
              : "Accounts are stored locally in this browser, separate from other users on this device."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-xs font-medium text-muted-foreground">
              Username
            </label>
            <input
              className={inputClass}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
              minLength={3}
              maxLength={32}
              autoFocus
            />
          </div>
          {mode === "signup" && (
            <>
              <div>
                <label className="text-xs font-medium text-muted-foreground">
                  Display name (optional)
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
                  Email (optional)
                </label>
                <input
                  className={inputClass}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
            </>
          )}
          <div>
            <label className="text-xs font-medium text-muted-foreground">
              Password
            </label>
            <input
              className={inputClass}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={
                mode === "signin" ? "current-password" : "new-password"
              }
              required
              minLength={6}
            />
          </div>
          {error && (
            <p className="text-xs text-destructive font-medium">{error}</p>
          )}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              className="text-xs text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
              onClick={() => {
                setMode(mode === "signin" ? "signup" : "signin");
                setError(null);
              }}
            >
              {mode === "signin"
                ? "Need an account? Create one"
                : "Already have an account? Sign in"}
            </button>
            <Button type="submit" disabled={busy}>
              {busy
                ? "Working…"
                : mode === "signin"
                  ? "Sign in"
                  : "Create account"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
