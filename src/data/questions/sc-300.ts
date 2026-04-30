import { Question } from "@/lib/types";

export const sc300Questions: Question[] = [
  // Domain: Implement and manage Microsoft Entra identities (25%)
  {
    id: "sc300-001",
    certId: "sc-300",
    domainId: "entra-identity",
    type: "single",
    question:
      "Which Microsoft Entra feature lets you bulk-provision users from an HR system into Entra ID using SCIM?",
    options: [
      { id: "a", text: "Entra Connect Sync" },
      { id: "b", text: "Cloud HR-driven provisioning" },
      { id: "c", text: "Self-service password reset" },
      { id: "d", text: "B2B collaboration" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Cloud HR-driven user provisioning (e.g., Workday, SAP SuccessFactors) integrates with Entra ID to create and lifecycle accounts.",
    difficulty: "medium",
  },
  {
    id: "sc300-002",
    certId: "sc-300",
    domainId: "entra-identity",
    type: "single",
    question:
      "Which tool synchronizes on-premises Active Directory user accounts to Microsoft Entra ID?",
    options: [
      { id: "a", text: "Microsoft Entra Connect Sync" },
      { id: "b", text: "Microsoft Entra Connect Health" },
      { id: "c", text: "Microsoft Sentinel" },
      { id: "d", text: "Microsoft Defender for Identity" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Entra Connect Sync (and Entra Cloud Sync for lighter scenarios) replicates objects from AD DS to Entra ID.",
    difficulty: "easy",
  },
  {
    id: "sc300-003",
    certId: "sc-300",
    domainId: "entra-identity",
    type: "single",
    question:
      "Which authentication method is recommended for hybrid environments to enable seamless SSO without password hashes leaving the corp network?",
    options: [
      { id: "a", text: "Password hash synchronization" },
      { id: "b", text: "Pass-through authentication (PTA)" },
      { id: "c", text: "Federation with AD FS" },
      { id: "d", text: "B2B direct connect" },
    ],
    correctAnswers: ["b"],
    explanation:
      "PTA validates passwords against on-premises AD without storing hashes in the cloud.",
    difficulty: "medium",
  },
  {
    id: "sc300-004",
    certId: "sc-300",
    domainId: "entra-identity",
    type: "single",
    question:
      "Which Entra license is required to use dynamic group membership rules?",
    options: [
      { id: "a", text: "Entra ID Free" },
      { id: "b", text: "Entra ID P1 (or higher)" },
      { id: "c", text: "Microsoft 365 Apps for business" },
      { id: "d", text: "Microsoft 365 E1" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Dynamic groups (user/device) require Entra ID P1 licenses for affected members.",
    difficulty: "medium",
  },
  {
    id: "sc300-005",
    certId: "sc-300",
    domainId: "entra-identity",
    type: "single",
    question:
      "Which capability lets external partners use their existing identity (e.g., another Entra tenant or social account) to access your apps?",
    options: [
      { id: "a", text: "B2B collaboration" },
      { id: "b", text: "Pass-through authentication" },
      { id: "c", text: "Application proxy" },
      { id: "d", text: "Self-service group management" },
    ],
    correctAnswers: ["a"],
    explanation:
      "B2B collaboration invites guests from any IdP to access tenant resources.",
    difficulty: "easy",
  },
  {
    id: "sc300-006",
    certId: "sc-300",
    domainId: "entra-identity",
    type: "single",
    question:
      "Which feature enforces compliant device posture data from Intune into Entra ID for Conditional Access?",
    options: [
      { id: "a", text: "Hybrid Entra join" },
      { id: "b", text: "Device compliance integration" },
      { id: "c", text: "Self-service password reset" },
      { id: "d", text: "Entra Privileged Identity Management" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Intune writes compliance state back to Entra ID so Conditional Access can require compliant devices.",
    difficulty: "medium",
  },

  // Domain: Implement authentication and access management (25%)
  {
    id: "sc300-007",
    certId: "sc-300",
    domainId: "auth-access",
    type: "single",
    question:
      "Which Conditional Access control would you use to require a managed device to access a corporate app?",
    options: [
      { id: "a", text: "Require MFA" },
      { id: "b", text: "Require approved client app" },
      { id: "c", text: "Require device to be marked as compliant or hybrid Entra joined" },
      { id: "d", text: "Block legacy authentication" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Requiring compliant or hybrid-joined devices ensures only managed endpoints can access protected resources.",
    difficulty: "medium",
  },
  {
    id: "sc300-008",
    certId: "sc-300",
    domainId: "auth-access",
    type: "single",
    question:
      "Which feature lets you require step-up MFA when sign-in risk is High?",
    options: [
      { id: "a", text: "Conditional Access with Identity Protection user/sign-in risk" },
      { id: "b", text: "Smart lockout" },
      { id: "c", text: "Self-service password reset" },
      { id: "d", text: "Privileged Identity Management" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Conditional Access can use Identity Protection sign-in/user risk levels to require MFA or block.",
    difficulty: "medium",
  },
  {
    id: "sc300-009",
    certId: "sc-300",
    domainId: "auth-access",
    type: "single",
    question:
      "Which authentication method should be deployed to be phishing-resistant for executives?",
    options: [
      { id: "a", text: "SMS OTP" },
      { id: "b", text: "Microsoft Authenticator push" },
      { id: "c", text: "FIDO2 security key" },
      { id: "d", text: "Voice call" },
    ],
    correctAnswers: ["c"],
    explanation:
      "FIDO2 keys, Windows Hello for Business, and certificate-based authentication are phishing-resistant.",
    difficulty: "medium",
  },
  {
    id: "sc300-010",
    certId: "sc-300",
    domainId: "auth-access",
    type: "single",
    question:
      "What does the Conditional Access 'block legacy authentication' policy protect against?",
    options: [
      { id: "a", text: "Brute force on modern OAuth flows" },
      { id: "b", text: "Use of basic auth protocols (POP, IMAP, SMTP) that don't support MFA" },
      { id: "c", text: "Phishing of OAuth consent" },
      { id: "d", text: "DoS against the directory" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Legacy auth protocols can't enforce MFA; blocking them is a top recommendation.",
    difficulty: "easy",
  },
  {
    id: "sc300-011",
    certId: "sc-300",
    domainId: "auth-access",
    type: "single",
    question:
      "Which Entra capability provides risk-based password reset, blocking, or MFA based on user risk level?",
    options: [
      { id: "a", text: "Identity Protection" },
      { id: "b", text: "Privileged Identity Management" },
      { id: "c", text: "Application proxy" },
      { id: "d", text: "Tenant restrictions" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Identity Protection assigns user/sign-in risk and is used by Conditional Access policies for risk-based controls.",
    difficulty: "easy",
  },
  {
    id: "sc300-012",
    certId: "sc-300",
    domainId: "auth-access",
    type: "single",
    question:
      "Which feature gives users a passwordless sign-in experience using their phone?",
    options: [
      { id: "a", text: "Microsoft Authenticator passwordless sign-in" },
      { id: "b", text: "Self-service password reset" },
      { id: "c", text: "Smart lockout" },
      { id: "d", text: "Application proxy" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft Authenticator can be enabled as a passwordless sign-in method using number matching.",
    difficulty: "medium",
  },

  // Domain: Plan and implement workload identities and application access (25%)
  {
    id: "sc300-013",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "Which Entra capability lets a Logic App authenticate to Azure resources without storing credentials?",
    options: [
      { id: "a", text: "Service principal with client secret" },
      { id: "b", text: "Managed identity" },
      { id: "c", text: "Application proxy" },
      { id: "d", text: "Workload identity federation" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Managed identities give Azure resources an automatically managed identity in Entra ID without secret handling.",
    difficulty: "easy",
  },
  {
    id: "sc300-014",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "Which feature lets an external workload (e.g., a GitHub Actions job) authenticate to Entra ID without managing client secrets?",
    options: [
      { id: "a", text: "Managed identity" },
      { id: "b", text: "Workload identity federation" },
      { id: "c", text: "App proxy" },
      { id: "d", text: "Cross-tenant access settings" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Workload identity federation trusts an external IdP token (OIDC) and exchanges it for an Entra access token.",
    difficulty: "hard",
  },
  {
    id: "sc300-015",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "Which Entra service publishes on-premises web apps for external access without a VPN?",
    options: [
      { id: "a", text: "Application proxy" },
      { id: "b", text: "Cloud Sync" },
      { id: "c", text: "Conditional Access" },
      { id: "d", text: "Microsoft Sentinel" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Application proxy connectors publish on-premises web applications through Entra ID with SSO.",
    difficulty: "medium",
  },
  {
    id: "sc300-016",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "How do you require admin approval for users to consent to specific Microsoft Graph permissions?",
    options: [
      { id: "a", text: "Configure user consent settings to 'Do not allow' and enable admin consent workflow" },
      { id: "b", text: "Disable third-party app registration" },
      { id: "c", text: "Block legacy auth" },
      { id: "d", text: "Configure tenant restrictions" },
    ],
    correctAnswers: ["a"],
    explanation:
      "User consent settings combined with the admin consent workflow let users request approvals for restricted permissions.",
    difficulty: "medium",
  },
  {
    id: "sc300-017",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "Which Entra feature prevents your users from signing into another organization's tenant?",
    options: [
      { id: "a", text: "Tenant restrictions v2" },
      { id: "b", text: "B2B direct connect" },
      { id: "c", text: "Conditional Access named locations" },
      { id: "d", text: "Cross-tenant access settings only" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Tenant restrictions v2 enforces that managed devices can only authenticate to allowed external tenants.",
    difficulty: "hard",
  },

  // Domain: Plan and implement identity governance (25%)
  {
    id: "sc300-018",
    certId: "sc-300",
    domainId: "id-governance",
    type: "single",
    question:
      "You need to require approval and time-limited assignment when a user activates the Global Administrator role. Which feature should you use?",
    options: [
      { id: "a", text: "Access reviews" },
      { id: "b", text: "Privileged Identity Management (PIM)" },
      { id: "c", text: "Entitlement management" },
      { id: "d", text: "Conditional Access" },
    ],
    correctAnswers: ["b"],
    explanation:
      "PIM provides just-in-time, time-bound, and approval-based activation of privileged roles.",
    difficulty: "easy",
  },
  {
    id: "sc300-019",
    certId: "sc-300",
    domainId: "id-governance",
    type: "single",
    question:
      "Which feature automates periodic recertification of users assigned to a privileged role?",
    options: [
      { id: "a", text: "Access reviews" },
      { id: "b", text: "Lifecycle workflows" },
      { id: "c", text: "Identity Protection" },
      { id: "d", text: "Audit logs" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Access reviews regularly recertify membership in groups and role assignments to enforce least privilege.",
    difficulty: "medium",
  },
  {
    id: "sc300-020",
    certId: "sc-300",
    domainId: "id-governance",
    type: "single",
    question:
      "Which Entra feature bundles applications, groups, and SharePoint sites into a request-driven access package?",
    options: [
      { id: "a", text: "Entitlement management" },
      { id: "b", text: "Privileged Identity Management" },
      { id: "c", text: "Conditional Access" },
      { id: "d", text: "Identity Protection" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Entitlement management organizes resources into access packages with approvals, expirations, and reviews.",
    difficulty: "medium",
  },
  {
    id: "sc300-021",
    certId: "sc-300",
    domainId: "id-governance",
    type: "single",
    question:
      "Which Entra feature automates joiner/mover/leaver scenarios such as disabling accounts at termination?",
    options: [
      { id: "a", text: "Lifecycle workflows" },
      { id: "b", text: "Access reviews" },
      { id: "c", text: "Conditional Access" },
      { id: "d", text: "Tenant restrictions" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Lifecycle workflows trigger templates of tasks (e.g., disable, revoke, send manager notice) at JML events.",
    difficulty: "medium",
  },
  {
    id: "sc300-022",
    certId: "sc-300",
    domainId: "id-governance",
    type: "single",
    question:
      "What is the recommended approach to grant users emergency 'break-glass' access to Entra ID?",
    options: [
      { id: "a", text: "Two cloud-only accounts excluded from Conditional Access and not subject to MFA failure" },
      { id: "b", text: "Hybrid-joined service accounts shared by admins" },
      { id: "c", text: "Disable PIM during outages" },
      { id: "d", text: "Use guest accounts with Global Admin" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft recommends two cloud-only emergency-access accounts excluded from Conditional Access and monitored closely.",
    difficulty: "hard",
  },
  {
    id: "sc300-023",
    certId: "sc-300",
    domainId: "id-governance",
    type: "single",
    question:
      "What does PIM 'just-in-time' activation require by default for an eligible role?",
    options: [
      { id: "a", text: "Permanent assignment" },
      { id: "b", text: "User to activate the role for a limited time, often with MFA and reason" },
      { id: "c", text: "Manager approval only" },
      { id: "d", text: "No additional verification" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Eligible users activate roles for a bounded period; defaults usually require MFA and a justification.",
    difficulty: "easy",
  },
  {
    id: "sc300-024",
    certId: "sc-300",
    domainId: "id-governance",
    type: "single",
    question:
      "Which type of access review is best for recertifying guest users in Microsoft 365 groups?",
    options: [
      { id: "a", text: "Application access review" },
      { id: "b", text: "Group access review with guest-only scope" },
      { id: "c", text: "PIM role review" },
      { id: "d", text: "Conditional Access named-location review" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Access reviews can scope to guest users only and run on Microsoft 365 groups to keep external access tidy.",
    difficulty: "medium",
  },
  {
    id: "sc300-025",
    certId: "sc-300",
    domainId: "id-governance",
    type: "single",
    question:
      "Which Entra capability assigns role activations to be auditable in the Entra audit logs and exportable to SIEM?",
    options: [
      { id: "a", text: "Privileged Identity Management auditing" },
      { id: "b", text: "Defender for Identity" },
      { id: "c", text: "Microsoft Purview audit" },
      { id: "d", text: "Microsoft Defender for Cloud" },
    ],
    correctAnswers: ["a"],
    explanation:
      "PIM logs role activations and assignment changes to Entra audit logs, which can be exported to Sentinel.",
    difficulty: "medium",
  },
];
