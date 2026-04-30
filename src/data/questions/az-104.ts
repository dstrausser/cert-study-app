import { Question } from "@/lib/types";

export const az104Questions: Question[] = [
  // Domain: Manage Azure identities and governance (20%)
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
    domainId: "identities-governance",
    type: "single",
    question:
      "Which Azure RBAC role lets a user manage all Azure resources in a subscription but not assign roles to others?",
    options: [
      { id: "a", text: "Owner" },
      { id: "b", text: "Contributor" },
      { id: "c", text: "User Access Administrator" },
      { id: "d", text: "Reader" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Contributor manages resources but cannot grant access — Owner and User Access Administrator can manage role assignments.",
    difficulty: "easy",
  },
  {
    id: "az104-003",
    certId: "az-104",
    domainId: "identities-governance",
    type: "single",
    question:
      "Which resource lock prevents both modification and deletion?",
    options: [
      { id: "a", text: "ReadOnly" },
      { id: "b", text: "CanNotDelete" },
      { id: "c", text: "Delete" },
      { id: "d", text: "ReadOnly does not prevent deletion" },
    ],
    correctAnswers: ["a"],
    explanation:
      "ReadOnly disallows write and delete; CanNotDelete only blocks delete.",
    difficulty: "medium",
  },
  {
    id: "az104-004",
    certId: "az-104",
    domainId: "identities-governance",
    type: "single",
    question:
      "Which scope inheritance order applies for Azure RBAC?",
    options: [
      { id: "a", text: "Resource → Resource group → Subscription → Management group" },
      { id: "b", text: "Management group → Subscription → Resource group → Resource" },
      { id: "c", text: "Tenant → Resource → Subscription → Management group" },
      { id: "d", text: "Subscription → Tenant → Resource group → Resource" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Permissions assigned at a higher scope are inherited downward through the hierarchy.",
    difficulty: "medium",
  },
  {
    id: "az104-005",
    certId: "az-104",
    domainId: "identities-governance",
    type: "single",
    question:
      "Which feature evaluates resources against compliance rules and can automatically remediate non-compliant resources?",
    options: [
      { id: "a", text: "Azure Policy with deployIfNotExists effect" },
      { id: "b", text: "Azure Blueprints (deprecated for new use)" },
      { id: "c", text: "Resource locks" },
      { id: "d", text: "Microsoft Defender for Cloud Secure Score" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Policy 'deployIfNotExists' (and modify) effects can auto-remediate non-compliant resources.",
    difficulty: "medium",
  },

  // Domain: Implement and manage storage (15%)
  {
    id: "az104-006",
    certId: "az-104",
    domainId: "storage",
    type: "single",
    question:
      "Which storage replication option provides the highest availability across regions with read access to the secondary?",
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
    id: "az104-007",
    certId: "az-104",
    domainId: "storage",
    type: "single",
    question:
      "You want to limit storage account access to a specific virtual network. Which feature should you configure?",
    options: [
      { id: "a", text: "Service endpoint or private endpoint with firewall rules" },
      { id: "b", text: "Azure AD Conditional Access" },
      { id: "c", text: "Azure DDoS Protection" },
      { id: "d", text: "Reserved capacity" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Service endpoints (or private endpoints) plus firewall rules constrain access to the storage account.",
    difficulty: "medium",
  },
  {
    id: "az104-008",
    certId: "az-104",
    domainId: "storage",
    type: "single",
    question:
      "Which Azure Files capability mounts SMB shares to on-premises servers and caches them locally?",
    options: [
      { id: "a", text: "Azure File Sync" },
      { id: "b", text: "Storage Mover" },
      { id: "c", text: "Azure Backup" },
      { id: "d", text: "Azure Site Recovery" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure File Sync deploys an agent to Windows Server to cache and tier SMB shares to Azure Files.",
    difficulty: "easy",
  },
  {
    id: "az104-009",
    certId: "az-104",
    domainId: "storage",
    type: "single",
    question:
      "Which storage tier minimizes cost for rarely accessed data while still allowing immediate retrieval?",
    options: [
      { id: "a", text: "Hot" },
      { id: "b", text: "Cool" },
      { id: "c", text: "Cold" },
      { id: "d", text: "Archive" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Cold tier is for rarely-accessed data with online (immediate) retrieval; Archive is offline with rehydration latency.",
    difficulty: "medium",
  },

  // Domain: Deploy and manage Azure compute resources (25%)
  {
    id: "az104-010",
    certId: "az-104",
    domainId: "compute",
    type: "single",
    question:
      "Which feature ensures VMs in a region are spread across multiple physical zones to survive a datacenter failure?",
    options: [
      { id: "a", text: "Availability sets" },
      { id: "b", text: "Availability zones" },
      { id: "c", text: "Proximity placement groups" },
      { id: "d", text: "Azure Bastion" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Availability zones place resources in physically separate datacenters within a region.",
    difficulty: "easy",
  },
  {
    id: "az104-011",
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
    id: "az104-012",
    certId: "az-104",
    domainId: "compute",
    type: "single",
    question:
      "Which compute service runs containers without managing nodes, scaling to zero?",
    options: [
      { id: "a", text: "Azure Kubernetes Service (AKS)" },
      { id: "b", text: "Azure Container Apps" },
      { id: "c", text: "Azure Container Instances" },
      { id: "d", text: "Azure Functions" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Container Apps is serverless containers with KEDA-based scaling, including scale-to-zero.",
    difficulty: "medium",
  },
  {
    id: "az104-013",
    certId: "az-104",
    domainId: "compute",
    type: "single",
    question:
      "Which feature adds the same OS configuration to many VMs declaratively?",
    options: [
      { id: "a", text: "Azure Automation Desired State Configuration" },
      { id: "b", text: "Azure Migrate" },
      { id: "c", text: "Resource locks" },
      { id: "d", text: "Azure Site Recovery" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Automation DSC (and the newer Guest Configuration via Azure Policy) enforce VM OS configuration declaratively.",
    difficulty: "medium",
  },
  {
    id: "az104-014",
    certId: "az-104",
    domainId: "compute",
    type: "single",
    question:
      "Which feature creates many identical VMs from a base image with built-in autoscaling?",
    options: [
      { id: "a", text: "Virtual Machine Scale Sets" },
      { id: "b", text: "Availability sets" },
      { id: "c", text: "Recovery Services vault" },
      { id: "d", text: "Azure Image Builder" },
    ],
    correctAnswers: ["a"],
    explanation:
      "VM Scale Sets manage a group of identical, autoscaling VMs.",
    difficulty: "easy",
  },
  {
    id: "az104-015",
    certId: "az-104",
    domainId: "compute",
    type: "single",
    question:
      "Which Azure service backs up Azure VMs with application-consistent recovery points?",
    options: [
      { id: "a", text: "Azure Backup with Recovery Services vault" },
      { id: "b", text: "Azure Site Recovery" },
      { id: "c", text: "Azure Storage snapshots" },
      { id: "d", text: "Azure File Sync" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Backup uses VSS-aware extensions to take application-consistent recovery points stored in a Recovery Services vault.",
    difficulty: "easy",
  },

  // Domain: Implement and manage virtual networking (20%)
  {
    id: "az104-016",
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
    id: "az104-017",
    certId: "az-104",
    domainId: "networking",
    type: "single",
    question:
      "Which feature connects two virtual networks using the Azure backbone with private IPs and no internet hop?",
    options: [
      { id: "a", text: "VNet peering" },
      { id: "b", text: "Site-to-site VPN" },
      { id: "c", text: "ExpressRoute" },
      { id: "d", text: "Azure Front Door" },
    ],
    correctAnswers: ["a"],
    explanation:
      "VNet peering links two VNets over the Microsoft backbone, allowing private IP communication.",
    difficulty: "easy",
  },
  {
    id: "az104-018",
    certId: "az-104",
    domainId: "networking",
    type: "single",
    question:
      "Which feature should you use to filter outbound traffic centrally with FQDN-based rules?",
    options: [
      { id: "a", text: "Azure Firewall" },
      { id: "b", text: "Network Security Group" },
      { id: "c", text: "Application Gateway" },
      { id: "d", text: "DDoS Protection" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Firewall supports FQDN tags and application rules for outbound HTTP/S filtering centrally.",
    difficulty: "medium",
  },
  {
    id: "az104-019",
    certId: "az-104",
    domainId: "networking",
    type: "single",
    question:
      "Which DNS feature lets two VNets resolve each other's private records?",
    options: [
      { id: "a", text: "Azure Private DNS zones with VNet links" },
      { id: "b", text: "Azure Public DNS" },
      { id: "c", text: "Conditional forwarders only" },
      { id: "d", text: "Azure Front Door" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Private DNS zones with VNet links provide name resolution across linked VNets without custom DNS servers.",
    difficulty: "medium",
  },
  {
    id: "az104-020",
    certId: "az-104",
    domainId: "networking",
    type: "single",
    question:
      "Which connectivity option provides a private, dedicated, low-latency link between on-premises and Azure?",
    options: [
      { id: "a", text: "Site-to-site VPN" },
      { id: "b", text: "Point-to-site VPN" },
      { id: "c", text: "ExpressRoute" },
      { id: "d", text: "Azure Bastion" },
    ],
    correctAnswers: ["c"],
    explanation:
      "ExpressRoute uses a private peering circuit through a connectivity provider for predictable performance.",
    difficulty: "easy",
  },

  // Domain: Monitor and maintain Azure resources (20%)
  {
    id: "az104-021",
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
  {
    id: "az104-022",
    certId: "az-104",
    domainId: "monitor-maintain",
    type: "single",
    question:
      "Which feature alerts you when an Azure metric crosses a threshold?",
    options: [
      { id: "a", text: "Azure Monitor metric alerts" },
      { id: "b", text: "Azure Advisor" },
      { id: "c", text: "Azure Policy" },
      { id: "d", text: "Service Health" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Metric alerts fire on metric thresholds and can trigger action groups (email, ITSM, Logic App).",
    difficulty: "easy",
  },
  {
    id: "az104-023",
    certId: "az-104",
    domainId: "monitor-maintain",
    type: "single",
    question:
      "Which Network Watcher feature confirms whether traffic from a source NIC reaches a destination IP given current NSGs and routes?",
    options: [
      { id: "a", text: "Connection troubleshoot" },
      { id: "b", text: "IP flow verify" },
      { id: "c", text: "Packet capture" },
      { id: "d", text: "NSG flow logs" },
    ],
    correctAnswers: ["b"],
    explanation:
      "IP flow verify evaluates NSGs/routes to determine whether a packet is allowed and which rule applied.",
    difficulty: "medium",
  },
  {
    id: "az104-024",
    certId: "az-104",
    domainId: "monitor-maintain",
    type: "single",
    question:
      "Which Azure feature replicates Azure VMs to a secondary region for disaster recovery?",
    options: [
      { id: "a", text: "Azure Site Recovery" },
      { id: "b", text: "Azure Backup" },
      { id: "c", text: "Azure Storage GRS" },
      { id: "d", text: "Azure Migrate" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Site Recovery replicates VMs and orchestrates failover to a secondary region.",
    difficulty: "easy",
  },
  {
    id: "az104-025",
    certId: "az-104",
    domainId: "monitor-maintain",
    type: "single",
    question:
      "Which Azure feature provides personalized best-practice recommendations across cost, security, reliability, performance, and operational excellence?",
    options: [
      { id: "a", text: "Azure Advisor" },
      { id: "b", text: "Azure Monitor" },
      { id: "c", text: "Azure Policy" },
      { id: "d", text: "Service Health" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Advisor analyzes telemetry and configuration to provide actionable recommendations across the well-architected pillars.",
    difficulty: "easy",
  },
];
