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
  // Additional entra-identity coverage
  {
    id: "sc300-026",
    certId: "sc-300",
    domainId: "entra-identity",
    type: "single",
    question:
      "Which Entra Connect Sync feature lets specific objects be excluded from synchronization based on attribute values?",
    options: [
      { id: "a", text: "Filtering (domain, OU, or attribute-based)" },
      { id: "b", text: "Express settings only" },
      { id: "c", text: "Federation with AD FS" },
      { id: "d", text: "Cloud-only mode" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Entra Connect supports filtering by domain, OU, or attribute to control which objects sync to Entra ID.",
    difficulty: "medium",
  },
  {
    id: "sc300-027",
    certId: "sc-300",
    domainId: "entra-identity",
    type: "single",
    question:
      "Which lighter-weight alternative to Entra Connect Sync is recommended for new disconnected forests or simple scenarios?",
    options: [
      { id: "a", text: "Microsoft Entra Cloud Sync" },
      { id: "b", text: "Azure AD Connect Health" },
      { id: "c", text: "AD FS" },
      { id: "d", text: "Microsoft Identity Manager" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Cloud Sync uses lightweight agents and is the recommended path for many new hybrid deployments.",
    difficulty: "medium",
  },
  {
    id: "sc300-028",
    certId: "sc-300",
    domainId: "entra-identity",
    type: "single",
    question:
      "Which Entra group type is recommended for assigning licenses, apps, and SharePoint/Teams collaboration?",
    options: [
      { id: "a", text: "Microsoft 365 group" },
      { id: "b", text: "Distribution list" },
      { id: "c", text: "Mail-enabled security group" },
      { id: "d", text: "Dynamic device group" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft 365 groups support licensing, app assignment, Teams, SharePoint, and Outlook collaboration.",
    difficulty: "easy",
  },
  {
    id: "sc300-029",
    certId: "sc-300",
    domainId: "entra-identity",
    type: "single",
    question:
      "Which Entra capability automatically populates a group based on rules over user/device attributes?",
    options: [
      { id: "a", text: "Dynamic group membership" },
      { id: "b", text: "Administrative units" },
      { id: "c", text: "Tenant restrictions" },
      { id: "d", text: "Self-service group management" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Dynamic groups use a membership rule (e.g., department -eq 'Sales') and require Entra ID P1.",
    difficulty: "easy",
  },
  {
    id: "sc300-030",
    certId: "sc-300",
    domainId: "entra-identity",
    type: "single",
    question:
      "Which Entra feature lets external partners sign in to your tenant with their own Entra account using Cross-Tenant Access settings?",
    options: [
      { id: "a", text: "B2B collaboration with Cross-tenant Access settings" },
      { id: "b", text: "B2B direct connect only" },
      { id: "c", text: "Tenant restrictions" },
      { id: "d", text: "Entra External ID" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Cross-tenant Access settings centrally manage B2B inbound/outbound trust for guest collaboration.",
    difficulty: "medium",
  },
  {
    id: "sc300-031",
    certId: "sc-300",
    domainId: "entra-identity",
    type: "single",
    question:
      "Which Entra capability lets two tenants share Teams channels and files with native (non-guest) experience?",
    options: [
      { id: "a", text: "B2B direct connect" },
      { id: "b", text: "Federation with AD FS" },
      { id: "c", text: "B2C" },
      { id: "d", text: "Tenant restrictions" },
    ],
    correctAnswers: ["a"],
    explanation:
      "B2B direct connect creates mutual trust so users from a partner tenant access Teams shared channels without guest accounts.",
    difficulty: "hard",
  },
  {
    id: "sc300-032",
    certId: "sc-300",
    domainId: "entra-identity",
    type: "single",
    question:
      "Which Entra device join state allows a personally-owned Windows device to access Microsoft 365 resources with conditional access?",
    options: [
      { id: "a", text: "Microsoft Entra registered (workplace join)" },
      { id: "b", text: "Microsoft Entra joined" },
      { id: "c", text: "Hybrid Microsoft Entra joined" },
      { id: "d", text: "Workgroup" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Entra-registered (BYOD) gives a device an identity in Entra without making it corporate-managed.",
    difficulty: "medium",
  },
  {
    id: "sc300-033",
    certId: "sc-300",
    domainId: "entra-identity",
    type: "single",
    question:
      "Which Entra feature supports bulk import of users via CSV from the admin center?",
    options: [
      { id: "a", text: "Bulk operations (create/update/delete) in Entra admin center" },
      { id: "b", text: "Identity Protection" },
      { id: "c", text: "Privileged Identity Management" },
      { id: "d", text: "Conditional Access" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Bulk operations support CSV templates for create/invite/delete of users in the admin center.",
    difficulty: "easy",
  },
  {
    id: "sc300-034",
    certId: "sc-300",
    domainId: "entra-identity",
    type: "single",
    question:
      "Which Entra capability presents an identity sign-in security baseline that Microsoft updates over time?",
    options: [
      { id: "a", text: "Security defaults" },
      { id: "b", text: "Conditional Access named locations only" },
      { id: "c", text: "Tenant restrictions" },
      { id: "d", text: "Identity Protection" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Security defaults are a Microsoft-curated baseline (MFA, blocked legacy auth, protected admins).",
    difficulty: "easy",
  },

  // Additional auth-access coverage
  {
    id: "sc300-035",
    certId: "sc-300",
    domainId: "auth-access",
    type: "single",
    question:
      "Which Conditional Access assignment lets you target a policy to a specific group of users while excluding break-glass accounts?",
    options: [
      { id: "a", text: "Users and groups (include + exclude)" },
      { id: "b", text: "Cloud apps only" },
      { id: "c", text: "Conditions only" },
      { id: "d", text: "Session controls" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Always include break-glass accounts in the exclusion list of Conditional Access policies to avoid lockout.",
    difficulty: "easy",
  },
  {
    id: "sc300-036",
    certId: "sc-300",
    domainId: "auth-access",
    type: "single",
    question:
      "Which Conditional Access session control lets you require periodic sign-in for sensitive apps like Microsoft 365 admin center?",
    options: [
      { id: "a", text: "Sign-in frequency" },
      { id: "b", text: "Persistent browser session" },
      { id: "c", text: "App enforced restrictions" },
      { id: "d", text: "Continuous Access Evaluation" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Sign-in frequency forces re-auth at a configured interval to limit token longevity.",
    difficulty: "medium",
  },
  {
    id: "sc300-037",
    certId: "sc-300",
    domainId: "auth-access",
    type: "single",
    question:
      "Which Conditional Access feature revokes tokens in near real time when risk increases or sign-in policies change?",
    options: [
      { id: "a", text: "Continuous Access Evaluation (CAE)" },
      { id: "b", text: "Sign-in frequency only" },
      { id: "c", text: "Persistent browser session" },
      { id: "d", text: "Smart lockout" },
    ],
    correctAnswers: ["a"],
    explanation:
      "CAE allows resource providers (Exchange, SharePoint, Teams, MS Graph) to react to revocation events quickly.",
    difficulty: "hard",
  },
  {
    id: "sc300-038",
    certId: "sc-300",
    domainId: "auth-access",
    type: "single",
    question:
      "Which Conditional Access grant control lets you require a Terms-of-Use acceptance before access?",
    options: [
      { id: "a", text: "Require terms of use" },
      { id: "b", text: "Require approved client app" },
      { id: "c", text: "Require app protection policy" },
      { id: "d", text: "Block access" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Conditional Access can require users to accept a terms-of-use document, recorded for compliance.",
    difficulty: "easy",
  },
  {
    id: "sc300-039",
    certId: "sc-300",
    domainId: "auth-access",
    type: "single",
    question:
      "Which Conditional Access feature lets users access an app on iOS/Android only via Microsoft mobile apps with app protection policies?",
    options: [
      { id: "a", text: "Require app protection policy" },
      { id: "b", text: "Require compliant device only" },
      { id: "c", text: "Block legacy authentication" },
      { id: "d", text: "Require persistent browser" },
    ],
    correctAnswers: ["a"],
    explanation:
      "App protection policy (MAM) keeps corporate data inside approved apps without enrolling the device.",
    difficulty: "medium",
  },
  {
    id: "sc300-040",
    certId: "sc-300",
    domainId: "auth-access",
    type: "single",
    question:
      "Which Entra feature blocks IP ranges or geographies from signing in?",
    options: [
      { id: "a", text: "Conditional Access named locations + block grant" },
      { id: "b", text: "Tenant restrictions only" },
      { id: "c", text: "Identity Protection only" },
      { id: "d", text: "Smart lockout" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Named locations define IP ranges or countries; pair with a block policy to prevent sign-in from those locations.",
    difficulty: "easy",
  },
  {
    id: "sc300-041",
    certId: "sc-300",
    domainId: "auth-access",
    type: "single",
    question:
      "Which Entra feature provides a self-service interface for users to set up MFA methods, change passwords, and manage devices?",
    options: [
      { id: "a", text: "My Account portal (myaccount.microsoft.com)" },
      { id: "b", text: "Azure portal" },
      { id: "c", text: "Microsoft 365 admin center" },
      { id: "d", text: "Defender portal" },
    ],
    correctAnswers: ["a"],
    explanation:
      "My Account is the user-facing portal for security info, devices, organizations, and password.",
    difficulty: "easy",
  },
  {
    id: "sc300-042",
    certId: "sc-300",
    domainId: "auth-access",
    type: "single",
    question:
      "Which Entra capability provides a unified policy for available authentication methods across MFA, SSPR, and sign-in?",
    options: [
      { id: "a", text: "Authentication methods policy" },
      { id: "b", text: "Conditional Access" },
      { id: "c", text: "PIM" },
      { id: "d", text: "Smart lockout policy" },
    ],
    correctAnswers: ["a"],
    explanation:
      "The authentication methods policy replaces the older legacy MFA and SSPR per-feature settings with one unified policy.",
    difficulty: "medium",
  },
  {
    id: "sc300-043",
    certId: "sc-300",
    domainId: "auth-access",
    type: "single",
    question:
      "Which feature requires a verifying user to match a number shown on a sign-in screen with the Microsoft Authenticator app?",
    options: [
      { id: "a", text: "Number matching" },
      { id: "b", text: "Voice call OTP" },
      { id: "c", text: "Push notification (legacy)" },
      { id: "d", text: "SMS OTP" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Number matching mitigates MFA fatigue by requiring the user to type a number shown by the requesting app.",
    difficulty: "medium",
  },
  // Additional app-access coverage
  {
    id: "sc300-044",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "Which Entra ID app integration option is recommended for SaaS apps that natively support OAuth 2.0 / OIDC?",
    options: [
      { id: "a", text: "Add the app from the Entra application gallery and configure SSO" },
      { id: "b", text: "Application proxy only" },
      { id: "c", text: "Federation with AD FS" },
      { id: "d", text: "Password-based SSO only" },
    ],
    correctAnswers: ["a"],
    explanation:
      "The Entra app gallery contains pre-integrated SaaS apps for OAuth/OIDC/SAML SSO with documented setup.",
    difficulty: "easy",
  },
  {
    id: "sc300-045",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "Which Entra capability provisions and de-provisions accounts in supported SaaS apps automatically?",
    options: [
      { id: "a", text: "User provisioning (SCIM-based or app-specific)" },
      { id: "b", text: "Self-service password reset" },
      { id: "c", text: "Identity Protection" },
      { id: "d", text: "Conditional Access" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Entra automated provisioning syncs identities and access into target SaaS apps via SCIM or vendor APIs.",
    difficulty: "medium",
  },
  {
    id: "sc300-046",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "Which Entra capability lets you delegate administration of an enterprise application's role assignments without granting tenant-wide rights?",
    options: [
      { id: "a", text: "Application owner / Cloud Application Administrator scoped to the app" },
      { id: "b", text: "Global Administrator" },
      { id: "c", text: "User Access Administrator" },
      { id: "d", text: "Reports Reader" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Application owners and the Cloud Application Administrator role can manage app-specific assignments and configuration.",
    difficulty: "medium",
  },
  {
    id: "sc300-047",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "Which Entra ID feature blocks enterprise apps registered without admin approval?",
    options: [
      { id: "a", text: "Restrict user consent and require admin consent for non-Microsoft apps" },
      { id: "b", text: "Disable application registrations entirely (rarely advisable)" },
      { id: "c", text: "Tenant restrictions" },
      { id: "d", text: "Conditional Access named locations" },
    ],
    correctAnswers: ["a"],
    explanation:
      "User consent settings and the admin consent workflow channel risky permissions through admin approval.",
    difficulty: "medium",
  },
  {
    id: "sc300-048",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "Which Entra capability applies Conditional Access to non-Microsoft cloud apps via a reverse-proxy?",
    options: [
      { id: "a", text: "Conditional Access App Control with Defender for Cloud Apps" },
      { id: "b", text: "Application proxy" },
      { id: "c", text: "B2B direct connect" },
      { id: "d", text: "Cross-tenant access settings" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Conditional Access App Control routes sessions through Defender for Cloud Apps to enforce session controls.",
    difficulty: "hard",
  },
  {
    id: "sc300-049",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "Which Entra setting prevents users from registering new applications in your tenant?",
    options: [
      { id: "a", text: "Users can register applications = No (in user settings)" },
      { id: "b", text: "Disable Conditional Access" },
      { id: "c", text: "Block legacy authentication" },
      { id: "d", text: "Enable Identity Protection" },
    ],
    correctAnswers: ["a"],
    explanation:
      "The user settings 'Users can register applications' setting limits app registrations to admins.",
    difficulty: "medium",
  },
  {
    id: "sc300-050",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "Which Entra feature lets administrators see and revoke OAuth permissions granted to multi-tenant apps?",
    options: [
      { id: "a", text: "Enterprise applications -> Permissions / Consent and permissions" },
      { id: "b", text: "Identity Protection only" },
      { id: "c", text: "Conditional Access only" },
      { id: "d", text: "Audit log only" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Admins can review delegated and application permissions per enterprise app and revoke consent if needed.",
    difficulty: "medium",
  },
  {
    id: "sc300-051",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "Which Application Proxy authentication method provides SSO for legacy on-premises web apps using Kerberos delegation?",
    options: [
      { id: "a", text: "Integrated Windows Authentication (KCD)" },
      { id: "b", text: "Header-based SSO" },
      { id: "c", text: "Password-based SSO" },
      { id: "d", text: "Linked sign-on" },
    ],
    correctAnswers: ["a"],
    explanation:
      "App Proxy supports IWA via Kerberos Constrained Delegation for legacy web apps.",
    difficulty: "hard",
  },
  {
    id: "sc300-052",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "Which type of Entra app registration credential is preferred over a long-lived client secret?",
    options: [
      { id: "a", text: "Certificate or federated credential" },
      { id: "b", text: "Plain password" },
      { id: "c", text: "Bearer token" },
      { id: "d", text: "API key in code" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Certificates and federated credentials (OIDC) are preferred to client secrets for security and rotation.",
    difficulty: "medium",
  },
  {
    id: "sc300-053",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "Which Entra feature lets you discover apps that are not yet centrally managed and bring them under SSO governance?",
    options: [
      { id: "a", text: "Defender for Cloud Apps Cloud Discovery, then 'Sanction' and integrate with Entra SSO" },
      { id: "b", text: "Tenant restrictions only" },
      { id: "c", text: "Workbooks in Sentinel" },
      { id: "d", text: "Identity Protection" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Cloud Discovery surfaces shadow IT; sanction those that are appropriate and onboard them to Entra SSO.",
    difficulty: "hard",
  },

  // Additional id-governance coverage
  {
    id: "sc300-054",
    certId: "sc-300",
    domainId: "id-governance",
    type: "single",
    question:
      "Which entitlement-management object packages resources, policies, and approvers into a single requestable unit?",
    options: [
      { id: "a", text: "Access package" },
      { id: "b", text: "PIM eligible role" },
      { id: "c", text: "Watchlist" },
      { id: "d", text: "Conditional Access policy" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Access packages bundle groups, apps, and SharePoint sites with approval/expiration policies.",
    difficulty: "easy",
  },
  {
    id: "sc300-055",
    certId: "sc-300",
    domainId: "id-governance",
    type: "single",
    question:
      "Which entitlement-management feature lets external partners request access to specific resources in your tenant?",
    options: [
      { id: "a", text: "Connected organizations + access packages with external policy" },
      { id: "b", text: "B2B direct connect" },
      { id: "c", text: "Tenant restrictions" },
      { id: "d", text: "Smart lockout" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Connected organizations and external user policies allow guests to request and receive access via packages.",
    difficulty: "medium",
  },
  {
    id: "sc300-056",
    certId: "sc-300",
    domainId: "id-governance",
    type: "single",
    question:
      "Which PIM feature requires an approver before a user can activate a specific eligible role assignment?",
    options: [
      { id: "a", text: "Activation requires approval (with selected approvers)" },
      { id: "b", text: "Just-in-time without approval" },
      { id: "c", text: "Permanent active assignment" },
      { id: "d", text: "Auditing only" },
    ],
    correctAnswers: ["a"],
    explanation:
      "PIM role settings can mandate one or more approvers as a step in role activation.",
    difficulty: "easy",
  },
  {
    id: "sc300-057",
    certId: "sc-300",
    domainId: "id-governance",
    type: "single",
    question:
      "Which lifecycle workflow trigger fires when an employee's department changes (mover scenario)?",
    options: [
      { id: "a", text: "Mover workflow on attribute change" },
      { id: "b", text: "Joiner workflow on hire date" },
      { id: "c", text: "Leaver workflow on termination" },
      { id: "d", text: "On-demand activation" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Lifecycle workflows include joiner, mover, and leaver triggers; mover handles transfers and role changes.",
    difficulty: "medium",
  },
  {
    id: "sc300-058",
    certId: "sc-300",
    domainId: "id-governance",
    type: "single",
    question:
      "Which Entra feature pulls audit, sign-in, and provisioning logs into a Log Analytics workspace?",
    options: [
      { id: "a", text: "Diagnostic settings on the tenant (route logs to Azure Monitor)" },
      { id: "b", text: "Privileged Identity Management" },
      { id: "c", text: "Identity Protection" },
      { id: "d", text: "Conditional Access" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Tenant diagnostic settings stream Entra logs to Log Analytics, storage, or Event Hub for retention and SIEM.",
    difficulty: "medium",
  },
  {
    id: "sc300-059",
    certId: "sc-300",
    domainId: "id-governance",
    type: "single",
    question:
      "Which PIM Activation setting helps mitigate MFA fatigue by requiring authentication strength rather than legacy MFA prompt?",
    options: [
      { id: "a", text: "Require Entra Conditional Access authentication context with phishing-resistant strength" },
      { id: "b", text: "Disable MFA during activation" },
      { id: "c", text: "Allow only password" },
      { id: "d", text: "Require Approval only" },
    ],
    correctAnswers: ["a"],
    explanation:
      "PIM authentication context can enforce phishing-resistant authentication strength on role activation.",
    difficulty: "hard",
  },
  {
    id: "sc300-060",
    certId: "sc-300",
    domainId: "id-governance",
    type: "single",
    question:
      "Which report best demonstrates that privileged role activations are auditable for compliance?",
    options: [
      { id: "a", text: "PIM activity history and resource audit log" },
      { id: "b", text: "Sign-in logs only" },
      { id: "c", text: "Workbook gallery" },
      { id: "d", text: "Microsoft Defender XDR alerts" },
    ],
    correctAnswers: ["a"],
    explanation:
      "PIM logs all activations with reason and approver, viewable in PIM and Entra audit logs.",
    difficulty: "easy",
  },
];
