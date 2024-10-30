/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'media.istockphoto.com',
          },

          {
            hostname: 'cdn.pixabay.com',
          },
           {
            hostname: 'arible-one.vercel.app',
          },
        ],
      },
};

export default nextConfig;
