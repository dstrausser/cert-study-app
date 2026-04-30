import { Question } from "@/lib/types";

export const sc200Questions: Question[] = [
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
    domainId: "defender-xdr",
    type: "single",
    question:
      "You want to ensure Microsoft Defender for Endpoint can isolate a compromised device automatically. Which feature should you enable?",
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
    id: "sc200-003",
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
    id: "sc200-004",
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
    id: "sc200-005",
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
];
