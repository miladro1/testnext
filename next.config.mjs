import gettextParser from "gettext-parser"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en-US",
    // These are all the locales supported in the application
    locales: ['en-US', 'fa-IR',],
  },
  transpilePackages: ['lucide-react'],
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      rules: [
        {
          test: /\.po$/,
          type: 'json',
          parser: {
            parse: (source) => {
              // Custom parsing logic
              const parsed = gettextParser.po.parse(source);
              const translations = parsed.translations[''] || {};

              // Convert to simple key-value object
              return Object.fromEntries(
                Object.entries(translations)
                  .filter(([key]) => key !== '')
                  .map(([key, value]) => [key, value.msgstr[0]])
              );
            }
          }
        }
      ]
    });

    return config;
  },
};

export default nextConfig;
