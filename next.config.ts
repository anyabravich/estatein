/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    silenceDeprecations: ["legacy-js-api"],
    prependData: `@use "constants.scss" as *; @use "mixins.scss" as *;`,
  },
};

export default nextConfig;
