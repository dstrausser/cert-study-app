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

  // Additional SCI concepts coverage
  {
    id: "sc900-026",
    certId: "sc-900",
    domainId: "sci-concepts",
    type: "single",
    question:
      "Which encryption type uses the same key to encrypt and decrypt data?",
    options: [
      { id: "a", text: "Symmetric" },
      { id: "b", text: "Asymmetric" },
      { id: "c", text: "Hashing" },
      { id: "d", text: "Salting" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Symmetric encryption uses one shared key (e.g., AES). Asymmetric uses a public/private key pair (e.g., RSA).",
    difficulty: "easy",
  },
  {
    id: "sc900-027",
    certId: "sc-900",
    domainId: "sci-concepts",
    type: "single",
    question:
      "What does hashing provide that encryption does not?",
    options: [
      { id: "a", text: "Two-way reversibility" },
      { id: "b", text: "A fixed-length, one-way fingerprint of data" },
      { id: "c", text: "Faster network transfer" },
      { id: "d", text: "Multi-factor authentication" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Hashing produces a one-way fixed-length digest used for integrity verification and password storage.",
    difficulty: "easy",
  },
  {
    id: "sc900-028",
    certId: "sc-900",
    domainId: "sci-concepts",
    type: "single",
    question:
      "Which control is an example of authorization rather than authentication?",
    options: [
      { id: "a", text: "Verifying a fingerprint at sign-in" },
      { id: "b", text: "Granting a user the Reader role on a resource group" },
      { id: "c", text: "Prompting for an MFA code" },
      { id: "d", text: "Checking a password against a directory" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Authorization decides what an authenticated identity may do; assigning RBAC roles is an authorization control.",
    difficulty: "easy",
  },
  {
    id: "sc900-029",
    certId: "sc-900",
    domainId: "sci-concepts",
    type: "single",
    question:
      "In a SaaS shared-responsibility scenario, who is responsible for the operating system and application code?",
    options: [
      { id: "a", text: "The customer" },
      { id: "b", text: "The cloud provider" },
      { id: "c", text: "Both share equally" },
      { id: "d", text: "Neither — it is fully open source" },
    ],
    correctAnswers: ["b"],
    explanation:
      "In SaaS the provider runs the OS and app; the customer is responsible for data, identities, and access.",
    difficulty: "medium",
  },
  {
    id: "sc900-030",
    certId: "sc-900",
    domainId: "sci-concepts",
    type: "single",
    question:
      "Which statement about identity as the new security perimeter is true?",
    options: [
      { id: "a", text: "Network firewalls alone are sufficient" },
      { id: "b", text: "Identity becomes the primary control plane that gates access to apps and data anywhere" },
      { id: "c", text: "Only on-premises Active Directory is required" },
      { id: "d", text: "Identity is irrelevant in cloud" },
    ],
    correctAnswers: ["b"],
    explanation:
      "With cloud and remote work, identity (users, devices, workloads) is the consistent control plane for access.",
    difficulty: "easy",
  },
  {
    id: "sc900-031",
    certId: "sc-900",
    domainId: "sci-concepts",
    type: "single",
    question:
      "Which of the following describes federation?",
    options: [
      { id: "a", text: "Trusting tokens issued by another identity provider so users can SSO across organizations" },
      { id: "b", text: "Synchronizing on-premises AD users to Entra ID" },
      { id: "c", text: "Replacing passwords with biometrics" },
      { id: "d", text: "Using a hardware key to sign in" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Federation establishes trust between identity providers so a user authenticated in one realm can access resources in another.",
    difficulty: "medium",
  },
  {
    id: "sc900-032",
    certId: "sc-900",
    domainId: "sci-concepts",
    type: "multiple",
    question:
      "Which two are common modern authentication protocols? (Choose two.)",
    options: [
      { id: "a", text: "OAuth 2.0" },
      { id: "b", text: "OpenID Connect" },
      { id: "c", text: "POP3" },
      { id: "d", text: "FTP" },
    ],
    correctAnswers: ["a", "b"],
    explanation:
      "OAuth 2.0 is for delegated authorization; OIDC layers authentication on top of OAuth 2.0.",
    difficulty: "medium",
  },

  // Additional Entra coverage
  {
    id: "sc900-033",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "Which Entra capability is now the umbrella name for what was formerly Azure Active Directory?",
    options: [
      { id: "a", text: "Microsoft Entra ID" },
      { id: "b", text: "Microsoft Defender XDR" },
      { id: "c", text: "Microsoft Purview" },
      { id: "d", text: "Microsoft Sentinel" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure AD was renamed to Microsoft Entra ID; capabilities and licensing remain the same.",
    difficulty: "easy",
  },
  {
    id: "sc900-034",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "Which Microsoft Entra product manages permissions across multicloud (Azure, AWS, GCP) for least-privilege?",
    options: [
      { id: "a", text: "Microsoft Entra Permissions Management" },
      { id: "b", text: "Microsoft Entra Verified ID" },
      { id: "c", text: "Microsoft Entra ID Governance" },
      { id: "d", text: "Microsoft Entra External ID" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Entra Permissions Management is the multicloud CIEM for discovering and right-sizing permissions.",
    difficulty: "medium",
  },
  {
    id: "sc900-035",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "Which Entra capability lets organizations issue and verify decentralized credentials such as employee or training certificates?",
    options: [
      { id: "a", text: "Microsoft Entra Verified ID" },
      { id: "b", text: "Microsoft Entra Permissions Management" },
      { id: "c", text: "Microsoft Entra ID Protection" },
      { id: "d", text: "Microsoft Entra Connect" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Verified ID is Microsoft's verifiable credentials platform based on open standards.",
    difficulty: "medium",
  },
  {
    id: "sc900-036",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "Which Entra capability is intended for sign-in of customers (CIAM) using social or local accounts?",
    options: [
      { id: "a", text: "Microsoft Entra External ID" },
      { id: "b", text: "Microsoft Entra ID P2" },
      { id: "c", text: "Microsoft Entra Verified ID" },
      { id: "d", text: "Microsoft Entra Connect" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Entra External ID supports B2C-style customer sign-in with social, email, or local accounts.",
    difficulty: "medium",
  },
  {
    id: "sc900-037",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "What does Microsoft Entra ID 'security defaults' provide?",
    options: [
      { id: "a", text: "A baseline of MFA, blocked legacy auth, and protected admin accounts at no additional cost" },
      { id: "b", text: "A premium SIEM for the tenant" },
      { id: "c", text: "Automatic enrollment in Defender for Cloud" },
      { id: "d", text: "A dedicated firewall" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Security defaults are a free, preconfigured set of identity protections suited to most small-to-medium tenants.",
    difficulty: "easy",
  },
  {
    id: "sc900-038",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "Which feature lets users reset their own passwords with verification methods?",
    options: [
      { id: "a", text: "Self-service password reset (SSPR)" },
      { id: "b", text: "Privileged Identity Management" },
      { id: "c", text: "Identity Protection" },
      { id: "d", text: "Conditional Access" },
    ],
    correctAnswers: ["a"],
    explanation:
      "SSPR allows users to reset/unlock their account using registered methods such as Authenticator, phone, or security questions.",
    difficulty: "easy",
  },
  {
    id: "sc900-039",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "Which directory object represents an instance of an application in your tenant?",
    options: [
      { id: "a", text: "Service principal" },
      { id: "b", text: "Group" },
      { id: "c", text: "Device" },
      { id: "d", text: "Administrative unit" },
    ],
    correctAnswers: ["a"],
    explanation:
      "When an app is registered or consented to, a service principal is created in the tenant for permissions and sign-ins.",
    difficulty: "medium",
  },
  {
    id: "sc900-040",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "Which feature lets you delegate administration over a subset of users (e.g., one region) without granting tenant-wide rights?",
    options: [
      { id: "a", text: "Administrative units" },
      { id: "b", text: "Conditional Access" },
      { id: "c", text: "Tenant restrictions" },
      { id: "d", text: "Identity Protection" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Administrative units scope role assignments to a defined collection of users, groups, or devices.",
    difficulty: "medium",
  },
  {
    id: "sc900-041",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "Which Entra ID license tier is required for risk-based Conditional Access via Identity Protection?",
    options: [
      { id: "a", text: "Free" },
      { id: "b", text: "P1" },
      { id: "c", text: "P2" },
      { id: "d", text: "Microsoft 365 Apps for business" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Identity Protection risk-based policies and PIM require Entra ID P2.",
    difficulty: "medium",
  },
  {
    id: "sc900-042",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "What is the primary purpose of Microsoft Entra ID Governance?",
    options: [
      { id: "a", text: "Run a SIEM in the cloud" },
      { id: "b", text: "Manage identity lifecycle and access (entitlements, reviews, PIM, lifecycle workflows)" },
      { id: "c", text: "Block DDoS attacks" },
      { id: "d", text: "Encrypt files at rest" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Entra ID Governance bundles entitlement management, access reviews, PIM, and lifecycle workflows.",
    difficulty: "medium",
  },
  {
    id: "sc900-043",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Microsoft Defender XDR unifies signal from which set of products?",
    options: [
      { id: "a", text: "Defender for Endpoint, Defender for Identity, Defender for Office 365, Defender for Cloud Apps" },
      { id: "b", text: "Microsoft Sentinel and Compliance Manager" },
      { id: "c", text: "Microsoft Intune and Defender for IoT" },
      { id: "d", text: "Azure Bastion and Azure Firewall" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Defender XDR is the unified portal correlating endpoint, identity, email, and cloud-app signals.",
    difficulty: "easy",
  },
  {
    id: "sc900-044",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which product provides next-gen anti-malware, EDR, and ASR for Windows, macOS, Linux, iOS, and Android endpoints?",
    options: [
      { id: "a", text: "Microsoft Defender for Endpoint" },
      { id: "b", text: "Microsoft Defender for Cloud" },
      { id: "c", text: "Microsoft Defender for Cloud Apps" },
      { id: "d", text: "Microsoft Sentinel" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Defender for Endpoint protects endpoints across major OSes with prevention, detection, and response.",
    difficulty: "easy",
  },
  {
    id: "sc900-045",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Defender component protects Exchange Online from phishing and malware in mail and links?",
    options: [
      { id: "a", text: "Microsoft Defender for Office 365" },
      { id: "b", text: "Microsoft Defender for Identity" },
      { id: "c", text: "Microsoft Defender for IoT" },
      { id: "d", text: "Microsoft Defender for Cloud" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Defender for Office 365 provides Safe Links, Safe Attachments, anti-phish, and attack simulation training.",
    difficulty: "easy",
  },
  {
    id: "sc900-046",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Defender for Cloud capability adds workload-protection (CWP) such as VM threat detection?",
    options: [
      { id: "a", text: "Per-resource Defender plans (servers, SQL, storage, etc.)" },
      { id: "b", text: "Secure Score only" },
      { id: "c", text: "Microsoft Sentinel connector" },
      { id: "d", text: "Compliance Manager controls" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Defender plans are paid CWP add-ons in Defender for Cloud that bring threat detection to resource types.",
    difficulty: "medium",
  },
  {
    id: "sc900-047",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Azure service centrally controls outbound and east-west network traffic with stateful inspection?",
    options: [
      { id: "a", text: "Azure Firewall" },
      { id: "b", text: "Azure Bastion" },
      { id: "c", text: "Azure Front Door" },
      { id: "d", text: "Azure Private Link" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Firewall is a managed, stateful network firewall with built-in HA and threat intelligence.",
    difficulty: "easy",
  },
  {
    id: "sc900-048",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Azure service provides secure RDP/SSH access to VMs without exposing public IPs?",
    options: [
      { id: "a", text: "Azure Bastion" },
      { id: "b", text: "Azure Firewall" },
      { id: "c", text: "Azure VPN Gateway" },
      { id: "d", text: "Azure Private DNS" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Bastion is a managed jump host that brokers RDP/SSH through the Azure portal over TLS.",
    difficulty: "easy",
  },
  {
    id: "sc900-049",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Microsoft AI assistant for security helps SOC analysts triage incidents using natural language?",
    options: [
      { id: "a", text: "Microsoft Security Copilot" },
      { id: "b", text: "Microsoft Defender for Cloud" },
      { id: "c", text: "Microsoft Compliance Manager" },
      { id: "d", text: "Microsoft Intune" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Security Copilot is the generative-AI assistant that integrates with Defender XDR, Sentinel, Intune, and Purview.",
    difficulty: "easy",
  },
  {
    id: "sc900-050",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Microsoft Defender component protects OT and IoT devices in industrial networks?",
    options: [
      { id: "a", text: "Microsoft Defender for IoT" },
      { id: "b", text: "Microsoft Defender for Endpoint" },
      { id: "c", text: "Microsoft Defender for Identity" },
      { id: "d", text: "Microsoft Defender for Office 365" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Defender for IoT discovers OT/IoT assets and detects threats with passive network monitoring.",
    difficulty: "medium",
  },
  {
    id: "sc900-051",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Sentinel artifact connects logs from sources such as Azure Activity, Defender XDR, or Syslog?",
    options: [
      { id: "a", text: "Data connector" },
      { id: "b", text: "Workbook" },
      { id: "c", text: "Watchlist" },
      { id: "d", text: "Notebook" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Data connectors stream logs into the Sentinel workspace.",
    difficulty: "easy",
  },
  {
    id: "sc900-052",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Sentinel artifact lets analysts proactively search for threats using KQL queries with no active detection?",
    options: [
      { id: "a", text: "Hunting queries" },
      { id: "b", text: "Analytics rules" },
      { id: "c", text: "Workbooks" },
      { id: "d", text: "Data connectors" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Hunting queries support proactive threat hunting; results can be saved as bookmarks or promoted to detections.",
    difficulty: "medium",
  },
  {
    id: "sc900-053",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Microsoft service unifies endpoint, app, and update management for devices on macOS, Windows, iOS, and Android?",
    options: [
      { id: "a", text: "Microsoft Intune" },
      { id: "b", text: "Microsoft Defender for Cloud" },
      { id: "c", text: "Microsoft Sentinel" },
      { id: "d", text: "Microsoft Entra ID" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Intune is the unified endpoint management (UEM) solution and integrates with Conditional Access for device compliance.",
    difficulty: "easy",
  },
  {
    id: "sc900-054",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Defender for Cloud Apps capability enforces session-level controls (e.g., block download) on cloud apps?",
    options: [
      { id: "a", text: "Conditional Access App Control (reverse proxy)" },
      { id: "b", text: "Cloud Discovery only" },
      { id: "c", text: "OAuth app governance" },
      { id: "d", text: "File policies" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Conditional Access App Control routes sessions through a reverse proxy to enforce session controls in real time.",
    difficulty: "hard",
  },
  {
    id: "sc900-055",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which feature lets Defender for Cloud assess workloads in AWS and GCP using Microsoft cloud security benchmark?",
    options: [
      { id: "a", text: "Multicloud connectors" },
      { id: "b", text: "Azure Policy" },
      { id: "c", text: "Azure Migrate" },
      { id: "d", text: "Microsoft Sentinel" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Defender for Cloud's multicloud connectors onboard AWS and GCP for posture and workload protection.",
    difficulty: "medium",
  },
  {
    id: "sc900-056",
    certId: "sc-900",
    domainId: "purview",
    type: "single",
    question:
      "Which Microsoft Purview area helps organize, govern, and discover data across the data estate (Azure, on-prem, multicloud)?",
    options: [
      { id: "a", text: "Microsoft Purview Data Map and Data Catalog" },
      { id: "b", text: "Microsoft Sentinel" },
      { id: "c", text: "Microsoft Defender for Cloud" },
      { id: "d", text: "Microsoft Intune" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Purview's data governance side (Data Map, Data Catalog) inventories and classifies data sources beyond Microsoft 365.",
    difficulty: "medium",
  },
  {
    id: "sc900-057",
    certId: "sc-900",
    domainId: "purview",
    type: "single",
    question:
      "Which Microsoft Purview feature blocks oversharing through email or Teams when sensitive content is detected?",
    options: [
      { id: "a", text: "Data Loss Prevention (DLP)" },
      { id: "b", text: "Records management" },
      { id: "c", text: "eDiscovery" },
      { id: "d", text: "Information barriers" },
    ],
    correctAnswers: ["a"],
    explanation:
      "DLP policies inspect content for sensitive information types and apply protective actions like block or warn.",
    difficulty: "easy",
  },
  {
    id: "sc900-058",
    certId: "sc-900",
    domainId: "purview",
    type: "single",
    question:
      "Which Purview capability prevents specific user groups from communicating with each other (e.g., advisors and traders)?",
    options: [
      { id: "a", text: "Information barriers" },
      { id: "b", text: "Communication compliance" },
      { id: "c", text: "Sensitivity labels" },
      { id: "d", text: "Conditional Access" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Information barriers restrict communication and collaboration across defined segments to meet regulatory requirements.",
    difficulty: "medium",
  },
  {
    id: "sc900-059",
    certId: "sc-900",
    domainId: "purview",
    type: "single",
    question:
      "Which Microsoft service helps respond to subject rights requests for personal data under privacy laws like GDPR?",
    options: [
      { id: "a", text: "Microsoft Priva" },
      { id: "b", text: "Microsoft Compliance Manager" },
      { id: "c", text: "Microsoft Defender for Cloud" },
      { id: "d", text: "Microsoft Intune" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft Priva delivers privacy risk management and subject rights request automation for Microsoft 365 data.",
    difficulty: "medium",
  },
  {
    id: "sc900-060",
    certId: "sc-900",
    domainId: "purview",
    type: "multiple",
    question:
      "Which two activities are tracked by Microsoft Purview Audit (Standard)? (Choose two.)",
    options: [
      { id: "a", text: "User and admin activity in Microsoft 365 services" },
      { id: "b", text: "Network packet captures" },
      { id: "c", text: "File and folder activity in SharePoint and OneDrive" },
      { id: "d", text: "Antivirus signature updates" },
    ],
    correctAnswers: ["a", "c"],
    explanation:
      "Audit logs M365 user/admin actions including SharePoint/OneDrive file activity. Premium adds richer events and longer retention.",
    difficulty: "medium",
  },
  // Gap-fill: GRC, workload identity, NSGs, encryption, Trust Portal
  {
    id: "sc900-061",
    certId: "sc-900",
    domainId: "sci-concepts",
    type: "single",
    question:
      "What does GRC stand for in the context of an enterprise security program?",
    options: [
      { id: "a", text: "Governance, Risk, and Compliance" },
      { id: "b", text: "Global Resource Catalog" },
      { id: "c", text: "Guest Role Control" },
      { id: "d", text: "Group Resource Configuration" },
    ],
    correctAnswers: ["a"],
    explanation:
      "GRC frames how an organization aligns IT with business goals (governance), addresses uncertainty (risk), and meets policy/regulation (compliance).",
    difficulty: "easy",
  },
  {
    id: "sc900-062",
    certId: "sc-900",
    domainId: "entra",
    type: "single",
    question:
      "Which Entra identity type is used by an Azure VM or Function to authenticate to other Azure services without storing credentials?",
    options: [
      { id: "a", text: "Workload identity (managed identity)" },
      { id: "b", text: "Guest user" },
      { id: "c", text: "Member user" },
      { id: "d", text: "Group" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Managed identities are workload identities automatically managed by Entra ID for Azure resources.",
    difficulty: "medium",
  },
  {
    id: "sc900-063",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "Which Azure resource provides basic 5-tuple stateful packet filtering at the subnet or NIC level?",
    options: [
      { id: "a", text: "Network Security Group (NSG)" },
      { id: "b", text: "Azure Bastion" },
      { id: "c", text: "Azure Front Door" },
      { id: "d", text: "Azure Private Link" },
    ],
    correctAnswers: ["a"],
    explanation:
      "NSGs filter traffic by source/destination/port/protocol on subnets and NICs as a basic network access control.",
    difficulty: "easy",
  },
  {
    id: "sc900-064",
    certId: "sc-900",
    domainId: "azure-security",
    type: "single",
    question:
      "How is Azure Storage data protected at rest by default?",
    options: [
      { id: "a", text: "Server-side encryption with Microsoft-managed keys (SSE)" },
      { id: "b", text: "Disabled encryption unless turned on" },
      { id: "c", text: "Customer-managed keys are required" },
      { id: "d", text: "Only cold-tier data is encrypted" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Storage automatically encrypts all data at rest with platform-managed keys; customer-managed keys are optional.",
    difficulty: "medium",
  },
  {
    id: "sc900-065",
    certId: "sc-900",
    domainId: "purview",
    type: "single",
    question:
      "Which Microsoft portal centralizes audit reports, certifications, and trust documents (e.g., SOC, ISO) for cloud services?",
    options: [
      { id: "a", text: "Service Trust Portal" },
      { id: "b", text: "Microsoft 365 admin center" },
      { id: "c", text: "Azure portal" },
      { id: "d", text: "Microsoft Defender portal" },
    ],
    correctAnswers: ["a"],
    explanation:
      "The Service Trust Portal hosts independent audit reports and compliance documentation for Microsoft cloud services.",
    difficulty: "medium",
  },
];
