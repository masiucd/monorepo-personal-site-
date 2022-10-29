module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    transpilePackages: ["ui", "lib"],
    appDir: true,
    fontLoaders: [{loader: "@next/font/google", options: {subsets: ["latin"]}}],
  },
}
