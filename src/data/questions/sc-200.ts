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
  // Additional manage-sec-ops coverage
  {
    id: "sc200-026",
    certId: "sc-200",
    domainId: "manage-sec-ops",
    type: "single",
    question:
      "Where are Microsoft Defender XDR and Microsoft Sentinel unified for SOC analysts?",
    options: [
      { id: "a", text: "Microsoft Defender portal (security.microsoft.com)" },
      { id: "b", text: "Azure portal" },
      { id: "c", text: "Microsoft 365 admin center" },
      { id: "d", text: "Entra admin center" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Sentinel is now integrated into the Microsoft Defender portal alongside Defender XDR for unified investigation.",
    difficulty: "easy",
  },
  {
    id: "sc200-027",
    certId: "sc-200",
    domainId: "manage-sec-ops",
    type: "single",
    question:
      "Which Microsoft Sentinel licensing model bills based on data ingested into the workspace?",
    options: [
      { id: "a", text: "Pay-as-you-go (per GB ingested)" },
      { id: "b", text: "Per-user licensing" },
      { id: "c", text: "Per-VM licensing" },
      { id: "d", text: "Free with E3" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Sentinel can use pay-as-you-go (per GB) or commitment tiers; free Microsoft 365 connectors do not count toward ingestion costs.",
    difficulty: "medium",
  },
  {
    id: "sc200-028",
    certId: "sc-200",
    domainId: "manage-sec-ops",
    type: "single",
    question:
      "Which feature lets you save costs by routing some logs to a low-cost tier in Azure Monitor?",
    options: [
      { id: "a", text: "Basic logs / Auxiliary logs tables" },
      { id: "b", text: "Resource locks" },
      { id: "c", text: "Microsoft Defender for Cloud Apps" },
      { id: "d", text: "Workspace transformations only" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Basic / Auxiliary logs are lower-cost log tiers with limited query and retention features, ideal for high-volume verbose logs.",
    difficulty: "medium",
  },
  {
    id: "sc200-029",
    certId: "sc-200",
    domainId: "manage-sec-ops",
    type: "single",
    question:
      "Which Sentinel content management feature lets you bring solutions and queries from a Git repo with version control?",
    options: [
      { id: "a", text: "Repositories (content hub + Git integration)" },
      { id: "b", text: "Workbooks gallery" },
      { id: "c", text: "Diagnostic settings" },
      { id: "d", text: "Watchlists" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Sentinel repositories integrate with Azure DevOps or GitHub for source-controlled deployment of analytics, hunts, and playbooks.",
    difficulty: "medium",
  },
  {
    id: "sc200-030",
    certId: "sc-200",
    domainId: "manage-sec-ops",
    type: "single",
    question:
      "Which Microsoft Defender XDR view groups recommendations by exposure and asset criticality?",
    options: [
      { id: "a", text: "Microsoft Secure Score and Exposure management" },
      { id: "b", text: "Compliance Manager" },
      { id: "c", text: "Audit (Premium)" },
      { id: "d", text: "Threat analytics" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Exposure management correlates assets, controls, and recommended actions to reduce overall attack surface.",
    difficulty: "medium",
  },
  {
    id: "sc200-031",
    certId: "sc-200",
    domainId: "manage-sec-ops",
    type: "single",
    question:
      "When onboarding a new Microsoft 365 connector to Sentinel, what is the most important initial decision to control cost?",
    options: [
      { id: "a", text: "Which event tables/streams to enable for ingestion" },
      { id: "b", text: "Picking a workspace name" },
      { id: "c", text: "Selecting a region" },
      { id: "d", text: "Enabling diagnostic settings on the workspace" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Cost is driven by ingested volume; choose only the streams you need (e.g., specific Office activity types).",
    difficulty: "medium",
  },
  {
    id: "sc200-032",
    certId: "sc-200",
    domainId: "manage-sec-ops",
    type: "single",
    question:
      "Which Sentinel feature visualizes incidents on a timeline with related entities for investigation?",
    options: [
      { id: "a", text: "Investigation graph" },
      { id: "b", text: "Workbook" },
      { id: "c", text: "Watchlist" },
      { id: "d", text: "Notebook" },
    ],
    correctAnswers: ["a"],
    explanation:
      "The investigation graph shows entities and timeline relationships for an incident.",
    difficulty: "medium",
  },
  {
    id: "sc200-033",
    certId: "sc-200",
    domainId: "manage-sec-ops",
    type: "single",
    question:
      "Which Microsoft tool helps SOC analysts with natural-language summaries of incidents and KQL generation?",
    options: [
      { id: "a", text: "Microsoft Security Copilot" },
      { id: "b", text: "Compliance Manager" },
      { id: "c", text: "Microsoft 365 Copilot" },
      { id: "d", text: "Microsoft Intune Copilot" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Security Copilot embeds in Defender XDR and Sentinel to summarize incidents, suggest hunts, and write KQL.",
    difficulty: "easy",
  },
  {
    id: "sc200-034",
    certId: "sc-200",
    domainId: "manage-sec-ops",
    type: "single",
    question:
      "Which workspace setting controls how long Sentinel retains data without extra cost?",
    options: [
      { id: "a", text: "Default retention (90 days for Sentinel-enabled workspaces)" },
      { id: "b", text: "Diagnostic settings" },
      { id: "c", text: "Resource locks" },
      { id: "d", text: "Service principal lifetime" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Sentinel-enabled workspaces include 90 days of free retention; longer retention is billed per GB.",
    difficulty: "medium",
  },

  // Additional defender-xdr coverage
  {
    id: "sc200-035",
    certId: "sc-200",
    domainId: "defender-xdr",
    type: "single",
    question:
      "Which Defender for Endpoint deployment option avoids deploying a separate sensor on Windows 10/11?",
    options: [
      { id: "a", text: "Built-in EDR sensor (no separate agent)" },
      { id: "b", text: "MMA (Microsoft Monitoring Agent)" },
      { id: "c", text: "Azure Connected Machine agent" },
      { id: "d", text: "OMS Linux agent" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Modern Windows includes the Defender for Endpoint EDR sensor; you onboard via script, MDM, or Group Policy.",
    difficulty: "medium",
  },
  {
    id: "sc200-036",
    certId: "sc-200",
    domainId: "defender-xdr",
    type: "single",
    question:
      "Which Defender for Identity prerequisite is installed on domain controllers (or AD CS / AD FS) to capture identity signals?",
    options: [
      { id: "a", text: "Defender for Identity sensor" },
      { id: "b", text: "Microsoft Sentinel agent" },
      { id: "c", text: "Defender for Endpoint client" },
      { id: "d", text: "Azure Bastion" },
    ],
    correctAnswers: ["a"],
    explanation:
      "The Defender for Identity sensor runs on DCs (and optionally AD CS/AD FS) to forward identity-related telemetry.",
    difficulty: "medium",
  },
  {
    id: "sc200-037",
    certId: "sc-200",
    domainId: "defender-xdr",
    type: "single",
    question:
      "Which Defender for Office 365 feature trains users with simulated phishing campaigns?",
    options: [
      { id: "a", text: "Attack simulation training" },
      { id: "b", text: "Tenant Allow/Block lists" },
      { id: "c", text: "Anti-phishing policy" },
      { id: "d", text: "Configuration analyzer" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Attack simulation training launches realistic phishing simulations and assigns targeted training to clickers.",
    difficulty: "easy",
  },
  {
    id: "sc200-038",
    certId: "sc-200",
    domainId: "defender-xdr",
    type: "single",
    question:
      "What is the recommended action for a high-confidence malicious URL in Defender XDR?",
    options: [
      { id: "a", text: "Add to the Tenant Allow/Block list as Block" },
      { id: "b", text: "Mark as duplicate" },
      { id: "c", text: "Disable the user account" },
      { id: "d", text: "Delete the device" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Block-list entries prevent the URL from being delivered or clicked across tenant mail and Safe Links.",
    difficulty: "medium",
  },
  {
    id: "sc200-039",
    certId: "sc-200",
    domainId: "defender-xdr",
    type: "single",
    question:
      "Which Defender for Cloud Apps capability scans for risky OAuth apps connected to Microsoft 365?",
    options: [
      { id: "a", text: "App governance" },
      { id: "b", text: "Cloud Discovery" },
      { id: "c", text: "Conditional Access App Control" },
      { id: "d", text: "File policies" },
    ],
    correctAnswers: ["a"],
    explanation:
      "App governance evaluates OAuth applications' permissions, behavior, and risk to the tenant.",
    difficulty: "hard",
  },
  // Additional sentinel-config coverage
  {
    id: "sc200-040",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which Sentinel analytics rule type runs every minute and fires near-real-time on a single event?",
    options: [
      { id: "a", text: "Near-real-time (NRT)" },
      { id: "b", text: "Scheduled" },
      { id: "c", text: "Microsoft security" },
      { id: "d", text: "ML behavioral analytics" },
    ],
    correctAnswers: ["a"],
    explanation:
      "NRT rules run on incoming data with a one-minute cadence for low-latency detection.",
    difficulty: "medium",
  },
  {
    id: "sc200-041",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which Sentinel analytics rule type forwards Microsoft Defender alerts as Sentinel incidents without a custom query?",
    options: [
      { id: "a", text: "Microsoft security" },
      { id: "b", text: "Scheduled" },
      { id: "c", text: "NRT" },
      { id: "d", text: "Anomaly" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft security rules import alerts from Microsoft products (Defender XDR, Defender for Cloud) as Sentinel incidents.",
    difficulty: "medium",
  },
  {
    id: "sc200-042",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which entity type does Sentinel use to map alert fields like 'AccountName' for cross-incident correlation?",
    options: [
      { id: "a", text: "Entity mapping in the analytics rule" },
      { id: "b", text: "Watchlist alias" },
      { id: "c", text: "Diagnostic setting" },
      { id: "d", text: "Workbook parameter" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Entity mapping ties alert columns to standard entities (Account, Host, IP, URL, etc.) so incidents can correlate.",
    difficulty: "medium",
  },
  {
    id: "sc200-043",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which Sentinel feature enables you to take action automatically when an alert is triggered, without requiring a Logic App?",
    options: [
      { id: "a", text: "Automation rules" },
      { id: "b", text: "Workbooks" },
      { id: "c", text: "Watchlists" },
      { id: "d", text: "Hunting queries" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Automation rules can change incident status, assign owners, add tags, or trigger playbooks without code.",
    difficulty: "easy",
  },
  {
    id: "sc200-044",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which connector ingests Linux/Unix syslog into Sentinel via an Azure Monitor Agent or AMA-based DCR?",
    options: [
      { id: "a", text: "Syslog (CEF) connector with AMA" },
      { id: "b", text: "Microsoft Defender XDR" },
      { id: "c", text: "Office 365" },
      { id: "d", text: "Threat intelligence platforms" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Syslog and CEF data flow into Sentinel via the AMA-based data collection rule.",
    difficulty: "medium",
  },
  {
    id: "sc200-045",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which Sentinel feature ingests external threat indicators (IOCs) for matching against logs?",
    options: [
      { id: "a", text: "Threat intelligence (TI) connectors and indicators" },
      { id: "b", text: "Workbooks" },
      { id: "c", text: "Notebooks" },
      { id: "d", text: "Watchlists only" },
    ],
    correctAnswers: ["a"],
    explanation:
      "TI connectors (TAXII, MS Defender TI, MISP) populate the ThreatIntelligenceIndicator table for detection.",
    difficulty: "medium",
  },
  {
    id: "sc200-046",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which Sentinel feature lets analysts annotate suspicious findings during a hunt for later promotion to incidents?",
    options: [
      { id: "a", text: "Hunting bookmarks" },
      { id: "b", text: "Workbook parameters" },
      { id: "c", text: "Watchlists" },
      { id: "d", text: "Diagnostic settings" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Bookmarks save evidence and notes from a hunt and can be elevated to incidents.",
    difficulty: "easy",
  },
  {
    id: "sc200-047",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which Sentinel artifact integrates Jupyter for advanced ML or graph analysis on workspace data?",
    options: [
      { id: "a", text: "Notebooks (Azure ML / hosted notebooks)" },
      { id: "b", text: "Workbooks" },
      { id: "c", text: "Watchlists" },
      { id: "d", text: "Threat analytics" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Sentinel notebooks run in Azure ML or Microsoft-hosted notebooks for advanced analytics.",
    difficulty: "hard",
  },
  {
    id: "sc200-048",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which playbook action requires the Microsoft Sentinel Responder role on the workspace to execute?",
    options: [
      { id: "a", text: "Updating an incident from a playbook (e.g., add comment, close)" },
      { id: "b", text: "Reading an incident only" },
      { id: "c", text: "Deploying a workbook" },
      { id: "d", text: "Configuring a data connector" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Modifying incidents from automation requires the Sentinel Responder (or higher) role on the playbook's identity.",
    difficulty: "hard",
  },
  {
    id: "sc200-049",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which Sentinel feature lets you manage analytics rules, hunts, and playbooks as a packaged solution from the Content hub?",
    options: [
      { id: "a", text: "Solutions in the Content hub" },
      { id: "b", text: "Watchlists" },
      { id: "c", text: "Workbook gallery" },
      { id: "d", text: "Diagnostic settings" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Content hub solutions bundle connectors, analytics, workbooks, hunts, and playbooks for specific products or domains.",
    difficulty: "medium",
  },
  {
    id: "sc200-050",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which Sentinel built-in role lets a user view incidents and run queries but not modify content?",
    options: [
      { id: "a", text: "Microsoft Sentinel Reader" },
      { id: "b", text: "Microsoft Sentinel Responder" },
      { id: "c", text: "Microsoft Sentinel Contributor" },
      { id: "d", text: "Owner" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Sentinel Reader is read-only on incidents and workspace data.",
    difficulty: "easy",
  },
  {
    id: "sc200-051",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which feature reduces alert noise by combining repeating alerts into a single incident?",
    options: [
      { id: "a", text: "Alert grouping in analytics rule settings" },
      { id: "b", text: "Workbook filters" },
      { id: "c", text: "Watchlist aliases" },
      { id: "d", text: "Diagnostic settings" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Alert grouping (incident settings) consolidates alerts that share entities or properties into one incident.",
    difficulty: "medium",
  },
  {
    id: "sc200-052",
    certId: "sc-200",
    domainId: "sentinel-config",
    type: "single",
    question:
      "Which Sentinel deployment best fits an MSSP serving multiple customer tenants?",
    options: [
      { id: "a", text: "Multi-tenant via Azure Lighthouse with the multi-workspace view" },
      { id: "b", text: "A single workspace shared by all customers' raw logs" },
      { id: "c", text: "On-premises Sentinel" },
      { id: "d", text: "Sentinel Standalone (no Lighthouse)" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Lighthouse delegates customer tenants to the MSSP's directory; Sentinel's multi-workspace view aggregates them.",
    difficulty: "hard",
  },

  // Additional threat-hunting coverage
  {
    id: "sc200-053",
    certId: "sc-200",
    domainId: "threat-hunting",
    type: "single",
    question:
      "Which KQL operator joins two tables on a column?",
    options: [
      { id: "a", text: "join" },
      { id: "b", text: "summarize" },
      { id: "c", text: "extend" },
      { id: "d", text: "project" },
    ],
    correctAnswers: ["a"],
    explanation:
      "`join` combines rows from two tables based on matching column values.",
    difficulty: "easy",
  },
  {
    id: "sc200-054",
    certId: "sc-200",
    domainId: "threat-hunting",
    type: "single",
    question:
      "Which KQL operator parses unstructured strings into typed columns?",
    options: [
      { id: "a", text: "parse" },
      { id: "b", text: "render" },
      { id: "c", text: "summarize" },
      { id: "d", text: "join" },
    ],
    correctAnswers: ["a"],
    explanation:
      "`parse` extracts structured fields from a free-form string column.",
    difficulty: "medium",
  },
  {
    id: "sc200-055",
    certId: "sc-200",
    domainId: "threat-hunting",
    type: "single",
    question:
      "Which Defender XDR table contains email message metadata?",
    options: [
      { id: "a", text: "EmailEvents" },
      { id: "b", text: "DeviceEvents" },
      { id: "c", text: "IdentityInfo" },
      { id: "d", text: "AlertInfo" },
    ],
    correctAnswers: ["a"],
    explanation:
      "EmailEvents records each message processed by Defender for Office 365.",
    difficulty: "easy",
  },
  {
    id: "sc200-056",
    certId: "sc-200",
    domainId: "threat-hunting",
    type: "single",
    question:
      "Which KQL function returns a value relative to current time, e.g., 7 days ago?",
    options: [
      { id: "a", text: "ago()" },
      { id: "b", text: "now()" },
      { id: "c", text: "todatetime()" },
      { id: "d", text: "datetime_part()" },
    ],
    correctAnswers: ["a"],
    explanation:
      "`ago()` returns a datetime offset from now (e.g., `ago(7d)`).",
    difficulty: "easy",
  },
  {
    id: "sc200-057",
    certId: "sc-200",
    domainId: "threat-hunting",
    type: "single",
    question:
      "Which Defender XDR table records sign-in events in Microsoft Entra ID?",
    options: [
      { id: "a", text: "IdentityLogonEvents" },
      { id: "b", text: "DeviceLogonEvents" },
      { id: "c", text: "EmailEvents" },
      { id: "d", text: "AlertEvidence" },
    ],
    correctAnswers: ["a"],
    explanation:
      "IdentityLogonEvents covers identity sign-ins from Entra ID and on-prem AD via Defender for Identity.",
    difficulty: "medium",
  },
  {
    id: "sc200-058",
    certId: "sc-200",
    domainId: "threat-hunting",
    type: "single",
    question:
      "Which KQL operator returns the top N rows ordered by a column?",
    options: [
      { id: "a", text: "top" },
      { id: "b", text: "take" },
      { id: "c", text: "limit" },
      { id: "d", text: "order by" },
    ],
    correctAnswers: ["a"],
    explanation:
      "`top N by column` returns the top N rows ordered by the specified column.",
    difficulty: "easy",
  },
  {
    id: "sc200-059",
    certId: "sc-200",
    domainId: "threat-hunting",
    type: "single",
    question:
      "Which feature lets you save advanced hunting queries to share across the SOC team?",
    options: [
      { id: "a", text: "Custom queries / shared queries in advanced hunting" },
      { id: "b", text: "Workbook gallery" },
      { id: "c", text: "Diagnostic settings" },
      { id: "d", text: "Watchlists only" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Defender XDR advanced hunting supports shared queries across the SOC team.",
    difficulty: "easy",
  },
  {
    id: "sc200-060",
    certId: "sc-200",
    domainId: "threat-hunting",
    type: "single",
    question:
      "Which KQL operator selects only specific columns to project in the result?",
    options: [
      { id: "a", text: "project" },
      { id: "b", text: "summarize" },
      { id: "c", text: "extend" },
      { id: "d", text: "where" },
    ],
    correctAnswers: ["a"],
    explanation:
      "`project` chooses columns to include and can rename or compute them with `project-rename` / `project-keep` / `project-away`.",
    difficulty: "easy",
  },
];
