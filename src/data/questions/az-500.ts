import { Question } from "@/lib/types";

export const az500Questions: Question[] = [
  // Domain: Manage identity and access (25%)
  {
    id: "az500-001",
    certId: "az-500",
    domainId: "identity-access",
    type: "single",
    question:
      "You need to ensure that users can only access Azure resources from compliant devices. What should you configure?",
    options: [
      { id: "a", text: "Azure AD Privileged Identity Management" },
      { id: "b", text: "Conditional Access policy with device compliance requirement" },
      { id: "c", text: "Azure AD Identity Protection" },
      { id: "d", text: "Azure AD access reviews" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Conditional Access policies can require that devices are marked as compliant in Intune before granting access to Azure resources. This ensures only managed, compliant devices can access corporate resources.",
    difficulty: "easy",
  },
  {
    id: "az500-002",
    certId: "az-500",
    domainId: "identity-access",
    type: "single",
    question:
      "Which Azure AD feature should you use to automatically detect and remediate identity-based risks such as leaked credentials?",
    options: [
      { id: "a", text: "Azure AD Conditional Access" },
      { id: "b", text: "Azure AD Privileged Identity Management" },
      { id: "c", text: "Azure AD Identity Protection" },
      { id: "d", text: "Azure AD Application Proxy" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Azure AD Identity Protection uses machine learning to detect identity-based risks such as leaked credentials, anonymous IP address sign-ins, and atypical travel. It can automatically remediate these risks through policies.",
    difficulty: "easy",
  },
  {
    id: "az500-003",
    certId: "az-500",
    domainId: "identity-access",
    type: "single",
    question:
      "You need to provide just-in-time administrative access to Azure AD roles. What should you use?",
    options: [
      { id: "a", text: "Azure AD access reviews" },
      { id: "b", text: "Azure AD Conditional Access" },
      { id: "c", text: "Azure AD Privileged Identity Management (PIM)" },
      { id: "d", text: "Azure AD Multi-Factor Authentication" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Azure AD Privileged Identity Management (PIM) provides just-in-time privileged access to Azure AD and Azure resources. Users can activate eligible roles for a limited time, reducing the risk of standing administrative access.",
    difficulty: "easy",
  },
  {
    id: "az500-004",
    certId: "az-500",
    domainId: "identity-access",
    type: "single",
    question:
      "You need to grant an application access to read secrets from Azure Key Vault without storing credentials in the application code. What should you use?",
    options: [
      { id: "a", text: "Service principal with client secret" },
      { id: "b", text: "Managed identity" },
      { id: "c", text: "Shared access signature" },
      { id: "d", text: "Storage account key" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Managed identities provide an automatically managed identity in Azure AD for applications to use when connecting to resources that support Azure AD authentication, eliminating the need to manage credentials.",
    difficulty: "medium",
  },
  {
    id: "az500-005",
    certId: "az-500",
    domainId: "identity-access",
    type: "multiple",
    question:
      "Which TWO of the following are sign-in risk policies that can be configured in Azure AD Identity Protection? (Select two)",
    options: [
      { id: "a", text: "Require password change for high-risk users" },
      { id: "b", text: "Require MFA for medium and above sign-in risk" },
      { id: "c", text: "Block access for high-risk sign-ins" },
      { id: "d", text: "Automatically delete risky user accounts" },
    ],
    correctAnswers: ["b", "c"],
    explanation:
      "Sign-in risk policies in Identity Protection can require MFA or block access based on the sign-in risk level. User risk policies (not sign-in risk) handle password changes. Automatic deletion of accounts is not a feature.",
    difficulty: "medium",
  },
  {
    id: "az500-006",
    certId: "az-500",
    domainId: "identity-access",
    type: "scenario",
    question:
      "Your company has a hybrid identity infrastructure with Azure AD Connect synchronizing on-premises AD to Azure AD. A security audit requires that all administrative actions in Azure AD be performed with MFA and approval workflows. Administrators should not have permanent role assignments. What should you implement?",
    options: [
      { id: "a", text: "Conditional Access with MFA requirement for all admin portals" },
      { id: "b", text: "Azure AD PIM with eligible role assignments, MFA on activation, and approval required" },
      { id: "c", text: "Azure AD Identity Protection with high-risk user policies" },
      { id: "d", text: "Azure AD access reviews with quarterly review cycles" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure AD PIM with eligible (not permanent) role assignments meets all requirements: just-in-time access (no permanent assignments), MFA on activation, and approval workflows before role activation.",
    difficulty: "hard",
  },
  {
    id: "az500-007",
    certId: "az-500",
    domainId: "identity-access",
    type: "single",
    question:
      "What is the purpose of Azure AD entitlement management?",
    options: [
      { id: "a", text: "To manage multi-factor authentication settings" },
      { id: "b", text: "To automate access package assignments and access reviews for internal and external users" },
      { id: "c", text: "To detect and remediate compromised user accounts" },
      { id: "d", text: "To synchronize on-premises identities to Azure AD" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure AD entitlement management allows organizations to manage identity and access lifecycle at scale by automating access request workflows, access assignments, reviews, and expiration for groups, applications, and SharePoint sites.",
    difficulty: "medium",
  },

  // Domain: Secure networking (20%)
  {
    id: "az500-008",
    certId: "az-500",
    domainId: "networking",
    type: "single",
    question:
      "Which Azure service provides DDoS protection with adaptive tuning, attack analytics, and cost protection?",
    options: [
      { id: "a", text: "Azure Firewall Basic" },
      { id: "b", text: "DDoS Network Protection" },
      { id: "c", text: "Network Security Groups" },
      { id: "d", text: "Azure Application Gateway" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure DDoS Network Protection provides enhanced DDoS mitigation features including adaptive tuning, attack analytics, Azure Monitor integration, and cost protection against DDoS-related resource consumption.",
    difficulty: "easy",
  },
  {
    id: "az500-009",
    certId: "az-500",
    domainId: "networking",
    type: "single",
    question:
      "You need to filter traffic between subnets in a virtual network based on source and destination IP, port, and protocol. What should you use?",
    options: [
      { id: "a", text: "Azure Firewall" },
      { id: "b", text: "Network Security Groups (NSGs)" },
      { id: "c", text: "Azure Front Door" },
      { id: "d", text: "Azure Traffic Manager" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Network Security Groups (NSGs) contain security rules that filter network traffic between Azure resources in a virtual network. Rules can be based on source/destination IP, port, and protocol.",
    difficulty: "easy",
  },
  {
    id: "az500-010",
    certId: "az-500",
    domainId: "networking",
    type: "single",
    question:
      "You need to restrict access to an Azure Storage account so it is only accessible from a specific virtual network subnet. What should you configure?",
    options: [
      { id: "a", text: "Storage account access keys" },
      { id: "b", text: "Shared access signatures" },
      { id: "c", text: "Service endpoints and storage firewall rules" },
      { id: "d", text: "Azure AD Conditional Access" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Virtual network service endpoints combined with storage firewall rules allow you to restrict access to a storage account from specific virtual network subnets, blocking all access from the public internet.",
    difficulty: "medium",
  },
  {
    id: "az500-011",
    certId: "az-500",
    domainId: "networking",
    type: "single",
    question:
      "What is the primary advantage of Azure Private Link over service endpoints?",
    options: [
      { id: "a", text: "Private Link is free while service endpoints cost extra" },
      { id: "b", text: "Private Link assigns a private IP address from your VNet to the service, keeping traffic entirely on the Microsoft network" },
      { id: "c", text: "Private Link supports more Azure services than service endpoints" },
      { id: "d", text: "Private Link does not require any DNS configuration" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Private Link brings Azure services into your virtual network by assigning a private IP address. Traffic between your VNet and the service travels entirely over the Microsoft backbone network, eliminating exposure to the public internet.",
    difficulty: "medium",
  },
  {
    id: "az500-012",
    certId: "az-500",
    domainId: "networking",
    type: "scenario",
    question:
      "Your organization has multiple VNets and requires centralized network traffic inspection and filtering with FQDN-based rules, threat intelligence-based filtering, and TLS inspection. Which solution should you deploy?",
    options: [
      { id: "a", text: "Network Security Groups on each subnet" },
      { id: "b", text: "Azure Firewall Premium in a hub VNet" },
      { id: "c", text: "Azure DDoS Protection Standard" },
      { id: "d", text: "Azure Application Gateway with WAF" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Firewall Premium provides FQDN-based filtering, threat intelligence-based filtering, TLS inspection, and IDPS. Deployed in a hub VNet in a hub-spoke topology, it provides centralized traffic inspection across multiple VNets.",
    difficulty: "hard",
  },
  {
    id: "az500-013",
    certId: "az-500",
    domainId: "networking",
    type: "single",
    question:
      "Which Azure service should you use to protect web applications from common exploits such as SQL injection and cross-site scripting?",
    options: [
      { id: "a", text: "Azure Firewall" },
      { id: "b", text: "Network Security Groups" },
      { id: "c", text: "Azure Web Application Firewall (WAF)" },
      { id: "d", text: "Azure DDoS Protection" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Azure Web Application Firewall (WAF) provides centralized protection for web applications from common exploits and vulnerabilities including SQL injection and cross-site scripting. It can be deployed with Application Gateway, Front Door, or CDN.",
    difficulty: "easy",
  },

  // Domain: Secure compute, storage, and databases (20%)
  {
    id: "az500-014",
    certId: "az-500",
    domainId: "compute-storage-databases",
    type: "single",
    question:
      "You need to encrypt data at rest in Azure SQL Database using a customer-managed key stored in Azure Key Vault. What feature should you configure?",
    options: [
      { id: "a", text: "Always Encrypted" },
      { id: "b", text: "Transparent Data Encryption (TDE) with customer-managed key" },
      { id: "c", text: "Dynamic data masking" },
      { id: "d", text: "Row-level security" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Transparent Data Encryption (TDE) with customer-managed keys (also called Bring Your Own Key) allows you to encrypt Azure SQL Database data at rest using a key stored in Azure Key Vault that you manage.",
    difficulty: "medium",
  },
  {
    id: "az500-015",
    certId: "az-500",
    domainId: "compute-storage-databases",
    type: "single",
    question:
      "Which Azure SQL Database feature ensures that sensitive data is never seen in plaintext inside the database engine?",
    options: [
      { id: "a", text: "Transparent Data Encryption" },
      { id: "b", text: "Dynamic data masking" },
      { id: "c", text: "Always Encrypted" },
      { id: "d", text: "Azure Defender for SQL" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Always Encrypted ensures that sensitive data is never seen in plaintext inside the database engine. Data is encrypted in the client application using keys that are never revealed to the database engine.",
    difficulty: "medium",
  },
  {
    id: "az500-016",
    certId: "az-500",
    domainId: "compute-storage-databases",
    type: "single",
    question:
      "You need to ensure that virtual machines in Azure are encrypted at rest. Which feature provides OS and data disk encryption for Azure VMs?",
    options: [
      { id: "a", text: "Azure Disk Encryption" },
      { id: "b", text: "Storage Service Encryption" },
      { id: "c", text: "Azure Information Protection" },
      { id: "d", text: "Azure Key Vault soft delete" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Azure Disk Encryption uses BitLocker (Windows) or DM-Crypt (Linux) to provide volume encryption for the OS and data disks of Azure VMs. It is integrated with Azure Key Vault to control and manage disk encryption keys.",
    difficulty: "easy",
  },
  {
    id: "az500-017",
    certId: "az-500",
    domainId: "compute-storage-databases",
    type: "single",
    question:
      "What does Microsoft Defender for Containers provide?",
    options: [
      { id: "a", text: "Automatic patching of container host operating systems" },
      { id: "b", text: "Runtime threat protection, vulnerability assessment, and security recommendations for containers and Kubernetes" },
      { id: "c", text: "Container image storage and distribution" },
      { id: "d", text: "Automated container deployment pipelines" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Defender for Containers provides runtime threat protection, vulnerability assessment of container images, and security recommendations for AKS clusters and other Kubernetes environments.",
    difficulty: "medium",
  },
  {
    id: "az500-018",
    certId: "az-500",
    domainId: "compute-storage-databases",
    type: "single",
    question:
      "You need to prevent accidental deletion of secrets, keys, and certificates in Azure Key Vault. Which TWO features should you enable?",
    options: [
      { id: "a", text: "Soft delete and purge protection" },
      { id: "b", text: "Access policies and RBAC" },
      { id: "c", text: "Private endpoint and firewall" },
      { id: "d", text: "Managed HSM and key rotation" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Soft delete preserves deleted vaults and vault objects for a configurable retention period. Purge protection prevents permanent deletion of vaults and vault objects during the retention period, ensuring recovery is possible.",
    difficulty: "easy",
  },
  {
    id: "az500-019",
    certId: "az-500",
    domainId: "compute-storage-databases",
    type: "scenario",
    question:
      "A healthcare application stores patient data in Azure SQL Database. Regulations require that DBAs can manage the database but cannot see patient names or SSNs, even in query results. Which feature should you implement?",
    options: [
      { id: "a", text: "Transparent Data Encryption with customer-managed keys" },
      { id: "b", text: "Dynamic data masking" },
      { id: "c", text: "Always Encrypted with column-level encryption" },
      { id: "d", text: "Row-level security" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Always Encrypted ensures that sensitive data is encrypted at the column level and is never exposed in plaintext to the database engine or DBAs. Only the client application with the correct keys can decrypt the data.",
    difficulty: "hard",
  },

  // Domain: Manage security operations (25%)
  {
    id: "az500-020",
    certId: "az-500",
    domainId: "security-operations",
    type: "single",
    question:
      "Which Azure service provides a cloud-native SIEM and SOAR solution?",
    options: [
      { id: "a", text: "Microsoft Defender for Cloud" },
      { id: "b", text: "Microsoft Sentinel" },
      { id: "c", text: "Azure Monitor" },
      { id: "d", text: "Azure Policy" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Sentinel is a cloud-native Security Information and Event Management (SIEM) and Security Orchestration, Automation, and Response (SOAR) solution that provides intelligent security analytics and threat intelligence.",
    difficulty: "easy",
  },
  {
    id: "az500-021",
    certId: "az-500",
    domainId: "security-operations",
    type: "single",
    question:
      "In Microsoft Sentinel, what are analytics rules used for?",
    options: [
      { id: "a", text: "Collecting logs from data sources" },
      { id: "b", text: "Detecting threats and creating incidents from log data" },
      { id: "c", text: "Automating incident response with playbooks" },
      { id: "d", text: "Visualizing security data in dashboards" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Analytics rules in Microsoft Sentinel are used to detect threats by analyzing ingested data. When a rule matches, it creates an incident that security analysts can investigate and remediate.",
    difficulty: "easy",
  },
  {
    id: "az500-022",
    certId: "az-500",
    domainId: "security-operations",
    type: "single",
    question:
      "What is the primary purpose of Microsoft Defender for Cloud's Secure Score?",
    options: [
      { id: "a", text: "To measure the cost efficiency of your Azure environment" },
      { id: "b", text: "To provide a numerical representation of your security posture with recommendations to improve it" },
      { id: "c", text: "To track the number of active threats detected" },
      { id: "d", text: "To measure compliance with Azure SLAs" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Secure Score in Microsoft Defender for Cloud provides a numerical measurement of your organization's security posture. It includes actionable recommendations to improve your score by remediating security findings.",
    difficulty: "easy",
  },
  {
    id: "az500-023",
    certId: "az-500",
    domainId: "security-operations",
    type: "single",
    question:
      "You need to automatically respond to a Microsoft Sentinel incident by isolating a compromised VM. What should you use?",
    options: [
      { id: "a", text: "Analytics rules" },
      { id: "b", text: "Workbooks" },
      { id: "c", text: "Playbooks (Logic Apps)" },
      { id: "d", text: "Data connectors" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Playbooks in Microsoft Sentinel are built on Azure Logic Apps and provide automated response capabilities. They can be triggered by incidents or alerts to perform actions like isolating VMs, blocking IPs, or sending notifications.",
    difficulty: "medium",
  },
  {
    id: "az500-024",
    certId: "az-500",
    domainId: "security-operations",
    type: "single",
    question:
      "Which Microsoft Defender for Cloud feature provides adaptive application controls?",
    options: [
      { id: "a", text: "It recommends allowlist rules for applications running on your VMs" },
      { id: "b", text: "It automatically patches vulnerable applications" },
      { id: "c", text: "It encrypts application data at rest" },
      { id: "d", text: "It provides DDoS protection for web applications" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Adaptive application controls in Microsoft Defender for Cloud use machine learning to analyze running processes and recommend allowlist rules. This helps harden machines against malware by only allowing approved applications to run.",
    difficulty: "medium",
  },
  {
    id: "az500-025",
    certId: "az-500",
    domainId: "security-operations",
    type: "scenario",
    question:
      "Your security team needs to investigate a potential breach. They need to correlate sign-in logs, Azure activity logs, and third-party firewall logs in a single pane of glass with KQL queries. They also want automated playbooks to trigger when high-severity incidents are detected. What should you deploy?",
    options: [
      { id: "a", text: "Azure Monitor with Log Analytics workspace and alert rules" },
      { id: "b", text: "Microsoft Sentinel with data connectors, analytics rules, and playbooks" },
      { id: "c", text: "Microsoft Defender for Cloud with enhanced security features" },
      { id: "d", text: "Azure Policy with compliance dashboards" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Sentinel provides a unified SIEM/SOAR platform that can ingest logs from multiple sources via data connectors, correlate them using KQL-based analytics rules, and trigger automated playbooks for incident response.",
    difficulty: "hard",
  },
];
