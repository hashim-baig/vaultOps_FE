import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5000', // Change if your backend runs on a different port
                pathname: '/uploads/**', // Matches any file inside /uploads/
            },
        ],
    },
};

export default nextConfig;
