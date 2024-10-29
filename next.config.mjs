/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'media.istockphoto.com',
          },

          {
            hostname: 'cdn.pixabay.com',
          }
        ],
      },
};

export default nextConfig;
