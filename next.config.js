/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',

  images: {
    domains: ['i.postimg.cc', 'pcet.org.in', 'via.placeholder.com'], // Allowed domains for images
    // unoptimized: true, // Disable built-in image optimization for cPanel hosting
  },
};

module.exports = nextConfig;
