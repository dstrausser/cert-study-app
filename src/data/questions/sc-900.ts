import { Question } from "@/lib/types";

export const sc900Questions: Question[] = [
  {
    id: "sc900-001",
    certId: "sc-900",
    domainId: "sci-concepts",
    type: "single",
    question:
      "Which security model is built on the principles 'verify explicitly,' 'use least privilege access,' and 'assume breach'?",
    options: [
      { id: "a", text: "Defense in depth" },
      { id: "b", text: "Zero Trust" },
      { id: "c", text: "Shared responsibility" },
      { id: "d", text: "Castle-and-moat" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Zero Trust is the modern security model that assumes no implicit trust and continuously validates every transaction.",
    difficulty: "easy",
  },
  {
    id: "sc900-002",
    certId: "sc-900",
    domainId: "sci-concepts",
    type: "single",
    question:
      "In the shared responsibility model, who is always responsible for the data classification and accountability?",
    options: [
      { id: "a", text: "The cloud provider" },
      { id: "b", text: "The customer" },
      { id: "c", text: "The internet service provider" },
      { id: "d", text: "It depends on the service tier" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Regardless of IaaS, PaaS, or SaaS, the customer always retains responsibility for data, endpoints, accounts, and access management.",
    difficulty: "easy",
  },
  {
    id: "sc900-003",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "Which Microsoft Entra feature lets you require multifactor authentication only when a sign-in is risky?",
    options: [
      { id: "a", text: "Security defaults" },
      { id: "b", text: "Conditional Access with Identity Protection" },
      { id: "c", text: "Privileged Identity Management" },
      { id: "d", text: "Entitlement Management" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Conditional Access combined with Microsoft Entra ID Protection risk signals enables risk-based MFA enforcement.",
    difficulty: "medium",
  },
  {
    id: "sc900-004",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Microsoft solution provides cloud-native SIEM and SOAR capabilities?",
    options: [
      { id: "a", text: "Microsoft Defender for Cloud" },
      { id: "b", text: "Microsoft Sentinel" },
      { id: "c", text: "Microsoft Purview" },
      { id: "d", text: "Microsoft Intune" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Sentinel is the cloud-native SIEM and SOAR platform that ingests signals across the enterprise.",
    difficulty: "easy",
  },
  {
    id: "sc900-005",
    certId: "sc-900",
    domainId: "purview",
    type: "single",
    question:
      "Which Microsoft Purview capability automatically classifies and labels sensitive content such as credit card numbers?",
    options: [
      { id: "a", text: "eDiscovery" },
      { id: "b", text: "Sensitivity labels and data classification" },
      { id: "c", text: "Compliance Manager" },
      { id: "d", text: "Insider Risk Management" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Purview Information Protection uses sensitive information types and trainable classifiers to apply sensitivity labels automatically.",
    difficulty: "medium",
  },
];
