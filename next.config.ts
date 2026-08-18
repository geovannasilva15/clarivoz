import type { NextConfig } from "next";

const repositoryName = "clarivoz";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGitHubPages ? `/${repositoryName}` : "",
  assetPrefix: isGitHubPages ? `/${repositoryName}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
