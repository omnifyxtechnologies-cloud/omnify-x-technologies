/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export: deployable to Cloudflare Pages, GitHub Pages, Netlify, Vercel...
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};
export default nextConfig;
