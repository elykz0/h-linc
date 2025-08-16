/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
    /* config options here */
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    }
};

export default {
    ...nextConfig,
    ...withVideos(),
};