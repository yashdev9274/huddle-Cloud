/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true, // Enable the app directory feature
        serverActions: true, // Enable server actions if needed
    },
    reactStrictMode: true,
};

export default nextConfig;
