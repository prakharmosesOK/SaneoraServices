/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'images.unsplash.com',
            "api.microlink.io"
        ], // Add your image hostnames here
        unoptimized: true,
    },
};

export default nextConfig;  