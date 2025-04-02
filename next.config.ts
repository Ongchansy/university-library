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
            },{
                protocol: "https",
                hostname: "i.pravatar.cc",
                port: ""
            },
            {
                protocol: "https",
                hostname: "img.youtube.com",
                port: ""
            },
            {
                protocol: "https",
                hostname: "i.ytimg.com",
                port: ""
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: ""
            },
            {
                protocol:"https",
                hostname:"image-upload-ytw8.onrender.com"
            },
            {
                protocol: "https",
                hostname:"res.cloudinary.com"
            }
        ]
    }
};

export default nextConfig;
