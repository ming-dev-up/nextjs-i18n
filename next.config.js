/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["ko-KR", "en-US"],
        defaultLocale: "ko-KR",
    },
};

module.exports = nextConfig;
