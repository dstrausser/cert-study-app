import { Question } from "@/lib/types";

export const az104Questions: Question[] = [
  {
    id: "az104-001",
    certId: "az-104",
    domainId: "identities-governance",
    type: "single",
    question:
      "You need to apply a tag policy to all resources in a subscription. Which Azure feature should you use?",
    options: [
      { id: "a", text: "Resource locks" },
      { id: "b", text: "Azure Policy" },
      { id: "c", text: "Management groups" },
      { id: "d", text: "Cost Management budgets" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Policy enforces and audits configuration including required tags via built-in or custom definitions.",
    difficulty: "easy",
  },
  {
    id: "az104-002",
    certId: "az-104",
    domainId: "storage",
    type: "single",
    question:
      "Which storage replication option provides the highest availability across regions with read access?",
    options: [
      { id: "a", text: "LRS" },
      { id: "b", text: "ZRS" },
      { id: "c", text: "GRS" },
      { id: "d", text: "RA-GZRS" },
    ],
    correctAnswers: ["d"],
    explanation:
      "RA-GZRS combines zone-redundant storage in the primary region with geo-replication to a secondary region with read access.",
    difficulty: "medium",
  },
  {
    id: "az104-003",
    certId: "az-104",
    domainId: "compute",
    type: "single",
    question:
      "Which Azure VM feature lets you apply OS updates without restarting the VM, where supported?",
    options: [
      { id: "a", text: "Azure Update Manager with hotpatch" },
      { id: "b", text: "Custom script extension" },
      { id: "c", text: "Azure Automation State Configuration" },
      { id: "d", text: "Azure Migrate" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Update Manager supports hotpatching on supported Windows Server Azure Edition images to install updates without reboot.",
    difficulty: "medium",
  },
  {
    id: "az104-004",
    certId: "az-104",
    domainId: "networking",
    type: "single",
    question:
      "Which networking resource provides Layer 7 load balancing with WAF for HTTP/HTTPS workloads?",
    options: [
      { id: "a", text: "Azure Load Balancer" },
      { id: "b", text: "Azure Front Door" },
      { id: "c", text: "Azure Application Gateway" },
      { id: "d", text: "Azure Traffic Manager" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Application Gateway is the regional Layer 7 load balancer with an integrated Web Application Firewall.",
    difficulty: "easy",
  },
  {
    id: "az104-005",
    certId: "az-104",
    domainId: "monitor-maintain",
    type: "single",
    question:
      "Which feature lets you collect and analyze logs and metrics from Azure resources using KQL?",
    options: [
      { id: "a", text: "Azure Monitor Log Analytics" },
      { id: "b", text: "Azure Service Health" },
      { id: "c", text: "Network Watcher" },
      { id: "d", text: "Azure Advisor" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Log Analytics workspaces store telemetry that you query using KQL across Azure Monitor.",
    difficulty: "easy",
  },
];
