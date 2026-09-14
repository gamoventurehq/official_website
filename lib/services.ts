export type ServicePricing = {
  eyebrow: string;
  heading: string;
  intro: string;
  packages: { name: string; price: string; features: string[] }[];
  notes: { title: string; copy: string }[];
  exclusions: string[];
};

type Service = {
  slug: string;
  title: string;
  heading: string;
  description: string;
  intro: string;
  sections: { title: string; copy: string }[];
  evidence: { href: string; label: string };
  pricing?: ServicePricing;
};

export const services: readonly Service[] = [
  {
    slug: "custom-business-software",
    title: "Custom Business Software & Automation",
    heading: "Software built around your operation.",
    description: "Custom business software, order and inventory systems, dashboards, and workflow automation for growing businesses. Scope and quotation after discovery.",
    intro: "When spreadsheets and disconnected tools make everyday work harder, the answer is not always another subscription. We help identify where a purpose-built system can reduce repeated work and give your team a clearer operating process.",
    sections: [
      { title: "Start with the workflow, not the feature list", copy: "We first understand who does the work, which information they need, and where the current process breaks down. That might mean following an order from arrival to fulfilment, tracing stock changes, or finding where staff copy the same data between tools. Discovery turns those observations into a scope you can review before development begins." },
      { title: "What an engagement can include", copy: "Depending on the business, the build may include order and inventory tools, internal dashboards, reporting, user roles, third-party integrations, or automated handoffs between existing systems. We agree which workflows belong in the first release and which can wait. Where an existing tool meets the need, we can plan an integration instead of rebuilding it." },
      { title: "Design for the people using it", copy: "A working system needs more than a database. We design the screens, permissions, error states, and day-to-day actions together. Testing follows the actual workflow, including incorrect entries and interrupted steps. Documentation, deployment preparation, and training needs are included in the delivery discussion, rather than left until the end." },
      { title: "A relevant example", copy: "Our Egg Express engagement brings ordering, kitchen tickets, billing, and inventory into a local-first point-of-sale system. The case study separates demonstrated functionality from remaining rollout and acceptance work. It shows our approach to a specific outlet—not a promise that every business needs the same product." },
    ],
    evidence: { href: "/work/egg-express-pos", label: "Explore the Egg Express POS case study" },
  },
  {
    slug: "business-websites",
    title: "Business Websites & Customer Portals",
    heading: "A digital presence that helps customers act.",
    description: "Defined informational business website packages at ₹10,000 and ₹25,000, with responsive design, copywriting and search foundations. Portals quoted separately.",
    intro: "Your website should help a visitor understand the business, find the right service, and take a useful next step. We design and develop business websites and customer-facing interfaces with that journey in mind.",
    sections: [
      { title: "Give customers the information they need", copy: "We begin with your services, the questions customers ask, and the action each page should support. That creates a practical page structure before visual design starts. Existing brand materials, approved photography, and real business information shape the result. We can also help turn an incomplete content brief into a clear first version for your review." },
      { title: "Build for phones and everyday use", copy: "Responsive layouts, readable text, keyboard access, clear forms, and appropriate image sizes are part of the implementation. A website can include service pages, galleries, coverage information, enquiry forms, and links to familiar contact channels. If customers need accounts or a private workspace, we define the portal requirements separately rather than treating them as a simple page addition." },
      { title: "Prepare the technical foundations", copy: "The launch scope can cover page metadata, canonical URLs, a sitemap, search-crawler guidance, deployment, and contact-form delivery. Those foundations make the site easier to maintain and understand; they are not a guarantee of search rankings. Content growth, ongoing SEO work, and marketing support can be discussed as a separate engagement." },
      { title: "Keep the site useful after launch", copy: "We agree who will update content, how enquiries will be handled, and what support is needed after handoff. Maintenance and future improvements are quoted around the actual website and responsibilities. Our current Shree Maruti Transport Services website engagement is in development, with service information, fleet imagery, coverage information, and an enquiry journey under review." },
    ],
    evidence: { href: "/work#shree-maruti", label: "Read about the Shree Maruti engagement" },
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
      notes: [
        { title: "Timing and allowances", copy: "Production starts after we receive the advance, complete brief, required content and assets, and necessary account access. Waiting for client feedback is excluded. Page and section counts are maximum allowances, not targets to fill." },
        { title: "Feedback and changes", copy: "Each revision round is one consolidated feedback list from one client decision-maker. A new design direction, new pages or new functionality changes the scope. Corrections to our own implementation errors do not use a revision round." },
        { title: "Client-controlled services", copy: "Domain registration, hosting, business email, paid assets, paid plugins and other third-party services are purchased or funded by you and remain in client-controlled accounts." },
        { title: "After launch", copy: "A 30-day post-launch defect-reporting window covers reproducible failures within the agreed delivered scope—not enhancements, client-made changes or third-party outages. Post-delivery changes, maintenance, content updates and further development are quoted separately." },
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
  },
  {
    slug: "product-development",
    title: "Digital Product Design & Development",
    heading: "Turn a product idea into a working release.",
    description: "Product discovery, interface design, full-stack development, testing, and release support for custom digital products. Plan a focused first release with Gamoventure.",
    intro: "You may have a defined product or only a problem worth solving. We help turn either starting point into a buildable plan, then work through design, engineering, testing, and release preparation.",
    sections: [
      { title: "Define a first release you can evaluate", copy: "Discovery establishes the users, the core task, and what the first release must demonstrate. We separate essential workflows from later ideas, identify dependencies, and agree how progress will be reviewed. The output is a shared direction for the work—not a long feature list without priorities." },
      { title: "Connect design with engineering", copy: "Interface design, application architecture, API design, and data modelling need to support the same workflows. We work across these parts of the product so decisions about a screen reflect how it will behave. Integrations, access controls, validation, and failure states are discussed alongside the main user journey." },
      { title: "Make delivery reviewable", copy: "Development proceeds through working increments that can be reviewed against the agreed scope. Testing covers the behaviour a user depends on, not only whether a page renders. Before release, we plan deployment, configuration, documentation, and acceptance checks. Timing and cost depend on the scope and dependencies identified during discovery." },
      { title: "Plan what happens after the first release", copy: "A released product needs an owner for maintenance, support, and future changes. We can discuss care arrangements or continued development capacity according to the product's needs. We do not publish a fixed package price: the quotation follows discovery, with responsibilities and deliverables made explicit. The Egg Express case study shows this approach in an ongoing operational-software engagement." },
    ],
    evidence: { href: "/work/egg-express-pos", label: "See the product work behind Egg Express" },
  },
] as const;
