import { LearningPath } from "@/lib/types";

export const learningPaths: LearningPath[] = [
  {
    id: "azure-security-foundation",
    title: "Azure Security Foundation",
    description:
      "Build core security skills from fundamentals through implementing security in Azure.",
    audience: "Career-changers and IT pros new to Microsoft cloud security.",
    level: "beginner",
    color: "#22A2C9",
    icon: "Sprout",
    steps: [
      {
        certId: "sc-900",
        rationale: "Establish the SCI vocabulary, identity, and Microsoft security portfolio.",
        estimatedHours: 20,
      },
      {
        certId: "az-900",
        rationale: "Learn Azure cloud concepts, services, and shared-responsibility basics.",
        estimatedHours: 20,
      },
      {
        certId: "az-500",
        rationale: "Get hands-on with implementing identity, network, and workload security in Azure.",
        estimatedHours: 80,
      },
    ],
  },
  {
    id: "security-operations",
    title: "Microsoft Security Operations Analyst",
    description:
      "Path for SOC analysts who hunt threats and respond to incidents using Microsoft Sentinel and Defender XDR.",
    audience: "SOC analysts, incident responders, threat hunters.",
    level: "intermediate",
    color: "#E81123",
    icon: "Radar",
    steps: [
      {
        certId: "sc-900",
        rationale: "Ground yourself in Microsoft security and identity concepts.",
        estimatedHours: 15,
      },
      {
        certId: "sc-200",
        rationale: "Learn to triage incidents, write KQL hunting queries, and configure Sentinel.",
        estimatedHours: 70,
      },
      {
        certId: "sc-100",
        rationale: "Tie operations into a Zero Trust architectural strategy at the organization level.",
        estimatedHours: 60,
      },
    ],
  },
  {
    id: "identity-administrator",
    title: "Identity & Access Administrator",
    description:
      "Specialize in Microsoft Entra: identity lifecycle, authentication, application access, and governance.",
    audience: "Identity admins, IAM engineers.",
    level: "intermediate",
    color: "#7B68EE",
    icon: "KeyRound",
    steps: [
      {
        certId: "sc-900",
        rationale: "Get the security and identity foundations.",
        estimatedHours: 15,
      },
      {
        certId: "sc-300",
        rationale: "Implement Entra identities, Conditional Access, app access, and identity governance.",
        estimatedHours: 70,
      },
      {
        certId: "sc-100",
        rationale: "Translate identity controls into a Zero Trust strategy across the enterprise.",
        estimatedHours: 60,
      },
    ],
  },
  {
    id: "information-protection",
    title: "Information Protection & Compliance",
    description:
      "Protect data with Microsoft Purview, DLP, sensitivity labels, and insider risk.",
    audience: "Compliance, data protection, and Microsoft 365 admins.",
    level: "intermediate",
    color: "#107C10",
    icon: "FileLock2",
    steps: [
      {
        certId: "sc-900",
        rationale: "Understand the compliance and data protection portfolio.",
        estimatedHours: 15,
      },
      {
        certId: "ms-900",
        rationale: "Learn the Microsoft 365 services that Purview controls protect.",
        estimatedHours: 20,
      },
      {
        certId: "sc-401",
        rationale: "Implement information protection, DLP, retention, and insider risk in Purview.",
        estimatedHours: 70,
      },
    ],
  },
  {
    id: "cybersecurity-architect",
    title: "Cybersecurity Architect (Expert)",
    description:
      "End-to-end security architecture: Zero Trust, identity, operations, data, and apps.",
    audience: "Senior engineers and architects pursuing the SC-100 expert credential.",
    level: "advanced",
    color: "#0078D4",
    icon: "Shield",
    steps: [
      {
        certId: "az-500",
        rationale: "Required prerequisite skills in Azure security implementation.",
        estimatedHours: 80,
      },
      {
        certId: "sc-200",
        rationale: "Optional: depth on detection and response operations.",
        estimatedHours: 70,
      },
      {
        certId: "sc-300",
        rationale: "Optional: depth on identity and access architecture.",
        estimatedHours: 70,
      },
      {
        certId: "sc-100",
        rationale: "Synthesize Zero Trust and security architecture across the enterprise.",
        estimatedHours: 80,
      },
    ],
  },
  {
    id: "azure-administrator",
    title: "Azure Administrator",
    description:
      "Operate Azure: identities, governance, storage, compute, networking, and monitoring.",
    audience: "Cloud admins and engineers managing Azure environments.",
    level: "intermediate",
    color: "#0072C6",
    icon: "Server",
    steps: [
      {
        certId: "az-900",
        rationale: "Learn Azure fundamentals and the shared-responsibility model.",
        estimatedHours: 20,
      },
      {
        certId: "az-104",
        rationale: "Hands-on administration of Azure resources at scale.",
        estimatedHours: 90,
      },
    ],
  },
];

export function getLearningPath(id: string): LearningPath | undefined {
  return learningPaths.find((p) => p.id === id);
}
