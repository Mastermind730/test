/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  // basePath: '/your-subdirectory', // Add if deploying to a subdirectory
  images: {
    domains: ['i.postimg.cc', 'pcet.org.in', 'via.placeholder.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
