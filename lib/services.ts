import type { FaqItem, ServiceOfferInput } from "./seo";

export type ServicePricing = {
  eyebrow: string;
  heading: string;
  intro: string;
  packages: { name: string; price: string; features: string[] }[];
  comparison: { attribute: string; standard: string; tailored: string }[];
  notes: { title: string; copy: string }[];
  exclusions: string[];
};

export type Service = {
  slug: string;
  title: string;
  heading: string;
  description: string;
  intro: string;
  sections: { title: string; copy: string }[];
  evidence: { href: string; label: string };
  offers?: readonly ServiceOfferInput[];
  pricing?: ServicePricing;
  faqs: readonly FaqItem[];
};

export const services: readonly Service[] = [
  {
    slug: "custom-business-software",
    title: "Custom Business Software & Automation",
    heading: "Custom business software and workflow automation.",
    description: "Custom business software, order and inventory systems, dashboards, and workflow automation for growing businesses. Scope and quotation after discovery.",
    intro: "Gamoventure designs and builds custom business software, internal dashboards, order and inventory systems, and workflow automation for growing businesses. When spreadsheets and disconnected tools create repeated manual work, we map your daily process, agree on a reviewable scope, and engineer software around how your team operates.",
    sections: [
      { title: "Start with the workflow, not the feature list", copy: "Each engagement begins with who does the work, which information they need, and where the current process breaks down. We trace an order from arrival to fulfilment, follow stock changes, or find where staff copy the same data between tools. Discovery turns those observations into a written scope you can review before development begins." },
      { title: "What an engagement can include", copy: "Depending on the operation, a build can include order and inventory tools, internal dashboards, reporting, role-based access, third-party API integrations, or automated handoffs between existing systems. We agree which workflows belong in the first release and which can wait. Where an existing tool already fits, we integrate it rather than rebuild it." },
      { title: "Design for the people using it", copy: "Operational software needs clear screens, permissions, error handling, and recovery paths alongside its database. Testing follows the real workflow, including mistaken entries and interrupted tasks. Documentation, deployment preparation, and staff training are planned as part of delivery." },
      { title: "Case study example: Egg Express POS", copy: "Our Egg Express engagement brings table ordering, kitchen order tickets, billing, and recipe-linked inventory into a local-first Windows point-of-sale system. The case study separates demonstrated functionality from remaining outlet rollout and acceptance work. It illustrates our approach to a specific food outlet, not a claim that every business needs the same product." },
    ],
    evidence: { href: "/work/egg-express-pos", label: "Explore the Egg Express POS case study" },
    faqs: [
      {
        question: "How is custom business software priced?",
        answer: "Custom software and workflow automation are quoted after discovery rather than sold as fixed packages. Once we map your workflows, user roles, integrations, and rollout needs, you receive a written scope and quotation before committing to development.",
      },
      {
        question: "Can custom software run offline if internet connectivity is unreliable?",
        answer: "Yes. Where daily operations cannot depend on internet uptime, such as counter billing or kitchen ticket printing, we can architect a local-first system backed by a local database with optional one-way cloud reporting.",
      },
      {
        question: "Do you integrate with tools our business already uses?",
        answer: "Yes. During discovery we evaluate your existing spreadsheets, accounting, messaging, or SaaS tools. When an API integration or automated workflow solves the bottleneck cleanly, we connect those tools instead of replacing them.",
      },
      {
        question: "What happens after the software goes live?",
        answer: "Every delivery plan covers deployment, documentation, and handover clarity. Ongoing hosting, monitoring, backups, bug support, or further feature phases can be arranged as a separate continuity engagement.",
      },
    ],
  },
  {
    slug: "business-websites",
    title: "Business Websites & Customer Portals",
    heading: "Business websites and customer portals.",
    description: "Defined informational business website packages at ₹10,000 and ₹25,000, with responsive design, copywriting, and search foundations. Portals quoted separately.",
    intro: "Gamoventure designs and develops responsive business websites and customer portals for companies in India and internationally. Informational business websites are offered in two fixed-scope packages at ₹10,000 (up to 5 pages in 5 business days) and ₹25,000 (up to 8 pages in 10 business days), while customer portals are quoted separately.",
    sections: [
      { title: "Structure pages around real buyer questions", copy: "Before visual design starts, we map your services, the questions prospective customers ask, and the inquiry action each page must support. Approved photography, brand materials, and factual business details shape the copy. If you are starting from rough notes, we draft structured copy for your review and approval." },
      { title: "Build for mobile speed, accessibility, and clarity", copy: "Every website includes responsive layouts across phone, tablet, and desktop, keyboard navigation, clear typography, optimized images, and direct contact paths such as an inquiry form, telephone, WhatsApp, or directions. When customers require authenticated accounts or private dashboards, we scope a dedicated portal separately." },
      { title: "Include clean technical SEO foundations", copy: "Launch preparation covers page titles, meta descriptions, self-referencing canonical URLs, Open Graph tags, XML sitemap generation, robots.txt guidance, deployment, and inquiry form delivery. In the ₹25,000 Tailored Business Website package, we also set up Google Search Console and one agreed analytics tool in client-controlled accounts." },
      { title: "Plan ownership and post-launch care", copy: "Domains, hosting, email, and third-party accounts stay under your ownership. Both website packages include a 30-day post-launch defect-reporting window for reproducible issues within the delivered scope, while ongoing content edits, maintenance, or SEO campaigns are quoted separately." },
    ],
    evidence: { href: "/work#shree-maruti", label: "Read about the Shree Maruti website engagement" },
    offers: [
      {
        name: "Business Website",
        priceInr: "10000",
        description: "Informational business website up to 5 pages and 5 sections per page, copywriting, responsive build, inquiry form, 3 revision rounds, and 5 business days of production time.",
      },
      {
        name: "Tailored Business Website",
        priceInr: "25000",
        description: "Tailored informational business website up to 8 pages and 7 sections per page, custom homepage and inner layouts, purposeful animation, Google Search Console and analytics setup, 5 revision rounds, and 10 business days of production time.",
      },
    ],
    pricing: {
      eyebrow: "Website packages",
      heading: "A clear scope before work begins.",
      intro: "Choose a defined package for an informational business website. We confirm the pages, content and responsibilities with you before accepting the project. Portals, custom functionality and wider product work are quoted separately.",
      packages: [
        {
          name: "Business Website",
          price: "₹10,000",
          features: [
            "Up to 5 separate pages",
            "Up to 5 agreed content sections per page",
            "One brand-adapted design direction using a consistent reusable layout system",
            "Copywriting for the agreed pages, based on business information supplied and approved by the client",
            "Responsive implementation for desktop, tablet and phone",
            "One enquiry form with up to 6 fields, delivered to one email inbox",
            "Call, WhatsApp or social links where relevant",
            "Map or directions link where relevant",
            "Basic technical SEO foundations",
            "3 revision rounds",
            "5 business days of production time",
          ],
        },
        {
          name: "Tailored Business Website",
          price: "₹25,000",
          features: [
            "Up to 8 separate pages",
            "Up to 7 agreed content sections per page",
            "One tailored design direction with a custom homepage and more varied inner-page layouts",
            "Restrained, purposeful animation where it supports the content",
            "Copywriting for the agreed pages, based on business information supplied and approved by the client",
            "Responsive implementation for desktop, tablet and phone",
            "One enquiry form with up to 6 fields, delivered to one email inbox",
            "Call, WhatsApp or social links where relevant",
            "Map or directions link where relevant",
            "Basic technical SEO foundations",
            "Google Search Console setup and one agreed analytics tool, using client-controlled accounts",
            "5 revision rounds",
            "10 business days of production time",
          ],
        },
      ],
      comparison: [
        { attribute: "Fixed package fee", standard: "₹10,000", tailored: "₹25,000" },
        { attribute: "Maximum pages", standard: "Up to 5 separate pages", tailored: "Up to 8 separate pages" },
        { attribute: "Sections per page", standard: "Up to 5 agreed sections", tailored: "Up to 7 agreed sections" },
        { attribute: "Design direction", standard: "Brand-adapted reusable layout system", tailored: "Custom homepage and varied inner-page layouts" },
        { attribute: "Motion & interaction", standard: "Standard interface states", tailored: "Restrained, purposeful content animation" },
        { attribute: "Copywriting & responsive build", standard: "Included for agreed pages", tailored: "Included for agreed pages" },
        { attribute: "Enquiry form & direct links", standard: "1 form (up to 6 fields) + call/WhatsApp/map", tailored: "1 form (up to 6 fields) + call/WhatsApp/map" },
        { attribute: "Search & analytics setup", standard: "Basic technical SEO foundations", tailored: "Technical SEO + Search Console + 1 analytics tool" },
        { attribute: "Revision rounds", standard: "3 consolidated rounds", tailored: "5 consolidated rounds" },
        { attribute: "Production time", standard: "5 business days", tailored: "10 business days" },
      ],
      notes: [
        { title: "Timing and allowances", copy: "Production starts after we receive the advance, complete brief, required content and assets, and necessary account access. Waiting for client feedback is excluded. Page and section counts are maximum allowances, not targets to fill." },
        { title: "Feedback and changes", copy: "Each revision round is one consolidated feedback list from one client decision-maker. A new design direction, new pages or new functionality changes the scope. Corrections to our own implementation errors do not use a revision round." },
        { title: "Client-controlled services", copy: "Domain registration, hosting, business email, paid assets, paid plugins and other third-party services are purchased or funded by you and remain in client-controlled accounts." },
        { title: "After launch", copy: "A 30-day post-launch defect-reporting window covers reproducible failures within the agreed delivered scope, not enhancements, client-made changes or third-party outages. Post-delivery changes, maintenance, content updates and further development are quoted separately." },
        { title: "Search expectations", copy: "Search foundations and analytics setup do not guarantee rankings, traffic, enquiries or sales." },
      ],
      exclusions: [
        "CMS or CRM functionality",
        "Ecommerce, payment collection or online ordering",
        "Booking systems, user accounts or private dashboards",
        "File uploads, automated quotations or custom integrations",
        "Multilingual content or translation",
        "Extensive research or legal-policy drafting",
        "Logo design, full brand identity, photography, 3D work or promotional video",
        "Ongoing hosting, maintenance, SEO or marketing services",
      ],
    },
    faqs: [
      {
        question: "What is the difference between the ₹10,000 and ₹25,000 website packages?",
        answer: "The ₹10,000 Business Website covers up to 5 pages (up to 5 sections per page) using a brand-adapted reusable layout system, 3 revision rounds, and 5 business days of production. The ₹25,000 Tailored Business Website expands to up to 8 pages (up to 7 sections per page) with a custom homepage, varied inner-page layouts, purposeful motion, Google Search Console and analytics setup, 5 revision rounds, and 10 business days of production.",
      },
      {
        question: "Who owns the domain name, hosting, and website accounts?",
        answer: "You do. Domain registration, hosting, business email, Search Console, and analytics accounts are set up in client-controlled accounts and funded directly by you so your business retains direct control.",
      },
      {
        question: "When does the 5-day or 10-day production timeline start?",
        answer: "Production days count from when we receive the advance payment, complete project brief, approved business information and assets, and required account access. Time spent waiting on client review between revision rounds is paused.",
      },
      {
        question: "Can you add customer logins, booking, or a CMS to a business website?",
        answer: "Yes, as a separately scoped engagement. Both fixed packages cover informational business websites; CMS editing, user authentication, customer portals, booking flows, and payment integrations are quoted individually after requirements discovery.",
      },
    ],
  },
  {
    slug: "product-development",
    title: "Digital Product Design & Development",
    heading: "Digital product design and full-stack development.",
    description: "Product discovery, UI design, full-stack engineering, testing, and release support for custom digital products. Plan a focused first release.",
    intro: "Gamoventure takes custom digital products from early problem definition to a tested first release. We combine product discovery, interface design, full-stack application engineering, API and data modelling, automated testing, and deployment preparation so founders and operators can launch dependable software.",
    sections: [
      { title: "Define a first release you can evaluate", copy: "Discovery establishes the users, the core task, and what the first release must prove. We separate essential workflows from later ideas, identify technical dependencies, and agree how progress will be reviewed. The output is a clear release plan, not an unprioritized wish list." },
      { title: "Connect interface design with engineering", copy: "UI screens, application architecture, API contracts, and data models are designed together around the same workflows. Permissions, input validation, edge cases, and failure states are addressed alongside the primary user journey rather than patched in later." },
      { title: "Deliver in reviewable increments", copy: "Engineering proceeds in working increments you can inspect against the agreed scope. Automated and workflow tests check the behavior users depend on, and pre-release work covers deployment configuration, documentation, and acceptance checks." },
      { title: "Support the product after v1", copy: "Once live, a software product needs clear ownership for maintenance, monitoring, and iteration. Quotations follow discovery with explicit responsibilities, and post-launch care or continued engineering capacity can be structured around your roadmap." },
    ],
    evidence: { href: "/work/egg-express-pos", label: "See the product engineering behind Egg Express POS" },
    faqs: [
      {
        question: "Do I need a complete technical specification before contacting Gamoventure?",
        answer: "No. You can bring an operational bottleneck, a workflow outline, or an early product concept. Discovery translates that starting point into user flows, technical architecture, and a prioritized first-release scope.",
      },
      {
        question: "Why is digital product development quoted after discovery instead of fixed upfront?",
        answer: "Product cost and schedule depend on data complexity, roles, third-party integrations, offline or security requirements, and hosting topology. Discovery surfaces those constraints first so the quotation reflects real engineering work.",
      },
      {
        question: "How is product quality verified before launch?",
        answer: "Alongside incremental reviews during development, we write automated unit and end-to-end workflow tests, rehearse deployment configurations, and run structured acceptance checks before production cutover.",
      },
      {
        question: "Can Gamoventure stay involved after the initial product release?",
        answer: "Yes. Depending on whether your team is taking over internally or wants an ongoing engineering partner, we offer post-launch maintenance, monitoring, bug support, and planned feature development.",
      },
    ],
  },
] as const;
