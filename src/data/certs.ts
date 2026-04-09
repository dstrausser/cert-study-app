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
  {
    id: "az-500",
    name: "AZ-500",
    title: "Microsoft Azure Security Technologies",
    vendor: "azure",
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
  {
    id: "ms-900",
    name: "MS-900",
    title: "Microsoft 365 Fundamentals",
    vendor: "microsoft",
    description:
      "Demonstrate foundational knowledge of cloud concepts, core Microsoft 365 services and concepts, security, compliance, privacy, and trust in Microsoft 365.",
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
  {
    id: "az-900",
    name: "AZ-900",
    title: "Microsoft Azure Fundamentals",
    vendor: "azure",
    description:
      "Demonstrate foundational knowledge of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, and Azure pricing and support.",
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
];

export function getCertification(id: string): Certification | undefined {
  return certifications.find((c) => c.id === id);
}

export function getCertIds(): string[] {
  return certifications.map((c) => c.id);
}
