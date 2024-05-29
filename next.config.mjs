/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384,400,500,600,700,800,900],
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
        loader: 'default',

    },
};

export default nextConfig;
