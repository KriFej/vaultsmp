"use client";

import { useState, type JSX } from "react";
import Link from "next/link";

// ==================== DATA ====================

const SERVER_IP = "vaultsmp.com";
const TEBEX_URL = "https://vaultsmp.tebex.io";

const RANKS = [
  {
    id: "vip",
    name: "VIP",
    price: "€4.99",
    period: "/month",
    color: "#a855f7",
    glowRgb: "168,85,247",
    icon: "⭐",
    perks: ["+3 Homes", "/hide (hidden username)", "/fly in lobby", "Colored chat", "Priority queue"],
    featured: false,
  },
  {
    id: "voltyplus",
    name: "VOLTY+",
    price: "€9.99",
    period: "/month",
    color: "#f97316",
    glowRgb: "249,115,22",
    icon: "🔥",
    perks: ["Everything in VIP +", "+7 Homes", "/disguise", "Custom particles", "Exclusive badge", "Shards everywhere"],
    featured: true,
  },
  {
    id: "legend",
    name: "LEGEND",
    price: "€19.99",
    period: "/month",
    color: "#eab308",
    glowRgb: "234,179,8",
    icon: "🏆",
    perks: ["Everything in VOLTY+ +", "Unlimited Homes", "Dedicated VIP spawn", "Exclusive commands", "Priority support", "Beta access"],
    featured: false,
  },
];

const CRATE_KEYS = [
  {
    id: "common",
    name: "Common",
    subtitle: "The Vault Awakening",
    price: "€1.20",
    rarity: "Common",
    color: "#4ade80",
    glowRgb: "74,222,128",
    rewards: ["Iron Equipment", "Basic Resources", "XP ×500", "Coins ×200"],
    badge: null as string | null,
    multipliers: [1, 5, 10, 20],
    floatDelay: "0s",
    beamDelay: "0s",
  },
  {
    id: "glow",
    name: "Glow",
    subtitle: "The Aura of Light",
    price: "€2.40",
    rarity: "Uncommon",
    color: "#eab308",
    glowRgb: "234,179,8",
    rewards: ["Diamond Equipment", "Glowing Treasures", "XP ×1500", "Light Effects"],
    badge: null as string | null,
    multipliers: [1, 5, 10, 20],
    floatDelay: "0.4s",
    beamDelay: "0.5s",
  },
  {
    id: "vault",
    name: "Vault",
    subtitle: "The Chest's Secret",
    price: "€3.60",
    rarity: "Rare",
    color: "#f97316",
    glowRgb: "249,115,22",
    rewards: ["Netherite Equipment", "Enchanted Weapons", "Vault Zone Access", "XP ×3000"],
    badge: "Popular" as string | null,
    multipliers: [1, 5, 10, 20],
    floatDelay: "0.8s",
    beamDelay: "1s",
  },
  {
    id: "amethyst",
    name: "Amethyst",
    subtitle: "Crystalline Magic",
    price: "€4.80",
    rarity: "Epic",
    color: "#a855f7",
    glowRgb: "168,85,247",
    rewards: ["Legendary Set", "Rare Crystals", "Mystical Powers", "Exclusive Pet"],
    badge: "Very Rare" as string | null,
    multipliers: [1, 5, 10, 20],
    floatDelay: "1.2s",
    beamDelay: "0.3s",
  },
  {
    id: "elytra",
    name: "Elytra",
    subtitle: "Grace of the Skies",
    price: "€7.20",
    rarity: "Legendary",
    color: "#f9a8d4",
    glowRgb: "249,168,212",
    rewards: ["Divine Enchanted Elytra", "Celestial Aura", "Legendary Title", "Divine Particles", "Secret Zone"],
    badge: "Legendary" as string | null,
    multipliers: [1, 5, 10, 20],
    floatDelay: "0.6s",
    beamDelay: "0.8s",
  },
];

// ==================== CART TYPES ====================

interface CartItem {
  id: string;
  name: string;
  qty: number;
  unitPrice: number;
  color: string;
  glowRgb: string;
  type: "key" | "rank";
  multiplier?: number;
}

// ==================== SVG ICONS ====================

function CartIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function CommonKeySVG({ color, size }: { color: string; size: number }) {
  const h = Math.round(size * 0.65);
  return (
    <svg width={size} height={h} viewBox="0 0 160 104" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="52" cy="52" r="38" stroke={color} strokeWidth="6" opacity="0.3" />
      <circle cx="52" cy="52" r="38" stroke={color} strokeWidth="3" />
      <circle cx="52" cy="52" r="22" fill={color} opacity="0.2" />
      <circle cx="52" cy="52" r="13" fill={color} opacity="0.55" />
      <circle cx="52" cy="52" r="6" fill={color} />
      <rect x="90" y="46" width="62" height="12" rx="6" fill={color} />
      <rect x="110" y="58" width="10" height="18" rx="4" fill={color} />
      <rect x="132" y="58" width="10" height="26" rx="4" fill={color} />
    </svg>
  );
}

function GlowKeySVG({ color, size }: { color: string; size: number }) {
  const h = Math.round(size * 0.65);
  return (
    <svg width={size} height={h} viewBox="0 0 160 104" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="52" r="38" stroke={color} strokeWidth="3" opacity="0.4" />
      <circle cx="50" cy="52" r="28" fill={color} opacity="0.1" />
      <polygon points="50,26 55,44 72,44 59,55 64,73 50,62 36,73 41,55 28,44 45,44" fill={color} opacity="0.55" />
      <circle cx="50" cy="52" r="10" fill={color} opacity="0.8" />
      <circle cx="50" cy="52" r="5" fill={color} />
      <line x1="50" y1="10" x2="50" y2="18" stroke={color} strokeWidth="2.5" opacity="0.5" />
      <line x1="82" y1="22" x2="77" y2="27" stroke={color} strokeWidth="2.5" opacity="0.4" />
      <line x1="18" y1="22" x2="23" y2="27" stroke={color} strokeWidth="2.5" opacity="0.4" />
      <rect x="88" y="46" width="64" height="12" rx="6" fill={color} />
      <rect x="108" y="58" width="10" height="16" rx="4" fill={color} />
      <rect x="130" y="58" width="10" height="24" rx="4" fill={color} />
    </svg>
  );
}

function VaultKeySVG({ color, size }: { color: string; size: number }) {
  const h = Math.round(size * 0.65);
  return (
    <svg width={size} height={h} viewBox="0 0 160 104" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="52,10 78,24 78,54 52,68 26,54 26,24" fill={color} opacity="0.12" stroke={color} strokeWidth="4" strokeLinejoin="round" />
      <polygon points="52,20 70,30 70,50 52,60 34,50 34,30" fill={color} opacity="0.25" />
      <rect x="44" y="38" width="16" height="12" rx="3" fill={color} opacity="0.6" />
      <path d="M46 38 V34 A6 6 0 0 1 58 34 V38" stroke={color} strokeWidth="3" fill="none" opacity="0.8" />
      <circle cx="52" cy="44" r="2.5" fill={color} opacity="0.9" />
      <line x1="26" y1="39" x2="14" y2="39" stroke={color} strokeWidth="2.5" opacity="0.4" strokeDasharray="3,4" />
      <line x1="14" y1="39" x2="14" y2="30" stroke={color} strokeWidth="2.5" opacity="0.4" />
      <line x1="78" y1="35" x2="90" y2="35" stroke={color} strokeWidth="2.5" opacity="0.4" strokeDasharray="3,4" />
      <rect x="78" y="37" width="70" height="12" rx="6" fill={color} />
      <rect x="98" y="49" width="10" height="16" rx="4" fill={color} />
      <rect x="120" y="49" width="10" height="22" rx="4" fill={color} />
      <rect x="140" y="49" width="8" height="13" rx="4" fill={color} />
    </svg>
  );
}

function AmethystKeySVG({ color, size }: { color: string; size: number }) {
  const h = Math.round(size * 0.65);
  return (
    <svg width={size} height={h} viewBox="0 0 160 104" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="52,8 74,32 68,62 36,62 30,32" fill={color} opacity="0.18" stroke={color} strokeWidth="3.5" strokeLinejoin="round" />
      <polygon points="52,20 66,36 62,52 42,52 38,36" fill={color} opacity="0.35" />
      <line x1="52" y1="8" x2="52" y2="20" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <line x1="52" y1="20" x2="66" y2="36" stroke={color} strokeWidth="1.5" opacity="0.4" />
      <polygon points="18,34 24,28 28,38" fill={color} opacity="0.55" />
      <polygon points="82,16 78,8 86,12" fill={color} opacity="0.55" />
      <polygon points="16,56 22,50 24,60" fill={color} opacity="0.4" />
      <polygon points="84,56 80,48 90,52" fill={color} opacity="0.4" />
      <circle cx="52" cy="36" r="8" fill={color} opacity="0.5" />
      <circle cx="52" cy="36" r="4" fill={color} opacity="0.85" />
      <rect x="68" y="30" width="80" height="12" rx="6" fill={color} />
      <rect x="90" y="42" width="10" height="16" rx="4" fill={color} />
      <rect x="114" y="42" width="10" height="24" rx="4" fill={color} />
    </svg>
  );
}

function ElytraKeySVG({ color, size }: { color: string; size: number }) {
  const h = Math.round(size * 0.72);
  return (
    <svg width={size} height={h} viewBox="0 0 160 116" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M54 60 C40 38 14 38 10 56 C6 72 28 72 48 64 Z" fill={color} opacity="0.3" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M54 60 C44 48 28 46 22 56 C18 64 32 66 48 62 Z" fill={color} opacity="0.18" />
      <path d="M54 60 C68 38 94 38 98 56 C102 72 80 72 60 64 Z" fill={color} opacity="0.3" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M54 60 C64 48 80 46 86 56 C90 64 76 66 60 62 Z" fill={color} opacity="0.18" />
      <circle cx="54" cy="60" r="12" fill={color} opacity="0.2" />
      <circle cx="54" cy="60" r="8" fill={color} opacity="0.45" />
      <circle cx="54" cy="60" r="4" fill={color} />
      <line x1="54" y1="44" x2="54" y2="50" stroke={color} strokeWidth="2" opacity="0.5" />
      <line x1="42" y1="48" x2="46" y2="52" stroke={color} strokeWidth="2" opacity="0.4" />
      <line x1="66" y1="48" x2="62" y2="52" stroke={color} strokeWidth="2" opacity="0.4" />
      <rect x="66" y="54" width="82" height="12" rx="6" fill={color} />
      <rect x="88" y="66" width="10" height="16" rx="4" fill={color} />
      <rect x="112" y="66" width="10" height="24" rx="4" fill={color} />
      <rect x="134" y="66" width="9" height="14" rx="4" fill={color} />
    </svg>
  );
}

function KeyIcon({ keyId, color, size = 100 }: { keyId: string; color: string; size?: number }) {
  const props = { color, size };
  const map: Record<string, JSX.Element> = {
    common:   <CommonKeySVG {...props} />,
    glow:     <GlowKeySVG {...props} />,
    vault:    <VaultKeySVG {...props} />,
    amethyst: <AmethystKeySVG {...props} />,
    elytra:   <ElytraKeySVG {...props} />,
  };
  return map[keyId] ?? <CommonKeySVG {...props} />;
}

// ==================== HERO PARTICLES ====================

const HERO_PARTICLES = [
  { x: 8,  y: 82, size: 3, delay: "0s",   dur: "3s",   c: "#f97316" },
  { x: 18, y: 65, size: 2, delay: "0.5s", dur: "4s",   c: "#a855f7" },
  { x: 29, y: 88, size: 4, delay: "1s",   dur: "3.5s", c: "#f97316" },
  { x: 42, y: 72, size: 2, delay: "1.5s", dur: "2.8s", c: "#a855f7" },
  { x: 50, y: 90, size: 3, delay: "0.3s", dur: "4s",   c: "#eab308" },
  { x: 62, y: 78, size: 2, delay: "0.8s", dur: "3.2s", c: "#f97316" },
  { x: 71, y: 68, size: 4, delay: "1.2s", dur: "3.8s", c: "#a855f7" },
  { x: 83, y: 82, size: 3, delay: "0.6s", dur: "4.2s", c: "#f97316" },
  { x: 92, y: 74, size: 2, delay: "1.8s", dur: "2.6s", c: "#eab308" },
  { x: 14, y: 55, size: 3, delay: "2s",   dur: "3.4s", c: "#a855f7" },
  { x: 25, y: 42, size: 2, delay: "0.4s", dur: "4.4s", c: "#f97316" },
  { x: 57, y: 36, size: 2, delay: "2.2s", dur: "4.6s", c: "#f97316" },
  { x: 77, y: 42, size: 2, delay: "0.7s", dur: "3.8s", c: "#a855f7" },
  { x: 88, y: 58, size: 4, delay: "1.1s", dur: "4s",   c: "#f97316" },
  { x: 50, y: 22, size: 3, delay: "0.2s", dur: "3.6s", c: "#f97316" },
  { x: 72, y: 28, size: 2, delay: "0.1s", dur: "4.8s", c: "#a855f7" },
];

function HeroParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {HERO_PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size * 2,
            height: p.size * 2,
            background: p.c,
            boxShadow: `0 0 ${p.size * 4}px ${p.c}`,
            opacity: 0,
            animation: `vault-particle ${p.dur} ease-out ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}

// ==================== CART DRAWER ====================

function CartDrawer({
  cart,
  onClose,
  onQtyChange,
  onRemove,
}: {
  cart: CartItem[];
  onClose: () => void;
  onQtyChange: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}) {
  const total = cart.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);

  const handleCheckout = () => {
    window.open(TEBEX_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm flex flex-col"
        style={{
          background: "#0d0d18",
          borderLeft: "1px solid rgba(249,115,22,0.18)",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.8)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <h2 className="font-black text-base tracking-wide text-white flex items-center gap-2">
            <CartIcon size={18} />
            Cart
            {cart.length > 0 && (
              <span
                className="px-2 py-0.5 rounded-full text-xs font-bold"
                style={{ background: "rgba(249,115,22,0.2)", color: "#f97316" }}
              >
                {cart.reduce((s, i) => s + i.qty, 0)}
              </span>
            )}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white/80 transition-colors text-sm"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-white/25">
              <CartIcon size={36} />
              <p className="text-sm">Your cart is empty</p>
            </div>
          ) : (
            cart.map(item => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{
                  background: `rgba(${item.glowRgb},0.06)`,
                  border: `1px solid rgba(${item.glowRgb},0.14)`,
                }}
              >
                <div
                  className="w-2 h-10 rounded-full flex-shrink-0"
                  style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate">{item.name}</p>
                  <p className="text-xs" style={{ color: `rgba(${item.glowRgb},0.7)` }}>
                    €{item.unitPrice.toFixed(2)} {item.type === "rank" ? "/month" : ""}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => item.qty > 1 ? onQtyChange(item.id, item.qty - 1) : onRemove(item.id)}
                    className="w-7 h-7 rounded-lg text-sm font-bold text-white/60 hover:text-white transition-colors flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    −
                  </button>
                  <span className="text-sm font-bold text-white w-4 text-center">{item.qty}</span>
                  <button
                    onClick={() => onQtyChange(item.id, item.qty + 1)}
                    className="w-7 h-7 rounded-lg text-sm font-bold flex items-center justify-center"
                    style={{ background: `rgba(${item.glowRgb},0.18)`, color: item.color }}
                  >
                    +
                  </button>
                </div>
                <div className="text-sm font-black text-white w-14 text-right">
                  €{(item.unitPrice * item.qty).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div
            className="px-5 py-4 space-y-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex justify-between items-center">
              <span className="text-white/45 text-sm">Total</span>
              <span className="text-xl font-black text-white">€{total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full py-3.5 rounded-xl font-black text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #f97316, #ea580c)",
                boxShadow: "0 8px 28px rgba(249,115,22,0.4)",
                color: "#fff",
              }}
            >
              Pay €{total.toFixed(2)} →
            </button>
            <p className="text-center text-white/20 text-[11px]">
              Secure checkout via Tebex
            </p>
          </div>
        )}
      </div>
    </>
  );
}

// ==================== CRATE CARD ====================

function CrateCard({
  keyData,
  onAddToCart,
}: {
  keyData: typeof CRATE_KEYS[0];
  onAddToCart: (item: CartItem) => void;
}) {
  const [qtyIdx, setQtyIdx] = useState(0);
  const unitPrice = parseFloat(keyData.price.replace("€", ""));
  const qty = keyData.multipliers[qtyIdx];
  const totalPrice = (unitPrice * qty).toFixed(2);

  const handleAdd = () => {
    onAddToCart({
      id: `${keyData.id}-x${qty}`,
      name: `${keyData.name} Key ×${qty}`,
      qty: 1,
      unitPrice: unitPrice * qty,
      color: keyData.color,
      glowRgb: keyData.glowRgb,
      type: "key",
      multiplier: qty,
    });
  };

  return (
    <div
      className="relative group flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
      style={{
        background: `linear-gradient(160deg, rgba(${keyData.glowRgb},0.07) 0%, #08080f 55%, rgba(${keyData.glowRgb},0.04) 100%)`,
        border: `1px solid rgba(${keyData.glowRgb},0.18)`,
        boxShadow: `0 0 0 1px rgba(${keyData.glowRgb},0.08), 0 4px 24px rgba(0,0,0,0.6)`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(${keyData.glowRgb},0.14) 0%, transparent 65%)` }}
      />

      {/* Light beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] origin-top"
        style={{
          height: "45%",
          background: `linear-gradient(to bottom, rgba(${keyData.glowRgb},0.9) 0%, rgba(${keyData.glowRgb},0.3) 50%, transparent 100%)`,
          animation: `vault-beam 2.8s ease-in-out ${keyData.beamDelay} infinite`,
        }}
      />

      {/* Shimmer on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden rounded-2xl" style={{ transition: "opacity 0.3s" }}>
        <div style={{
          position: "absolute", top: 0, left: "-30%", width: "30%", height: "100%",
          background: `linear-gradient(90deg, transparent, rgba(${keyData.glowRgb},0.08), transparent)`,
          animation: "vault-shimmer 1.8s ease-in-out infinite",
        }} />
      </div>

      {/* Badge */}
      {keyData.badge && (
        <div
          className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase"
          style={{
            background: `rgba(${keyData.glowRgb},0.18)`,
            border: `1px solid rgba(${keyData.glowRgb},0.5)`,
            color: keyData.color,
          }}
        >
          {keyData.badge}
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center gap-5 p-6">
        {/* Key icon */}
        <div className="relative flex items-center justify-center mt-2 mb-1">
          <div
            className="absolute rounded-full border"
            style={{
              width: 120, height: 120,
              borderColor: `rgba(${keyData.glowRgb},0.15)`,
              animation: `vault-glow-ring 3s ease-in-out ${keyData.floatDelay} infinite`,
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 90, height: 90,
              background: `radial-gradient(circle, rgba(${keyData.glowRgb},0.15) 0%, transparent 70%)`,
            }}
          />
          <div
            style={{
              filter: `drop-shadow(0 0 14px rgba(${keyData.glowRgb},0.7)) drop-shadow(0 0 30px rgba(${keyData.glowRgb},0.35))`,
              animation: `vault-float 3.8s ease-in-out ${keyData.floatDelay} infinite`,
            }}
          >
            <KeyIcon keyId={keyData.id} color={keyData.color} size={114} />
          </div>
        </div>

        {/* Rarity + name */}
        <div className="text-center">
          <div className="text-[10px] font-bold tracking-[0.25em] uppercase mb-1.5" style={{ color: `rgba(${keyData.glowRgb},0.65)` }}>
            {keyData.rarity}
          </div>
          <h3 className="text-2xl font-black tracking-wide" style={{ color: keyData.color, textShadow: `0 0 24px rgba(${keyData.glowRgb},0.55)` }}>
            {keyData.name} Key
          </h3>
          <p className="text-[12px] text-white/35 mt-1 font-medium italic">{keyData.subtitle}</p>
        </div>

        <div className="w-full h-px" style={{ background: `linear-gradient(to right, transparent, rgba(${keyData.glowRgb},0.45), transparent)` }} />

        {/* Rewards */}
        <div className="w-full space-y-2">
          {keyData.rewards.map((reward, i) => (
            <div key={i} className="flex items-center gap-2.5 text-sm">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: keyData.color, boxShadow: `0 0 6px ${keyData.color}` }} />
              <span className="text-white/65">{reward}</span>
            </div>
          ))}
        </div>

        {/* Quantity selector */}
        <div className="grid grid-cols-4 gap-1.5 w-full">
          {keyData.multipliers.map((mult, i) => (
            <button
              key={i}
              onClick={() => setQtyIdx(i)}
              className="py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={
                qtyIdx === i
                  ? { background: `rgba(${keyData.glowRgb},0.22)`, border: `1px solid rgba(${keyData.glowRgb},0.65)`, color: keyData.color }
                  : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.45)" }
              }
            >
              {mult}×
            </button>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="w-full mt-auto">
          <div className="text-center text-2xl font-black mb-3" style={{ color: keyData.color, textShadow: `0 0 16px rgba(${keyData.glowRgb},0.5)` }}>
            €{totalPrice}
          </div>
          <button
            onClick={handleAdd}
            className="w-full py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-95"
            style={{
              background: `linear-gradient(135deg, rgba(${keyData.glowRgb},0.28) 0%, rgba(${keyData.glowRgb},0.12) 100%)`,
              border: `1px solid rgba(${keyData.glowRgb},0.5)`,
              color: keyData.color,
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== RANK CARD ====================

function RankCard({
  rank,
  onAddToCart,
}: {
  rank: typeof RANKS[0];
  onAddToCart: (item: CartItem) => void;
}) {
  const price = parseFloat(rank.price.replace("€", ""));

  const handleAdd = () => {
    onAddToCart({
      id: `rank-${rank.id}`,
      name: `${rank.name} Rank`,
      qty: 1,
      unitPrice: price,
      color: rank.color,
      glowRgb: rank.glowRgb,
      type: "rank",
    });
  };

  return (
    <div
      className="relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
      style={{
        background: `linear-gradient(150deg, rgba(${rank.glowRgb},0.09) 0%, #08080f 55%)`,
        border: rank.featured ? `1.5px solid rgba(${rank.glowRgb},0.55)` : `1px solid rgba(${rank.glowRgb},0.18)`,
        boxShadow: rank.featured ? `0 0 40px rgba(${rank.glowRgb},0.18)` : `0 0 0 1px rgba(${rank.glowRgb},0.06)`,
      }}
    >
      {rank.featured && (
        <div
          className="py-1.5 text-center text-[10px] font-black tracking-[0.25em] uppercase"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${rank.glowRgb},0.25), transparent)`,
            color: rank.color,
            borderBottom: `1px solid rgba(${rank.glowRgb},0.3)`,
          }}
        >
          ✦ Most Popular ✦
        </div>
      )}

      <div className={`flex flex-col flex-1 p-6 ${rank.featured ? "pt-5" : ""}`}>
        <div className="text-center mb-5">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-2xl mb-3"
            style={{
              background: `rgba(${rank.glowRgb},0.12)`,
              border: `1px solid rgba(${rank.glowRgb},0.3)`,
            }}
          >
            {rank.icon}
          </div>
          <h3
            className="text-2xl font-black tracking-[0.18em]"
            style={{ color: rank.color, textShadow: `0 0 20px rgba(${rank.glowRgb},0.5)` }}
          >
            {rank.name}
          </h3>
          <div className="mt-2">
            <span className="text-3xl font-black" style={{ color: rank.color }}>{rank.price}</span>
            <span className="text-white/35 text-sm">{rank.period}</span>
          </div>
        </div>

        <div className="h-px mb-5" style={{ background: `linear-gradient(to right, transparent, rgba(${rank.glowRgb},0.5), transparent)` }} />

        <div className="flex-1 space-y-2.5 mb-6">
          {rank.perks.map((perk, i) => (
            <div key={i} className="flex items-center gap-2.5 text-sm">
              <div
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black"
                style={{ background: `rgba(${rank.glowRgb},0.18)`, border: `1px solid rgba(${rank.glowRgb},0.35)`, color: rank.color }}
              >
                ✓
              </div>
              <span className="text-white/65">{perk}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleAdd}
          className="w-full py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-95"
          style={{
            background: rank.featured
              ? `linear-gradient(135deg, rgba(${rank.glowRgb},0.38), rgba(${rank.glowRgb},0.2))`
              : `rgba(${rank.glowRgb},0.1)`,
            border: `1px solid rgba(${rank.glowRgb},${rank.featured ? "0.6" : "0.3"})`,
            color: rank.color,
            boxShadow: rank.featured ? `0 4px 20px rgba(${rank.glowRgb},0.28)` : undefined,
          }}
        >
          Get {rank.name}
        </button>
      </div>
    </div>
  );
}

// ==================== SECTION HEADER ====================

function SectionHeader({ eyebrow, title, subtitle, color }: { eyebrow: string; title: string; subtitle: string; color: string }) {
  return (
    <div className="text-center mb-12">
      <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-3" style={{ color }}>
        {eyebrow}
      </p>
      <h2
        className="text-3xl md:text-5xl font-black mb-4 leading-tight"
        style={{
          background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.65) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </h2>
      <p className="text-white/35 max-w-md mx-auto text-sm leading-relaxed">{subtitle}</p>
    </div>
  );
}

// ==================== MAIN PAGE ====================

export default function StorePage() {
  const [copied, setCopied] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText(SERVER_IP).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + item.qty } : i);
      return [...prev, item];
    });
    setCartOpen(true);
  };

  const updateQty = (id: string, qty: number) => setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  const removeItem = (id: string) => setCart(prev => prev.filter(i => i.id !== id));
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans" style={{ background: "#05050a", color: "#fff" }}>

      {/* Cart drawer */}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onQtyChange={updateQty}
          onRemove={removeItem}
        />
      )}

      {/* ===== NAV ===== */}
      <nav
        className="absolute top-0 left-0 right-0 z-20"
        style={{
          background: "linear-gradient(to bottom, rgba(5,5,10,0.7) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          {/* Left: logo + cart */}
          <div className="flex items-center gap-3">
            <Link href="/" className="font-black text-base tracking-[0.2em]" style={{ color: "#f97316" }}>
              VAULT SMP
            </Link>
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(249,115,22,0.1)",
                border: "1px solid rgba(249,115,22,0.28)",
                color: "#f97316",
              }}
            >
              <CartIcon size={16} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[9px] font-black flex items-center justify-center"
                  style={{ background: "#f97316", color: "#fff" }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Right: IP */}
          <button
            onClick={copyIP}
            className="text-xs px-4 py-2 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(249,115,22,0.07)",
              border: "1px solid rgba(249,115,22,0.2)",
              color: copied ? "#4ade80" : "rgba(249,115,22,0.7)",
            }}
          >
            {copied ? "✓ Copied!" : SERVER_IP}
          </button>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-[72vh] flex flex-col items-center justify-center overflow-hidden">
        {/* BG */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 50% 50%, rgba(249,115,22,0.07) 0%, transparent 65%),
              radial-gradient(ellipse 45% 45% at 20% 90%, rgba(168,85,247,0.1) 0%, transparent 60%),
              radial-gradient(ellipse 45% 45% at 80% 15%, rgba(234,179,8,0.07) 0%, transparent 60%)
            `,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,115,22,0.04) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)",
          }}
        />
        <HeroParticles />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 pt-16">
          <h1
            className="text-[72px] sm:text-[100px] md:text-[140px] font-black leading-none tracking-tighter mb-0 select-none"
            style={{
              background: "linear-gradient(135deg, #fff7ed 0%, #f97316 35%, #ea580c 65%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 50px rgba(249,115,22,0.25))",
            }}
          >
            VAULT
          </h1>
          <h1
            className="text-[72px] sm:text-[100px] md:text-[140px] font-black leading-none tracking-tighter mb-6 select-none"
            style={{
              background: "linear-gradient(135deg, #c084fc 0%, #a855f7 40%, #f97316 70%, #eab308 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 50px rgba(168,85,247,0.25))",
            }}
          >
            SMP
          </h1>
          <p className="text-white/38 text-sm md:text-base max-w-sm leading-relaxed">
            Premium ranks, legendary crates and exclusive rewards.
          </p>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20"
          style={{ animation: "vault-float-alt 2.2s ease-in-out infinite" }}
        >
          <div className="w-px h-6 bg-gradient-to-b from-white/25 to-transparent" />
        </div>
      </section>

      {/* ===== CRATES SECTION ===== */}
      <section className="max-w-7xl mx-auto px-5 pt-16 pb-20">
        <SectionHeader
          eyebrow="Mystery Crates"
          title="Choose your destiny"
          subtitle="Five legendary keys. Each holds unique treasures. The higher the rarity, the more divine the rewards."
          color="rgba(249,115,22,0.55)"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {CRATE_KEYS.map(k => (
            <CrateCard key={k.id} keyData={k} onAddToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-5">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(249,115,22,0.15), transparent)" }} />
      </div>

      {/* ===== RANKS SECTION ===== */}
      <section className="max-w-4xl mx-auto px-5 pt-20 pb-28">
        <SectionHeader
          eyebrow="Premium Ranks"
          title="Elevate your status"
          subtitle="Exclusive perks and a recognized premium status. Cancel anytime, active immediately."
          color="rgba(249,115,22,0.55)"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {RANKS.map(r => <RankCard key={r.id} rank={r} onAddToCart={addToCart} />)}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t py-10 px-5" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-black text-lg tracking-[0.22em] mb-1" style={{ color: "#f97316" }}>
              VAULT SMP
            </div>
            <p className="text-white/22 text-xs">
              Not affiliated with Mojang AB or Microsoft Corp.<br />
              © 2026 Vault SMP. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-5 text-xs text-white/28 font-medium">
            {["Privacy Policy", "Terms of Service", "Support", "Discord", "Refunds"].map(link => (
              <a key={link} href="#" className="hover:text-white/55 transition-colors">{link}</a>
            ))}
          </div>
        </div>
        <p className="text-center text-white/12 text-[11px] mt-6">
          Payments processed by Tebex Limited · support@vaultsmp.net
        </p>
      </footer>
    </div>
  );
}
