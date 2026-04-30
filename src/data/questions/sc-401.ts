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
  // Additional info-protection coverage
  {
    id: "sc401-026",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Where in Microsoft Purview do you publish sensitivity labels so they appear for users in Office apps?",
    options: [
      { id: "a", text: "Label policy" },
      { id: "b", text: "Auto-labeling policy" },
      { id: "c", text: "Endpoint DLP rules" },
      { id: "d", text: "Records management retention plan" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Label policies publish a set of sensitivity labels to specific users/groups and configure default/required labeling.",
    difficulty: "easy",
  },
  {
    id: "sc401-027",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which sensitivity-label encryption setting lets the rights be evaluated at the time of access (so revocation works)?",
    options: [
      { id: "a", text: "Configure encryption with assigned permissions (online check)" },
      { id: "b", text: "User-defined permissions only" },
      { id: "c", text: "Do Not Forward template offline" },
      { id: "d", text: "No encryption" },
    ],
    correctAnswers: ["a"],
    explanation:
      "When permissions are assigned in the label, RMS uses an online check so revocation and changes take effect.",
    difficulty: "hard",
  },
  {
    id: "sc401-028",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which Purview feature audits sensitivity-label changes (e.g., upgrades and downgrades)?",
    options: [
      { id: "a", text: "Activity explorer + audit logs" },
      { id: "b", text: "Compliance Manager only" },
      { id: "c", text: "Records management disposition" },
      { id: "d", text: "eDiscovery" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Activity explorer surfaces label apply/change events; the underlying audit log captures details for forensics.",
    difficulty: "medium",
  },
  {
    id: "sc401-029",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which Purview feature lets you label and protect Power BI semantic models, reports, and dashboards?",
    options: [
      { id: "a", text: "Sensitivity labels for Power BI (with mandatory labeling option)" },
      { id: "b", text: "Records management" },
      { id: "c", text: "DLP for Teams" },
      { id: "d", text: "Information barriers" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Sensitivity labels extend to Power BI content and exports retain protection.",
    difficulty: "medium",
  },
  {
    id: "sc401-030",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which Purview feature lets you require justification when a user changes a label to a lower level?",
    options: [
      { id: "a", text: "Mandatory justification on label downgrade" },
      { id: "b", text: "DLP user override only" },
      { id: "c", text: "Records management" },
      { id: "d", text: "eDiscovery hold" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Label policies can require users to justify removing or downgrading labels, captured in audit.",
    difficulty: "medium",
  },
  {
    id: "sc401-031",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which Purview classifier method matches against precise hashed records (e.g., a CSV of customer SSNs)?",
    options: [
      { id: "a", text: "Exact Data Match (EDM)" },
      { id: "b", text: "Trainable classifier" },
      { id: "c", text: "Document fingerprinting" },
      { id: "d", text: "Out-of-the-box SIT regex" },
    ],
    correctAnswers: ["a"],
    explanation:
      "EDM securely hashes a sensitive table and matches content against it for high-precision detection.",
    difficulty: "hard",
  },
  {
    id: "sc401-032",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which Purview classifier method matches forms or templates by their structure?",
    options: [
      { id: "a", text: "Document fingerprinting" },
      { id: "b", text: "Trainable classifier" },
      { id: "c", text: "Sensitive information type regex" },
      { id: "d", text: "Auto-labeling policy" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Fingerprinting derives a unique signature of a form/template to identify variations.",
    difficulty: "medium",
  },
  {
    id: "sc401-033",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "What is the recommended order to roll out sensitivity labels?",
    options: [
      { id: "a", text: "Define taxonomy, configure labels, publish via policy, then enable auto-labeling" },
      { id: "b", text: "Enable auto-labeling first, then define labels" },
      { id: "c", text: "Configure DLP first, then labels" },
      { id: "d", text: "Apply records management before labels" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Plan, build, publish, monitor, and only then layer in auto-labeling to reduce user disruption.",
    difficulty: "easy",
  },
  {
    id: "sc401-034",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which sensitivity-label option lets you require a label on save/send for Office apps?",
    options: [
      { id: "a", text: "Mandatory labeling in label policy" },
      { id: "b", text: "Records management retention" },
      { id: "c", text: "DLP rule with block" },
      { id: "d", text: "Information barriers" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Mandatory labeling forces users to apply a label before saving or sending content.",
    difficulty: "medium",
  },
  {
    id: "sc401-035",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "How do you label content stored in Microsoft Fabric/OneLake using Purview?",
    options: [
      { id: "a", text: "Sensitivity labels on Fabric items inherit and propagate downstream" },
      { id: "b", text: "Records management labels" },
      { id: "c", text: "Manual file-by-file labels only" },
      { id: "d", text: "Information barriers segments" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft Fabric supports sensitivity labels with downstream inheritance to dependent items.",
    difficulty: "hard",
  },
  {
    id: "sc401-036",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which Purview feature controls SharePoint and Teams privacy/sharing through a sensitivity label applied to the container itself?",
    options: [
      { id: "a", text: "Container labels (sites and groups)" },
      { id: "b", text: "Records management retention" },
      { id: "c", text: "DLP policy tips" },
      { id: "d", text: "eDiscovery hold" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Container labels enforce privacy, external sharing, unmanaged-device access, and authentication contexts on the site/group.",
    difficulty: "medium",
  },
  {
    id: "sc401-037",
    certId: "sc-401",
    domainId: "info-protection",
    type: "single",
    question:
      "Which Purview feature applies sensitivity labels at upload time across SharePoint, OneDrive, Exchange via service-side scans?",
    options: [
      { id: "a", text: "Auto-labeling policy (service-side)" },
      { id: "b", text: "Client-side auto-labeling only" },
      { id: "c", text: "Content search" },
      { id: "d", text: "eDiscovery (Premium)" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Service-side auto-labeling scans content at rest and on upload using SITs and trainable classifiers.",
    difficulty: "medium",
  },

  // Additional dlp coverage
  {
    id: "sc401-038",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which DLP rule action notifies a user with a tip and logs the event without blocking?",
    options: [
      { id: "a", text: "Audit-only with policy tip" },
      { id: "b", text: "Block without notifications" },
      { id: "c", text: "Encrypt only" },
      { id: "d", text: "Quarantine" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Audit-only logs the match and shows a policy tip; useful for piloting before enforcement.",
    difficulty: "easy",
  },
  {
    id: "sc401-039",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which DLP capability lets you quarantine or restrict SharePoint files that match policy after creation?",
    options: [
      { id: "a", text: "Restrict access or remove SharePoint/OneDrive content" },
      { id: "b", text: "Endpoint DLP egress restriction only" },
      { id: "c", text: "Communication compliance" },
      { id: "d", text: "Records management" },
    ],
    correctAnswers: ["a"],
    explanation:
      "DLP policies can restrict access or quarantine matching SharePoint/OneDrive content.",
    difficulty: "medium",
  },
  {
    id: "sc401-040",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which Endpoint DLP setting prevents Bluetooth file transfer for files containing sensitive content?",
    options: [
      { id: "a", text: "Egress restriction on Bluetooth" },
      { id: "b", text: "Disable network shares only" },
      { id: "c", text: "Disable removable media only" },
      { id: "d", text: "Communication compliance" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Endpoint DLP supports egress restrictions on removable storage, network share, Bluetooth, browser, and printing.",
    difficulty: "medium",
  },
  {
    id: "sc401-041",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which Endpoint DLP requirement allows Endpoint DLP policies to apply to a Windows device?",
    options: [
      { id: "a", text: "Onboarded to Microsoft Purview compliance via Defender for Endpoint" },
      { id: "b", text: "Joined to a workgroup" },
      { id: "c", text: "Onboarded to Azure Bastion" },
      { id: "d", text: "Domain-joined to AD only" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Devices must be onboarded to Microsoft Purview (typically via Defender for Endpoint) to receive Endpoint DLP policies.",
    difficulty: "medium",
  },
  {
    id: "sc401-042",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which retention setting deletes content after a specified period without retaining it first?",
    options: [
      { id: "a", text: "Delete only (no retention)" },
      { id: "b", text: "Retain only" },
      { id: "c", text: "Retain then delete" },
      { id: "d", text: "Mark as record" },
    ],
    correctAnswers: ["a"],
    explanation:
      "A delete-only retention setting purges content after a period without holding it.",
    difficulty: "easy",
  },
  {
    id: "sc401-043",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which Purview feature reviews disposed records to confirm deletion under a retention plan?",
    options: [
      { id: "a", text: "Disposition reviews" },
      { id: "b", text: "Communication compliance" },
      { id: "c", text: "Activity explorer" },
      { id: "d", text: "Compliance Manager" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Records management disposition reviews provide approval steps before items are permanently deleted.",
    difficulty: "medium",
  },
  {
    id: "sc401-044",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which DLP feature surfaces aggregated match data for tuning false positives?",
    options: [
      { id: "a", text: "DLP alerts and Activity explorer" },
      { id: "b", text: "Compliance Manager controls" },
      { id: "c", text: "eDiscovery (Premium) review sets" },
      { id: "d", text: "Records management retention plan" },
    ],
    correctAnswers: ["a"],
    explanation:
      "DLP alerts plus Activity explorer give visibility into matches and outcomes for tuning.",
    difficulty: "medium",
  },
  {
    id: "sc401-045",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "How does Adaptive Protection change DLP enforcement?",
    options: [
      { id: "a", text: "Tightens DLP and Conditional Access automatically when a user's insider risk level rises" },
      { id: "b", text: "Encrypts all email by default" },
      { id: "c", text: "Pauses DLP outside business hours" },
      { id: "d", text: "Disables Endpoint DLP" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Adaptive Protection uses Insider Risk levels to dynamically apply stricter DLP policies and CA controls.",
    difficulty: "hard",
  },
  {
    id: "sc401-046",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which DLP location must be onboarded to apply DLP rules to messages in Microsoft Teams chat?",
    options: [
      { id: "a", text: "Microsoft Teams chat and channel messages location" },
      { id: "b", text: "Endpoint location only" },
      { id: "c", text: "Power BI location" },
      { id: "d", text: "On-premises file shares only" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Selecting the Teams chat/channel messages location enables DLP on Teams conversations.",
    difficulty: "easy",
  },
  {
    id: "sc401-047",
    certId: "sc-401",
    domainId: "dlp",
    type: "single",
    question:
      "Which Purview retention scope lets a single policy apply to all users in Exchange and OneDrive?",
    options: [
      { id: "a", text: "Adaptive scope based on a query" },
      { id: "b", text: "Static scope of one user" },
      { id: "c", text: "DLP policy" },
      { id: "d", text: "Records management plan" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Adaptive scopes target users/locations dynamically by query (e.g., department or attribute).",
    difficulty: "medium",
  },
  // Additional insider-risk coverage
  {
    id: "sc401-048",
    certId: "sc-401",
    domainId: "insider-risk",
    type: "single",
    question:
      "Which Insider Risk Management indicator detects sensitive content being printed?",
    options: [
      { id: "a", text: "Endpoint DLP signal: printing of sensitive labeled content" },
      { id: "b", text: "Sentinel network capture" },
      { id: "c", text: "Records management disposition" },
      { id: "d", text: "Compliance Manager assessment" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Insider Risk consumes Endpoint DLP signals like printing, copying, or upload of sensitive content.",
    difficulty: "medium",
  },
  {
    id: "sc401-049",
    certId: "sc-401",
    domainId: "insider-risk",
    type: "single",
    question:
      "Which Insider Risk role can review cases without seeing user identities?",
    options: [
      { id: "a", text: "Insider Risk Management Analysts (with Anonymization on)" },
      { id: "b", text: "Global Administrator" },
      { id: "c", text: "Compliance Administrator (always identifies users)" },
      { id: "d", text: "Reports Reader" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Analysts triage anonymized cases; investigators with the right role can view identities when needed.",
    difficulty: "medium",
  },
  {
    id: "sc401-050",
    certId: "sc-401",
    domainId: "insider-risk",
    type: "single",
    question:
      "Which template is best to detect leaks of trade secrets where the user is not departing?",
    options: [
      { id: "a", text: "Data leaks (general)" },
      { id: "b", text: "Data theft by departing users" },
      { id: "c", text: "Security policy violations" },
      { id: "d", text: "General data leaks by priority users" },
    ],
    correctAnswers: ["a"],
    explanation:
      "The general 'Data leaks' template covers exfiltration patterns regardless of employment status.",
    difficulty: "medium",
  },
  {
    id: "sc401-051",
    certId: "sc-401",
    domainId: "insider-risk",
    type: "single",
    question:
      "Which Insider Risk feature lets you scope monitoring to a defined group such as Finance?",
    options: [
      { id: "a", text: "Priority user groups" },
      { id: "b", text: "Conditional Access named locations" },
      { id: "c", text: "Records management" },
      { id: "d", text: "Tenant restrictions" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Priority user groups elevate sensitivity for specific high-risk populations.",
    difficulty: "easy",
  },
  {
    id: "sc401-052",
    certId: "sc-401",
    domainId: "insider-risk",
    type: "single",
    question:
      "Which signal source provides indicators that a user opened a competitor's website?",
    options: [
      { id: "a", text: "Browsing telemetry from Microsoft Edge / Defender for Endpoint" },
      { id: "b", text: "Conditional Access" },
      { id: "c", text: "Records management" },
      { id: "d", text: "Workbook gallery" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Browsing signals from Edge/Defender for Endpoint feed into Insider Risk for context-aware detection.",
    difficulty: "hard",
  },
  {
    id: "sc401-053",
    certId: "sc-401",
    domainId: "insider-risk",
    type: "single",
    question:
      "Which Communication Compliance feature flags content that resembles harassment or insider trading?",
    options: [
      { id: "a", text: "Trainable classifiers in policy templates" },
      { id: "b", text: "Sensitive information types only" },
      { id: "c", text: "Records management labels" },
      { id: "d", text: "DLP policy tips" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Communication Compliance includes built-in trainable classifiers (harassment, threats, profanity) and customer-trainable ones.",
    difficulty: "medium",
  },
  {
    id: "sc401-054",
    certId: "sc-401",
    domainId: "insider-risk",
    type: "single",
    question:
      "Which Communication Compliance reviewer action escalates a flagged message to a designated investigator?",
    options: [
      { id: "a", text: "Escalate (and optionally to a manager or investigation case)" },
      { id: "b", text: "Resolve only" },
      { id: "c", text: "Tag false positive" },
      { id: "d", text: "Delete user account" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Reviewers can escalate flagged messages and route them into a Microsoft Purview investigation case.",
    difficulty: "medium",
  },

  // Additional security-m365 coverage
  {
    id: "sc401-055",
    certId: "sc-401",
    domainId: "security-m365",
    type: "single",
    question:
      "Which Microsoft Purview Audit feature lets you investigate after a high-impact event but only retains for 180 days by default?",
    options: [
      { id: "a", text: "Audit (Standard)" },
      { id: "b", text: "Audit (Premium) only" },
      { id: "c", text: "eDiscovery (Premium)" },
      { id: "d", text: "Defender XDR" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Audit Standard typically retains audit data for 180 days; Premium extends to one year (or longer with add-on).",
    difficulty: "medium",
  },
  {
    id: "sc401-056",
    certId: "sc-401",
    domainId: "security-m365",
    type: "single",
    question:
      "Which eDiscovery (Premium) feature applies analytics like near-duplicate detection and email threading to review sets?",
    options: [
      { id: "a", text: "Review-set analytics" },
      { id: "b", text: "Compliance Manager controls" },
      { id: "c", text: "Records management plan" },
      { id: "d", text: "DLP overrides" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Review-set analytics include near-duplicate detection, email threading, and themes to speed review.",
    difficulty: "hard",
  },
  {
    id: "sc401-057",
    certId: "sc-401",
    domainId: "security-m365",
    type: "single",
    question:
      "Which Microsoft Purview feature blocks specific user groups from communicating with each other (e.g., legal vs. trading)?",
    options: [
      { id: "a", text: "Information barriers (segments and policies)" },
      { id: "b", text: "DLP" },
      { id: "c", text: "Conditional Access" },
      { id: "d", text: "Records management" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Information barriers segment users and define block/allow policies between segments in Teams, OneDrive, and SharePoint.",
    difficulty: "medium",
  },
  {
    id: "sc401-058",
    certId: "sc-401",
    domainId: "security-m365",
    type: "single",
    question:
      "Which Compliance Manager artifact represents a regulation or framework you assess against?",
    options: [
      { id: "a", text: "Assessment based on a regulation template" },
      { id: "b", text: "DLP policy" },
      { id: "c", text: "Sensitivity label" },
      { id: "d", text: "eDiscovery case" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Compliance Manager assessments are scoped to a regulation/framework and track improvement actions.",
    difficulty: "easy",
  },
  {
    id: "sc401-059",
    certId: "sc-401",
    domainId: "security-m365",
    type: "single",
    question:
      "Which Microsoft Priva capability automates discovery and fulfilment of GDPR / CCPA subject rights requests?",
    options: [
      { id: "a", text: "Subject Rights Requests in Priva Privacy Risk Management" },
      { id: "b", text: "Records management" },
      { id: "c", text: "DLP for Teams" },
      { id: "d", text: "Defender for Cloud Apps" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Priva SRR finds personal data, supports redaction, and automates the response workflow.",
    difficulty: "medium",
  },
  {
    id: "sc401-060",
    certId: "sc-401",
    domainId: "security-m365",
    type: "single",
    question:
      "Which Microsoft Purview feature lets data owners attest to or remediate ROT (redundant, obsolete, trivial) data?",
    options: [
      { id: "a", text: "Data lifecycle management with proactive retention/deletion + Compliance Manager improvement actions" },
      { id: "b", text: "Communication compliance" },
      { id: "c", text: "Records management disposition only" },
      { id: "d", text: "Defender for Cloud Apps" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Data lifecycle management plus disposition reviews and Compliance Manager actions help reduce ROT data.",
    difficulty: "hard",
  },
];
