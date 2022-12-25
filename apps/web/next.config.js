module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "pbs.twimg.com", // Twitter Profile Picture
      "cdn.sanity.io",
    ],
  },
  transpilePackages: ["ui", "lib"],
  experimental: {
    fontLoaders: [{loader: "@next/font/google", options: {subsets: ["latin"]}}],
  },
}
