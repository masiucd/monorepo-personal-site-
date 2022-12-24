module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "pbs.twimg.com", // Twitter Profile Picture
      "cdn.sanity.io",
    ],
  },
  experimental: {
    transpilePackages: ["ui", "lib"],
    fontLoaders: [{loader: "@next/font/google", options: {subsets: ["latin"]}}],
  },
}
