module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    transpilePackages: ["ui", "lib"],
    fontLoaders: [{loader: "@next/font/google", options: {subsets: ["latin"]}}],
  },
}
