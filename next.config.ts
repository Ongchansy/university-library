import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.con",
            },
            {
                protocol: "https",
                hostname: "m.media-amazon.com",
            },
            {
                protocol: "https",
                hostname: "ik.imageKit.io",
                port: ""
            },{
                protocol: "https",
                hostname: "images-na.ssl-images-amazon.com",
                port: ""
            },
            {
                protocol: "https",
                hostname: "youtu.be",
                port: ""
            }
        ]
    }
};

export default nextConfig;
