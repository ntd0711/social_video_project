/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'cdn.pixabay.com',
      'p16-amd-va.tiktokcdn.com',
      'image.shutterstock.com',
      'res.cloudinary.com',
      'scontent-hkg4-1.cdninstagram.com',
      'scontent-hkg4-2.cdninstagram.com',
    ],
  },
};

module.exports = nextConfig;
