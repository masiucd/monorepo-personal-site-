module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    transpilePackages: ["ui", "lib", "hooks"],
    appDir: false,
    fontLoaders: [{loader: "@next/font/google", options: {subsets: ["latin"]}}],
  },
}
