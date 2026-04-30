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
  // Additional governance coverage
  {
    id: "az104-026",
    certId: "az-104",
    domainId: "identities-governance",
    type: "single",
    question:
      "Which Azure construct lets you organize subscriptions for hierarchical policy and RBAC inheritance?",
    options: [
      { id: "a", text: "Management groups" },
      { id: "b", text: "Resource groups" },
      { id: "c", text: "Tags" },
      { id: "d", text: "Availability sets" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Management groups create a hierarchy above subscriptions for inheriting policies and RBAC.",
    difficulty: "easy",
  },
  {
    id: "az104-027",
    certId: "az-104",
    domainId: "identities-governance",
    type: "single",
    question:
      "Which Azure feature lets you delegate management of customer subscriptions to a service provider's Entra tenant?",
    options: [
      { id: "a", text: "Azure Lighthouse" },
      { id: "b", text: "Azure Bastion" },
      { id: "c", text: "Azure Monitor" },
      { id: "d", text: "Azure Site Recovery" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Lighthouse delegates resource access to managing tenants for cross-tenant management.",
    difficulty: "medium",
  },
  {
    id: "az104-028",
    certId: "az-104",
    domainId: "identities-governance",
    type: "single",
    question:
      "Which Azure RBAC role lets a user create resources in any resource group within the subscription scope?",
    options: [
      { id: "a", text: "Contributor at the subscription scope" },
      { id: "b", text: "Reader" },
      { id: "c", text: "Backup Operator" },
      { id: "d", text: "Network Watcher" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Contributor at the subscription scope can create/manage resources in any RG without granting access.",
    difficulty: "easy",
  },
  {
    id: "az104-029",
    certId: "az-104",
    domainId: "identities-governance",
    type: "single",
    question:
      "Which Azure feature enforces tag inheritance from a resource group to its child resources?",
    options: [
      { id: "a", text: "Azure Policy 'Inherit a tag from the resource group' built-in" },
      { id: "b", text: "Resource locks" },
      { id: "c", text: "Cost Management budgets" },
      { id: "d", text: "Service health alerts" },
    ],
    correctAnswers: ["a"],
    explanation:
      "An Azure Policy with the modify effect can inherit tags from the parent resource group.",
    difficulty: "medium",
  },
  {
    id: "az104-030",
    certId: "az-104",
    domainId: "identities-governance",
    type: "single",
    question:
      "Which Cost Management feature alerts when actual or forecasted spend exceeds a threshold?",
    options: [
      { id: "a", text: "Budgets with alerts" },
      { id: "b", text: "Reservations" },
      { id: "c", text: "Pricing calculator" },
      { id: "d", text: "Azure Advisor" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Cost Management Budgets fire alerts on actual or forecasted spend at configured thresholds.",
    difficulty: "easy",
  },
  {
    id: "az104-031",
    certId: "az-104",
    domainId: "identities-governance",
    type: "single",
    question:
      "Which Azure RBAC scope is most appropriate to grant a Sentinel analyst access only to a specific Log Analytics workspace?",
    options: [
      { id: "a", text: "Resource scope (the workspace)" },
      { id: "b", text: "Subscription scope" },
      { id: "c", text: "Tenant scope" },
      { id: "d", text: "Management group" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Granting at the workspace resource scope follows least privilege.",
    difficulty: "medium",
  },
  {
    id: "az104-032",
    certId: "az-104",
    domainId: "identities-governance",
    type: "single",
    question:
      "Which feature lets you bring on-premises servers under Azure Policy and Defender for Cloud?",
    options: [
      { id: "a", text: "Azure Arc-enabled servers" },
      { id: "b", text: "Azure Lighthouse" },
      { id: "c", text: "Azure Migrate" },
      { id: "d", text: "Azure Bastion" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Arc projects on-prem and multi-cloud servers as Azure resources for governance.",
    difficulty: "medium",
  },

  // Additional storage coverage
  {
    id: "az104-033",
    certId: "az-104",
    domainId: "storage",
    type: "single",
    question:
      "Which storage account access option provides time-bound, scoped, signed URLs for delegating access without sharing keys?",
    options: [
      { id: "a", text: "Shared Access Signature (SAS) — preferably user-delegation SAS" },
      { id: "b", text: "Account key" },
      { id: "c", text: "Anonymous container access" },
      { id: "d", text: "Service endpoint" },
    ],
    correctAnswers: ["a"],
    explanation:
      "SAS tokens grant time-limited access; user-delegation SAS uses Entra credentials and is preferred.",
    difficulty: "medium",
  },
  {
    id: "az104-034",
    certId: "az-104",
    domainId: "storage",
    type: "single",
    question:
      "Which storage feature lets you connect privately to a storage account over a private IP in your VNet?",
    options: [
      { id: "a", text: "Private endpoint" },
      { id: "b", text: "Service endpoint only" },
      { id: "c", text: "ExpressRoute Direct" },
      { id: "d", text: "Site-to-site VPN" },
    ],
    correctAnswers: ["a"],
    explanation:
      "A private endpoint exposes the storage account on a private IP inside your VNet via Private Link.",
    difficulty: "medium",
  },
  {
    id: "az104-035",
    certId: "az-104",
    domainId: "storage",
    type: "single",
    question:
      "Which Azure Storage tier provides offline storage at the lowest cost with rehydration latency?",
    options: [
      { id: "a", text: "Archive" },
      { id: "b", text: "Cold" },
      { id: "c", text: "Cool" },
      { id: "d", text: "Hot" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Archive is the cheapest, offline tier; rehydration to a higher tier takes hours.",
    difficulty: "easy",
  },
  {
    id: "az104-036",
    certId: "az-104",
    domainId: "storage",
    type: "single",
    question:
      "Which Azure service migrates large amounts of data to Azure using a physical device shipped to Microsoft?",
    options: [
      { id: "a", text: "Azure Data Box" },
      { id: "b", text: "Azure File Sync" },
      { id: "c", text: "Storage Mover" },
      { id: "d", text: "AzCopy" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Data Box ships rugged appliances for offline data ingest at TB/PB scale.",
    difficulty: "easy",
  },
  {
    id: "az104-037",
    certId: "az-104",
    domainId: "storage",
    type: "single",
    question:
      "Which Azure storage feature retains soft-deleted blobs for a configurable period?",
    options: [
      { id: "a", text: "Soft delete for blobs (with versioning)" },
      { id: "b", text: "Reservation pricing" },
      { id: "c", text: "Service endpoint" },
      { id: "d", text: "Replication LRS" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Soft delete keeps deleted/overwritten blob data recoverable for the retention window.",
    difficulty: "medium",
  },

  // Additional compute coverage
  {
    id: "az104-038",
    certId: "az-104",
    domainId: "compute",
    type: "single",
    question:
      "Which feature autoscales VM Scale Sets based on CPU or custom metrics?",
    options: [
      { id: "a", text: "Autoscale rules in Azure Monitor" },
      { id: "b", text: "Resource locks" },
      { id: "c", text: "Azure Backup policy" },
      { id: "d", text: "Reservations" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Autoscale rules add/remove instances based on metric thresholds or schedules.",
    difficulty: "easy",
  },
  {
    id: "az104-039",
    certId: "az-104",
    domainId: "compute",
    type: "single",
    question:
      "Which Azure compute service runs container apps with HTTP scaling and Dapr support?",
    options: [
      { id: "a", text: "Azure Container Apps" },
      { id: "b", text: "Azure Kubernetes Service" },
      { id: "c", text: "Azure Functions" },
      { id: "d", text: "Azure Spring Apps" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Container Apps is a serverless container platform with KEDA scaling and Dapr integration.",
    difficulty: "medium",
  },
  {
    id: "az104-040",
    certId: "az-104",
    domainId: "compute",
    type: "single",
    question:
      "Which AKS feature isolates tenant workloads on dedicated node pools by node taints and selectors?",
    options: [
      { id: "a", text: "Multiple node pools with taints / tolerations / nodeSelectors" },
      { id: "b", text: "Availability zones only" },
      { id: "c", text: "Reservations" },
      { id: "d", text: "Azure Monitor metrics" },
    ],
    correctAnswers: ["a"],
    explanation:
      "AKS supports multiple node pools that can be isolated using Kubernetes taints and selectors.",
    difficulty: "hard",
  },
  {
    id: "az104-041",
    certId: "az-104",
    domainId: "compute",
    type: "single",
    question:
      "Which Azure VM feature lets you grant a VM access to Azure resources without storing credentials?",
    options: [
      { id: "a", text: "System-assigned or user-assigned managed identity" },
      { id: "b", text: "Service principal with secret in code" },
      { id: "c", text: "Custom script extension" },
      { id: "d", text: "Run command" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Managed identities give a VM an Entra identity for AAD-authenticated calls without secrets.",
    difficulty: "easy",
  },
  {
    id: "az104-042",
    certId: "az-104",
    domainId: "compute",
    type: "single",
    question:
      "Which Azure VM extension installs custom scripts on first boot or on-demand?",
    options: [
      { id: "a", text: "Custom Script Extension" },
      { id: "b", text: "Azure Diagnostics extension" },
      { id: "c", text: "DependencyAgent" },
      { id: "d", text: "AntiMalware" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Custom Script Extension downloads and runs scripts during deployment or on demand.",
    difficulty: "easy",
  },
  {
    id: "az104-043",
    certId: "az-104",
    domainId: "compute",
    type: "single",
    question:
      "Which feature replicates a VM image across regions so VMs can be deployed quickly worldwide?",
    options: [
      { id: "a", text: "Azure Compute Gallery (formerly Shared Image Gallery)" },
      { id: "b", text: "Recovery Services vault" },
      { id: "c", text: "Azure Migrate" },
      { id: "d", text: "Azure Backup" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Compute Gallery stores managed images and replicates them to multiple regions/zones.",
    difficulty: "medium",
  },
  {
    id: "az104-044",
    certId: "az-104",
    domainId: "compute",
    type: "single",
    question:
      "Which Azure compute pricing option commits to one or three years for predictable workloads?",
    options: [
      { id: "a", text: "Azure Reservations" },
      { id: "b", text: "Spot VMs" },
      { id: "c", text: "Pay-as-you-go" },
      { id: "d", text: "Hybrid Benefit" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Reservations commit to a term in exchange for substantial discounts.",
    difficulty: "easy",
  },
  {
    id: "az104-045",
    certId: "az-104",
    domainId: "compute",
    type: "single",
    question:
      "Which Azure VM pricing option offers deep discounts but allows Azure to evict the VM with short notice?",
    options: [
      { id: "a", text: "Spot VMs" },
      { id: "b", text: "Reserved VMs" },
      { id: "c", text: "Dedicated host" },
      { id: "d", text: "Hybrid Benefit" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Spot VMs use spare capacity at low cost; Azure can evict them when capacity is needed.",
    difficulty: "easy",
  },
  {
    id: "az104-046",
    certId: "az-104",
    domainId: "compute",
    type: "single",
    question:
      "Which Azure feature lets a Windows Server VM use existing on-prem Windows Server licenses with Software Assurance?",
    options: [
      { id: "a", text: "Azure Hybrid Benefit" },
      { id: "b", text: "Reservations" },
      { id: "c", text: "Spot VMs" },
      { id: "d", text: "Dev/Test pricing" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Hybrid Benefit reuses on-prem Windows Server / SQL Server licenses on Azure for cost savings.",
    difficulty: "medium",
  },
  // Additional networking coverage
  {
    id: "az104-047",
    certId: "az-104",
    domainId: "networking",
    type: "single",
    question:
      "Which feature lets two non-peered VNets share a hub firewall and ExpressRoute via a centralized topology?",
    options: [
      { id: "a", text: "Hub-and-spoke architecture (manual or via Azure Virtual WAN)" },
      { id: "b", text: "Service endpoint" },
      { id: "c", text: "Azure Front Door" },
      { id: "d", text: "Private DNS forwarding only" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Hub-and-spoke (custom or Virtual WAN) consolidates shared services like firewall, gateway, and DNS in a hub.",
    difficulty: "medium",
  },
  {
    id: "az104-048",
    certId: "az-104",
    domainId: "networking",
    type: "single",
    question:
      "Which Azure resource provides global, anycast HTTP(S) load balancing and CDN with WAF?",
    options: [
      { id: "a", text: "Azure Front Door (Premium with WAF)" },
      { id: "b", text: "Azure Application Gateway" },
      { id: "c", text: "Azure Load Balancer" },
      { id: "d", text: "Azure Traffic Manager" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Front Door is the global L7 service with anycast routing, caching, and WAF (Premium).",
    difficulty: "medium",
  },
  {
    id: "az104-049",
    certId: "az-104",
    domainId: "networking",
    type: "single",
    question:
      "Which Azure DNS service hosts public DNS records for a domain?",
    options: [
      { id: "a", text: "Azure DNS (public zones)" },
      { id: "b", text: "Azure Private DNS" },
      { id: "c", text: "Azure DNS Private Resolver" },
      { id: "d", text: "Traffic Manager" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Public Azure DNS zones host internet-facing DNS records.",
    difficulty: "easy",
  },
  {
    id: "az104-050",
    certId: "az-104",
    domainId: "networking",
    type: "single",
    question:
      "Which Azure feature lets DNS queries from on-premises resolve Azure private DNS zones?",
    options: [
      { id: "a", text: "Azure DNS Private Resolver with inbound endpoint" },
      { id: "b", text: "Azure Public DNS" },
      { id: "c", text: "Azure Private Link only" },
      { id: "d", text: "Azure Bastion" },
    ],
    correctAnswers: ["a"],
    explanation:
      "DNS Private Resolver provides inbound/outbound endpoints to bridge DNS between on-prem and Azure private zones.",
    difficulty: "hard",
  },
  {
    id: "az104-051",
    certId: "az-104",
    domainId: "networking",
    type: "single",
    question:
      "Which Azure component lets a VNet route traffic to a network virtual appliance (NVA)?",
    options: [
      { id: "a", text: "User-defined route (UDR) in a route table" },
      { id: "b", text: "BGP peering only" },
      { id: "c", text: "Service endpoint" },
      { id: "d", text: "DNS forwarder" },
    ],
    correctAnswers: ["a"],
    explanation:
      "UDRs override default system routes to send traffic via NVAs (e.g., third-party firewall).",
    difficulty: "medium",
  },
  {
    id: "az104-052",
    certId: "az-104",
    domainId: "networking",
    type: "single",
    question:
      "Which Azure Load Balancer SKU supports availability zones, HTTPS health probes, and outbound rules?",
    options: [
      { id: "a", text: "Standard SKU" },
      { id: "b", text: "Basic SKU" },
      { id: "c", text: "Gateway SKU" },
      { id: "d", text: "Internal classic" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Standard Load Balancer is zone-redundant and supports advanced features; Basic is being retired.",
    difficulty: "easy",
  },
  {
    id: "az104-053",
    certId: "az-104",
    domainId: "networking",
    type: "single",
    question:
      "Which Azure VPN Gateway SKU supports BGP and active-active configurations?",
    options: [
      { id: "a", text: "VpnGw1 or higher (Standard, not Basic)" },
      { id: "b", text: "Basic SKU" },
      { id: "c", text: "Application Gateway v1" },
      { id: "d", text: "ExpressRoute Local" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Basic VPN gateways do not support BGP or active-active; production uses VpnGw1+ SKUs.",
    difficulty: "medium",
  },

  // Additional monitor coverage
  {
    id: "az104-054",
    certId: "az-104",
    domainId: "monitor-maintain",
    type: "single",
    question:
      "Which Azure feature lets you trigger an action group when an alert fires (email, SMS, Logic App, ITSM)?",
    options: [
      { id: "a", text: "Action group on the alert rule" },
      { id: "b", text: "Resource lock" },
      { id: "c", text: "Diagnostic setting" },
      { id: "d", text: "Service health" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Action groups define notification and automation steps that alerts call when triggered.",
    difficulty: "easy",
  },
  {
    id: "az104-055",
    certId: "az-104",
    domainId: "monitor-maintain",
    type: "single",
    question:
      "Which Azure Monitor capability collects guest OS metrics and logs from VMs?",
    options: [
      { id: "a", text: "Azure Monitor Agent (AMA) with Data Collection Rules" },
      { id: "b", text: "Microsoft Monitoring Agent (MMA, retired)" },
      { id: "c", text: "Azure Backup agent" },
      { id: "d", text: "Network Watcher Agent" },
    ],
    correctAnswers: ["a"],
    explanation:
      "AMA replaces the legacy MMA and Telegraf; collection is configured via DCRs.",
    difficulty: "medium",
  },
  {
    id: "az104-056",
    certId: "az-104",
    domainId: "monitor-maintain",
    type: "single",
    question:
      "Which Azure feature centrally manages OS updates across Azure and Arc-enabled servers?",
    options: [
      { id: "a", text: "Azure Update Manager" },
      { id: "b", text: "Azure Backup" },
      { id: "c", text: "Azure Site Recovery" },
      { id: "d", text: "Azure Migrate" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Update Manager replaces Azure Automation Update Management and supports multi-OS update orchestration.",
    difficulty: "medium",
  },
  {
    id: "az104-057",
    certId: "az-104",
    domainId: "monitor-maintain",
    type: "single",
    question:
      "Which feature notifies subscribers about Azure service issues, planned maintenance, and health advisories?",
    options: [
      { id: "a", text: "Azure Service Health" },
      { id: "b", text: "Azure Advisor" },
      { id: "c", text: "Azure Resource Health" },
      { id: "d", text: "Azure Backup" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Service Health surfaces issues affecting your services and supports alerting via action groups.",
    difficulty: "easy",
  },
  {
    id: "az104-058",
    certId: "az-104",
    domainId: "monitor-maintain",
    type: "single",
    question:
      "Which Network Watcher feature captures packets from a VM for offline analysis?",
    options: [
      { id: "a", text: "Packet capture" },
      { id: "b", text: "IP flow verify" },
      { id: "c", text: "Connection troubleshoot" },
      { id: "d", text: "Topology" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Network Watcher Packet Capture stores VM-level network captures to storage for analysis.",
    difficulty: "medium",
  },
  {
    id: "az104-059",
    certId: "az-104",
    domainId: "monitor-maintain",
    type: "single",
    question:
      "Which Azure capability provides health metrics on a specific resource instance (e.g., is my VM available)?",
    options: [
      { id: "a", text: "Azure Resource Health" },
      { id: "b", text: "Azure Service Health" },
      { id: "c", text: "Azure Monitor Workbooks" },
      { id: "d", text: "Cost Management" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Resource Health reports whether your specific resources are healthy or impacted.",
    difficulty: "easy",
  },
  {
    id: "az104-060",
    certId: "az-104",
    domainId: "monitor-maintain",
    type: "single",
    question:
      "Which Azure tool tests recovery readiness with a planned failover for Azure Site Recovery?",
    options: [
      { id: "a", text: "Test failover" },
      { id: "b", text: "Backup restore" },
      { id: "c", text: "Recovery plan only" },
      { id: "d", text: "Failback" },
    ],
    correctAnswers: ["a"],
    explanation:
      "ASR test failover validates DR runbooks without disrupting production.",
    difficulty: "medium",
  },
];
