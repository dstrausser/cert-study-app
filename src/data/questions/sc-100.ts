import { Question } from "@/lib/types";

export const sc100Questions: Question[] = [
  // Domain: Zero Trust Strategy and Architecture (30%)
  {
    id: "sc100-001",
    certId: "sc-100",
    domainId: "zero-trust",
    type: "single",
    question:
      "Your organization is implementing a Zero Trust architecture. Which principle should be applied to all resource access requests?",
    options: [
      { id: "a", text: "Trust but verify" },
      { id: "b", text: "Verify explicitly" },
      { id: "c", text: "Allow by default, deny by exception" },
      { id: "d", text: "Trust internal network traffic" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Zero Trust is based on the principle of 'never trust, always verify.' Every access request must be explicitly verified regardless of where it originates or what resource it accesses.",
    difficulty: "easy",
  },
  {
    id: "sc100-002",
    certId: "sc-100",
    domainId: "zero-trust",
    type: "single",
    question:
      "Which of the following is NOT one of the three core principles of Zero Trust?",
    options: [
      { id: "a", text: "Verify explicitly" },
      { id: "b", text: "Use least privilege access" },
      { id: "c", text: "Assume breach" },
      { id: "d", text: "Trust internal networks" },
    ],
    correctAnswers: ["d"],
    explanation:
      "The three core principles of Zero Trust are: Verify explicitly, Use least privilege access, and Assume breach. Trusting internal networks contradicts the Zero Trust model.",
    difficulty: "easy",
  },
  {
    id: "sc100-003",
    certId: "sc-100",
    domainId: "zero-trust",
    type: "single",
    question:
      "You need to design a Zero Trust identity strategy. Which Microsoft service should be the primary identity provider?",
    options: [
      { id: "a", text: "Active Directory Domain Services" },
      { id: "b", text: "Microsoft Entra ID (Azure AD)" },
      { id: "c", text: "Azure Key Vault" },
      { id: "d", text: "Microsoft Defender for Identity" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Entra ID (formerly Azure AD) is the primary cloud-based identity provider in a Zero Trust architecture, providing authentication, conditional access, and identity governance.",
    difficulty: "easy",
  },
  {
    id: "sc100-004",
    certId: "sc-100",
    domainId: "zero-trust",
    type: "single",
    question:
      "Which technology should you recommend to enforce device compliance before granting access to corporate resources?",
    options: [
      { id: "a", text: "Azure Firewall" },
      { id: "b", text: "Conditional Access policies" },
      { id: "c", text: "Azure Private Link" },
      { id: "d", text: "Network Security Groups" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Conditional Access policies in Microsoft Entra ID can evaluate device compliance status from Microsoft Intune and grant or deny access based on whether the device meets compliance requirements.",
    difficulty: "medium",
  },
  {
    id: "sc100-005",
    certId: "sc-100",
    domainId: "zero-trust",
    type: "single",
    question:
      "In a Zero Trust network architecture, which approach replaces traditional VPN for remote access to applications?",
    options: [
      { id: "a", text: "Site-to-site VPN with forced tunneling" },
      { id: "b", text: "Microsoft Entra Private Access (ZTNA)" },
      { id: "c", text: "ExpressRoute with private peering" },
      { id: "d", text: "Azure Bastion" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Entra Private Access provides Zero Trust Network Access (ZTNA), replacing traditional VPN by providing identity-centric, app-level access without exposing the entire network.",
    difficulty: "medium",
  },
  {
    id: "sc100-006",
    certId: "sc-100",
    domainId: "zero-trust",
    type: "single",
    question:
      "Which Microsoft technology provides continuous access evaluation to revoke sessions in near real-time when conditions change?",
    options: [
      { id: "a", text: "Azure AD B2C" },
      { id: "b", text: "Continuous Access Evaluation (CAE)" },
      { id: "c", text: "Privileged Identity Management" },
      { id: "d", text: "Azure Monitor" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Continuous Access Evaluation (CAE) enables Microsoft Entra ID and resource providers to communicate in near real-time, revoking access when conditions change such as user location, device state, or risk level.",
    difficulty: "medium",
  },
  {
    id: "sc100-007",
    certId: "sc-100",
    domainId: "zero-trust",
    type: "multiple",
    question:
      "Which TWO of the following are pillars of the Microsoft Zero Trust deployment model? (Select two)",
    options: [
      { id: "a", text: "Identity" },
      { id: "b", text: "Physical security" },
      { id: "c", text: "Endpoints" },
      { id: "d", text: "Social engineering prevention" },
    ],
    correctAnswers: ["a", "c"],
    explanation:
      "The six pillars of Zero Trust are: Identity, Endpoints, Data, Apps, Infrastructure, and Network. Physical security and social engineering prevention are not pillars of the Zero Trust model.",
    difficulty: "easy",
  },
  {
    id: "sc100-008",
    certId: "sc-100",
    domainId: "zero-trust",
    type: "single",
    question:
      "You are designing micro-segmentation for your Azure virtual networks. Which service should you use to control traffic between subnets?",
    options: [
      { id: "a", text: "Azure DDoS Protection" },
      { id: "b", text: "Network Security Groups (NSGs)" },
      { id: "c", text: "Azure Front Door" },
      { id: "d", text: "Azure CDN" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Network Security Groups (NSGs) provide micro-segmentation by filtering network traffic between subnets and network interfaces, enabling granular control over east-west traffic within a virtual network.",
    difficulty: "easy",
  },
  {
    id: "sc100-009",
    certId: "sc-100",
    domainId: "zero-trust",
    type: "single",
    question:
      "Which approach should you recommend for securing privileged access in a Zero Trust model?",
    options: [
      { id: "a", text: "Permanent global administrator accounts for all IT staff" },
      { id: "b", text: "Just-In-Time access using Privileged Identity Management" },
      { id: "c", text: "Shared admin accounts with strong passwords" },
      { id: "d", text: "VPN-only access for admin tasks" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Privileged Identity Management (PIM) provides Just-In-Time (JIT) access, requiring users to activate privileged roles only when needed, with time-limited access and approval workflows.",
    difficulty: "medium",
  },
  {
    id: "sc100-010",
    certId: "sc-100",
    domainId: "zero-trust",
    type: "scenario",
    question:
      "Contoso Ltd. has 5,000 employees working remotely. They use Microsoft 365 and have hybrid Azure AD join for devices. Users report being prompted for MFA too frequently. You need to reduce MFA prompts while maintaining security. What should you recommend?",
    options: [
      { id: "a", text: "Disable MFA for trusted locations" },
      { id: "b", text: "Configure token lifetime policies to extend session duration to 30 days" },
      { id: "c", text: "Implement authentication strengths and configure sign-in frequency based on risk" },
      { id: "d", text: "Switch to password-only authentication" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Authentication strengths combined with risk-based sign-in frequency policies allow you to require stronger auth methods while reducing prompts for low-risk sessions. This balances security with user experience.",
    difficulty: "hard",
  },
  {
    id: "sc100-011",
    certId: "sc-100",
    domainId: "zero-trust",
    type: "single",
    question:
      "Which Microsoft service should you recommend to provide secure internet access for users without a traditional proxy appliance?",
    options: [
      { id: "a", text: "Azure Application Gateway" },
      { id: "b", text: "Microsoft Entra Internet Access" },
      { id: "c", text: "Azure Traffic Manager" },
      { id: "d", text: "Microsoft Defender for Endpoint" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Entra Internet Access is a Security Service Edge (SSE) solution that provides secure internet access through Microsoft's global network, replacing traditional proxy appliances with identity-aware web filtering.",
    difficulty: "medium",
  },
  {
    id: "sc100-012",
    certId: "sc-100",
    domainId: "zero-trust",
    type: "single",
    question:
      "In the Zero Trust Rapid Modernization Plan (RaMP), which initiative should be prioritized first?",
    options: [
      { id: "a", text: "Data encryption at rest" },
      { id: "b", text: "Explicitly validate trust for all access requests" },
      { id: "c", text: "Network segmentation" },
      { id: "d", text: "Application modernization" },
    ],
    correctAnswers: ["b"],
    explanation:
      "The Zero Trust RaMP prioritizes explicitly validating trust for all access requests as the first initiative, as identity is the foundational control plane for Zero Trust.",
    difficulty: "hard",
  },

  // Domain: GRC (10-15%)
  {
    id: "sc100-013",
    certId: "sc-100",
    domainId: "grc",
    type: "single",
    question:
      "Which Microsoft service provides a centralized view of your organization's compliance posture across multiple regulations?",
    options: [
      { id: "a", text: "Microsoft Purview Compliance Manager" },
      { id: "b", text: "Azure Policy" },
      { id: "c", text: "Microsoft Sentinel" },
      { id: "d", text: "Azure Advisor" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft Purview Compliance Manager provides a centralized dashboard to assess and manage compliance across multiple regulatory standards including GDPR, HIPAA, ISO 27001, and more.",
    difficulty: "easy",
  },
  {
    id: "sc100-014",
    certId: "sc-100",
    domainId: "grc",
    type: "single",
    question:
      "You need to ensure that all Azure resources are deployed only to approved regions. Which service should you use?",
    options: [
      { id: "a", text: "Azure Blueprints" },
      { id: "b", text: "Azure Policy" },
      { id: "c", text: "Microsoft Defender for Cloud" },
      { id: "d", text: "Azure Resource Manager locks" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Policy can enforce that resources are only deployed to approved regions using the 'Allowed locations' built-in policy definition, preventing non-compliant deployments.",
    difficulty: "easy",
  },
  {
    id: "sc100-015",
    certId: "sc-100",
    domainId: "grc",
    type: "single",
    question:
      "Which framework should you recommend for evaluating the security posture of cloud service providers?",
    options: [
      { id: "a", text: "MITRE ATT&CK" },
      { id: "b", text: "Cloud Security Alliance (CSA) STAR" },
      { id: "c", text: "OWASP Top 10" },
      { id: "d", text: "CIS Benchmarks" },
    ],
    correctAnswers: ["b"],
    explanation:
      "The Cloud Security Alliance (CSA) Security, Trust, Assurance, and Risk (STAR) program provides a framework for evaluating cloud service provider security through self-assessment, third-party audit, and continuous monitoring.",
    difficulty: "medium",
  },
  {
    id: "sc100-016",
    certId: "sc-100",
    domainId: "grc",
    type: "single",
    question:
      "Which tool should you use to create a risk register and track risk mitigation activities in Microsoft's ecosystem?",
    options: [
      { id: "a", text: "Microsoft Purview Compliance Manager" },
      { id: "b", text: "Microsoft Secure Score" },
      { id: "c", text: "Azure Advisor" },
      { id: "d", text: "Microsoft Defender for Cloud" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft Purview Compliance Manager includes improvement actions that serve as risk mitigation activities and provides a compliance score that can help track risk posture over time.",
    difficulty: "medium",
  },
  {
    id: "sc100-017",
    certId: "sc-100",
    domainId: "grc",
    type: "single",
    question:
      "Your organization must comply with GDPR data residency requirements. Which Azure feature helps ensure data stays within specific geographic boundaries?",
    options: [
      { id: "a", text: "Azure Information Protection" },
      { id: "b", text: "Azure Geographies and data residency commitments" },
      { id: "c", text: "Azure Private Link" },
      { id: "d", text: "Customer Lockbox" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Geographies and data residency commitments ensure that customer data remains within the specified geographic boundary, supporting compliance with GDPR and other data sovereignty regulations.",
    difficulty: "medium",
  },
  {
    id: "sc100-018",
    certId: "sc-100",
    domainId: "grc",
    type: "single",
    question:
      "Which Microsoft Defender for Cloud feature provides regulatory compliance assessments against industry standards?",
    options: [
      { id: "a", text: "Secure Score" },
      { id: "b", text: "Regulatory compliance dashboard" },
      { id: "c", text: "Cloud Security Posture Management" },
      { id: "d", text: "Attack path analysis" },
    ],
    correctAnswers: ["b"],
    explanation:
      "The regulatory compliance dashboard in Microsoft Defender for Cloud continuously assesses your Azure environment against industry standards like PCI DSS, ISO 27001, SOC 2, and more.",
    difficulty: "easy",
  },

  // Domain: Security for Infrastructure (10-15%)
  {
    id: "sc100-019",
    certId: "sc-100",
    domainId: "infrastructure",
    type: "single",
    question:
      "Which service should you recommend to protect Azure virtual networks from DDoS attacks?",
    options: [
      { id: "a", text: "Azure Firewall" },
      { id: "b", text: "Azure DDoS Protection" },
      { id: "c", text: "Web Application Firewall" },
      { id: "d", text: "Azure Front Door" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure DDoS Protection provides enhanced DDoS mitigation features including always-on traffic monitoring, adaptive tuning, and attack analytics specifically designed to protect Azure virtual network resources.",
    difficulty: "easy",
  },
  {
    id: "sc100-020",
    certId: "sc-100",
    domainId: "infrastructure",
    type: "single",
    question:
      "You need to inspect and filter traffic between Azure virtual networks. Which service provides IDPS capabilities for east-west traffic?",
    options: [
      { id: "a", text: "Network Security Groups" },
      { id: "b", text: "Azure Firewall Premium" },
      { id: "c", text: "Application Security Groups" },
      { id: "d", text: "Azure NAT Gateway" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Firewall Premium includes Intrusion Detection and Prevention System (IDPS) capabilities that can inspect east-west traffic between virtual networks, providing signature-based detection of known attacks.",
    difficulty: "medium",
  },
  {
    id: "sc100-021",
    certId: "sc-100",
    domainId: "infrastructure",
    type: "single",
    question:
      "Which service should you use to provide just-in-time VM access for administrators?",
    options: [
      { id: "a", text: "Azure Bastion" },
      { id: "b", text: "Microsoft Defender for Cloud JIT VM access" },
      { id: "c", text: "Azure VPN Gateway" },
      { id: "d", text: "Azure Private Link" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Defender for Cloud JIT VM access reduces the attack surface by locking down inbound traffic to VMs and providing time-limited access only when administrators request it.",
    difficulty: "medium",
  },
  {
    id: "sc100-022",
    certId: "sc-100",
    domainId: "infrastructure",
    type: "single",
    question:
      "Which Azure service provides a secure, fully managed jump box for RDP/SSH access without exposing VMs to the public internet?",
    options: [
      { id: "a", text: "Azure Load Balancer" },
      { id: "b", text: "Azure Bastion" },
      { id: "c", text: "Azure Application Gateway" },
      { id: "d", text: "Azure Front Door" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Bastion provides secure RDP and SSH connectivity to VMs directly in the Azure portal over TLS, without exposing VMs to public IP addresses.",
    difficulty: "easy",
  },
  {
    id: "sc100-023",
    certId: "sc-100",
    domainId: "infrastructure",
    type: "single",
    question:
      "You need to secure access to Azure PaaS services (e.g., Azure Storage, Azure SQL) without traversing the public internet. Which technology should you recommend?",
    options: [
      { id: "a", text: "Service Endpoints" },
      { id: "b", text: "Azure Private Link" },
      { id: "c", text: "Azure Front Door" },
      { id: "d", text: "Azure CDN" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Private Link provides private connectivity to Azure PaaS services through a private endpoint in your virtual network, ensuring traffic never traverses the public internet.",
    difficulty: "medium",
  },
  {
    id: "sc100-024",
    certId: "sc-100",
    domainId: "infrastructure",
    type: "scenario",
    question:
      "A company runs containerized workloads on Azure Kubernetes Service (AKS). They need to ensure container images are scanned for vulnerabilities before deployment. What should you recommend?",
    options: [
      { id: "a", text: "Azure Container Instances with manual scanning" },
      { id: "b", text: "Microsoft Defender for Containers with Azure Container Registry vulnerability scanning" },
      { id: "c", text: "Azure Monitor for containers" },
      { id: "d", text: "Azure Container Apps with built-in scanning" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Defender for Containers provides vulnerability scanning of container images in Azure Container Registry, runtime protection for AKS clusters, and security recommendations specific to containerized workloads.",
    difficulty: "hard",
  },
  {
    id: "sc100-025",
    certId: "sc-100",
    domainId: "infrastructure",
    type: "single",
    question:
      "Which Microsoft Defender plan should you enable to protect Azure SQL databases from SQL injection and anomalous activities?",
    options: [
      { id: "a", text: "Microsoft Defender for Storage" },
      { id: "b", text: "Microsoft Defender for SQL" },
      { id: "c", text: "Microsoft Defender for App Service" },
      { id: "d", text: "Microsoft Defender for Key Vault" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Defender for SQL provides advanced threat protection for Azure SQL databases, detecting SQL injection attempts, anomalous database access patterns, and other threats.",
    difficulty: "easy",
  },

  // Domain: Data and Applications (15-20%)
  {
    id: "sc100-026",
    certId: "sc-100",
    domainId: "data-apps",
    type: "single",
    question:
      "Which Microsoft service should you recommend for classifying and labeling sensitive data across your organization?",
    options: [
      { id: "a", text: "Microsoft Defender for Cloud" },
      { id: "b", text: "Microsoft Purview Information Protection" },
      { id: "c", text: "Azure Key Vault" },
      { id: "d", text: "Azure Monitor" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Purview Information Protection provides data classification, sensitivity labeling, and encryption capabilities to protect sensitive data across Microsoft 365, Azure, and third-party environments.",
    difficulty: "easy",
  },
  {
    id: "sc100-027",
    certId: "sc-100",
    domainId: "data-apps",
    type: "single",
    question:
      "You need to prevent users from copying sensitive data from corporate apps to personal apps on their mobile devices. Which solution should you recommend?",
    options: [
      { id: "a", text: "Microsoft Entra Conditional Access" },
      { id: "b", text: "Microsoft Intune App Protection Policies" },
      { id: "c", text: "Microsoft Purview DLP" },
      { id: "d", text: "Azure Information Protection" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Intune App Protection Policies (APP) can restrict cut, copy, and paste operations between managed corporate apps and unmanaged personal apps without requiring device enrollment.",
    difficulty: "medium",
  },
  {
    id: "sc100-028",
    certId: "sc-100",
    domainId: "data-apps",
    type: "single",
    question:
      "Which Azure service should you use to store and manage cryptographic keys, certificates, and secrets used by applications?",
    options: [
      { id: "a", text: "Azure Storage Account" },
      { id: "b", text: "Azure Key Vault" },
      { id: "c", text: "Azure Active Directory" },
      { id: "d", text: "Azure Confidential Computing" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Key Vault is designed to securely store and manage cryptographic keys, certificates, and secrets, with support for HSM-backed keys, access policies, and integration with Azure services.",
    difficulty: "easy",
  },
  {
    id: "sc100-029",
    certId: "sc-100",
    domainId: "data-apps",
    type: "single",
    question:
      "Which approach should you recommend to secure APIs published through Azure API Management?",
    options: [
      { id: "a", text: "IP whitelisting only" },
      { id: "b", text: "OAuth 2.0 authorization with Microsoft Entra ID and rate limiting" },
      { id: "c", text: "Basic authentication with username/password" },
      { id: "d", text: "API keys stored in application settings" },
    ],
    correctAnswers: ["b"],
    explanation:
      "OAuth 2.0 authorization with Microsoft Entra ID provides token-based authentication and authorization for APIs, combined with rate limiting to prevent abuse, following Zero Trust principles for API security.",
    difficulty: "medium",
  },
  {
    id: "sc100-030",
    certId: "sc-100",
    domainId: "data-apps",
    type: "single",
    question:
      "You need to implement data loss prevention for Microsoft Teams, Exchange, and SharePoint. Which solution should you use?",
    options: [
      { id: "a", text: "Microsoft Defender for Office 365" },
      { id: "b", text: "Microsoft Purview Data Loss Prevention" },
      { id: "c", text: "Microsoft Cloud App Security" },
      { id: "d", text: "Azure Information Protection" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Purview Data Loss Prevention (DLP) provides unified policy creation and management for preventing sensitive data from being shared inappropriately across Microsoft 365 services including Teams, Exchange, and SharePoint.",
    difficulty: "easy",
  },
  {
    id: "sc100-031",
    certId: "sc-100",
    domainId: "data-apps",
    type: "single",
    question:
      "Which Microsoft service provides Cloud Access Security Broker (CASB) functionality for monitoring and controlling cloud app usage?",
    options: [
      { id: "a", text: "Microsoft Defender for Endpoint" },
      { id: "b", text: "Microsoft Defender for Cloud Apps" },
      { id: "c", text: "Microsoft Sentinel" },
      { id: "d", text: "Azure Monitor" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Defender for Cloud Apps is Microsoft's CASB solution that provides visibility, control, and threat protection for cloud applications, including shadow IT discovery, session controls, and anomaly detection.",
    difficulty: "medium",
  },
  {
    id: "sc100-032",
    certId: "sc-100",
    domainId: "data-apps",
    type: "scenario",
    question:
      "A healthcare organization needs to ensure that sensitive patient data stored in Azure SQL Database cannot be viewed by database administrators. Which feature should you recommend?",
    options: [
      { id: "a", text: "Transparent Data Encryption (TDE)" },
      { id: "b", text: "Always Encrypted with secure enclaves" },
      { id: "c", text: "Dynamic Data Masking" },
      { id: "d", text: "Row-Level Security" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Always Encrypted ensures that sensitive data is never revealed as plaintext to the SQL database engine or DBAs. With secure enclaves, it supports rich queries on encrypted data while keeping it protected from privileged users.",
    difficulty: "hard",
  },
  {
    id: "sc100-033",
    certId: "sc-100",
    domainId: "data-apps",
    type: "single",
    question:
      "Which service should you use to discover and classify sensitive data across Azure data stores including SQL databases, blob storage, and Azure Data Lake?",
    options: [
      { id: "a", text: "Azure Advisor" },
      { id: "b", text: "Microsoft Purview Data Map" },
      { id: "c", text: "Azure Monitor" },
      { id: "d", text: "Microsoft Defender for Cloud" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Purview Data Map provides automated data discovery and classification across Azure data stores, creating a unified catalog of sensitive data with classification labels.",
    difficulty: "medium",
  },

  // Domain: Security Best Practices and Priorities (20-25%)
  {
    id: "sc100-034",
    certId: "sc-100",
    domainId: "best-practices",
    type: "single",
    question:
      "Which framework does Microsoft recommend for prioritizing security investments and measuring security posture improvement?",
    options: [
      { id: "a", text: "NIST Cybersecurity Framework" },
      { id: "b", text: "Microsoft Cloud Security Benchmark (MCSB)" },
      { id: "c", text: "ISO 27001" },
      { id: "d", text: "COBIT" },
    ],
    correctAnswers: ["b"],
    explanation:
      "The Microsoft Cloud Security Benchmark (MCSB) provides prescriptive best practices and recommendations for security on Azure, mapped to common compliance frameworks, and is the primary benchmark for Azure security.",
    difficulty: "medium",
  },
  {
    id: "sc100-035",
    certId: "sc-100",
    domainId: "best-practices",
    type: "single",
    question:
      "Which tool provides a prioritized list of security recommendations with a numeric score for your Microsoft 365 and Azure environment?",
    options: [
      { id: "a", text: "Microsoft Secure Score" },
      { id: "b", text: "Azure Advisor" },
      { id: "c", text: "Microsoft Sentinel" },
      { id: "d", text: "Azure Monitor" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft Secure Score provides a numerical representation of your security posture across Microsoft 365 services and Azure, with prioritized improvement actions to reduce attack surface.",
    difficulty: "easy",
  },
  {
    id: "sc100-036",
    certId: "sc-100",
    domainId: "best-practices",
    type: "single",
    question:
      "Which Microsoft service should you recommend as the primary SIEM and SOAR solution for security operations?",
    options: [
      { id: "a", text: "Azure Monitor" },
      { id: "b", text: "Microsoft Sentinel" },
      { id: "c", text: "Microsoft Defender for Cloud" },
      { id: "d", text: "Azure Log Analytics" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Sentinel is Microsoft's cloud-native SIEM (Security Information and Event Management) and SOAR (Security Orchestration, Automation, and Response) solution for intelligent security analytics and threat intelligence.",
    difficulty: "easy",
  },
  {
    id: "sc100-037",
    certId: "sc-100",
    domainId: "best-practices",
    type: "single",
    question:
      "Which Microsoft XDR solution provides unified incident management across endpoints, email, identity, and cloud apps?",
    options: [
      { id: "a", text: "Microsoft Sentinel" },
      { id: "b", text: "Microsoft Defender XDR" },
      { id: "c", text: "Azure Security Center" },
      { id: "d", text: "Microsoft Defender for Cloud" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Defender XDR (formerly Microsoft 365 Defender) provides unified Extended Detection and Response across endpoints, email, identity, and cloud apps with automatic attack disruption and correlated incidents.",
    difficulty: "medium",
  },
  {
    id: "sc100-038",
    certId: "sc-100",
    domainId: "best-practices",
    type: "single",
    question:
      "When designing a security operations strategy, which approach should you recommend for handling security alerts?",
    options: [
      { id: "a", text: "Manually review all alerts" },
      { id: "b", text: "Implement automated triage with playbooks and SOAR capabilities" },
      { id: "c", text: "Ignore low-severity alerts" },
      { id: "d", text: "Forward all alerts to email" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Automated triage using playbooks and SOAR capabilities in Microsoft Sentinel reduces alert fatigue, ensures consistent response, and allows security analysts to focus on complex investigations.",
    difficulty: "easy",
  },
  {
    id: "sc100-039",
    certId: "sc-100",
    domainId: "best-practices",
    type: "single",
    question:
      "Which threat modeling methodology does Microsoft recommend for identifying threats to applications?",
    options: [
      { id: "a", text: "PASTA" },
      { id: "b", text: "STRIDE" },
      { id: "c", text: "DREAD" },
      { id: "d", text: "OCTAVE" },
    ],
    correctAnswers: ["b"],
    explanation:
      "STRIDE (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege) is Microsoft's recommended threat modeling methodology for categorizing and identifying threats.",
    difficulty: "medium",
  },
  {
    id: "sc100-040",
    certId: "sc-100",
    domainId: "best-practices",
    type: "scenario",
    question:
      "Your CISO wants to understand the organization's attack surface and identify the most critical attack paths. Which Microsoft Defender for Cloud feature should you demonstrate?",
    options: [
      { id: "a", text: "Secure Score recommendations" },
      { id: "b", text: "Attack path analysis" },
      { id: "c", text: "Regulatory compliance dashboard" },
      { id: "d", text: "Workload protections" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Attack path analysis in Microsoft Defender for Cloud uses graph-based analysis to identify the most critical attack paths that could be exploited to reach sensitive resources, helping prioritize remediation efforts.",
    difficulty: "medium",
  },
  {
    id: "sc100-041",
    certId: "sc-100",
    domainId: "best-practices",
    type: "single",
    question:
      "Which Microsoft tool helps identify and remediate overprivileged identities in multi-cloud environments?",
    options: [
      { id: "a", text: "Microsoft Entra Privileged Identity Management" },
      { id: "b", text: "Microsoft Entra Permissions Management" },
      { id: "c", text: "Microsoft Defender for Identity" },
      { id: "d", text: "Azure AD Identity Protection" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Entra Permissions Management (formerly CloudKnox) provides comprehensive visibility into permissions across multi-cloud environments (Azure, AWS, GCP) and helps right-size overprivileged identities.",
    difficulty: "hard",
  },
  {
    id: "sc100-042",
    certId: "sc-100",
    domainId: "best-practices",
    type: "single",
    question:
      "Which landing zone architecture component should you implement first when migrating workloads to Azure securely?",
    options: [
      { id: "a", text: "Application workloads" },
      { id: "b", text: "Platform foundation (management groups, policies, connectivity)" },
      { id: "c", text: "DevOps pipelines" },
      { id: "d", text: "Monitoring dashboards" },
    ],
    correctAnswers: ["b"],
    explanation:
      "The Azure Landing Zone architecture starts with the platform foundation including management groups, Azure policies, network connectivity, and identity, which provides the secure foundation for all subsequent workload deployments.",
    difficulty: "medium",
  },
  {
    id: "sc100-043",
    certId: "sc-100",
    domainId: "best-practices",
    type: "multiple",
    question:
      "Which TWO practices should you recommend for securing DevOps pipelines? (Select two)",
    options: [
      { id: "a", text: "Store secrets in pipeline YAML files for convenience" },
      { id: "b", text: "Use managed identities and Azure Key Vault for secrets" },
      { id: "c", text: "Implement branch protection and code review requirements" },
      { id: "d", text: "Grant contributors admin access to all pipelines" },
    ],
    correctAnswers: ["b", "c"],
    explanation:
      "Using managed identities with Azure Key Vault eliminates hardcoded secrets, while branch protection and code reviews prevent unauthorized code changes. Both are essential DevSecOps practices.",
    difficulty: "medium",
  },
  {
    id: "sc100-044",
    certId: "sc-100",
    domainId: "best-practices",
    type: "single",
    question:
      "Which MITRE ATT&CK tactic represents the initial method an attacker uses to gain a foothold in your environment?",
    options: [
      { id: "a", text: "Lateral Movement" },
      { id: "b", text: "Initial Access" },
      { id: "c", text: "Persistence" },
      { id: "d", text: "Exfiltration" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Initial Access is the MITRE ATT&CK tactic representing the techniques adversaries use to gain their first foothold within a network, such as phishing, exploiting public-facing applications, or supply chain compromise.",
    difficulty: "easy",
  },
  {
    id: "sc100-045",
    certId: "sc-100",
    domainId: "zero-trust",
    type: "single",
    question:
      "Which Microsoft Entra ID feature should you use to automatically block or allow sign-ins based on real-time risk assessment?",
    options: [
      { id: "a", text: "Multi-Factor Authentication" },
      { id: "b", text: "Identity Protection risk-based Conditional Access" },
      { id: "c", text: "Azure AD B2B" },
      { id: "d", text: "Application Proxy" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Entra ID Protection evaluates sign-in risk and user risk in real-time and can automatically block, allow, or require additional verification through Conditional Access policies based on the assessed risk level.",
    difficulty: "medium",
  },
  {
    id: "sc100-046",
    certId: "sc-100",
    domainId: "infrastructure",
    type: "single",
    question:
      "Which Azure service provides Web Application Firewall (WAF) capabilities to protect web applications from common exploits?",
    options: [
      { id: "a", text: "Azure Firewall" },
      { id: "b", text: "Azure Application Gateway with WAF" },
      { id: "c", text: "Azure DDoS Protection" },
      { id: "d", text: "Network Security Groups" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Application Gateway with WAF provides centralized protection for web applications against common exploits and vulnerabilities like SQL injection and cross-site scripting, based on OWASP core rule sets.",
    difficulty: "easy",
  },
  {
    id: "sc100-047",
    certId: "sc-100",
    domainId: "data-apps",
    type: "single",
    question:
      "You need to protect data in use during processing. Which Azure technology should you recommend?",
    options: [
      { id: "a", text: "Azure Disk Encryption" },
      { id: "b", text: "Azure Confidential Computing" },
      { id: "c", text: "Transparent Data Encryption" },
      { id: "d", text: "Azure Storage Service Encryption" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Confidential Computing protects data in use through hardware-based Trusted Execution Environments (TEEs), ensuring that data remains encrypted even during processing, preventing access from cloud operators.",
    difficulty: "hard",
  },
  {
    id: "sc100-048",
    certId: "sc-100",
    domainId: "best-practices",
    type: "scenario",
    question:
      "An organization wants to integrate security findings from multiple Microsoft security products into a single investigation workflow. They use Microsoft Defender for Endpoint, Defender for Office 365, and Defender for Identity. What should you recommend?",
    options: [
      { id: "a", text: "Create separate alert rules in each product" },
      { id: "b", text: "Use Microsoft Defender XDR for unified incident correlation" },
      { id: "c", text: "Export all logs to a third-party SIEM" },
      { id: "d", text: "Use Azure Monitor to aggregate alerts" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Defender XDR automatically correlates alerts from Defender for Endpoint, Office 365, Identity, and Cloud Apps into unified incidents, providing a complete attack story for efficient investigation.",
    difficulty: "medium",
  },
  {
    id: "sc100-049",
    certId: "sc-100",
    domainId: "grc",
    type: "single",
    question:
      "Which feature should you recommend to ensure that Microsoft support engineers cannot access customer data without explicit approval?",
    options: [
      { id: "a", text: "Azure Policy" },
      { id: "b", text: "Customer Lockbox" },
      { id: "c", text: "Azure Private Link" },
      { id: "d", text: "Azure Resource Locks" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Customer Lockbox provides an approval workflow that ensures Microsoft support engineers cannot access customer data without the customer's explicit permission, providing additional access control for support scenarios.",
    difficulty: "medium",
  },
  {
    id: "sc100-050",
    certId: "sc-100",
    domainId: "zero-trust",
    type: "scenario",
    question:
      "A multinational company is designing their identity architecture for a Zero Trust deployment. They have on-premises AD DS, multiple Azure subscriptions, and use SaaS applications. They need SSO and centralized identity governance. What should be the foundation of their identity strategy?",
    options: [
      { id: "a", text: "Federate all apps directly with on-premises AD FS" },
      { id: "b", text: "Use Microsoft Entra ID as the primary IdP with cloud sync for hybrid identity and Entra ID Governance for lifecycle management" },
      { id: "c", text: "Deploy separate identity providers per region" },
      { id: "d", text: "Use third-party identity provider for all cloud apps" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Entra ID as the primary IdP with cloud sync provides hybrid identity, SSO for SaaS apps, and centralized governance. Entra ID Governance handles access reviews, entitlement management, and lifecycle workflows.",
    difficulty: "hard",
  },
  {
    id: "sc100-051",
    certId: "sc-100",
    domainId: "best-practices",
    type: "single",
    question:
      "Which Azure service should you use to centrally manage and enforce security policies across multiple Azure subscriptions?",
    options: [
      { id: "a", text: "Azure Resource Manager" },
      { id: "b", text: "Azure Management Groups with Azure Policy" },
      { id: "c", text: "Azure Blueprints" },
      { id: "d", text: "Azure Lighthouse" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Azure Management Groups provide a hierarchy above subscriptions, and Azure Policy assigned at the management group level enforces security policies consistently across all child subscriptions.",
    difficulty: "medium",
  },
  {
    id: "sc100-052",
    certId: "sc-100",
    domainId: "data-apps",
    type: "single",
    question:
      "Which Microsoft Purview feature helps detect and respond to insider risks such as data theft by departing employees?",
    options: [
      { id: "a", text: "Microsoft Purview eDiscovery" },
      { id: "b", text: "Microsoft Purview Insider Risk Management" },
      { id: "c", text: "Microsoft Purview Audit" },
      { id: "d", text: "Microsoft Purview Communication Compliance" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Purview Insider Risk Management uses AI and machine learning to detect, investigate, and act on insider risks including data theft, data leaks, and security policy violations by employees.",
    difficulty: "medium",
  },
  {
    id: "sc100-053",
    certId: "sc-100",
    domainId: "infrastructure",
    type: "single",
    question:
      "Which Microsoft Defender plan should you enable to detect threats targeting Azure Storage accounts, including malicious file uploads?",
    options: [
      { id: "a", text: "Microsoft Defender for SQL" },
      { id: "b", text: "Microsoft Defender for Storage" },
      { id: "c", text: "Microsoft Defender for App Service" },
      { id: "d", text: "Microsoft Defender for DNS" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Defender for Storage provides threat detection for Azure Storage accounts, including malware scanning for uploaded files, detection of suspicious access patterns, and anomalous data exfiltration attempts.",
    difficulty: "easy",
  },
  {
    id: "sc100-054",
    certId: "sc-100",
    domainId: "grc",
    type: "single",
    question:
      "Which Microsoft service helps you assess and manage the security posture of multicloud environments (Azure, AWS, GCP)?",
    options: [
      { id: "a", text: "Azure Monitor" },
      { id: "b", text: "Microsoft Defender for Cloud" },
      { id: "c", text: "Azure Advisor" },
      { id: "d", text: "Azure Service Health" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Defender for Cloud provides Cloud Security Posture Management (CSPM) for multicloud environments including Azure, AWS, and GCP, with unified security recommendations and compliance assessments.",
    difficulty: "medium",
  },
  {
    id: "sc100-055",
    certId: "sc-100",
    domainId: "best-practices",
    type: "single",
    question:
      "According to Microsoft's recommended incident response process, what is the first step when a security incident is detected?",
    options: [
      { id: "a", text: "Eradicate the threat" },
      { id: "b", text: "Triage and assess the scope and impact" },
      { id: "c", text: "Notify law enforcement" },
      { id: "d", text: "Restore from backup" },
    ],
    correctAnswers: ["b"],
    explanation:
      "The first step in incident response is to triage the alert and assess the scope and impact. This determines the severity, affected resources, and appropriate response actions before containment and eradication.",
    difficulty: "easy",
  },
];
