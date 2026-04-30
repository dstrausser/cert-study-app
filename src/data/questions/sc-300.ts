import { Question } from "@/lib/types";

export const sc300Questions: Question[] = [
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
    id: "sc300-003",
    certId: "sc-300",
    domainId: "app-access",
    type: "single",
    question:
      "Which Entra capability lets a Logic App authenticate to Azure resources without storing credentials?",
    options: [
      { id: "a", text: "Service principal with client secret" },
      { id: "b", text: "Managed identity" },
      { id: "c", text: "Application proxy" },
      { id: "d", text: "Workload Identity Federation" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Managed identities give Azure resources an automatically managed identity in Entra ID without secret handling.",
    difficulty: "easy",
  },
  {
    id: "sc300-004",
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
    id: "sc300-005",
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
];
