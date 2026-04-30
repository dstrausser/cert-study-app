import { Question } from "@/lib/types";

export const sc200Questions: Question[] = [
  // Domain: Manage a security operations environment (25%)
  {
    id: "sc200-001",
    certId: "sc-200",
    domainId: "manage-sec-ops",
    type: "single",
    question:
      "Which Microsoft Defender XDR portal feature aggregates related alerts into a single investigative view?",
    options: [
      { id: "a", text: "Action center" },
      { id: "b", text: "Incidents" },
      { id: "c", text: "Hunting queries" },
      { id: "d", text: "Custom detections" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Defender XDR groups correlated alerts across identities, endpoints, email, and cloud apps into incidents to streamline investigation.",
    difficulty: "easy",
  },
  {
    id: "sc200-002",
    certId: "sc-200",
    domainId: "manage-sec-ops",
    type: "single",
    question:
      "Where in Microsoft Defender XDR can analysts review and approve pending automated remediation actions?",
    options: [
      { id: "a", text: "Threat analytics" },
      { id: "b", text: "Action center" },
      { id: "c", text: "Reports" },
      { id: "d", text: "Secure score" },
    ],
    correctAnswers: ["b"],
    explanation:
      "The Action center is where analysts approve, reject, or undo automated investigation and response actions.",
    difficulty: "medium",
  },
  {
    id: "sc200-003",
    certId: "sc-200",
    domainId: "manage-sec-ops",
    type: "single",
    question:
      "Which RBAC role in Microsoft Defender for Endpoint allows full investigation actions but not security settings changes?",
    options: [
      { id: "a", text: "Security reader" },
      { id: "b", text: "Security operator" },
      { id: "c", text: "Security administrator" },
      { id: "d", text: "Global administrator" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Security Operator can investigate, isolate, and respond, but cannot modify security settings — that requires Security Administrator.",
    difficulty: "medium",
  },
  {
    id: "sc200-004",
    certId: "sc-200",
    domainId: "manage-sec-ops",
    type: "single",
    question:
      "You want to restrict an analyst to only investigate devices in a specific OU. What feature should you configure?",
    options: [
      { id: "a", text: "Conditional Access" },
      { id: "b", text: "Device groups with role-based scoping" },
      { id: "c", text: "Tenant restrictions" },
      { id: "d", text: "Microsoft Defender for Identity sensors" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Defender for Endpoint device groups (with role assignments) provide scoped access to subsets of devices.",
    difficulty: "medium",
  },
  {
    id: "sc200-005",
    certId: "sc-200",
    domainId: "manage-sec-ops",
    type: "single",
    question:
      "Which dashboard helps prioritize remediation actions based on impact to your security posture?",
    options: [
      { id: "a", text: "Microsoft Secure Score" },
      { id: "b", text: "Compliance score" },
      { id: "c", text: "Threat analytics" },
      { id: "d", text: "Adoption score" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft Secure Score in Defender XDR ranks recommended actions by their impact on overall posture.",
    difficulty: "easy",
  },
  {
    id: "sc200-006",
    certId: "sc-200",
    domainId: "manage-sec-ops",
    type: "single",
    question:
      "Which feature in Microsoft Defender XDR provides continuously updated TTPs and tracking for active threat actors?",
    options: [
      { id: "a", text: "Threat analytics" },
      { id: "b", text: "Custom detections" },
      { id: "c", text: "Advanced hunting" },
      { id: "d", text: "Tutorials" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Threat analytics surfaces threat actor profiles, campaigns, and exposure across your organization.",
    difficulty: "medium",
  },

  // Domain: Configure protections and detections (15%)
  {
    id: "sc200-007",
    certId: "sc-200",
    domainId: "defender-xdr",
    type: "single",
    question:
      "You want Microsoft Defender for Endpoint to automatically isolate a high-confidence compromised device. Which feature should you enable?",
    options: [
      { id: "a", text: "Attack surface reduction rules" },
      { id: "b", text: "Automated investigation and response (AIR)" },
      { id: "c", text: "Tamper protection" },
      { id: "d", text: "Network protection" },
    ],
    correctAnswers: ["b"],
    explanation:
      "AIR uses playbooks to automatically remediate alerts, including isolating devices when high-confidence threats are detected.",
    difficulty: "medium",
  },
  {
    id: "sc200-008",
    certId: "sc-200",
    domainId: "defender-xdr",
    type: "single",
    question:
      "Which Defender for Endpoint feature blocks risky activities like Office processes spawning child processes from macros?",
    options: [
      { id: "a", text: "Application Guard" },
      { id: "b", text: "Attack surface reduction (ASR) rules" },
      { id: "c", text: "Device control" },
      { id: "d", text: "Network protection" },
    ],
    correctAnswers: ["b"],
    explanation:
      "ASR rules constrain risky behaviors used by malware, such as Office macros launching child processes.",
    difficulty: "medium",
  },
  {
    id: "sc200-009",
    certId: "sc-200",
    domainId: "defender-xdr",
    type: "single",
    question:
      "In Microsoft Defender for Cloud, which control prevents JIT VM access until approval and a time window are granted?",
    options: [
      { id: "a", text: "Adaptive application controls" },
      { id: "b", text: "Just-in-time VM access" },
      { id: "c", text: "Workflow automation" },
      { id: "d", text: "Adaptive network hardening" },
    ],
    correctAnswers: ["b"],
    explanation:
      "JIT VM access locks management ports and opens them on demand for an approved IP and duration.",
    difficulty: "medium",
  },
  {
    id: "sc200-010",
    certId: "sc-200",
    domainId: "defender-xdr",
    type: "single",
    question:
      "Which Defender for Office 365 feature detonates suspicious attachments in a sandbox before delivery?",
    options: [
      { id: "a", text: "Safe Links" },
      { id: "b", text: "Safe Attachments" },
      { id: "c", text: "Anti-phishing" },
      { id: "d", text: "Connection filter" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Safe Attachments detonates attachments in a sandbox to detect zero-day threats before delivery.",
    difficulty: "easy",
  },

  // Domain: Manage incident response and configure Sentinel (35%)
  {
    id: "sc200-011",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which Microsoft Sentinel component lets you orchestrate response actions like disabling a user or creating a ticket?",
    options: [
      { id: "a", text: "Workbooks" },
      { id: "b", text: "Analytics rules" },
      { id: "c", text: "Automation rules and playbooks (Logic Apps)" },
      { id: "d", text: "Watchlists" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Automation rules trigger Logic Apps-based playbooks to perform SOAR actions in response to incidents.",
    difficulty: "medium",
  },
  {
    id: "sc200-012",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "multiple",
    question:
      "Which two artifacts can you configure in Microsoft Sentinel to detect threats? (Choose two.)",
    options: [
      { id: "a", text: "Scheduled analytics rules" },
      { id: "b", text: "Diagnostic settings" },
      { id: "c", text: "Near-real-time (NRT) analytics rules" },
      { id: "d", text: "Resource locks" },
    ],
    correctAnswers: ["a", "c"],
    explanation:
      "Sentinel supports several analytics rule types including scheduled, NRT, Microsoft security, and ML behavioral analytics.",
    difficulty: "medium",
  },
  {
    id: "sc200-013",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which Sentinel artifact stores curated reference data such as VIP user lists for use in queries?",
    options: [
      { id: "a", text: "Workbooks" },
      { id: "b", text: "Watchlists" },
      { id: "c", text: "Hunting queries" },
      { id: "d", text: "Repositories" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Watchlists are uploaded reference datasets that you can join in KQL for context-aware detections.",
    difficulty: "easy",
  },
  {
    id: "sc200-014",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "What is the purpose of the User and Entity Behavior Analytics (UEBA) feature in Sentinel?",
    options: [
      { id: "a", text: "Encrypt log data at rest" },
      { id: "b", text: "Detect anomalies based on a baseline of typical user/entity behavior" },
      { id: "c", text: "Replace Microsoft Defender for Identity" },
      { id: "d", text: "Automate responses with playbooks" },
    ],
    correctAnswers: ["b"],
    explanation:
      "UEBA builds behavioral baselines and surfaces deviations as risk insights and detections.",
    difficulty: "medium",
  },
  {
    id: "sc200-015",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which deployment option lets multiple Sentinel workspaces from different tenants be managed centrally?",
    options: [
      { id: "a", text: "Azure Lighthouse with multi-workspace view" },
      { id: "b", text: "Azure Policy" },
      { id: "c", text: "Azure Arc" },
      { id: "d", text: "Azure Bastion" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Lighthouse delegates access across tenants and Sentinel supports a multi-workspace view for MSSPs.",
    difficulty: "hard",
  },
  {
    id: "sc200-016",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which built-in Sentinel data connector ingests Defender XDR alerts and incidents?",
    options: [
      { id: "a", text: "Common Event Format (CEF)" },
      { id: "b", text: "Microsoft Defender XDR" },
      { id: "c", text: "Syslog" },
      { id: "d", text: "Azure Activity" },
    ],
    correctAnswers: ["b"],
    explanation:
      "The Microsoft Defender XDR connector streams alerts, incidents, and raw events into Sentinel.",
    difficulty: "easy",
  },
  {
    id: "sc200-017",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which Sentinel feature visualizes data using customizable interactive dashboards?",
    options: [
      { id: "a", text: "Workbooks" },
      { id: "b", text: "Analytics rules" },
      { id: "c", text: "Notebooks" },
      { id: "d", text: "Watchlists" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Workbooks are interactive reports built on KQL queries with charts, tables, and tiles.",
    difficulty: "easy",
  },
  {
    id: "sc200-018",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "What does a Sentinel automation rule's 'change status' action do when an incident is closed as a false positive?",
    options: [
      { id: "a", text: "Re-runs the analytic rule" },
      { id: "b", text: "Updates the incident's status and closing reason without code" },
      { id: "c", text: "Deletes the underlying alerts" },
      { id: "d", text: "Triggers a Logic App execution only" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Automation rules can directly close incidents and set reasons without writing a playbook.",
    difficulty: "medium",
  },

  // Domain: Threat hunting (25%)
  {
    id: "sc200-019",
    certId: "sc-200",
    domainId: "threat-hunting",
    type: "single",
    question:
      "Which language is used to write hunting queries in Microsoft Sentinel and Defender XDR?",
    options: [
      { id: "a", text: "T-SQL" },
      { id: "b", text: "PowerShell" },
      { id: "c", text: "KQL (Kusto Query Language)" },
      { id: "d", text: "JMESPath" },
    ],
    correctAnswers: ["c"],
    explanation:
      "KQL is the query language used across Azure Monitor, Sentinel, and Defender XDR advanced hunting.",
    difficulty: "easy",
  },
  {
    id: "sc200-020",
    certId: "sc-200",
    domainId: "threat-hunting",
    type: "single",
    question:
      "Which KQL operator filters rows based on a condition?",
    options: [
      { id: "a", text: "project" },
      { id: "b", text: "summarize" },
      { id: "c", text: "where" },
      { id: "d", text: "extend" },
    ],
    correctAnswers: ["c"],
    explanation:
      "`where` filters rows. `project` selects columns, `summarize` aggregates, `extend` adds calculated columns.",
    difficulty: "easy",
  },
  {
    id: "sc200-021",
    certId: "sc-200",
    domainId: "threat-hunting",
    type: "single",
    question:
      "Which KQL operator aggregates rows into groups with computed metrics?",
    options: [
      { id: "a", text: "summarize" },
      { id: "b", text: "join" },
      { id: "c", text: "render" },
      { id: "d", text: "parse" },
    ],
    correctAnswers: ["a"],
    explanation:
      "`summarize ... by` groups data and computes aggregates such as count(), dcount(), min(), max().",
    difficulty: "easy",
  },
  {
    id: "sc200-022",
    certId: "sc-200",
    domainId: "threat-hunting",
    type: "single",
    question:
      "What does a Sentinel hunting bookmark let you do?",
    options: [
      { id: "a", text: "Save a workbook layout" },
      { id: "b", text: "Preserve evidence and notes from a hunt to escalate to an incident" },
      { id: "c", text: "Pin a data connector" },
      { id: "d", text: "Schedule an analytic rule" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Bookmarks capture hunt findings — query, results, and notes — that can be linked or promoted to incidents.",
    difficulty: "medium",
  },
  {
    id: "sc200-023",
    certId: "sc-200",
    domainId: "threat-hunting",
    type: "single",
    question:
      "Which KQL function helps detect statistical outliers in a numeric column?",
    options: [
      { id: "a", text: "series_decompose_anomalies()" },
      { id: "b", text: "ago()" },
      { id: "c", text: "tostring()" },
      { id: "d", text: "isempty()" },
    ],
    correctAnswers: ["a"],
    explanation:
      "`series_decompose_anomalies()` detects anomalies in time-series data using statistical models.",
    difficulty: "hard",
  },
  {
    id: "sc200-024",
    certId: "sc-200",
    domainId: "threat-hunting",
    type: "single",
    question:
      "Which Defender XDR table contains process creation telemetry from onboarded endpoints?",
    options: [
      { id: "a", text: "DeviceProcessEvents" },
      { id: "b", text: "AlertInfo" },
      { id: "c", text: "EmailEvents" },
      { id: "d", text: "IdentityLogonEvents" },
    ],
    correctAnswers: ["a"],
    explanation:
      "DeviceProcessEvents records new process executions with command-line, parent process, and user context.",
    difficulty: "medium",
  },
  {
    id: "sc200-025",
    certId: "sc-200",
    domainId: "threat-hunting",
    type: "single",
    question:
      "How can a Sentinel hunting query be promoted into a continuous detection?",
    options: [
      { id: "a", text: "Save it as a workbook" },
      { id: "b", text: "Create a scheduled analytics rule from the query" },
      { id: "c", text: "Add it to a watchlist" },
      { id: "d", text: "Convert it to a notebook" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Scheduled analytics rules run a KQL query on a cadence and create alerts/incidents on matches.",
    difficulty: "medium",
  },
];
