export interface ExperienceItem {
  company: string;
  role: string;
  start: string;
  end: string | "Present";
  location: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "CoStar Group",
    role: "Software Engineer",
    start: "Dec 2025",
    end: "Present",
    location: "Arlington, VA",
    bullets: [
      "Build and maintain Web Enterprise — the full-stack platform underpinning Homes.com, Apartments.com, LoopNet, and other CoStar digital marketplaces.",
      "Develop across 40+ microfrontends: React (SSR) clients, Node.js BFF layers, and .NET backend services and proxies.",
      "Deploy services to hybrid on-prem and AWS Kubernetes environments; leverage cloud-hosted Elasticsearch for high-performance search and data retrieval.",
      "Author SQL Server database migrations and stored procedures supporting contract management data integrity across 40+ services.",
    ],
  },
  {
    company: "Deloitte — NIH Contractor",
    role: "Software Engineer",
    start: "Jul 2023",
    end: "Nov 2025",
    location: "Arlington, VA",
    bullets: [
      "Designed and deployed enterprise-scale Generative AI and NLP systems for the National Institutes of Health, serving 20,000+ employees.",
      "Built a custom Model Context Protocol (MCP) server and toolchain enabling natural-language queries against NIH data warehouses.",
      "Integrated OpenAI and private LLMs to power RAG-based applications across secure Azure and AWS FedRAMP environments.",
      "Automated CI/CD pipelines with Azure DevOps, cutting deployment time from hours to minutes; boosted ML pipeline throughput ~40% through parallelization.",
      "Partnered directly with NIH stakeholders on technical strategy, system architecture, and secure AI deployment.",
    ],
  },
  {
    company: "The Hanover Insurance Group",
    role: "Associate Data Engineer & IT Architecture Intern",
    start: "May 2022",
    end: "Apr 2023",
    location: "Worcester, MA (hybrid)",
    bullets: [
      "Developed Spring Boot microservices for enterprise document automation and optimized SQL stored procedures for high-volume data operations.",
      "Migrated legacy Access systems to SQL Server, improving reliability and scalability.",
    ],
  },
  {
    company: "Columbia University Zuckerman Institute",
    role: "Software Development Intern",
    start: "May 2021",
    end: "Aug 2021",
    location: "New York, NY",
    bullets: [
      "Built MATLAB tools integrating EyeLink 1000 Plus hardware for neuroscience research and automated experimental data pipelines.",
    ],
  },
];
