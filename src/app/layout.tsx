import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Vault SMP — Serveur Minecraft",
  description:
    "Le serveur Minecraft le plus immersif. Rejoins Vault SMP : caisses légendaires, grades premium et une communauté de passionnés.",
  keywords: ["minecraft", "serveur", "vault smp", "crates", "survival"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
