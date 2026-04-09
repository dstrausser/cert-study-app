import { Question } from "@/lib/types";

export const ms900Questions: Question[] = [
  // Domain: Describe cloud concepts (10%)
  {
    id: "ms900-001",
    certId: "ms-900",
    domainId: "cloud-concepts",
    type: "single",
    question:
      "Which cloud model allows organizations to use a combination of on-premises infrastructure, private cloud, and public cloud services?",
    options: [
      { id: "a", text: "Public cloud" },
      { id: "b", text: "Private cloud" },
      { id: "c", text: "Hybrid cloud" },
      { id: "d", text: "Community cloud" },
    ],
    correctAnswers: ["c"],
    explanation:
      "A hybrid cloud model combines on-premises infrastructure (or private cloud) with public cloud services, allowing data and applications to be shared between them.",
    difficulty: "easy",
  },
  {
    id: "ms900-002",
    certId: "ms-900",
    domainId: "cloud-concepts",
    type: "single",
    question:
      "In the shared responsibility model, which of the following is ALWAYS the responsibility of the customer regardless of cloud service type?",
    options: [
      { id: "a", text: "Physical network controls" },
      { id: "b", text: "Operating system patching" },
      { id: "c", text: "Data classification and accountability" },
      { id: "d", text: "Host infrastructure" },
    ],
    correctAnswers: ["c"],
    explanation:
      "In the shared responsibility model, data classification and accountability are always the customer's responsibility, regardless of whether they use IaaS, PaaS, or SaaS. The cloud provider never manages your data classification.",
    difficulty: "easy",
  },
  {
    id: "ms900-003",
    certId: "ms-900",
    domainId: "cloud-concepts",
    type: "single",
    question:
      "Which cloud service model provides the customer with the most control over the underlying infrastructure?",
    options: [
      { id: "a", text: "Software as a Service (SaaS)" },
      { id: "b", text: "Platform as a Service (PaaS)" },
      { id: "c", text: "Infrastructure as a Service (IaaS)" },
      { id: "d", text: "Function as a Service (FaaS)" },
    ],
    correctAnswers: ["c"],
    explanation:
      "IaaS provides the most control to the customer. The cloud provider manages the physical hardware, but the customer manages the OS, middleware, runtime, data, and applications.",
    difficulty: "easy",
  },

  // Domain: Describe Microsoft 365 apps and services (45%)
  {
    id: "ms900-004",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft 365 application provides a hub for teamwork that integrates chat, video meetings, file storage, and application integration?",
    options: [
      { id: "a", text: "Outlook" },
      { id: "b", text: "SharePoint" },
      { id: "c", text: "Microsoft Teams" },
      { id: "d", text: "Yammer" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Microsoft Teams is the hub for teamwork in Microsoft 365, integrating chat, video conferencing, file storage, and third-party app integration in one platform.",
    difficulty: "easy",
  },
  {
    id: "ms900-005",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft 365 service allows you to create intranet sites for your organization to share news, documents, and resources?",
    options: [
      { id: "a", text: "OneDrive" },
      { id: "b", text: "SharePoint Online" },
      { id: "c", text: "Microsoft Teams" },
      { id: "d", text: "Exchange Online" },
    ],
    correctAnswers: ["b"],
    explanation:
      "SharePoint Online allows organizations to create intranet sites, team sites, and communication sites for sharing news, documents, and resources across the organization.",
    difficulty: "easy",
  },
  {
    id: "ms900-006",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "What is the primary purpose of Microsoft Viva?",
    options: [
      { id: "a", text: "To provide cloud-based email" },
      { id: "b", text: "To provide an employee experience platform that brings together communications, knowledge, learning, and insights" },
      { id: "c", text: "To manage Azure virtual machines" },
      { id: "d", text: "To provide endpoint security management" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Viva is an employee experience platform that integrates into Microsoft Teams and Microsoft 365 apps, providing modules for Connections, Insights, Learning, Topics, and Goals.",
    difficulty: "medium",
  },
  {
    id: "ms900-007",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft service provides personal cloud storage for individual users in an organization?",
    options: [
      { id: "a", text: "SharePoint Online" },
      { id: "b", text: "OneDrive for Business" },
      { id: "c", text: "Azure Blob Storage" },
      { id: "d", text: "Exchange Online" },
    ],
    correctAnswers: ["b"],
    explanation:
      "OneDrive for Business provides personal cloud storage for individual users, allowing them to store, sync, and share their work files across devices.",
    difficulty: "easy",
  },
  {
    id: "ms900-008",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which tool in Microsoft 365 allows administrators to manage devices, apps, and security policies from a single console?",
    options: [
      { id: "a", text: "Azure Portal" },
      { id: "b", text: "Microsoft Intune (part of Microsoft Endpoint Manager)" },
      { id: "c", text: "Microsoft Teams Admin Center" },
      { id: "d", text: "Power Platform Admin Center" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Intune, part of Microsoft Endpoint Manager, is a cloud-based service for mobile device management (MDM) and mobile application management (MAM). It allows admins to manage devices, deploy apps, and enforce security policies.",
    difficulty: "medium",
  },
  {
    id: "ms900-009",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "What is Microsoft Copilot for Microsoft 365?",
    options: [
      { id: "a", text: "A code completion tool for developers" },
      { id: "b", text: "An AI assistant integrated into Microsoft 365 apps that helps users create, summarize, and analyze content" },
      { id: "c", text: "An automated backup solution for Microsoft 365 data" },
      { id: "d", text: "A compliance management tool" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Copilot for Microsoft 365 is an AI-powered assistant integrated into apps like Word, Excel, PowerPoint, Outlook, and Teams. It uses large language models with organizational data from Microsoft Graph to help users draft, summarize, and analyze content.",
    difficulty: "easy",
  },
  {
    id: "ms900-010",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft 365 component provides workflow automation and allows users to create automated processes between apps and services?",
    options: [
      { id: "a", text: "Power Automate" },
      { id: "b", text: "Power BI" },
      { id: "c", text: "Power Apps" },
      { id: "d", text: "Power Pages" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Power Automate (formerly Microsoft Flow) enables users to create automated workflows between apps and services to synchronize files, get notifications, collect data, and automate business processes.",
    difficulty: "easy",
  },
  {
    id: "ms900-011",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "multiple",
    question:
      "Which TWO of the following are capabilities of Microsoft Teams? (Select two)",
    options: [
      { id: "a", text: "Hosting live events and webinars" },
      { id: "b", text: "Managing Azure subscriptions" },
      { id: "c", text: "Integrating third-party apps and bots" },
      { id: "d", text: "Creating virtual machines" },
    ],
    correctAnswers: ["a", "c"],
    explanation:
      "Microsoft Teams supports hosting live events/webinars and integrating third-party apps, bots, and connectors. Managing Azure subscriptions and creating VMs are Azure Portal functions, not Teams capabilities.",
    difficulty: "easy",
  },

  // Domain: Security, compliance, privacy, and trust (25%)
  {
    id: "ms900-012",
    certId: "ms-900",
    domainId: "security-compliance",
    type: "single",
    question:
      "Which Microsoft 365 service helps organizations discover, classify, and protect sensitive information across emails, documents, and sites?",
    options: [
      { id: "a", text: "Microsoft Defender for Endpoint" },
      { id: "b", text: "Microsoft Purview Information Protection" },
      { id: "c", text: "Microsoft Intune" },
      { id: "d", text: "Azure Active Directory" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Purview Information Protection (formerly Azure Information Protection) helps discover, classify, label, and protect sensitive information across your organization's data.",
    difficulty: "medium",
  },
  {
    id: "ms900-013",
    certId: "ms-900",
    domainId: "security-compliance",
    type: "single",
    question:
      "What is the purpose of Microsoft Purview Compliance Manager?",
    options: [
      { id: "a", text: "To manage user identities and access" },
      { id: "b", text: "To assess and manage compliance posture with a compliance score and recommended improvement actions" },
      { id: "c", text: "To provide endpoint detection and response" },
      { id: "d", text: "To manage email encryption" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft Purview Compliance Manager helps organizations assess and manage their compliance posture. It provides a compliance score, pre-built assessments for regulations, and recommended improvement actions.",
    difficulty: "medium",
  },
  {
    id: "ms900-014",
    certId: "ms-900",
    domainId: "security-compliance",
    type: "single",
    question:
      "Which Microsoft 365 feature uses Zero Trust principles and evaluates real-time signals like user location, device state, and risk level before granting access?",
    options: [
      { id: "a", text: "Data Loss Prevention" },
      { id: "b", text: "Conditional Access" },
      { id: "c", text: "eDiscovery" },
      { id: "d", text: "Retention policies" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Conditional Access policies evaluate real-time signals such as user identity, location, device state, application, and risk level to make access decisions, implementing Zero Trust principles.",
    difficulty: "medium",
  },
  {
    id: "ms900-015",
    certId: "ms-900",
    domainId: "security-compliance",
    type: "single",
    question:
      "Which service provides a single dashboard to manage security across identities, endpoints, email, and cloud apps in Microsoft 365?",
    options: [
      { id: "a", text: "Microsoft 365 Admin Center" },
      { id: "b", text: "Microsoft Defender portal" },
      { id: "c", text: "Azure Portal" },
      { id: "d", text: "Microsoft Purview portal" },
    ],
    correctAnswers: ["b"],
    explanation:
      "The Microsoft Defender portal (security.microsoft.com) provides a unified view for managing security across Microsoft 365 Defender services including Defender for Endpoint, Defender for Office 365, Defender for Identity, and Defender for Cloud Apps.",
    difficulty: "easy",
  },
  {
    id: "ms900-016",
    certId: "ms-900",
    domainId: "security-compliance",
    type: "single",
    question:
      "What does Data Loss Prevention (DLP) in Microsoft 365 help organizations do?",
    options: [
      { id: "a", text: "Encrypt all data at rest" },
      { id: "b", text: "Detect and prevent the accidental sharing of sensitive information" },
      { id: "c", text: "Back up organizational data" },
      { id: "d", text: "Manage user licenses" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Data Loss Prevention (DLP) policies in Microsoft 365 help organizations detect and prevent the accidental or intentional sharing of sensitive information such as credit card numbers, social security numbers, and other regulated data.",
    difficulty: "easy",
  },

  // Domain: Microsoft 365 pricing, licensing, and support (20%)
  {
    id: "ms900-017",
    certId: "ms-900",
    domainId: "m365-pricing-support",
    type: "single",
    question:
      "Which Microsoft 365 plan is designed for organizations with up to 300 users and includes desktop Office apps?",
    options: [
      { id: "a", text: "Microsoft 365 E3" },
      { id: "b", text: "Microsoft 365 Business Premium" },
      { id: "c", text: "Microsoft 365 F1" },
      { id: "d", text: "Microsoft 365 E5" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft 365 Business Premium is designed for small and medium businesses with up to 300 users. It includes desktop Office apps, Teams, SharePoint, Exchange, Intune, and advanced security features.",
    difficulty: "medium",
  },
  {
    id: "ms900-018",
    certId: "ms-900",
    domainId: "m365-pricing-support",
    type: "single",
    question:
      "Which Microsoft 365 plan is intended for frontline workers and provides web and mobile access to Office apps?",
    options: [
      { id: "a", text: "Microsoft 365 E3" },
      { id: "b", text: "Microsoft 365 Business Basic" },
      { id: "c", text: "Microsoft 365 F1" },
      { id: "d", text: "Microsoft 365 Apps for enterprise" },
    ],
    correctAnswers: ["c"],
    explanation:
      "Microsoft 365 F1 is designed for frontline workers. It provides web and mobile access to Office apps, Microsoft Teams, and other Microsoft 365 services at a lower cost, without desktop Office application licenses.",
    difficulty: "medium",
  },
  {
    id: "ms900-019",
    certId: "ms-900",
    domainId: "m365-pricing-support",
    type: "single",
    question:
      "What is the Microsoft Service Health Dashboard used for?",
    options: [
      { id: "a", text: "To manage user subscriptions and licenses" },
      { id: "b", text: "To view the current health status and any incidents affecting Microsoft 365 services" },
      { id: "c", text: "To configure security policies" },
      { id: "d", text: "To deploy Office applications" },
    ],
    correctAnswers: ["b"],
    explanation:
      "The Service Health Dashboard in the Microsoft 365 Admin Center shows the current health status of Microsoft 365 services and any advisories or incidents that may affect your organization.",
    difficulty: "easy",
  },
  {
    id: "ms900-020",
    certId: "ms-900",
    domainId: "m365-pricing-support",
    type: "single",
    question:
      "Which billing model does Microsoft 365 use?",
    options: [
      { id: "a", text: "One-time perpetual license purchase" },
      { id: "b", text: "Per-user, per-month subscription model" },
      { id: "c", text: "Pay-per-use based on consumption" },
      { id: "d", text: "Free with ad-supported revenue" },
    ],
    correctAnswers: ["b"],
    explanation:
      "Microsoft 365 uses a per-user, per-month subscription model. Organizations pay a monthly fee per user and can choose from various plans based on their needs. Subscriptions can be paid monthly or annually.",
    difficulty: "easy",
  },
];
