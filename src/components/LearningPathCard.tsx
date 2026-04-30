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
    <Link href={`/paths/${path.id}`}>
      <Card className="hover:shadow-lg transition-all hover:scale-[1.01] cursor-pointer h-full border-2 hover:border-blue-500/40">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: `${path.color}20` }}
            >
              <Icon className="h-5 w-5" style={{ color: path.color }} />
            </div>
            <Badge variant="secondary" className="text-xs capitalize">
              {path.level}
            </Badge>
          </div>
          <CardTitle className="text-lg mt-2">{path.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-2">
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
          <p className="text-xs text-muted-foreground">
            {path.steps.length} certifications · ~{totalHours} hours total
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
