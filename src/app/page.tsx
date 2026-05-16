"use client";

import { useState } from "react";
import Link from "next/link";

const SERVER = "vaultsmp.com";

const STATS = [
  { value: "—",    label: "Players Online", icon: "⚡" },
  { value: "—",    label: "Discord",        icon: "💬" },
  { value: "—",    label: "Crates Opened",  icon: "📦" },
  { value: "24/7", label: "Uptime",         icon: "🔒" },
];

const FEATURES = [
  {
    icon: "⚔️",
    title: "Hardcore Survival",
    desc: "A brutal, persistent and competitive world. Only the strongest survive inside the Vault.",
    color: "#ef4444",
    glowRgb: "239,68,68",
  },
  {
    icon: "🏰",
    title: "Kingdoms",
    desc: "Build your kingdom, forge alliances and conquer entire territories with your crew.",
    color: "#f97316",
    glowRgb: "249,115,22",
  },
  {
    icon: "🗝️",
    title: "Crates & Loot",
    desc: "Open legendary crates to unlock unique gear, exclusive cosmetics and rare rewards.",
    color: "#a855f7",
    glowRgb: "168,85,247",
  },
  {
    icon: "🏛️",
    title: "The Vault",
    desc: "A secret zone hidden at the heart of the server, accessible only to the most worthy.",
    color: "#eab308",
    glowRgb: "234,179,8",
  },
  {
    icon: "🏆",
    title: "Leaderboards",
    desc: "Compete to be the best — kills, wealth, PvP rating. Your rank defines your legacy.",
    color: "#4ade80",
    glowRgb: "74,222,128",
  },
  {
    icon: "🌐",
    title: "Community",
    desc: "Thousands of Discord members, regular events and a responsive staff team around the clock.",
    color: "#f9a8d4",
    glowRgb: "249,168,212",
  },
];

const KEY_PREVIEWS = [
  { name: "Common",   color: "#4ade80",  glowRgb: "74,222,128"  },
  { name: "Glow",     color: "#eab308",  glowRgb: "234,179,8"   },
  { name: "Vault",    color: "#f97316",  glowRgb: "249,115,22"  },
  { name: "Amethyst", color: "#a855f7",  glowRgb: "168,85,247"  },
  { name: "Elytra",   color: "#f9a8d4",  glowRgb: "249,168,212" },
];

const PARTICLES = [
  { x: 8,  y: 75, s: 3, d: "0s",   dur: "3s",   c: "#f97316" },
  { x: 18, y: 60, s: 2, d: "0.5s", dur: "4s",   c: "#a855f7" },
  { x: 30, y: 85, s: 4, d: "1s",   dur: "3.5s", c: "#f97316" },
  { x: 42, y: 70, s: 2, d: "1.5s", dur: "2.8s", c: "#eab308" },
  { x: 55, y: 88, s: 3, d: "0.3s", dur: "4s",   c: "#a855f7" },
  { x: 65, y: 72, s: 2, d: "0.8s", dur: "3.2s", c: "#f97316" },
  { x: 75, y: 65, s: 4, d: "1.2s", dur: "3.8s", c: "#a855f7" },
  { x: 85, y: 78, s: 3, d: "0.6s", dur: "4.2s", c: "#eab308" },
  { x: 93, y: 68, s: 2, d: "1.8s", dur: "2.6s", c: "#f97316" },
  { x: 12, y: 50, s: 3, d: "2s",   dur: "3.4s", c: "#a855f7" },
  { x: 22, y: 38, s: 2, d: "0.4s", dur: "4.4s", c: "#f97316" },
  { x: 38, y: 52, s: 4, d: "1.6s", dur: "3s",   c: "#eab308" },
  { x: 48, y: 42, s: 3, d: "0.9s", dur: "3.6s", c: "#a855f7" },
  { x: 60, y: 32, s: 2, d: "2.2s", dur: "4.6s", c: "#f97316" },
  { x: 70, y: 48, s: 3, d: "1.4s", dur: "3.2s", c: "#eab308" },
  { x: 80, y: 38, s: 2, d: "0.7s", dur: "3.8s", c: "#a855f7" },
  { x: 90, y: 55, s: 4, d: "1.1s", dur: "4s",   c: "#f97316" },
  { x: 5,  y: 28, s: 3, d: "2.4s", dur: "3s",   c: "#eab308" },
  { x: 97, y: 32, s: 2, d: "1.7s", dur: "4.2s", c: "#a855f7" },
  { x: 50, y: 18, s: 3, d: "0.2s", dur: "3.6s", c: "#f97316" },
];

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText(SERVER).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen font-sans" style={{ background: "#05050a", color: "#fff" }}>

      {/* ===== NAV ===== */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(5,5,10,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(249,115,22,0.08)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm"
              style={{
                background: "linear-gradient(135deg, rgba(249,115,22,0.3), rgba(168,85,247,0.2))",
                border: "1px solid rgba(249,115,22,0.4)",
              }}
            >
              ⚡
            </div>
            <span
              className="font-black text-sm tracking-[0.2em] hidden xs:block sm:block"
              style={{ color: "#f97316" }}
            >
              VAULT SMP
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-white/45 font-semibold">
            <a href="#features" className="hover:text-white/80 transition-colors">Features</a>
            <a href="#community" className="hover:text-white/80 transition-colors">Community</a>
            <Link href="/store" className="hover:text-white/80 transition-colors">Store</Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={copyIP}
              className="hidden sm:flex items-center gap-2 text-xs px-3 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(249,115,22,0.08)",
                border: "1px solid rgba(249,115,22,0.2)",
                color: copied ? "#4ade80" : "rgba(249,115,22,0.8)",
              }}
            >
              {copied ? "✓ Copied!" : SERVER}
            </button>
            <Link
              href="/store"
              className="text-sm px-4 py-2 rounded-lg font-bold transition-all duration-200 hover:scale-105 whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #f97316, #ea580c)",
                color: "#fff",
                boxShadow: "0 4px 16px rgba(249,115,22,0.35)",
              }}
            >
              Store →
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(o => !o)}
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-white/50"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              {mobileMenuOpen ? "✕" : "≡"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden px-5 pb-4 flex flex-col gap-3 text-sm font-semibold"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="py-2 text-white/55 hover:text-white/90 transition-colors">Features</a>
            <a href="#community" onClick={() => setMobileMenuOpen(false)} className="py-2 text-white/55 hover:text-white/90 transition-colors">Community</a>
            <Link href="/store" onClick={() => setMobileMenuOpen(false)} className="py-2 text-white/55 hover:text-white/90 transition-colors">Store</Link>
            <button
              onClick={() => { copyIP(); setMobileMenuOpen(false); }}
              className="text-left py-2 transition-colors"
              style={{ color: copied ? "#4ade80" : "rgba(249,115,22,0.8)" }}
            >
              {copied ? "✓ Copied!" : `Copy IP — ${SERVER}`}
            </button>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">

        {/* BG gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 40%, rgba(249,115,22,0.06) 0%, transparent 60%),
              radial-gradient(ellipse 50% 50% at 15% 85%, rgba(168,85,247,0.09) 0%, transparent 55%),
              radial-gradient(ellipse 50% 50% at 85% 15%, rgba(234,179,8,0.07) 0%, transparent 55%)
            `,
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(249,115,22,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(249,115,22,0.04) 1px, transparent 1px)
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
        <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto flex flex-col items-center">

          {/* Title */}
          <h1
            className="text-[68px] sm:text-[100px] md:text-[140px] font-black leading-none tracking-tighter mb-0 select-none"
            style={{
              background: "linear-gradient(135deg, #fff7ed 0%, #f97316 30%, #ea580c 60%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 60px rgba(249,115,22,0.2))",
            }}
          >
            VAULT
          </h1>
          <h1
            className="text-[68px] sm:text-[100px] md:text-[140px] font-black leading-none tracking-tighter mb-8 select-none"
            style={{
              background: "linear-gradient(135deg, #c084fc 0%, #a855f7 40%, #f97316 70%, #eab308 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 60px rgba(168,85,247,0.2))",
            }}
          >
            SMP
          </h1>

          <p className="text-white/40 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
            The most immersive Minecraft server.<br className="hidden sm:block" />
            Hardcore survival, kingdoms, legendary crates and more.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-14 w-full sm:w-auto">
            <button
              onClick={copyIP}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #f97316, #ea580c)",
                boxShadow: "0 8px 32px rgba(249,115,22,0.4)",
                color: "#fff",
              }}
            >
              <span>⚡</span>
              {copied ? "Copied!" : `Join — ${SERVER}`}
            </button>
            <Link
              href="/store"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(249,115,22,0.08)",
                border: "1px solid rgba(249,115,22,0.28)",
                color: "#f97316",
              }}
            >
              <span>🗝️</span>
              Open Store
            </Link>
          </div>

          {/* Stats strip */}
          <div
            className="w-full grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(249,115,22,0.1)" }}
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center px-4 py-5"
                style={{
                  background: "rgba(249,115,22,0.03)",
                  borderRight: i < 3 ? "1px solid rgba(249,115,22,0.08)" : undefined,
                  borderBottom: i < 2 ? "1px solid rgba(249,115,22,0.08)" : undefined,
                }}
              >
                <span className="text-xl mb-1">{s.icon}</span>
                <span
                  className="text-2xl font-black"
                  style={{ color: "#f97316" }}
                >
                  {s.value}
                </span>
                <span className="text-[10px] text-white/30 uppercase tracking-widest mt-0.5">
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
      <section id="features" className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-[10px] font-black tracking-[0.4em] uppercase mb-3"
              style={{ color: "rgba(249,115,22,0.55)" }}
            >
              What makes us different
            </p>
            <h2
              className="text-3xl md:text-5xl font-black mb-4"
              style={{
                background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Why Vault SMP?
            </h2>
            <p className="text-white/35 max-w-sm mx-auto text-sm">
              A Minecraft universe built for players who demand more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: `linear-gradient(140deg, rgba(${f.glowRgb},0.07) 0%, rgba(8,8,15,0.98) 60%)`,
                  border: `1px solid rgba(${f.glowRgb},0.14)`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{
                    background: `rgba(${f.glowRgb},0.12)`,
                    border: `1px solid rgba(${f.glowRgb},0.22)`,
                  }}
                >
                  {f.icon}
                </div>
                <h3 className="font-black text-base mb-2" style={{ color: f.color }}>
                  {f.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STORE TEASER ===== */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden p-8 md:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(8,8,15,0.98) 50%, rgba(168,85,247,0.07) 100%)",
              border: "1px solid rgba(249,115,22,0.2)",
              boxShadow: "0 0 80px rgba(249,115,22,0.07)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <div className="text-5xl mb-5" style={{ animation: "vault-float 3s ease-in-out infinite" }}>
                🗝️
              </div>
              <p
                className="text-[10px] font-black tracking-[0.4em] uppercase mb-3"
                style={{ color: "rgba(249,115,22,0.6)" }}
              >
                Official Store
              </p>
              <h2
                className="text-3xl md:text-4xl font-black mb-4"
                style={{
                  background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ranks & Crates
              </h2>
              <p className="text-white/40 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                5 legendary crates, 3 premium ranks.<br />
                Exclusive rewards that define your adventure.
              </p>

              {/* Key previews */}
              <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
                {KEY_PREVIEWS.map((k) => (
                  <div
                    key={k.name}
                    className="px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{
                      background: `rgba(${k.glowRgb},0.14)`,
                      border: `1px solid rgba(${k.glowRgb},0.35)`,
                      color: k.color,
                    }}
                  >
                    {k.name} Key
                  </div>
                ))}
              </div>

              <Link
                href="/store"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  color: "#fff",
                  boxShadow: "0 8px 28px rgba(249,115,22,0.4)",
                }}
              >
                🛒 Open the Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY ===== */}
      <section id="community" className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-10"
            style={{
              background: "linear-gradient(135deg, rgba(88,101,242,0.09) 0%, rgba(8,8,15,0.98) 60%)",
              border: "1px solid rgba(88,101,242,0.18)",
            }}
          >
            <div className="text-center md:text-left flex-1">
              <div className="text-4xl mb-4">💬</div>
              <p
                className="text-[10px] font-black tracking-[0.35em] uppercase mb-2"
                style={{ color: "rgba(88,101,242,0.7)" }}
              >
                Join the community
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-3 text-white">
                Connect on<br />
                <span style={{ color: "#5865f2" }}>Discord</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
                Exclusive events, early announcements, 24/7 staff support and a passionate community waiting for you.
              </p>
              <a
                href="https://discord.gg/vaultsmp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #5865f2, #4752c4)",
                  color: "#fff",
                  boxShadow: "0 6px 24px rgba(88,101,242,0.35)",
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
                Join Discord
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full md:w-auto md:flex-shrink-0">
              {[
                { v: "—",    l: "Members",        c: "#5865f2" },
                { v: "24/7", l: "Support",        c: "#4ade80" },
                { v: "—",    l: "Events / month", c: "#f97316" },
                { v: "—",    l: "Community rank",  c: "#a855f7" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center px-5 py-4 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="text-2xl font-black mb-0.5" style={{ color: s.c }}>
                    {s.v}
                  </div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest">
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
        className="border-t py-10 px-5"
        style={{ borderColor: "rgba(249,115,22,0.08)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-7">
            <div className="text-center md:text-left">
              <div
                className="font-black text-lg tracking-[0.22em] mb-1.5"
                style={{ color: "#f97316" }}
              >
                VAULT SMP
              </div>
              <p className="text-white/22 text-xs">
                Not affiliated with Mojang AB or Microsoft Corp.<br />
                © 2026 Vault SMP. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-5 text-xs text-white/28 font-medium">
              {["Store", "Discord", "Support", "Terms", "Privacy"].map((l) => (
                <a key={l} href="#" className="hover:text-white/55 transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div
            className="pt-5 text-center text-[11px] text-white/16"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
          >
            {SERVER} — Java 1.20+ &amp; Bedrock
          </div>
        </div>
      </footer>
    </div>
  );
}
