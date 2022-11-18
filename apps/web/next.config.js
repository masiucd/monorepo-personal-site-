module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    transpilePackages: ["ui"],
    fontLoaders: [{loader: "@next/font/google", options: {subsets: ["latin"]}}],
  },
}
