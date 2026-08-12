import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Há um package-lock.json órfão em C:\Users\User que faz o Next inferir a
  // raiz errada do workspace — fixa a raiz neste projeto.
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Headers de segurança (auditoria técnica 12/08). HSTS fica a cargo do
  // host (Vercel) depois que o domínio definitivo estiver ativo.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), camera=(), microphone=()" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
