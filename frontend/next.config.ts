/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <--- TELLS NEXT.JS TO MAKE HTML FILES
  images: {
    unoptimized: true, // <--- REQUIRED FOR STATIC EXPORT
  },
};

export default nextConfig;