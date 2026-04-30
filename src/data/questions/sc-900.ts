import { Question } from "@/lib/types";

export const sc900Questions: Question[] = [
  // Domain: Concepts of security, compliance, and identity (20%)
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
    domainId: "sci-concepts",
    type: "single",
    question:
      "What does the C in the CIA triad stand for?",
    options: [
      { id: "a", text: "Compliance" },
      { id: "b", text: "Confidentiality" },
      { id: "c", text: "Continuity" },
      { id: "d", text: "Cryptography" },
    ],
    correctAnswers: ["b"],
    explanation:
      "The CIA triad is Confidentiality, Integrity, and Availability — the foundational properties of information security.",
    difficulty: "easy",
  },
  {
    id: "sc900-004",
    certId: "sc-900",
    domainId: "sci-concepts",
    type: "single",
    question:
      "Defense in depth is best described as which of the following?",
    options: [
      { id: "a", text: "Relying on a single, very strong perimeter firewall" },
      { id: "b", text: "Layering multiple security controls so a failure in one layer is mitigated by others" },
      { id: "c", text: "Encrypting all data at rest with the strongest available cipher" },
      { id: "d", text: "Disabling all unused services on a system" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Defense in depth uses multiple, overlapping layers of controls (identity, network, host, app, data) so no single failure exposes the asset.",
    difficulty: "easy",
  },
  {
    id: "sc900-005",
    certId: "sc-900",
    domainId: "sci-concepts",
    type: "single",
    question:
      "Which authentication factor type is a hardware security key?",
    options: [
      { id: "a", text: "Something you know" },
      { id: "b", text: "Something you have" },
      { id: "c", text: "Something you are" },
      { id: "d", text: "Somewhere you are" },
    ],
    correctAnswers: ["b"],
    explanation:
      "FIDO2/security keys are a possession factor — something you physically have.",
    difficulty: "easy",
  },

  // Domain: Microsoft Entra capabilities (30%)
  {
    id: "sc900-006",
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
    id: "sc900-007",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "Which Microsoft Entra capability provides time-bound, approval-based activation of administrative roles?",
    options: [
      { id: "a", text: "Conditional Access" },
      { id: "b", text: "Privileged Identity Management (PIM)" },
      { id: "c", text: "Identity Protection" },
      { id: "d", text: "Self-service password reset" },
    ],
    correctAnswers: ["b"],
    explanation:
      "PIM provides just-in-time, approval-based activation of privileged roles in Entra ID and Azure resources.",
    difficulty: "easy",
  },
  {
    id: "sc900-008",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "What is the primary purpose of Microsoft Entra B2B collaboration?",
    options: [
      { id: "a", text: "Sync on-premises AD users to Entra ID" },
      { id: "b", text: "Invite external partners to access your apps using their own credentials" },
      { id: "c", text: "Sign customers into a customer-facing app" },
      { id: "d", text: "Provide passwordless sign-in for employees" },
    ],
    correctAnswers: ["b"],
    explanation:
      "B2B collaboration invites guest users from any identity provider to access your tenant's resources.",
    difficulty: "easy",
  },
  {
    id: "sc900-009",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "Which authentication method is considered phishing-resistant in Microsoft Entra?",
    options: [
      { id: "a", text: "SMS-based one-time passcode" },
      { id: "b", text: "Voice call verification" },
      { id: "c", text: "FIDO2 security key or Windows Hello for Business" },
      { id: "d", text: "Email-based OTP" },
    ],
    correctAnswers: ["c"],
    explanation:
      "FIDO2 keys, Windows Hello for Business, and certificate-based authentication are phishing-resistant; SMS and voice are not.",
    difficulty: "medium",
  },
  {
    id: "sc900-010",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "What does single sign-on (SSO) provide?",
    options: [
      { id: "a", text: "A single password that unlocks every device" },
      { id: "b", text: "One authentication that grants access to multiple applications" },
      { id: "c", text: "A single MFA factor required across all apps" },
      { id: "d", text: "Automatic password rotation" },
    ],
    correctAnswers: ["b"],
    explanation:
      "SSO lets a user authenticate once and access multiple integrated applications without re-entering credentials.",
    difficulty: "easy",
  },
  {
    id: "sc900-011",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "Which Entra feature lets users request access to apps and groups through a self-service catalog with approvals?",
    options: [
      { id: "a", text: "Entitlement management" },
      { id: "b", text: "Access reviews" },
      { id: "c", text: "Conditional Access" },
      { id: "d", text: "Identity Protection" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Entitlement management provides access packages with self-service requests, approvals, and lifecycle expiration.",
    difficulty: "medium",
  },
  {
    id: "sc900-012",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "Which sign-in risk signal indicates a sign-in from a TOR network or anonymous proxy?",
    options: [
      { id: "a", text: "Atypical travel" },
      { id: "b", text: "Anonymous IP address" },
      { id: "c", text: "Leaked credentials" },
      { id: "d", text: "Password spray" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Identity Protection flags anonymous IP address sign-ins as a real-time risk signal.",
    difficulty: "medium",
  },
  {
    id: "sc900-013",
    certId: "sc-900",
    domainId: "entra",
    type: "multiple",
    question:
      "Which two are valid Microsoft Entra license editions? (Choose two.)",
    options: [
      { id: "a", text: "Entra ID Free" },
      { id: "b", text: "Entra ID Standard" },
      { id: "c", text: "Entra ID P1" },
      { id: "d", text: "Entra ID Ultimate" },
    ],
    correctAnswers: ["a", "c"],
    explanation:
      "Entra ID is offered as Free, P1, and P2; Standard and Ultimate are not licensing tiers.",
    difficulty: "medium",
  },

  // Domain: Microsoft security solutions (35%)
  {
    id: "sc900-014",
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
    id: "sc900-015",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Microsoft Defender XDR component protects user identities by detecting compromised on-premises Active Directory accounts?",
    options: [
      { id: "a", text: "Microsoft Defender for Endpoint" },
      { id: "b", text: "Microsoft Defender for Identity" },
      { id: "c", text: "Microsoft Defender for Office 365" },
      { id: "d", text: "Microsoft Defender for Cloud Apps" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Defender for Identity uses domain controller signals to detect identity attacks against on-premises AD.",
    difficulty: "easy",
  },
  {
    id: "sc900-016",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "What is the primary purpose of Microsoft Defender for Cloud's Secure Score?",
    options: [
      { id: "a", text: "Calculate the monthly Azure security spend" },
      { id: "b", text: "Measure the security posture of an Azure environment with prioritized recommendations" },
      { id: "c", text: "Score the performance of virtual machines" },
      { id: "d", text: "Score data residency compliance" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Secure Score reflects how aligned an environment is with Microsoft cloud security benchmark recommendations.",
    difficulty: "easy",
  },
  {
    id: "sc900-017",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Azure service provides centralized key, secret, and certificate management?",
    options: [
      { id: "a", text: "Azure Key Vault" },
      { id: "b", text: "Azure Information Protection" },
      { id: "c", text: "Azure Monitor" },
      { id: "d", text: "Azure Policy" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Key Vault stores and protects keys, secrets, and TLS certificates with hardware-backed options.",
    difficulty: "easy",
  },
  {
    id: "sc900-018",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Azure resource provides DDoS protection at the network edge?",
    options: [
      { id: "a", text: "Azure Firewall" },
      { id: "b", text: "Azure DDoS Protection" },
      { id: "c", text: "Network Security Group" },
      { id: "d", text: "Azure Bastion" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure DDoS Protection (Network and IP tiers) defends public IPs against volumetric and protocol attacks.",
    difficulty: "easy",
  },
  {
    id: "sc900-019",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Microsoft solution discovers and controls SaaS application usage (shadow IT)?",
    options: [
      { id: "a", text: "Microsoft Defender for Cloud Apps" },
      { id: "b", text: "Microsoft Defender for Endpoint" },
      { id: "c", text: "Microsoft Sentinel" },
      { id: "d", text: "Microsoft Intune" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Defender for Cloud Apps is the CASB that discovers SaaS usage and enforces policies on cloud apps.",
    difficulty: "medium",
  },
  {
    id: "sc900-020",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Microsoft Sentinel artifact correlates raw logs into actionable alerts?",
    options: [
      { id: "a", text: "Workbook" },
      { id: "b", text: "Analytics rule" },
      { id: "c", text: "Watchlist" },
      { id: "d", text: "Data connector" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Analytics rules run KQL on ingested data to create alerts and incidents.",
    difficulty: "medium",
  },
  {
    id: "sc900-021",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "What does Microsoft Defender for Cloud's CSPM (cloud security posture management) primarily provide?",
    options: [
      { id: "a", text: "Anti-malware on Windows endpoints" },
      { id: "b", text: "Continuous assessment of misconfigurations and compliance across multicloud" },
      { id: "c", text: "Real-time DLP for documents" },
      { id: "d", text: "Hardware key management" },
    ],
    correctAnswers: ["b"],
    explanation:
      "CSPM continuously evaluates cloud resource configurations against security and compliance benchmarks.",
    difficulty: "medium",
  },

  // Domain: Microsoft compliance solutions (15%)
  {
    id: "sc900-022",
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
  {
    id: "sc900-023",
    certId: "sc-900",
    domainId: "purview",
    type: "single",
    question:
      "Which Microsoft Purview tool provides a score and improvement actions to help meet regulatory standards like ISO 27001 or HIPAA?",
    options: [
      { id: "a", text: "Compliance Manager" },
      { id: "b", text: "eDiscovery" },
      { id: "c", text: "Communication compliance" },
      { id: "d", text: "Data lifecycle management" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Compliance Manager calculates a Compliance Score and tracks improvement actions against standards and regulations.",
    difficulty: "medium",
  },
  {
    id: "sc900-024",
    certId: "sc-900",
    domainId: "purview",
    type: "single",
    question:
      "Which capability identifies risky activities by employees, such as data exfiltration before resignation?",
    options: [
      { id: "a", text: "Insider Risk Management" },
      { id: "b", text: "Data Loss Prevention" },
      { id: "c", text: "Records management" },
      { id: "d", text: "Conditional Access" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Insider Risk Management detects, investigates, and acts on internal risk indicators using HR, endpoint, and cloud signals.",
    difficulty: "easy",
  },
  {
    id: "sc900-025",
    certId: "sc-900",
    domainId: "purview",
    type: "single",
    question:
      "Which capability preserves Microsoft 365 content for legal investigations?",
    options: [
      { id: "a", text: "Records management" },
      { id: "b", text: "eDiscovery (Premium)" },
      { id: "c", text: "Sensitivity labels" },
      { id: "d", text: "Audit (Standard)" },
    ],
    correctAnswers: ["b"],
    explanation:
      "eDiscovery (Premium) supports legal hold, custodian management, search, review, and export for investigations.",
    difficulty: "medium",
  },
];
