import { Question } from "@/lib/types";

export const az900Questions: Question[] = [
  // Domain: Describe cloud concepts (25%)
  {
    id: "az900-001",
    certId: "az-900",
    domainId: "cloud-concepts",
    type: "single",
    question:
      "Which of the following best describes the benefit of 'high availability' in cloud computing?",
    options: [
      { id: "a", text: "The ability to quickly increase or decrease resources" },
      { id: "b", text: "The ability to ensure services remain accessible with minimal downtime" },
      { id: "c", text: "The ability to recover from a disaster in a different region" },
      { id: "d", text: "The ability to predict future costs" },
    ],
    correctAnswers: ["b"],
    explanation:
      "High availability refers to the ability to keep services up and running with minimal downtime. Azure achieves this through redundancy, load balancing, and availability zones/sets.",
    difficulty: "easy",
  },
  {
    id: "az900-002",
    certId: "az-900",
    domainId: "cloud-concepts",
    type: "single",
    question:
      "Which cloud computing model shifts the most responsibility to the cloud provider?",
    options: [
      { id: "a", text: "Infrastructure as a Service (IaaS)" },
      { id: "b", text: "Platform as a Service (PaaS)" },
      { id: "c", text: "Software as a Service (SaaS)" },
      { id: "d", text: "On-premises" },
    ],
    correctAnswers: ["c"],
    explanation:
      "SaaS shifts the most responsibility to the cloud provider. The provider manages infrastructure, platform, and the application itself. The customer is only responsible for their data, devices, and accounts.",
    difficulty: "easy",
  },
  {
    id: "az900-003",
    certId: "az-900",
    domainId: "cloud-concepts",
    type: "single",
    question:
      "Which cloud concept refers to the ability to quickly expand or decrease computing resources and services as needed?",
    options: [
      { id: "a", text: "Agility" },
      { id: "b", text: "Elasticity" },
      { id: "c", text: "Fault tolerance" },
      { id: "d", text: "Disaster recovery" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Elasticity is the ability to automatically or quickly expand or decrease computing resources as needed. This ensures you have the right amount of resources to match demand.",
    difficulty: "easy",
  },
  {
    id: "az900-004",
    certId: "az-900",
    domainId: "cloud-concepts",
    type: "single",
    question:
      "What type of expenditure model does cloud computing primarily use?",
    options: [
      { id: "a", text: "Capital expenditure (CapEx)" },
      { id: "b", text: "Operational expenditure (OpEx)" },
      { id: "c", text: "Fixed cost model" },
      { id: "d", text: "Depreciation model" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Cloud computing primarily uses an operational expenditure (OpEx) model where you pay for services as you use them, similar to a utility bill. This contrasts with traditional CapEx where you buy and own hardware upfront.",
    difficulty: "easy",
  },
  {
    id: "az900-005",
    certId: "az-900",
    domainId: "cloud-concepts",
    type: "single",
    question:
      "Which benefit of cloud computing allows you to deploy applications in data centers around the world?",
    options: [
      { id: "a", text: "Scalability" },
      { id: "b", text: "Elasticity" },
      { id: "c", text: "Geo-distribution" },
      { id: "d", text: "Agility" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Geo-distribution allows you to deploy applications and data to regional data centers around the world, ensuring that your customers always have the best performance in their region.",
    difficulty: "easy",
  },
  {
    id: "az900-006",
    certId: "az-900",
    domainId: "cloud-concepts",
    type: "single",
    question:
      "In the shared responsibility model for a PaaS deployment, who is responsible for patching the operating system?",
    options: [
      { id: "a", text: "The customer" },
      { id: "b", text: "The cloud provider" },
      { id: "c", text: "Shared responsibility" },
      { id: "d", text: "A third-party vendor" },
    ],
    correctAnswers: ["b"],
    explanation:
      "In a PaaS model, the cloud provider is responsible for the operating system, including patching. The customer is responsible for the applications and data deployed on the platform.",
    difficulty: "medium",
  },

  // Domain: Describe Azure architecture and services (35%)
  {
    id: "az900-007",
    certId: "az-900",
    domainId: "azure-architecture",
    type: "single",
    question:
      "What is an Azure region?",
    options: [
      { id: "a", text: "A single data center in a specific geographic location" },
      { id: "b", text: "A set of data centers deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network" },
      { id: "c", text: "A group of Azure subscriptions" },
      { id: "d", text: "A virtual network boundary" },
    ],
    correctAnswers: ["b"],
    explanation:
      "An Azure region is a set of data centers deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network. Azure has 60+ regions available in 140+ countries.",
    difficulty: "easy",
  },
  {
    id: "az900-008",
    certId: "az-900",
    domainId: "azure-architecture",
    type: "single",
    question:
      "What are Azure Availability Zones?",
    options: [
      { id: "a", text: "Different Azure regions paired for disaster recovery" },
      { id: "b", text: "Physically separate locations within an Azure region, each with independent power, cooling, and networking" },
      { id: "c", text: "Virtual network subnets in different resource groups" },
      { id: "d", text: "Different pricing tiers for Azure services" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Availability Zones are physically separate locations within an Azure region. Each zone has independent power, cooling, and networking, providing protection against datacenter-level failures.",
    difficulty: "easy",
  },
  {
    id: "az900-009",
    certId: "az-900",
    domainId: "azure-architecture",
    type: "single",
    question:
      "Which Azure service provides serverless compute that allows you to run code without managing infrastructure?",
    options: [
      { id: "a", text: "Azure Virtual Machines" },
      { id: "b", text: "Azure Functions" },
      { id: "c", text: "Azure Kubernetes Service" },
      { id: "d", text: "Azure Virtual Desktop" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Functions is a serverless compute service that lets you run event-triggered code without having to manage infrastructure. You only pay for the compute time consumed.",
    difficulty: "easy",
  },
  {
    id: "az900-010",
    certId: "az-900",
    domainId: "azure-architecture",
    type: "single",
    question:
      "Which Azure service provides a fully managed relational database with built-in intelligence?",
    options: [
      { id: "a", text: "Azure Cosmos DB" },
      { id: "b", text: "Azure SQL Database" },
      { id: "c", text: "Azure Blob Storage" },
      { id: "d", text: "Azure Table Storage" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure SQL Database is a fully managed relational database service with built-in intelligence that includes automatic tuning, threat detection, and automatic backups.",
    difficulty: "easy",
  },
  {
    id: "az900-011",
    certId: "az-900",
    domainId: "azure-architecture",
    type: "single",
    question:
      "What is the purpose of Azure Resource Manager (ARM)?",
    options: [
      { id: "a", text: "To provide DNS resolution for Azure resources" },
      { id: "b", text: "To provide a management layer for creating, updating, and deleting resources in your Azure account" },
      { id: "c", text: "To monitor the performance of Azure resources" },
      { id: "d", text: "To provide network connectivity between virtual networks" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Resource Manager (ARM) is the deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources through a consistent interface, whether using the portal, CLI, or APIs.",
    difficulty: "easy",
  },
  {
    id: "az900-012",
    certId: "az-900",
    domainId: "azure-architecture",
    type: "single",
    question:
      "Which Azure storage redundancy option replicates your data synchronously three times within a single region across three availability zones?",
    options: [
      { id: "a", text: "Locally redundant storage (LRS)" },
      { id: "b", text: "Zone-redundant storage (ZRS)" },
      { id: "c", text: "Geo-redundant storage (GRS)" },
      { id: "d", text: "Read-access geo-redundant storage (RA-GRS)" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Zone-redundant storage (ZRS) replicates your data synchronously across three Azure availability zones in the primary region, providing high availability and protection against datacenter-level failures.",
    difficulty: "medium",
  },
  {
    id: "az900-013",
    certId: "az-900",
    domainId: "azure-architecture",
    type: "single",
    question:
      "Which Azure service allows you to build, deploy, and scale web apps on a fully managed platform?",
    options: [
      { id: "a", text: "Azure Virtual Machines" },
      { id: "b", text: "Azure App Service" },
      { id: "c", text: "Azure Container Instances" },
      { id: "d", text: "Azure Batch" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure App Service is a fully managed PaaS offering for building, deploying, and scaling web apps. It supports multiple languages and frameworks and provides built-in CI/CD, custom domains, and SSL certificates.",
    difficulty: "easy",
  },
  {
    id: "az900-014",
    certId: "az-900",
    domainId: "azure-architecture",
    type: "multiple",
    question:
      "Which TWO of the following are types of Azure Blob Storage access tiers? (Select two)",
    options: [
      { id: "a", text: "Hot" },
      { id: "b", text: "Premium" },
      { id: "c", text: "Cool" },
      { id: "d", text: "Standard" },
    ],
    correctAnswers: ["a", "c"],
    explanation:
      "Azure Blob Storage has three access tiers: Hot (frequently accessed data), Cool (infrequently accessed data stored for at least 30 days), and Archive (rarely accessed data stored for at least 180 days).",
    difficulty: "easy",
  },

  // Domain: Describe Azure management and governance (30%)
  {
    id: "az900-015",
    certId: "az-900",
    domainId: "management-governance",
    type: "single",
    question:
      "Which Azure service helps you estimate the cost of running workloads in Azure?",
    options: [
      { id: "a", text: "Azure Advisor" },
      { id: "b", text: "Azure Pricing Calculator" },
      { id: "c", text: "Azure Cost Management" },
      { id: "d", text: "Azure Service Health" },
    ],
    correctAnswers: ["b"],
    explanation:
      "The Azure Pricing Calculator is a tool that helps you estimate the costs of Azure products and services before you deploy them. You can configure and estimate the costs for specific scenarios.",
    difficulty: "easy",
  },
  {
    id: "az900-016",
    certId: "az-900",
    domainId: "management-governance",
    type: "single",
    question:
      "What is the purpose of Azure Policy?",
    options: [
      { id: "a", text: "To manage user identities and access" },
      { id: "b", text: "To create, assign, and manage policies that enforce rules and effects over your resources" },
      { id: "c", text: "To monitor the performance of Azure resources" },
      { id: "d", text: "To provide recommendations for high availability" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Policy is a service for creating, assigning, and managing policies. These policies enforce rules and effects on resources to keep them compliant with corporate standards and service level agreements.",
    difficulty: "easy",
  },
  {
    id: "az900-017",
    certId: "az-900",
    domainId: "management-governance",
    type: "single",
    question:
      "Which feature allows you to organize Azure resources into logical containers for management, access control, and billing?",
    options: [
      { id: "a", text: "Resource groups" },
      { id: "b", text: "Availability zones" },
      { id: "c", text: "Virtual networks" },
      { id: "d", text: "Azure regions" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Resource groups are logical containers that hold related Azure resources. They provide a way to manage, monitor, and control access to resources as a group, and are also used for billing purposes.",
    difficulty: "easy",
  },
  {
    id: "az900-018",
    certId: "az-900",
    domainId: "management-governance",
    type: "single",
    question:
      "What does Azure Role-Based Access Control (RBAC) allow you to do?",
    options: [
      { id: "a", text: "Encrypt data at rest" },
      { id: "b", text: "Assign fine-grained access permissions to users, groups, and service principals for Azure resources" },
      { id: "c", text: "Monitor application performance" },
      { id: "d", text: "Automatically scale resources based on demand" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure RBAC allows you to manage who has access to Azure resources, what they can do with those resources, and what areas they have access to. Roles can be assigned at different scopes (management group, subscription, resource group, or resource).",
    difficulty: "easy",
  },
  {
    id: "az900-019",
    certId: "az-900",
    domainId: "management-governance",
    type: "single",
    question:
      "Which tool provides personalized recommendations to improve the reliability, security, performance, cost-effectiveness, and operational excellence of your Azure resources?",
    options: [
      { id: "a", text: "Azure Monitor" },
      { id: "b", text: "Azure Advisor" },
      { id: "c", text: "Azure Policy" },
      { id: "d", text: "Azure Blueprints" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Advisor analyzes your deployed Azure resources and usage patterns and provides personalized recommendations across five categories: Reliability, Security, Performance, Cost, and Operational Excellence.",
    difficulty: "easy",
  },
  {
    id: "az900-020",
    certId: "az-900",
    domainId: "management-governance",
    type: "single",
    question:
      "What is the purpose of Azure tags?",
    options: [
      { id: "a", text: "To restrict access to Azure resources" },
      { id: "b", text: "To logically organize resources with name-value pairs for management, billing, and automation purposes" },
      { id: "c", text: "To encrypt Azure resources" },
      { id: "d", text: "To replicate resources across regions" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure tags are name-value pairs that you apply to Azure resources, resource groups, and subscriptions to logically organize them. Tags are useful for managing resources, tracking costs, and automating tasks.",
    difficulty: "easy",
  },
  {
    id: "az900-021",
    certId: "az-900",
    domainId: "management-governance",
    type: "single",
    question:
      "Which Azure governance tool allows you to define a repeatable set of Azure resources that implement and adhere to standards, patterns, and requirements?",
    options: [
      { id: "a", text: "Azure Policy" },
      { id: "b", text: "Azure Blueprints" },
      { id: "c", text: "Azure Resource Manager templates" },
      { id: "d", text: "Azure Monitor" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Blueprints enables cloud architects and IT teams to define a repeatable set of Azure resources that implement and adhere to organizational standards, patterns, and requirements. Blueprints can include role assignments, policy assignments, ARM templates, and resource groups.",
    difficulty: "medium",
  },
  {
    id: "az900-022",
    certId: "az-900",
    domainId: "management-governance",
    type: "single",
    question:
      "What is the purpose of the Azure Total Cost of Ownership (TCO) Calculator?",
    options: [
      { id: "a", text: "To estimate the cost savings of migrating workloads from on-premises to Azure" },
      { id: "b", text: "To monitor current Azure spending" },
      { id: "c", text: "To set spending limits on Azure subscriptions" },
      { id: "d", text: "To compare Azure pricing with other cloud providers" },
    ],
    correctAnswers: ["a"],
    explanation:
      "The Azure TCO Calculator helps estimate the cost savings you can realize by migrating workloads to Azure. You enter details about your current on-premises infrastructure, and it generates a comparison report.",
    difficulty: "easy",
  },
  {
    id: "az900-023",
    certId: "az-900",
    domainId: "management-governance",
    type: "single",
    question:
      "Which hierarchy level in Azure management is above subscriptions and allows you to apply policies and RBAC across multiple subscriptions?",
    options: [
      { id: "a", text: "Resource groups" },
      { id: "b", text: "Management groups" },
      { id: "c", text: "Azure regions" },
      { id: "d", text: "Tenants" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Management groups provide a governance scope above subscriptions. You can organize subscriptions into management groups and apply policies, RBAC, and budgets that are inherited by all subscriptions within the group.",
    difficulty: "medium",
  },
  {
    id: "az900-024",
    certId: "az-900",
    domainId: "management-governance",
    type: "scenario",
    question:
      "Your company is migrating to Azure and needs to ensure that all virtual machines are deployed only in the East US and West US regions, and that all resources have a 'CostCenter' tag. What should you implement?",
    options: [
      { id: "a", text: "Azure RBAC roles that restrict region selection" },
      { id: "b", text: "Azure Policy definitions for allowed locations and required tags" },
      { id: "c", text: "Azure Blueprints with ARM templates for specific regions" },
      { id: "d", text: "Azure Advisor recommendations for region selection" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Policy is the best solution for enforcing rules like allowed resource locations and requiring specific tags. The 'Allowed locations' built-in policy restricts regions, and the 'Require a tag' policy ensures resources have the CostCenter tag.",
    difficulty: "medium",
  },
];
