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
  // Additional cloud-concepts coverage
  {
    id: "ms900-021",
    certId: "ms-900",
    domainId: "cloud-concepts",
    type: "single",
    question:
      "Which Microsoft 365 deployment topology hosts services in Microsoft datacenters and is the most common?",
    options: [
      { id: "a", text: "Cloud (multi-tenant)" },
      { id: "b", text: "On-premises" },
      { id: "c", text: "Hybrid" },
      { id: "d", text: "Private cloud" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft 365 is delivered as a multi-tenant cloud service.",
    difficulty: "easy",
  },
  {
    id: "ms900-022",
    certId: "ms-900",
    domainId: "cloud-concepts",
    type: "single",
    question:
      "Which cloud benefit lets organizations pay only for what they use without large upfront hardware costs?",
    options: [
      { id: "a", text: "Consumption-based pricing (OpEx)" },
      { id: "b", text: "CapEx hardware purchase" },
      { id: "c", text: "Perpetual licensing" },
      { id: "d", text: "Volume licensing" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Consumption-based pricing converts CapEx into OpEx, billing only for what you use.",
    difficulty: "easy",
  },
  {
    id: "ms900-023",
    certId: "ms-900",
    domainId: "cloud-concepts",
    type: "single",
    question:
      "Which deployment lets an organization keep some workloads on-premises while integrating with Microsoft 365 cloud services?",
    options: [
      { id: "a", text: "Hybrid" },
      { id: "b", text: "Public" },
      { id: "c", text: "Private" },
      { id: "d", text: "Community" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Hybrid combines on-prem and cloud, common with Exchange Hybrid or hybrid identity.",
    difficulty: "easy",
  },

  // Additional m365-apps-services coverage
  {
    id: "ms900-024",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft Teams capability lets users collaborate in dedicated topic-based spaces with chat, files, and apps?",
    options: [
      { id: "a", text: "Channels (within a Team)" },
      { id: "b", text: "Distribution lists" },
      { id: "c", text: "SharePoint hubs" },
      { id: "d", text: "OneNote sections" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Channels organize a Team into focused spaces; each is backed by SharePoint and Outlook.",
    difficulty: "easy",
  },
  {
    id: "ms900-025",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft 365 service hosts mailboxes and calendars in the cloud?",
    options: [
      { id: "a", text: "Exchange Online" },
      { id: "b", text: "OneDrive for Business" },
      { id: "c", text: "Microsoft Loop" },
      { id: "d", text: "Microsoft Stream" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Exchange Online provides mailboxes, calendar, and contacts as a cloud service.",
    difficulty: "easy",
  },
  {
    id: "ms900-026",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which service is the personal cloud storage for Microsoft 365 users?",
    options: [
      { id: "a", text: "OneDrive for Business" },
      { id: "b", text: "SharePoint Online" },
      { id: "c", text: "Microsoft Lists" },
      { id: "d", text: "Power BI" },
    ],
    correctAnswers: ["a"],
    explanation:
      "OneDrive provides per-user cloud storage with sync, sharing, and Office integration.",
    difficulty: "easy",
  },
  {
    id: "ms900-027",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which service is the team-based document and intranet platform for Microsoft 365?",
    options: [
      { id: "a", text: "SharePoint Online" },
      { id: "b", text: "OneDrive" },
      { id: "c", text: "Yammer (Viva Engage)" },
      { id: "d", text: "Microsoft Stream" },
    ],
    correctAnswers: ["a"],
    explanation:
      "SharePoint Online hosts team and communication sites and is the storage backend for Teams.",
    difficulty: "easy",
  },
  {
    id: "ms900-028",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft 365 service is the modern enterprise social platform (formerly Yammer)?",
    options: [
      { id: "a", text: "Microsoft Viva Engage" },
      { id: "b", text: "Microsoft Loop" },
      { id: "c", text: "Microsoft Teams" },
      { id: "d", text: "Microsoft Forms" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Viva Engage is the rebranded Yammer enterprise social platform within Microsoft 365.",
    difficulty: "easy",
  },
  {
    id: "ms900-029",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft 365 service helps employees stay focused, set boundaries, and improve well-being with personalized insights?",
    options: [
      { id: "a", text: "Microsoft Viva Insights" },
      { id: "b", text: "Microsoft Stream" },
      { id: "c", text: "Microsoft Forms" },
      { id: "d", text: "Microsoft Sway" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Viva Insights gives employees and managers data-driven productivity and well-being insights.",
    difficulty: "easy",
  },
  {
    id: "ms900-030",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft Viva module curates an organization's knowledge across Microsoft 365 with AI?",
    options: [
      { id: "a", text: "Microsoft Viva Topics" },
      { id: "b", text: "Microsoft Loop" },
      { id: "c", text: "Microsoft Teams Live Events" },
      { id: "d", text: "Microsoft Forms" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Viva Topics surfaces organizational knowledge using AI; Microsoft 365 Copilot extends this further.",
    difficulty: "medium",
  },
  {
    id: "ms900-031",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft 365 service offers AI assistance embedded in Word, Excel, PowerPoint, Outlook, and Teams?",
    options: [
      { id: "a", text: "Microsoft 365 Copilot" },
      { id: "b", text: "Microsoft Sentinel" },
      { id: "c", text: "Microsoft Viva Goals" },
      { id: "d", text: "Microsoft Defender for Office 365" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft 365 Copilot integrates generative AI across Microsoft 365 apps using your tenant data.",
    difficulty: "easy",
  },
  {
    id: "ms900-032",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft 365 service is the unified low-code platform for apps, automations, agents, and analytics?",
    options: [
      { id: "a", text: "Microsoft Power Platform" },
      { id: "b", text: "Microsoft Endpoint Manager" },
      { id: "c", text: "Microsoft Defender XDR" },
      { id: "d", text: "Microsoft Purview" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Power Platform = Power Apps, Power Automate, Power BI, Copilot Studio, Power Pages.",
    difficulty: "easy",
  },
  {
    id: "ms900-033",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft service provides cross-platform device management for Windows, macOS, iOS, Android, and Linux?",
    options: [
      { id: "a", text: "Microsoft Intune (Microsoft Endpoint Manager)" },
      { id: "b", text: "Microsoft Defender for Endpoint" },
      { id: "c", text: "Microsoft Sentinel" },
      { id: "d", text: "Microsoft Purview" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Intune (Endpoint Manager) is the cross-platform UEM service for endpoints and apps.",
    difficulty: "easy",
  },
  {
    id: "ms900-034",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Windows licensing option in Microsoft 365 includes Windows 11 Enterprise + cloud configuration tools?",
    options: [
      { id: "a", text: "Windows 11 Enterprise E3/E5 (in Microsoft 365 E3/E5)" },
      { id: "b", text: "Windows 11 Home" },
      { id: "c", text: "Windows 11 Pro for Workstations" },
      { id: "d", text: "Windows Server" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft 365 E3/E5 include Windows 11 Enterprise rights and cloud-managed deployment.",
    difficulty: "medium",
  },
  {
    id: "ms900-035",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft service streams desktops and apps from Azure to any device?",
    options: [
      { id: "a", text: "Windows 365 / Azure Virtual Desktop" },
      { id: "b", text: "Microsoft Sentinel" },
      { id: "c", text: "Microsoft Loop" },
      { id: "d", text: "Microsoft Stream" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Windows 365 (Cloud PC) and AVD provide desktop-as-a-service from Azure.",
    difficulty: "medium",
  },
  {
    id: "ms900-036",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft 365 deployment type installs Office apps to a user's device and updates from the cloud?",
    options: [
      { id: "a", text: "Microsoft 365 Apps (formerly Office 365 ProPlus)" },
      { id: "b", text: "Office Web Apps only" },
      { id: "c", text: "Office for Mac standalone" },
      { id: "d", text: "Office LTSC" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft 365 Apps installs Word/Excel/PowerPoint/etc. and updates via the click-to-run service.",
    difficulty: "easy",
  },
  {
    id: "ms900-037",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft 365 deployment type provides a perpetual, locked-version Office install for offline scenarios?",
    options: [
      { id: "a", text: "Office LTSC" },
      { id: "b", text: "Microsoft 365 Apps" },
      { id: "c", text: "Microsoft 365 Web" },
      { id: "d", text: "Office Mobile" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Office LTSC (Long-Term Servicing Channel) is a perpetual-license Office for specialty scenarios.",
    difficulty: "medium",
  },
  {
    id: "ms900-038",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft service unifies search across mail, files, people, and Teams?",
    options: [
      { id: "a", text: "Microsoft Search" },
      { id: "b", text: "Power BI" },
      { id: "c", text: "Microsoft Lists" },
      { id: "d", text: "Microsoft Forms" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft Search delivers unified, personalized search across Microsoft 365 services.",
    difficulty: "easy",
  },
  {
    id: "ms900-039",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft 365 collaborative canvas brings together components like tables and tasks across apps?",
    options: [
      { id: "a", text: "Microsoft Loop" },
      { id: "b", text: "Microsoft Stream" },
      { id: "c", text: "Microsoft Lists" },
      { id: "d", text: "Microsoft Sway" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Loop offers components and pages that update across Outlook, Teams, OneNote, and other Microsoft 365 surfaces.",
    difficulty: "medium",
  },
  {
    id: "ms900-040",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft 365 service lets you create lists, track tasks, and design lightweight workflows?",
    options: [
      { id: "a", text: "Microsoft Lists" },
      { id: "b", text: "Microsoft Loop" },
      { id: "c", text: "Power BI" },
      { id: "d", text: "Microsoft Sway" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft Lists lets users track structured data with views, rules, and automation.",
    difficulty: "easy",
  },
  {
    id: "ms900-041",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft Teams meetings capability supports very large one-to-many broadcasts?",
    options: [
      { id: "a", text: "Microsoft Teams Live Events / Town Halls" },
      { id: "b", text: "Microsoft Stream channel" },
      { id: "c", text: "Microsoft Forms" },
      { id: "d", text: "Microsoft Lists" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Live Events / Town Halls support large-scale, one-to-many streaming meetings.",
    difficulty: "easy",
  },
  {
    id: "ms900-042",
    certId: "ms-900",
    domainId: "m365-apps-services",
    type: "single",
    question:
      "Which Microsoft 365 platform unifies video upload, sharing, and embedding across the suite?",
    options: [
      { id: "a", text: "Microsoft Stream (on SharePoint)" },
      { id: "b", text: "Microsoft Sway" },
      { id: "c", text: "Microsoft Loop" },
      { id: "d", text: "Microsoft Lists" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Stream now stores videos in OneDrive/SharePoint with native sharing and Teams integration.",
    difficulty: "easy",
  },
  // Additional security-compliance coverage
  {
    id: "ms900-043",
    certId: "ms-900",
    domainId: "security-compliance",
    type: "single",
    question:
      "Which Microsoft Defender XDR product protects against email phishing and malicious attachments?",
    options: [
      { id: "a", text: "Microsoft Defender for Office 365" },
      { id: "b", text: "Microsoft Defender for Endpoint" },
      { id: "c", text: "Microsoft Defender for Identity" },
      { id: "d", text: "Microsoft Defender for Cloud Apps" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Defender for Office 365 provides Safe Links, Safe Attachments, and anti-phishing for Exchange/Teams.",
    difficulty: "easy",
  },
  {
    id: "ms900-044",
    certId: "ms-900",
    domainId: "security-compliance",
    type: "single",
    question:
      "Which Microsoft 365 product helps discover, classify, label, and protect sensitive content?",
    options: [
      { id: "a", text: "Microsoft Purview Information Protection" },
      { id: "b", text: "Microsoft Sentinel" },
      { id: "c", text: "Microsoft Defender for Endpoint" },
      { id: "d", text: "Microsoft Intune" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Purview Information Protection delivers sensitivity labels, classifiers, and DLP for Microsoft 365 data.",
    difficulty: "easy",
  },
  {
    id: "ms900-045",
    certId: "ms-900",
    domainId: "security-compliance",
    type: "single",
    question:
      "Which feature enforces MFA on user sign-in only when a sign-in is risky?",
    options: [
      { id: "a", text: "Conditional Access with Identity Protection" },
      { id: "b", text: "Smart lockout" },
      { id: "c", text: "Tenant restrictions" },
      { id: "d", text: "Self-service password reset" },
    ],
    correctAnswers: ["a"],
    explanation:
      "CA combined with Identity Protection risk signals enables risk-based MFA enforcement.",
    difficulty: "medium",
  },
  {
    id: "ms900-046",
    certId: "ms-900",
    domainId: "security-compliance",
    type: "single",
    question:
      "Which feature in Microsoft 365 lets users reset their own passwords with verification methods?",
    options: [
      { id: "a", text: "Self-service password reset (SSPR)" },
      { id: "b", text: "Privileged Identity Management" },
      { id: "c", text: "Identity Protection only" },
      { id: "d", text: "Conditional Access" },
    ],
    correctAnswers: ["a"],
    explanation:
      "SSPR allows users to reset/unlock their account using registered methods.",
    difficulty: "easy",
  },
  {
    id: "ms900-047",
    certId: "ms-900",
    domainId: "security-compliance",
    type: "single",
    question:
      "Which Microsoft Purview tool helps organizations track and improve compliance posture against standards like ISO 27001?",
    options: [
      { id: "a", text: "Compliance Manager" },
      { id: "b", text: "Records management" },
      { id: "c", text: "Communication compliance" },
      { id: "d", text: "DLP" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Compliance Manager calculates a Compliance Score and tracks improvement actions against standards.",
    difficulty: "easy",
  },
  {
    id: "ms900-048",
    certId: "ms-900",
    domainId: "security-compliance",
    type: "single",
    question:
      "Which Microsoft service detects and investigates risky activities by employees, such as data exfiltration?",
    options: [
      { id: "a", text: "Microsoft Purview Insider Risk Management" },
      { id: "b", text: "Microsoft Defender for Endpoint" },
      { id: "c", text: "Microsoft Sentinel only" },
      { id: "d", text: "Microsoft Intune" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Insider Risk Management detects risky internal activity and supports investigation workflows.",
    difficulty: "easy",
  },
  {
    id: "ms900-049",
    certId: "ms-900",
    domainId: "security-compliance",
    type: "single",
    question:
      "Which Microsoft service hosts independent audit reports (SOC, ISO) and other trust documents for cloud services?",
    options: [
      { id: "a", text: "Service Trust Portal" },
      { id: "b", text: "Microsoft 365 admin center" },
      { id: "c", text: "Compliance Manager" },
      { id: "d", text: "Defender for Cloud" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Service Trust Portal hosts independent compliance reports and tools for Microsoft cloud services.",
    difficulty: "medium",
  },
  {
    id: "ms900-050",
    certId: "ms-900",
    domainId: "security-compliance",
    type: "single",
    question:
      "Which Microsoft service provides a cloud-native SIEM for Microsoft 365 and beyond?",
    options: [
      { id: "a", text: "Microsoft Sentinel" },
      { id: "b", text: "Microsoft Defender for Cloud" },
      { id: "c", text: "Microsoft Purview" },
      { id: "d", text: "Microsoft Intune" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft Sentinel is the cloud-native SIEM/SOAR platform.",
    difficulty: "easy",
  },
  {
    id: "ms900-051",
    certId: "ms-900",
    domainId: "security-compliance",
    type: "single",
    question:
      "Which Microsoft service provides time-bound, approval-based activation of administrative roles?",
    options: [
      { id: "a", text: "Microsoft Entra Privileged Identity Management (PIM)" },
      { id: "b", text: "Identity Protection" },
      { id: "c", text: "Compliance Manager" },
      { id: "d", text: "Self-service password reset" },
    ],
    correctAnswers: ["a"],
    explanation:
      "PIM provides JIT, time-bound, approval-based activation for Entra and Azure roles.",
    difficulty: "easy",
  },
  {
    id: "ms900-052",
    certId: "ms-900",
    domainId: "security-compliance",
    type: "single",
    question:
      "Which Microsoft Purview feature preserves Microsoft 365 content and supports legal investigations?",
    options: [
      { id: "a", text: "eDiscovery" },
      { id: "b", text: "Sensitivity labels" },
      { id: "c", text: "Communication compliance" },
      { id: "d", text: "Audit (Standard)" },
    ],
    correctAnswers: ["a"],
    explanation:
      "eDiscovery (Standard/Premium) supports legal hold, search, review, and export.",
    difficulty: "easy",
  },

  // Additional m365-pricing-support coverage
  {
    id: "ms900-053",
    certId: "ms-900",
    domainId: "m365-pricing-support",
    type: "single",
    question:
      "Which Microsoft 365 plan includes everything in E3 plus advanced security, compliance, voice, and analytics?",
    options: [
      { id: "a", text: "Microsoft 365 E5" },
      { id: "b", text: "Microsoft 365 Business Basic" },
      { id: "c", text: "Microsoft 365 F3" },
      { id: "d", text: "Office 365 E1" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft 365 E5 is the top enterprise plan with security, compliance, voice (Teams Phone), and Power BI Pro.",
    difficulty: "easy",
  },
  {
    id: "ms900-054",
    certId: "ms-900",
    domainId: "m365-pricing-support",
    type: "single",
    question:
      "Which Microsoft 365 plan is the standard small/medium business plan with desktop apps and Exchange?",
    options: [
      { id: "a", text: "Microsoft 365 Business Standard" },
      { id: "b", text: "Microsoft 365 Business Basic" },
      { id: "c", text: "Microsoft 365 E3" },
      { id: "d", text: "Microsoft 365 F1" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Business Standard includes desktop Office apps and Exchange Online; Business Basic is web-only.",
    difficulty: "easy",
  },
  {
    id: "ms900-055",
    certId: "ms-900",
    domainId: "m365-pricing-support",
    type: "single",
    question:
      "Which Microsoft 365 SKU suffix (E3 vs E5 etc.) is best chosen for an enterprise needing Defender for Endpoint Plan 2?",
    options: [
      { id: "a", text: "Microsoft 365 E5 (or add Defender for Endpoint P2 to E3)" },
      { id: "b", text: "Microsoft 365 Business Basic" },
      { id: "c", text: "Microsoft 365 F1" },
      { id: "d", text: "Office 365 A1" },
    ],
    correctAnswers: ["a"],
    explanation:
      "E5 includes Defender for Endpoint Plan 2; otherwise add the standalone Defender for Endpoint P2 license.",
    difficulty: "medium",
  },
  {
    id: "ms900-056",
    certId: "ms-900",
    domainId: "m365-pricing-support",
    type: "single",
    question:
      "Which support feature lets organizations open Microsoft 365 cases by phone, email, or web 24/7?",
    options: [
      { id: "a", text: "Microsoft 365 admin center support requests" },
      { id: "b", text: "Service Trust Portal" },
      { id: "c", text: "Microsoft Learn" },
      { id: "d", text: "Compliance Manager" },
    ],
    correctAnswers: ["a"],
    explanation:
      "The admin center hosts the support request workflow for tenants.",
    difficulty: "easy",
  },
  {
    id: "ms900-057",
    certId: "ms-900",
    domainId: "m365-pricing-support",
    type: "single",
    question:
      "Which feature lets you compare Microsoft 365 plans and licensing entitlements?",
    options: [
      { id: "a", text: "Microsoft 365 plan comparison and licensing pages" },
      { id: "b", text: "Service Trust Portal" },
      { id: "c", text: "Microsoft Learn" },
      { id: "d", text: "Compliance Manager" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft publishes plan comparison and feature matrices to help select the right SKU.",
    difficulty: "easy",
  },
  {
    id: "ms900-058",
    certId: "ms-900",
    domainId: "m365-pricing-support",
    type: "single",
    question:
      "Which Microsoft 365 commitment type usually offers a discount in exchange for an annual term?",
    options: [
      { id: "a", text: "Annual subscription billed monthly or annually" },
      { id: "b", text: "Pay-as-you-go" },
      { id: "c", text: "Open license" },
      { id: "d", text: "OEM license" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Annual commitments are typical and often include a discount over monthly-only commitments.",
    difficulty: "easy",
  },
  {
    id: "ms900-059",
    certId: "ms-900",
    domainId: "m365-pricing-support",
    type: "single",
    question:
      "Which Microsoft 365 service-level agreement (SLA) covers Microsoft 365 services and provides credit if availability drops below the target?",
    options: [
      { id: "a", text: "Microsoft Online Services SLA (financially backed)" },
      { id: "b", text: "Microsoft Trust Center" },
      { id: "c", text: "Microsoft Compliance Manager" },
      { id: "d", text: "Microsoft Defender for Cloud" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Microsoft offers a financially-backed SLA for online services with service credits.",
    difficulty: "medium",
  },
  {
    id: "ms900-060",
    certId: "ms-900",
    domainId: "m365-pricing-support",
    type: "single",
    question:
      "Which Microsoft 365 service rollout phase exposes new features to opted-in users before broad release?",
    options: [
      { id: "a", text: "Targeted release (Microsoft 365 release options)" },
      { id: "b", text: "Standard release only" },
      { id: "c", text: "Preview only" },
      { id: "d", text: "GA only" },
    ],
    correctAnswers: ["a"],
    explanation:
      "Targeted release lets early adopters try features before standard release across the tenant.",
    difficulty: "medium",
  },
];
