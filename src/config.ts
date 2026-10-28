export const business = {
  name: "Moxin Sterling Advisory Ltd",
  displayName: "Moxin Sterling Advisory",
  founder: "Mohsin Khan",
  email: "mohsikhan@yahoo.com",
  companyNumber: null,
  registeredOffice: null,
  jurisdiction: null,
  incorporationVerified: false,
};
export const site = {
  origin: import.meta.env.SITE_ORIGIN || "https://moxinadvisory.com",
  indexing: import.meta.env.PUBLIC_INDEXING === "true",
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || "",
};
export const navigation = [
  { label: "Services", href: "/services/" },
  { label: "Who we help", href: "/who-we-help/" },
  { label: "About", href: "/about/" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/contact/" },
];
export const services = [
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    short: "An organised foundation",
    description:
      "Keep day-to-day records organised, so you can see where your business stands.",
    audience:
      "Sole traders and small companies who want help maintaining clear, consistent records.",
    includes: [
      "Recording income and business expenses",
      "Reconciling bank transactions against records",
      "Reviewing outstanding customer and supplier balances",
    ],
    needs: [
      "Access to your accounting records",
      "Bank statements and supporting receipts",
      "Details of outstanding invoices",
    ],
    faq: "Can you help if my records need organising?",
    answer:
      "Yes. Tell us what records you have and which periods need attention. We will agree a starting point and a scope before work begins.",
  },
  {
    slug: "vat",
    title: "VAT returns",
    short: "Support with the detail",
    description:
      "Practical help with VAT records and preparing returns for review.",
    audience:
      "Businesses that are VAT registered or want to discuss their record-keeping needs.",
    includes: [
      "Reviewing VAT records and supporting documents",
      "Preparing VAT return information",
      "Discussing questions and adjustments before submission",
    ],
    needs: [
      "Your VAT registration details, shared securely after engagement",
      "Sales and purchase records",
      "Previous returns and accounting software access where agreed",
    ],
    faq: "Can you advise whether my business should register?",
    answer:
      "We can discuss your circumstances and the scope of advice you need. Registration requirements depend on your business and the rules in force.",
  },
  {
    slug: "payroll",
    title: "Payroll",
    short: "A clearer pay routine",
    description:
      "Help organise payroll information and prepare regular pay calculations.",
    audience:
      "Small employers who need a consistent process for paying their team.",
    includes: [
      "Processing agreed employee pay information",
      "Preparing payslips and payroll reports",
      "Supporting payroll submissions within the agreed scope",
    ],
    needs: [
      "Employee and employer details through an agreed secure channel",
      "Pay rates and hours",
      "Changes to staff or pay arrangements",
    ],
    faq: "Can you help when I hire my first employee?",
    answer:
      "We can discuss the payroll process and information needed. We will confirm which tasks are included before you engage us.",
  },
  {
    slug: "annual-accounts-corporation-tax",
    title: "Annual accounts & Corporation Tax",
    short: "The year brought together",
    description:
      "Bring your company records together for year-end accounts and tax reporting.",
    audience:
      "Small limited companies that need help preparing annual financial information.",
    includes: [
      "Reviewing year-end records and balances",
      "Preparing annual accounts within the agreed scope",
      "Preparing Corporation Tax calculations and return information",
    ],
    needs: [
      "Complete accounting records for the period",
      "Previous accounts and tax information",
      "Details of assets, loans and other relevant transactions",
    ],
    faq: "Is an audit included?",
    answer:
      "No. Statutory audit is not offered. We will explain the accounts and tax work covered by your quote.",
  },
  {
    slug: "self-assessment",
    title: "Self Assessment",
    short: "Make sense of your return",
    description:
      "Support with organising personal tax information and preparing your return.",
    audience:
      "Sole traders and individuals with income or circumstances that may require a tax return.",
    includes: [
      "Reviewing the income information you provide",
      "Preparing a Self Assessment return within the agreed scope",
      "Explaining the calculation and questions for your review",
    ],
    needs: [
      "Relevant income and expense records",
      "Previous return information where available",
      "Details of other income and relevant changes",
    ],
    faq: "Can you tell me whether I need to submit a return?",
    answer:
      "We can discuss your circumstances. Requirements vary, so please ask for advice specific to your situation rather than relying on general website information.",
  },
  {
    slug: "management-accounts-cash-flow",
    title: "Management accounts & cash-flow planning",
    short: "A view beyond the year end",
    description:
      "Useful reports and forward planning to support everyday business decisions.",
    audience:
      "Business owners who want to understand trading, costs and future cash needs.",
    includes: [
      "Regular management reports at an agreed frequency",
      "Budget preparation and cash-flow forecasts",
      "A clear discussion of figures, assumptions and changes",
    ],
    needs: [
      "Up-to-date bookkeeping records",
      "Expected income, costs and payment timings",
      "Your business plans and reporting priorities",
    ],
    faq: "Are forecasts guaranteed?",
    answer:
      "No. Forecasts depend on assumptions and the information available. We explain those assumptions and can review them as circumstances change.",
  },
];
