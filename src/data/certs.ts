import { Certification } from "@/lib/types";

export const certifications: Certification[] = [
  {
    id: "sc-100",
    name: "SC-100",
    title: "Microsoft Cybersecurity Architect",
    vendor: "azure",
    description:
      "Design and evaluate cybersecurity strategies in Zero Trust, GRC, security operations, data security, and application security.",
    domains: [
      {
        id: "zero-trust",
        name: "Design a Zero Trust strategy and architecture",
        weight: 30,
      },
      {
        id: "grc",
        name: "Evaluate Governance Risk Compliance (GRC) technical strategies and security operations strategies",
        weight: 10,
      },
      {
        id: "infrastructure",
        name: "Design security for infrastructure",
        weight: 10,
      },
      {
        id: "data-apps",
        name: "Design a strategy for data and applications",
        weight: 15,
      },
      {
        id: "best-practices",
        name: "Recommend security best practices and priorities",
        weight: 20,
      },
    ],
    color: "#0078D4",
    icon: "Shield",
    totalQuestions: 60,
    passingScore: 700,
    examDuration: 120,
  },
];

export function getCertification(id: string): Certification | undefined {
  return certifications.find((c) => c.id === id);
}

export function getCertIds(): string[] {
  return certifications.map((c) => c.id);
}
