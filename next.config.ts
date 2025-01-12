import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'www.gstatic.com'}]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `
      @import "mixins.scss";
      @import "vars.scss";
      @import "extends.scss";
    `,
  },
};

export default nextConfig;
