"use client";

import { useState } from "react";
import Link from "next/link";

const SERVER_IP = "play.vaultsmp.net";

const STATS = [
  { value: "1,247", label: "En ligne",      icon: "⚡" },
  { value: "45K+",  label: "Discord",       icon: "💬" },
  { value: "2.1M",  label: "Coffres ouverts", icon: "📦" },
  { value: "3",     label: "Modes de jeu",  icon: "🎮" },
];

const FEATURES = [
  {
    icon: "⚔️",
    title: "Survival Hardcore",
    desc: "Un monde brutal, persistant et compétitif. Seuls les meilleurs survivent dans le Vault.",
    color: "#ef4444",
    glowRgb: "239,68,68",
  },
  {
    icon: "🏰",
    title: "Kingdoms",
    desc: "Construis ton royaume, forge des alliances et conquiers des territoires entiers.",
    color: "#f59e0b",
    glowRgb: "245,158,11",
  },
  {
    icon: "💎",
    title: "Crates & Loot",
    desc: "Ouvre des caisses légendaires pour obtenir des équipements uniques et des récompenses exclusives.",
    color: "#a855f7",
    glowRgb: "168,85,247",
  },
  {
    icon: "🗝️",
    title: "Le Vault",
    desc: "Une zone secrète cachée au cœur du serveur, accessible uniquement aux plus méritants.",
    color: "#06b6d4",
    glowRgb: "6,182,212",
  },
  {
    icon: "🏆",
    title: "Classements",
    desc: "Compétis pour être le meilleur — kills, richesse, kills PvP. Ton rang te définit.",
    color: "#4ade80",
    glowRgb: "74,222,128",
  },
  {
    icon: "🌐",
    title: "Communauté",
    desc: "45 000+ membres Discord, des events réguliers et une équipe de staff réactive 24/7.",
    color: "#f9a8d4",
    glowRgb: "249,168,212",
  },
];

const PARTICLES = [
  { x: 8,  y: 75, s: 3, d: "0s",   dur: "3s",   c: "#06b6d4" },
  { x: 18, y: 60, s: 2, d: "0.5s", dur: "4s",   c: "#a855f7" },
  { x: 30, y: 85, s: 4, d: "1s",   dur: "3.5s", c: "#06b6d4" },
  { x: 42, y: 70, s: 2, d: "1.5s", dur: "2.8s", c: "#a855f7" },
  { x: 55, y: 88, s: 3, d: "0.3s", dur: "4s",   c: "#ec4899" },
  { x: 65, y: 72, s: 2, d: "0.8s", dur: "3.2s", c: "#06b6d4" },
  { x: 75, y: 65, s: 4, d: "1.2s", dur: "3.8s", c: "#a855f7" },
  { x: 85, y: 78, s: 3, d: "0.6s", dur: "4.2s", c: "#06b6d4" },
  { x: 93, y: 68, s: 2, d: "1.8s", dur: "2.6s", c: "#ec4899" },
  { x: 12, y: 50, s: 3, d: "2s",   dur: "3.4s", c: "#a855f7" },
  { x: 22, y: 38, s: 2, d: "0.4s", dur: "4.4s", c: "#06b6d4" },
  { x: 38, y: 52, s: 4, d: "1.6s", dur: "3s",   c: "#ec4899" },
  { x: 48, y: 42, s: 3, d: "0.9s", dur: "3.6s", c: "#a855f7" },
  { x: 60, y: 32, s: 2, d: "2.2s", dur: "4.6s", c: "#06b6d4" },
  { x: 70, y: 48, s: 3, d: "1.4s", dur: "3.2s", c: "#ec4899" },
  { x: 80, y: 38, s: 2, d: "0.7s", dur: "3.8s", c: "#a855f7" },
  { x: 90, y: 55, s: 4, d: "1.1s", dur: "4s",   c: "#06b6d4" },
  { x: 5,  y: 28, s: 3, d: "2.4s", dur: "3s",   c: "#ec4899" },
  { x: 97, y: 32, s: 2, d: "1.7s", dur: "4.2s", c: "#a855f7" },
  { x: 50, y: 18, s: 3, d: "0.2s", dur: "3.6s", c: "#06b6d4" },
];

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText(SERVER_IP).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen" style={{ background: "#05050a", color: "#fff" }}>

      {/* ===== NAV ===== */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          background: "rgba(5,5,10,0.8)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-black"
            style={{
              background: "linear-gradient(135deg, rgba(6,182,212,0.3), rgba(168,85,247,0.25))",
              border: "1px solid rgba(6,182,212,0.4)",
              boxShadow: "0 0 16px rgba(6,182,212,0.2)",
            }}
          >
            ⚡
          </div>
          <span
            className="font-black text-base tracking-[0.2em]"
            style={{ color: "#06b6d4" }}
          >
            VAULT SMP
          </span>
        </div>

        <div className="hidden md:flex items-center gap-7 text-sm text-white/45 font-semibold">
          {[
            { href: "#features", label: "Modes de jeu" },
            { href: "#community", label: "Communauté" },
            { href: "/store", label: "Store" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white/80 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyIP}
            className="hidden sm:flex items-center gap-2 text-sm px-4 py-2 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(6,182,212,0.08)",
              border: "1px solid rgba(6,182,212,0.25)",
              color: copied ? "#4ade80" : "#06b6d4",
            }}
          >
            {copied ? "✓ Copié !" : SERVER_IP}
          </button>
          <Link
            href="/store"
            className="text-sm px-4 py-2 rounded-xl font-bold transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #0284c7)",
              color: "#fff",
              boxShadow: "0 4px 16px rgba(6,182,212,0.35)",
            }}
          >
            Store
          </Link>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* BG gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 40%, rgba(6,182,212,0.06) 0%, transparent 60%),
              radial-gradient(ellipse 50% 50% at 15% 85%, rgba(168,85,247,0.1) 0%, transparent 55%),
              radial-gradient(ellipse 50% 50% at 85% 15%, rgba(168,85,247,0.08) 0%, transparent 55%)
            `,
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6,182,212,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6,182,212,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 75% 55% at 50% 45%, black 20%, transparent 75%)",
          }}
        />

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {PARTICLES.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.s * 2,
                height: p.s * 2,
                background: p.c,
                boxShadow: `0 0 ${p.s * 5}px ${p.c}`,
                opacity: 0,
                animation: `vault-particle ${p.dur} ease-out ${p.d} infinite`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          {/* Live pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-10 tracking-wide"
            style={{
              background: "rgba(6,182,212,0.08)",
              border: "1px solid rgba(6,182,212,0.28)",
              color: "#06b6d4",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "#4ade80",
                boxShadow: "0 0 8px #4ade80",
                animation: "pulse-soft 2s ease-in-out infinite",
              }}
            />
            1,247 joueurs en ligne maintenant
          </div>

          {/* Title */}
          <h1
            className="text-[80px] sm:text-[110px] md:text-[150px] font-black leading-none tracking-tighter mb-2 select-none"
            style={{
              background: "linear-gradient(135deg, #e0f7ff 0%, #06b6d4 30%, #a855f7 65%, #f9a8d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 60px rgba(6,182,212,0.2))",
            }}
          >
            VAULT
          </h1>
          <h1
            className="text-[80px] sm:text-[110px] md:text-[150px] font-black leading-none tracking-tighter mb-10 select-none"
            style={{
              background: "linear-gradient(135deg, #c084fc 0%, #a855f7 40%, #ec4899 70%, #fda4af 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 60px rgba(168,85,247,0.2))",
            }}
          >
            SMP
          </h1>

          <p className="text-white/40 text-base md:text-lg mb-12 max-w-xl leading-relaxed">
            Le serveur Minecraft le plus immersif de France.<br />
            Survival hardcore, kingdoms, caisses légendaires et bien plus.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-16">
            <button
              onClick={copyIP}
              className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #0284c7)",
                boxShadow: "0 8px 32px rgba(6,182,212,0.4), 0 0 0 1px rgba(6,182,212,0.25)",
                color: "#fff",
              }}
            >
              <span className="text-base">⚡</span>
              {copied ? "IP copiée !" : "Rejoindre — " + SERVER_IP}
            </button>
            <Link
              href="/store"
              className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              style={{
                background: "rgba(168,85,247,0.1)",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#a855f7",
                boxShadow: "0 4px 20px rgba(168,85,247,0.15)",
              }}
            >
              <span className="text-base">🗝️</span>
              Voir le Store
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center px-8 py-5"
                style={{ background: "rgba(255,255,255,0.025)" }}
              >
                <span className="text-xl mb-1">{s.icon}</span>
                <span
                  className="text-2xl font-black"
                  style={{ color: "#06b6d4" }}
                >
                  {s.value}
                </span>
                <span className="text-[10px] text-white/35 uppercase tracking-widest mt-0.5">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20"
          style={{ animation: "vault-float-alt 2.5s ease-in-out infinite" }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-7 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-[10px] font-black tracking-[0.4em] uppercase mb-3"
              style={{ color: "rgba(6,182,212,0.55)" }}
            >
              Ce qui nous rend unique
            </p>
            <h2
              className="text-4xl md:text-5xl font-black mb-4"
              style={{
                background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pourquoi Vault SMP ?
            </h2>
            <p className="text-white/35 max-w-md mx-auto text-sm">
              Un univers Minecraft pensé pour les joueurs exigeants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="group rounded-2xl p-6 transition-all duration-400 hover:-translate-y-1.5"
                style={{
                  background: `linear-gradient(140deg, rgba(${f.glowRgb},0.07) 0%, rgba(8,8,15,0.98) 60%)`,
                  border: `1px solid rgba(${f.glowRgb},0.15)`,
                  boxShadow: `0 0 0 1px rgba(${f.glowRgb},0.06)`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{
                    background: `rgba(${f.glowRgb},0.12)`,
                    border: `1px solid rgba(${f.glowRgb},0.25)`,
                    boxShadow: `0 0 16px rgba(${f.glowRgb},0.12)`,
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  className="font-black text-lg mb-2"
                  style={{ color: f.color }}
                >
                  {f.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STORE TEASER ===== */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(6,182,212,0.06) 50%, rgba(168,85,247,0.08) 100%)",
              border: "1px solid rgba(168,85,247,0.2)",
              boxShadow: "0 0 80px rgba(168,85,247,0.08)",
            }}
          >
            {/* BG glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(168,85,247,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <div className="text-5xl mb-6" style={{ animation: "vault-float 3s ease-in-out infinite" }}>
                🗝️
              </div>
              <p
                className="text-[10px] font-black tracking-[0.4em] uppercase mb-3"
                style={{ color: "rgba(168,85,247,0.6)" }}
              >
                Store Officiel
              </p>
              <h2
                className="text-4xl md:text-5xl font-black mb-4"
                style={{
                  background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Grades & Caisses
              </h2>
              <p className="text-white/40 text-base mb-8 max-w-md mx-auto">
                5 caisses légendaires, 4 grades premium.<br />
                Des récompenses exclusives qui définissent ton aventure.
              </p>

              {/* Key previews */}
              <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
                {[
                  { name: "Common",   color: "#4ade80" },
                  { name: "Glow",     color: "#fbbf24" },
                  { name: "Vault",    color: "#06b6d4" },
                  { name: "Amethyst", color: "#a855f7" },
                  { name: "Elytra",   color: "#f9a8d4" },
                ].map((k) => (
                  <div
                    key={k.name}
                    className="px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{
                      background: `rgba(${k.color === "#4ade80" ? "74,222,128" : k.color === "#fbbf24" ? "251,191,36" : k.color === "#06b6d4" ? "6,182,212" : k.color === "#a855f7" ? "168,85,247" : "249,168,212"},0.15)`,
                      border: `1px solid ${k.color}40`,
                      color: k.color,
                    }}
                  >
                    {k.name} Key
                  </div>
                ))}
              </div>

              <Link
                href="/store"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, rgba(168,85,247,0.35), rgba(168,85,247,0.2))",
                  border: "1px solid rgba(168,85,247,0.5)",
                  color: "#a855f7",
                  boxShadow: "0 8px 28px rgba(168,85,247,0.25)",
                }}
              >
                🛒 Ouvrir le Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY ===== */}
      <section id="community" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10"
            style={{
              background: "linear-gradient(135deg, rgba(88,101,242,0.1) 0%, rgba(8,8,15,0.98) 60%)",
              border: "1px solid rgba(88,101,242,0.2)",
            }}
          >
            <div className="text-center md:text-left flex-1">
              <div className="text-5xl mb-4">💬</div>
              <p
                className="text-[10px] font-black tracking-[0.35em] uppercase mb-2"
                style={{ color: "rgba(88,101,242,0.7)" }}
              >
                Rejoins la communauté
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
                45 000+<br />
                <span style={{ color: "#5865f2" }}>membres Discord</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm">
                Events exclusifs, annonces en avant-première, support staff 24/7 et une communauté de passionnés qui t'attend.
              </p>
              <a
                href="https://discord.gg/vaultsmp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #5865f2, #4752c4)",
                  color: "#fff",
                  boxShadow: "0 6px 24px rgba(88,101,242,0.35)",
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
                Rejoindre le Discord
              </a>
            </div>

            {/* Discord stats */}
            <div className="grid grid-cols-2 gap-3 flex-shrink-0">
              {[
                { v: "45K+",  l: "Membres",       c: "#5865f2" },
                { v: "24/7",  l: "Support",        c: "#4ade80" },
                { v: "100+",  l: "Events / mois",  c: "#fbbf24" },
                { v: "#1",    l: "Communauté FR",  c: "#a855f7" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center px-6 py-4 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="text-2xl font-black mb-0.5" style={{ color: s.c }}>
                    {s.v}
                  </div>
                  <div className="text-[10px] text-white/35 uppercase tracking-widest">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        className="border-t py-12 px-6"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-center md:text-left">
              <div
                className="font-black text-xl tracking-[0.22em] mb-1.5"
                style={{ color: "#06b6d4" }}
              >
                VAULT SMP
              </div>
              <p className="text-white/25 text-xs">
                Non affilié à Mojang AB ou Microsoft Corp.<br />
                © 2026 Vault SMP. Tous droits réservés.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-5 text-xs text-white/28">
              {["Store", "Discord", "Support", "Règlement", "CGU"].map((l) => (
                <a key={l} href="#" className="hover:text-white/55 transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div
            className="pt-6 text-center text-[11px] text-white/16"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
          >
            play.vaultsmp.net — Version Java 1.20+ &amp; Bedrock
          </div>
        </div>
      </footer>
    </div>
  );
}
