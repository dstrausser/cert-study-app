import { Question } from "@/lib/types";

export const sc401Questions: Question[] = [
  {
    id: "sc401-001",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which Microsoft Purview feature applies encryption and visual markings to documents based on their sensitivity?",
    options: [
      { id: "a", text: "Retention labels" },
      { id: "b", text: "Sensitivity labels" },
      { id: "c", text: "Records management" },
      { id: "d", text: "DLP policies" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Sensitivity labels can apply encryption, watermarks, headers, and footers, and integrate with Microsoft 365 apps.",
    difficulty: "easy",
  },
  {
    id: "sc401-002",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Where can a single Microsoft Purview DLP policy be applied? (Choose the best answer.)",
    options: [
      { id: "a", text: "Only Exchange Online" },
      { id: "b", text: "Only OneDrive and SharePoint" },
      { id: "c", text: "Across Exchange, SharePoint, OneDrive, Teams, devices, and on-premises" },
      { id: "d", text: "Only Microsoft Teams" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Microsoft Purview DLP supports a unified policy that targets multiple workloads including endpoints and on-premises shares.",
    difficulty: "medium",
  },
  {
    id: "sc401-003",
    certId: "sc-401",
    domainId: "insider-risk",
    type: "single",
    question:
      "Which Insider Risk Management feature lets you investigate risky activity while keeping users anonymized to reviewers?",
    options: [
      { id: "a", text: "Anonymization" },
      { id: "b", text: "Communication compliance" },
      { id: "c", text: "Adaptive Protection" },
      { id: "d", text: "eDiscovery (Premium)" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Insider Risk Management supports anonymization so reviewers see pseudonymized identifiers during initial triage.",
    difficulty: "medium",
  },
  {
    id: "sc401-004",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which capability automatically applies a sensitivity label to documents that contain credit card numbers?",
    options: [
      { id: "a", text: "Trainable classifiers" },
      { id: "b", text: "Auto-labeling policy with sensitive info types" },
      { id: "c", text: "Content search" },
      { id: "d", text: "Communication compliance" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Auto-labeling policies use sensitive information types (and optionally trainable classifiers) to label content automatically.",
    difficulty: "medium",
  },
  {
    id: "sc401-005",
    certId: "sc-401",
    domainId: "security-m365",
    type: "single",
    question:
      "Adaptive Protection in Microsoft Purview adjusts DLP and Conditional Access controls based on which signal?",
    options: [
      { id: "a", text: "Microsoft Defender for Endpoint risk score" },
      { id: "b", text: "Insider risk level" },
      { id: "c", text: "Entra ID sign-in risk" },
      { id: "d", text: "Microsoft Sentinel incident severity" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Adaptive Protection uses Insider Risk Management risk levels to dynamically tighten DLP and Conditional Access.",
    difficulty: "hard",
  },
];
