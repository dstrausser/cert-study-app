"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LearningPath } from "@/lib/types";
import { getCertification } from "@/data/certs";
import {
  Shield,
  Sprout,
  Radar,
  KeyRound,
  FileLock2,
  Server,
  Cloud,
  Map,
  Route,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Sprout,
  Radar,
  KeyRound,
  FileLock2,
  Server,
  Cloud,
};

export default function LearningPathCard({ path }: { path: LearningPath }) {
  const Icon = iconMap[path.icon] || Map;
  const totalHours = path.steps.reduce((s, st) => s + st.estimatedHours, 0);

  return (
    <Link href={`/paths/${path.id}`} className="block h-full">
      <Card className="h-full border-border bg-card shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div
              className="rounded-lg border border-border p-2.5"
              style={{ backgroundColor: `${path.color}20` }}
            >
              <Icon className="h-5 w-5" style={{ color: path.color }} />
            </div>
            <Badge variant="secondary" className="text-[11px]">
              {path.level.charAt(0).toUpperCase() + path.level.slice(1)}
            </Badge>
          </div>
          <CardTitle className="mt-3 text-lg font-semibold">
            {path.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col space-y-4">
          <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
            {path.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {path.steps.map((step) => {
              const cert = getCertification(step.certId);
              return (
                <Badge
                  key={step.certId}
                  variant="outline"
                  className="text-xs"
                  style={{ borderColor: cert?.color }}
                >
                  {cert?.name ?? step.certId.toUpperCase()}
                </Badge>
              );
            })}
          </div>
          <div className="mt-auto flex items-center justify-between rounded-lg border border-border bg-muted/35 px-3 py-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Route className="h-3.5 w-3.5" />
              {path.steps.length} certifications
            </span>
            <span>~{totalHours} hours</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
