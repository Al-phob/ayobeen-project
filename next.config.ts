import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },

          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          {
            key: "Content-Security-Policy",
            value: 
              "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src *; object-src 'none'",
          },

          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },

          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },

          {
            key: "Permissions-Policy",
            value: "microphone=(), camera=(), geolocation=()",
          },

          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },

        ]
      }
    ];
  }

};

export default nextConfig;
