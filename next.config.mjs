/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
    /* config options here */
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default {
    ...nextConfig,
    ...withVideos(),
};