/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    domains: ['i.postimg.cc', 'pcet.org.in', 'via.placeholder.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
