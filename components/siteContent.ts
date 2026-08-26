export const capabilities = [
  {
    slug: "strategy",
    title: "Product Strategy & Direction",
    summary: "Turn an unclear opportunity into a focused, buildable plan.",
    problem: "You know something needs to improve, but the right product, scope, or sequence is still uncertain.",
    deliverables: ["Discovery workshops", "Requirements and workflow mapping", "Product roadmaps", "Technical direction", "Release planning"],
  },
  {
    slug: "experiences",
    title: "Digital Experiences",
    summary: "Create purposeful digital touchpoints that move people to act.",
    problem: "Your digital presence does not reflect the quality of the business or help customers take the next step.",
    deliverables: ["Conversion-led digital experiences", "Customer and business portals", "Responsive interfaces", "UI and UX systems", "Performance and accessibility improvements"],
  },
  {
    slug: "systems",
    title: "Business Systems & Automation",
    summary: "Replace fragile manual work with technology shaped around your operation.",
    problem: "Spreadsheets, disconnected tools, and repetitive work are slowing the business down.",
    deliverables: ["Custom operational systems", "Dashboards and reporting", "Workflow automation", "Inventory and order tools", "Third-party integrations"],
  },
  {
    slug: "engineering",
    title: "Product Engineering",
    summary: "Take a product from idea to a dependable working release.",
    problem: "You need a technical partner who can own the complete path from definition to deployment.",
    deliverables: ["Product architecture", "Full-stack development", "API and data design", "Testing and deployment", "Documentation and training"],
  },
  {
    slug: "growth",
    title: "Ongoing Operations & Growth",
    summary: "Keep useful technology healthy, supported, and moving forward.",
    problem: "Launch is only the beginning, and your product needs dependable care and considered improvement.",
    deliverables: ["Hosting and monitoring", "Backups and maintenance", "Bug support", "Analytics and improvement planning", "Continuous product development"],
  },
] as const;

export const industries = [
  "Food, Hospitality & Retail",
  "Professional & Local Services",
  "Healthcare & Business Operations",
  "Logistics, Agencies & Growing Enterprises",
] as const;

export const principles = [
  { title: "Purpose before features", copy: "We start with the business problem and build only what earns its place." },
  { title: "Close collaboration", copy: "A small founding team stays close to the decisions, the work, and the people using it." },
  { title: "Accountable delivery", copy: "Clear scope, visible progress, practical testing, and ownership beyond the handoff." },
  { title: "Built to evolve", copy: "We create foundations that can improve as the business learns and grows." },
] as const;

export const processSteps = [
  { title: "Define", copy: "Understand the business, map the real constraint, and agree on what success should look like." },
  { title: "Build", copy: "Design, engineer, test, and refine the solution through close, visible collaboration." },
  { title: "Launch & improve", copy: "Prepare the release, support adoption, and keep useful technology moving forward." },
] as const;

export const contact = {
  email: "gamoventure@gmail.com",
  phoneDisplay: "+91 8080251000",
  phoneHref: "+918080251000",
  whatsappHref: "https://wa.me/918080251000",
} as const;
