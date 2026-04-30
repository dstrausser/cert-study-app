import { Question } from "@/lib/types";

export const sc401Questions: Question[] = [
  // Domain: Implement information protection (35%)
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
    domainId: "info-protection",
    type: "single",
    question:
      "Which capability automatically applies a sensitivity label to documents that contain credit card numbers?",
    options: [
      { id: "a", text: "Trainable classifiers only" },
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
    id: "sc401-003",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which Purview classifier type is best suited to detect content that resembles 'employee contracts' rather than a regex pattern?",
    options: [
      { id: "a", text: "Sensitive information type (SIT)" },
      { id: "b", text: "Trainable classifier" },
      { id: "c", text: "Exact data match (EDM)" },
      { id: "d", text: "Document fingerprint" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Trainable classifiers learn from sample documents to identify content categories without explicit patterns.",
    difficulty: "medium",
  },
  {
    id: "sc401-004",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which feature extends sensitivity-label-based encryption to PDFs and Office files on macOS, iOS, and Android?",
    options: [
      { id: "a", text: "Microsoft Purview Information Protection client and apps" },
      { id: "b", text: "Microsoft Defender for Cloud Apps" },
      { id: "c", text: "Microsoft Intune compliance" },
      { id: "d", text: "Endpoint DLP" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft 365 apps and the Information Protection client/scanner apply and honor labels across platforms.",
    difficulty: "medium",
  },
  {
    id: "sc401-005",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which Purview feature uses exact value matching against a sensitive data table such as a customer database?",
    options: [
      { id: "a", text: "Sensitive information type (regex/keyword)" },
      { id: "b", text: "Exact Data Match (EDM)" },
      { id: "c", text: "Trainable classifier" },
      { id: "d", text: "Document fingerprinting" },
    ],
    correctAnswers: ["b"],
    explanation:
      "EDM matches content against an uploaded, hashed sensitive data table to reduce false positives.",
    difficulty: "hard",
  },
  {
    id: "sc401-006",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "What does sensitivity-label co-authoring enable for encrypted documents in Microsoft 365?",
    options: [
      { id: "a", text: "Multiple users editing an encrypted document concurrently in Word/Excel/PowerPoint" },
      { id: "b", text: "Sharing encrypted documents externally without authentication" },
      { id: "c", text: "Bypassing rights management when offline" },
      { id: "d", text: "Migrating labels from AIP" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Co-authoring on encrypted files lets multiple users edit simultaneously while preserving rights protection.",
    difficulty: "medium",
  },
  {
    id: "sc401-007",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "How can you protect sensitive content on SharePoint and OneDrive even after a sensitivity label is applied?",
    options: [
      { id: "a", text: "Enable sensitivity labels for containers (sites and groups)" },
      { id: "b", text: "Disable external sharing globally" },
      { id: "c", text: "Apply retention labels only" },
      { id: "d", text: "Move all data to a single site" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Container labels enforce privacy, external sharing, device access, and authentication contexts at the site/group level.",
    difficulty: "medium",
  },
  {
    id: "sc401-008",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which feature scans on-premises file shares and applies sensitivity labels?",
    options: [
      { id: "a", text: "Microsoft Purview Information Protection scanner" },
      { id: "b", text: "Microsoft Defender for Endpoint" },
      { id: "c", text: "Azure Information Protection app for iOS" },
      { id: "d", text: "Microsoft Sentinel" },
    ],
    correctAnswers: ["a"],
    explanation:
      "The Purview Information Protection scanner discovers and labels on-prem file shares and SharePoint Server.",
    difficulty: "medium",
  },
  {
    id: "sc401-009",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which feature lets you define encryption that allows only a specific external partner organization to read a document?",
    options: [
      { id: "a", text: "Sensitivity label with encryption and explicit user/group permissions" },
      { id: "b", text: "DLP policy" },
      { id: "c", text: "Records management" },
      { id: "d", text: "Communication compliance" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Sensitivity labels can specify users/groups (including external) and rights (e.g., view, edit, no-forward) when applying encryption.",
    difficulty: "medium",
  },

  // Domain: Implement DLP and retention (30%)
  {
    id: "sc401-010",
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
    id: "sc401-011",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which Endpoint DLP capability blocks copying files with specific labels to USB drives?",
    options: [
      { id: "a", text: "Activity explorer" },
      { id: "b", text: "Endpoint DLP egress restrictions on removable storage" },
      { id: "c", text: "Communication compliance" },
      { id: "d", text: "Records management" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Endpoint DLP enforces egress restrictions on removable storage, network shares, Bluetooth, and printing.",
    difficulty: "medium",
  },
  {
    id: "sc401-012",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which Purview tool provides a unified view of DLP, sensitivity, and retention activity across workloads?",
    options: [
      { id: "a", text: "Activity explorer" },
      { id: "b", text: "Compliance Manager" },
      { id: "c", text: "Audit (Premium)" },
      { id: "d", text: "Sentinel" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Activity explorer surfaces label changes, DLP matches, retention actions, and more in one place.",
    difficulty: "medium",
  },
  {
    id: "sc401-013",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which retention setting deletes content automatically after a defined period and prevents earlier deletion?",
    options: [
      { id: "a", text: "Retention label with retain and then delete" },
      { id: "b", text: "Sensitivity label" },
      { id: "c", text: "Litigation hold" },
      { id: "d", text: "Auto-archive" },
    ],
    correctAnswers: ["a"],
    explanation:
      "A retention label can preserve content for a period and then delete it; users can't bypass it.",
    difficulty: "easy",
  },
  {
    id: "sc401-014",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which retention feature designates a record so editing or deletion before disposition is blocked?",
    options: [
      { id: "a", text: "Records management with 'mark as record' or 'regulatory record'" },
      { id: "b", text: "Sensitivity label encryption" },
      { id: "c", text: "Litigation hold only" },
      { id: "d", text: "DLP policy" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Marking content as a record (or regulatory record) restricts edits, with disposition reviews before deletion.",
    difficulty: "medium",
  },
  {
    id: "sc401-015",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which DLP feature lets users override a block action with a justification?",
    options: [
      { id: "a", text: "User notifications and policy tips with override" },
      { id: "b", text: "Forced encryption" },
      { id: "c", text: "Adaptive Protection" },
      { id: "d", text: "Activity explorer" },
    ],
    correctAnswers: ["a"],
    explanation:
      "DLP policy tips can allow user override with required justification, which is logged for review.",
    difficulty: "easy",
  },
  {
    id: "sc401-016",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which workload requires the Microsoft Purview compliance extension on Chrome/Edge to enforce browser DLP egress controls?",
    options: [
      { id: "a", text: "Endpoint DLP web egress" },
      { id: "b", text: "Email DLP" },
      { id: "c", text: "Teams DLP" },
      { id: "d", text: "SharePoint DLP" },
    ],
    correctAnswers: ["a"],
    explanation:
      "The Purview compliance browser extension is required to enforce Endpoint DLP web restrictions.",
    difficulty: "medium",
  },
  {
    id: "sc401-017",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which DLP integration extends DLP enforcement to non-Microsoft cloud apps like Dropbox or Box?",
    options: [
      { id: "a", text: "Microsoft Defender for Cloud Apps integration" },
      { id: "b", text: "Microsoft Sentinel" },
      { id: "c", text: "Microsoft Defender for Endpoint" },
      { id: "d", text: "Privileged Identity Management" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Defender for Cloud Apps applies Purview DLP policies to discovered third-party SaaS apps.",
    difficulty: "medium",
  },

  // Domain: Insider risk and privacy (20%)
  {
    id: "sc401-018",
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
    id: "sc401-019",
    certId: "sc-401",
    domainId: "insider-risk",
    type: "single",
    question:
      "Which Insider Risk template detects mass deletion of files in OneDrive and SharePoint?",
    options: [
      { id: "a", text: "Data leaks" },
      { id: "b", text: "Data leaks by departing users" },
      { id: "c", text: "Data theft by departing users" },
      { id: "d", text: "Security policy violations" },
    ],
    correctAnswers: ["a"],
    explanation:
      "The 'Data leaks' template includes risky exfiltration and deletion patterns; 'departing users' templates focus on JML signals.",
    difficulty: "medium",
  },
  {
    id: "sc401-020",
    certId: "sc-401",
    domainId: "insider-risk",
    type: "single",
    question:
      "Which Microsoft Purview tool helps detect inappropriate communications such as harassment or sensitive disclosures in Teams chat?",
    options: [
      { id: "a", text: "Communication compliance" },
      { id: "b", text: "Insider Risk Management" },
      { id: "c", text: "Records management" },
      { id: "d", text: "Audit (Premium)" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Communication compliance scans messages and chats against policy templates and trainable classifiers.",
    difficulty: "easy",
  },
  {
    id: "sc401-021",
    certId: "sc-401",
    domainId: "insider-risk",
    type: "single",
    question:
      "Which signal source provides employment status to insider risk for 'departing user' triggers?",
    options: [
      { id: "a", text: "HR connector" },
      { id: "b", text: "Microsoft Defender for Identity" },
      { id: "c", text: "Microsoft Sentinel" },
      { id: "d", text: "Conditional Access" },
    ],
    correctAnswers: ["a"],
    explanation:
      "An HR connector imports JML data so insider risk can correlate signals with resignations or terminations.",
    difficulty: "medium",
  },
  {
    id: "sc401-022",
    certId: "sc-401",
    domainId: "insider-risk",
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

  // Domain: Manage security across Microsoft 365 workloads (15%)
  {
    id: "sc401-023",
    certId: "sc-401",
    domainId: "security-m365",
    type: "single",
    question:
      "Which Purview audit feature provides longer log retention and high-value events such as MailItemsAccessed?",
    options: [
      { id: "a", text: "Audit (Premium)" },
      { id: "b", text: "Audit (Standard)" },
      { id: "c", text: "Microsoft Sentinel" },
      { id: "d", text: "Defender for Endpoint timeline" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Audit (Premium) extends retention and exposes events like MailItemsAccessed and SearchQueryInitiated.",
    difficulty: "medium",
  },
  {
    id: "sc401-024",
    certId: "sc-401",
    domainId: "security-m365",
    type: "single",
    question:
      "Which Purview eDiscovery tier supports custodian management, legal hold notifications, and review with predictive coding?",
    options: [
      { id: "a", text: "Content search" },
      { id: "b", text: "eDiscovery (Standard)" },
      { id: "c", text: "eDiscovery (Premium)" },
      { id: "d", text: "Audit (Premium)" },
    ],
    correctAnswers: ["c"],
    explanation:
      "eDiscovery (Premium) adds custodians, legal hold notifications, review sets, and machine-learning-assisted review.",
    difficulty: "medium",
  },
  {
    id: "sc401-025",
    certId: "sc-401",
    domainId: "security-m365",
    type: "single",
    question:
      "Which Microsoft Purview capability discovers and maps personal data across Microsoft 365 to support privacy regulations?",
    options: [
      { id: "a", text: "Priva Privacy Risk Management" },
      { id: "b", text: "Compliance Manager" },
      { id: "c", text: "Sensitivity labels" },
      { id: "d", text: "Microsoft Defender for Cloud" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft Priva discovers personal data, manages subject rights requests, and reports on privacy risks.",
    difficulty: "medium",
  },
];
