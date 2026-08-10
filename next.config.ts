import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Há um package-lock.json órfão em C:\Users\User que faz o Next inferir a
  // raiz errada do workspace — fixa a raiz neste projeto.
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
