import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // 1. Enable SWC Minification (Default in Next.js, faster than Babel)
  swcMinify: true,

  // 2. Configure external image domains (required for your Hero and CaseStudy images)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        // Allow images served via 'figma' domains if necessary, 
        // though the links provided seem to use Unsplash domains.
        protocol: 'https',
        hostname: '*.unsplash.com', 
      }
    ]
  },

  // 3. Custom Webpack Configuration (to handle explicit Vite-style aliases, if needed)
  webpack: (config, { isServer }) => {
    
    // Alias configuration: 
    // Next.js automatically respects 'paths' defined in tsconfig.json 
    // (e.g., the '@/components' alias is handled).
    // The specific library aliases from your Vite config are usually unnecessary 
    // in Next.js but can be included here if you ran into specific resolving issues.
    
    // For the path alias: '@': path.resolve(__dirname, './src')
    // This is already handled by tsconfig.json, but you can explicitly add it to webpack if needed.
    config.resolve.alias = {
        ...config.resolve.alias, // Keep existing aliases
        '@': path.join(__dirname, 'src'), // Use path.join for cross-OS compatibility
    };
    
    // Remove the explicit package aliases from the old Vite config, 
    // as Next.js/Webpack handles direct imports correctly.
    
    return config;
  },

  // 4. Output directory configuration (Next.js automatically uses '.next')
  // We can't change the default output directory from '.next' to 'build' in Next.js.
  // The 'build' folder is typically reserved for exporting the static site.
  // We will omit the 'outDir' equivalent.

  // 5. Development Server Configuration (Next.js defaults to port 3000 and auto-opens)
  // No configuration needed here, as the defaults match your Vite setup's server block.
};

export default nextConfig;
