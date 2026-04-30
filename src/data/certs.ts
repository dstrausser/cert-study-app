import { Certification } from "@/lib/types";

export const certifications: Certification[] = [
  // ---------- Azure / Microsoft Security certifications ----------
  {
    id: "sc-900",
    name: "SC-900",
    title: "Microsoft Security, Compliance, and Identity Fundamentals",
    vendor: "azure",
    level: "fundamentals",
    category: "security",
    description:
      "Foundational knowledge of security, compliance, and identity (SCI) concepts and Microsoft solutions across Azure and Microsoft 365.",
    domains: [
      {
        id: "sci-concepts",
        name: "Describe the concepts of security, compliance, and identity",
        weight: 20,
      },
      {
        id: "entra",
        name: "Describe the capabilities of Microsoft Entra",
        weight: 30,
      },
      {
        id: "azure-security",
        name: "Describe the capabilities of Microsoft security solutions",
        weight: 35,
      },
      {
        id: "purview",
        name: "Describe the capabilities of Microsoft compliance solutions",
        weight: 15,
      },
    ],
    color: "#22A2C9",
    icon: "ShieldCheck",
    totalQuestions: 60,
    passingScore: 700,
    examDuration: 45,
  },
  {
    id: "sc-100",
    name: "SC-100",
    title: "Microsoft Cybersecurity Architect",
    vendor: "azure",
    level: "expert",
    category: "security",
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
  {
    id: "sc-200",
    name: "SC-200",
    title: "Microsoft Security Operations Analyst",
    vendor: "azure",
    level: "associate",
    category: "security",
    description:
      "Investigate, respond to, and hunt threats using Microsoft Sentinel, Microsoft Defender XDR, and Microsoft Defender for Cloud.",
    domains: [
      {
        id: "manage-sec-ops",
        name: "Manage a security operations environment",
        weight: 25,
      },
      {
        id: "defender-xdr",
        name: "Configure protections and detections in Microsoft Defender XDR and Microsoft Defender for Cloud",
        weight: 15,
      },
      {
        id: "sentinel-config",
        name: "Manage incident response and configure Microsoft Sentinel",
        weight: 35,
      },
      {
        id: "threat-hunting",
        name: "Perform threat hunting using KQL and Microsoft Sentinel",
        weight: 25,
      },
    ],
    color: "#E81123",
    icon: "Radar",
    totalQuestions: 55,
    passingScore: 700,
    examDuration: 100,
  },
  {
    id: "sc-300",
    name: "SC-300",
    title: "Microsoft Identity and Access Administrator",
    vendor: "azure",
    level: "associate",
    category: "security",
    description:
      "Design, implement, and operate identity and access management solutions using Microsoft Entra and connected identity technologies.",
    domains: [
      {
        id: "entra-identity",
        name: "Implement and manage Microsoft Entra identities",
        weight: 25,
      },
      {
        id: "auth-access",
        name: "Implement authentication and access management",
        weight: 25,
      },
      {
        id: "app-access",
        name: "Plan and implement workload identities and application access",
        weight: 25,
      },
      {
        id: "id-governance",
        name: "Plan and implement identity governance",
        weight: 25,
      },
    ],
    color: "#7B68EE",
    icon: "KeyRound",
    totalQuestions: 55,
    passingScore: 700,
    examDuration: 100,
  },
  {
    id: "sc-401",
    name: "SC-401",
    title: "Administering Information Security in Microsoft 365",
    vendor: "azure",
    level: "associate",
    category: "security",
    description:
      "Plan and implement information protection, data loss prevention, insider risk, and information security with Microsoft Purview.",
    domains: [
      {
        id: "info-protection",
        name: "Implement information protection",
        weight: 35,
      },
      {
        id: "dlp",
        name: "Implement data loss prevention and retention",
        weight: 30,
      },
      {
        id: "insider-risk",
        name: "Manage insider and privacy risk in Microsoft Purview",
        weight: 20,
      },
      {
        id: "security-m365",
        name: "Manage security across Microsoft 365 workloads",
        weight: 15,
      },
    ],
    color: "#107C10",
    icon: "FileLock2",
    totalQuestions: 55,
    passingScore: 700,
    examDuration: 100,
  },
  {
    id: "az-500",
    name: "AZ-500",
    title: "Microsoft Azure Security Technologies",
    vendor: "azure",
    level: "associate",
    category: "security",
    description:
      "Implement security controls and threat protection, manage identity and access, and protect data, applications, and networks in cloud and hybrid environments.",
    domains: [
      {
        id: "identity-access",
        name: "Manage identity and access",
        weight: 25,
      },
      {
        id: "networking",
        name: "Secure networking",
        weight: 20,
      },
      {
        id: "compute-storage-databases",
        name: "Secure compute, storage, and databases",
        weight: 20,
      },
      {
        id: "security-operations",
        name: "Manage security operations",
        weight: 25,
      },
    ],
    color: "#E74C3C",
    icon: "Lock",
    totalQuestions: 60,
    passingScore: 700,
    examDuration: 120,
  },

  // ---------- Azure / Microsoft Fundamentals & Adjacent ----------
  {
    id: "az-900",
    name: "AZ-900",
    title: "Microsoft Azure Fundamentals",
    vendor: "azure",
    level: "fundamentals",
    category: "azure-platform",
    description:
      "Foundational knowledge of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, and Azure pricing and support.",
    domains: [
      {
        id: "cloud-concepts",
        name: "Describe cloud concepts",
        weight: 25,
      },
      {
        id: "azure-architecture",
        name: "Describe Azure architecture and services",
        weight: 35,
      },
      {
        id: "management-governance",
        name: "Describe Azure management and governance",
        weight: 30,
      },
    ],
    color: "#0089D6",
    icon: "CloudCog",
    totalQuestions: 60,
    passingScore: 700,
    examDuration: 45,
  },
  {
    id: "az-104",
    name: "AZ-104",
    title: "Microsoft Azure Administrator",
    vendor: "azure",
    level: "associate",
    category: "azure-platform",
    description:
      "Implement, manage, and monitor an organization's Azure environment, including identities, governance, storage, compute, and virtual networking.",
    domains: [
      {
        id: "identities-governance",
        name: "Manage Azure identities and governance",
        weight: 20,
      },
      { id: "storage", name: "Implement and manage storage", weight: 15 },
      {
        id: "compute",
        name: "Deploy and manage Azure compute resources",
        weight: 25,
      },
      {
        id: "networking",
        name: "Implement and manage virtual networking",
        weight: 20,
      },
      {
        id: "monitor-maintain",
        name: "Monitor and maintain Azure resources",
        weight: 20,
      },
    ],
    color: "#0072C6",
    icon: "Server",
    totalQuestions: 55,
    passingScore: 700,
    examDuration: 100,
  },
  {
    id: "ms-900",
    name: "MS-900",
    title: "Microsoft 365 Fundamentals",
    vendor: "microsoft",
    level: "fundamentals",
    category: "m365",
    description:
      "Foundational knowledge of cloud concepts, core Microsoft 365 services and concepts, security, compliance, privacy, and trust in Microsoft 365.",
    domains: [
      {
        id: "cloud-concepts",
        name: "Describe cloud concepts",
        weight: 10,
      },
      {
        id: "m365-apps-services",
        name: "Describe Microsoft 365 apps and services",
        weight: 45,
      },
      {
        id: "security-compliance",
        name: "Describe security, compliance, privacy, and trust in Microsoft 365",
        weight: 25,
      },
      {
        id: "m365-pricing-support",
        name: "Describe Microsoft 365 pricing, licensing, and support",
        weight: 20,
      },
    ],
    color: "#7B83EB",
    icon: "Cloud",
    totalQuestions: 60,
    passingScore: 700,
    examDuration: 45,
  },
];

export function getCertification(id: string): Certification | undefined {
  return certifications.find((c) => c.id === id);
}

export function getCertIds(): string[] {
  return certifications.map((c) => c.id);
}

export function getCertsByCategory(category: string): Certification[] {
  return certifications.filter((c) => c.category === category);
}

/** Azure security certifications grouped together for the security learning paths. */
export const AZURE_SECURITY_CERT_IDS = [
  "sc-900",
  "sc-300",
  "sc-200",
  "sc-401",
  "az-500",
  "sc-100",
];
