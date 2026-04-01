export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  repo?: string;
}

export const projects: ProjectItem[] = [
  {
    name: "FlipYourCode",
    description:
      "Full-stack portfolio app featuring an AI chat widget backed by RAG and pgvector semantic search. ASP.NET Core 9 API with OAuth2/OIDC auth and Docker containerization.",
    tech: ["C# / ASP.NET Core", "React", "TypeScript", "PostgreSQL + pgvector", "OpenAI", "Auth0", "Docker", "Digital Ocean VPS"],
    repo: "https://github.com/pmollerus23/FlipYourCode",
  },
  {
    name: "WebChat",
    description:
      "Real-time web chat app with concurrent WebSocket broadcasting via a Go backend and PostgreSQL message persistence. Deployed to AWS Lightsail behind Nginx with an automated GitHub Actions CI/CD pipeline.",
    tech: ["Go", "React", "TypeScript", "PostgreSQL", "WebSockets", "AWS VPS", "Nginx", "GitHub Actions"],
    repo: "https://github.com/pmollerus23/WebChat",
  },
  {
    name: "go-todo",
    description:
      "Git-style CLI task manager built in pure Go with zero external dependencies. Uses stdlib flag parsing and JSON file persistence.",
    tech: ["Go", "CLI", "JSON"],
    repo: "https://github.com/pmollerus23/go-cli-app",
  },
];
