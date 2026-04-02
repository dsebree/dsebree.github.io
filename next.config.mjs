/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required for GitHub Pages
    trailingSlash: true,
    basePath: '/dsebree.github.io',
    assetPrefix: '/dsebree.github.io',
    images: {
      unoptimized: true, // GitHub Pages doesn't support the Next.js Image Optimization API
    },
    // If your repo is NOT named 'yourusername.github.io' (e.g., 'portfolio-2026'),
    // you need to add the repository name as a base path:
    // basePath: '/portfolio-2026', 
  };
  
  export default nextConfig;