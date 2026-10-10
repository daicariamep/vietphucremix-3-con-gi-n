import React from "react";

/**
 * Photorealistic 3D Asset Graphics for Vietnamese Traditional Accessories
 * Designed with multi-layer shading, specular highlights, royal gold accents & authentic cultural textures.
 */

/* =========================================================================
   1. MẤN / KHĂN VẤN HOÀNG TRIỀU (Royal Silk Turban / Crown)
   ========================================================================= */

/** Card/Badge View for Mấn */
export function Graphic3DManKhan({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cardManGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="manSilkGrad"
          x1="10"
          y1="20"
          x2="110"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E03131" />
          <stop offset="25%" stopColor="#C92A2A" />
          <stop offset="55%" stopColor="#8C1417" />
          <stop offset="85%" stopColor="#5C0D10" />
          <stop offset="100%" stopColor="#3B0507" />
        </linearGradient>
        <linearGradient id="goldThread" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFF2A3" />
          <stop offset="30%" stopColor="#F5D061" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#997300" />
        </linearGradient>
        <radialGradient id="rubyGlow" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FF8787" />
          <stop offset="50%" stopColor="#E03131" />
          <stop offset="100%" stopColor="#7A090B" />
        </radialGradient>
        <filter id="softCardShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#000" floodOpacity="0.45" />
        </filter>
      </defs>

      <circle cx="60" cy="50" r="46" fill="url(#cardManGlow)" />

      <g filter="url(#softCardShadow)">
        {/* Outer Arched Crown Silhouette */}
        <path
          d="M16 66C16 42 34 22 60 22C86 22 104 42 104 66C94 62 80 57 60 57C40 57 26 62 16 66Z"
          fill="url(#manSilkGrad)"
        />

        {/* Layer 1: Bottom Inner Fold */}
        <path
          d="M20 65C30 54 44 48 60 48C76 48 90 54 100 65C88 59 75 55 60 55C45 55 32 59 20 65Z"
          fill="#5C0D10"
        />

        {/* Layer 2: Main Middle Fold of Fabric */}
        <path
          d="M22 58C32 44 45 37 60 37C75 37 88 44 98 58C86 52 74 47 60 47C46 47 34 52 22 58Z"
          fill="#8C1417"
          stroke="url(#goldThread)"
          strokeWidth="1.2"
        />

        {/* Layer 3: Top Outer Rim with Brocade Highlights */}
        <path
          d="M26 48C35 34 47 28 60 28C73 28 85 34 94 48C84 41 72 36 60 36C48 36 36 41 26 48Z"
          fill="#C92A2A"
          stroke="url(#goldThread)"
          strokeWidth="1.5"
        />

        {/* Specular Light Curve on Crown */}
        <path
          d="M36 33C43 27 51 25 60 25C69 25 77 27 84 33"
          stroke="#FFF2A3"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Concentric Golden Embroidery Filigree */}
        <path
          d="M24 62C34 52 46 47 60 47C74 47 86 52 96 62"
          stroke="url(#goldThread)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M28 53C37 42 48 38 60 38C72 38 83 42 92 53"
          stroke="url(#goldThread)"
          strokeWidth="1.4"
          strokeDasharray="3 2"
          strokeLinecap="round"
        />

        {/* Imperial Golden Lotus Crest at Center Forehead */}
        <g transform="translate(60, 52)">
          {/* Golden Lotus Petals */}
          <ellipse cx="0" cy="0" rx="9" ry="8" fill="#FFEAA7" />
          <ellipse cx="0" cy="0" rx="8" ry="7" fill="url(#goldThread)" />
          {/* Ruby Gemstone Centerpiece */}
          <circle cx="0" cy="0" r="4.5" fill="url(#rubyGlow)" />
          <circle cx="-1.2" cy="-1.2" r="1.3" fill="#FFF" />
          {/* Golden Teardrop Drops */}
          <path d="M0 7L0 12" stroke="#F5D061" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="0" cy="13" r="1.8" fill="#FFEAA7" />
        </g>
      </g>
    </svg>
  );
}

/** Wearable Mấn: Precision-contoured to fit directly over the model's head like a regal crown */
export function Wearable3DMan({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 90" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient
          id="wearableSilk"
          x1="10"
          y1="10"
          x2="150"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#DF2B2B" />
          <stop offset="30%" stopColor="#B3181C" />
          <stop offset="65%" stopColor="#7A090B" />
          <stop offset="100%" stopColor="#450507" />
        </linearGradient>
        <linearGradient id="wearableGold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFF2A3" />
          <stop offset="30%" stopColor="#F5D061" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A67C00" />
        </linearGradient>
        <radialGradient id="wearableRuby" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FF8787" />
          <stop offset="55%" stopColor="#C92A2A" />
          <stop offset="100%" stopColor="#5C0D10" />
        </radialGradient>
        <filter id="naturalHeadShadow" x="-20%" y="-10%" width="140%" height="150%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#000" floodOpacity="0.45" />
        </filter>
      </defs>

      <g filter="url(#naturalHeadShadow)">
        {/* Soft Ambient Contact Shadow Underneath Mấn onto Forehead & Hair */}
        <path
          d="M18 68C32 76 56 80 80 80C104 80 128 76 142 68C126 73 103 76 80 76C57 76 34 73 18 68Z"
          fill="rgba(0,0,0,0.35)"
        />

        {/* Outer Curving Silk Band hugging the skull */}
        <path
          d="M14 62C14 30 38 8 80 8C122 8 146 30 146 62C130 56 107 50 80 50C53 50 30 56 14 62Z"
          fill="url(#wearableSilk)"
        />

        {/* Tier 1 Fold (Lower wrapped tier) */}
        <path
          d="M18 61C34 46 56 38 80 38C104 38 126 46 142 61C126 53 104 47 80 47C56 47 34 53 18 61Z"
          fill="#8C1417"
          stroke="url(#wearableGold)"
          strokeWidth="1.4"
        />

        {/* Tier 2 Fold (Middle wrapped tier) */}
        <path
          d="M24 50C38 34 58 24 80 24C102 24 122 34 136 50C122 41 102 34 80 34C58 34 38 41 24 50Z"
          fill="#B3181C"
          stroke="url(#wearableGold)"
          strokeWidth="1.4"
        />

        {/* Tier 3 Fold (Top crown brim) */}
        <path
          d="M32 38C44 24 61 14 80 14C99 14 116 24 128 38C116 28 99 21 80 21C61 21 44 28 32 38Z"
          fill="#DF2B2B"
        />

        {/* Top Rim Specular Glint */}
        <path
          d="M48 18C58 13 69 11 80 11C91 11 102 13 112 18"
          stroke="#FFF9D2"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Gold Brocade Lines along the wraps */}
        <path
          d="M22 57C38 46 58 40 80 40C102 40 122 46 138 57"
          stroke="url(#wearableGold)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M26 47C42 34 60 28 80 28C100 28 118 34 134 47"
          stroke="url(#wearableGold)"
          strokeWidth="1.6"
          strokeDasharray="4 2.5"
          strokeLinecap="round"
        />

        {/* Imperial Gold Centerpiece Crest */}
        <g transform="translate(80, 48)">
          {/* Golden Lotus filigree */}
          <ellipse cx="0" cy="0" rx="11" ry="9.5" fill="#FFEAA7" />
          <ellipse cx="0" cy="0" rx="9.5" ry="8" fill="url(#wearableGold)" />
          {/* Ruby Jewel */}
          <circle cx="0" cy="0" r="5.2" fill="url(#wearableRuby)" />
          <circle cx="-1.5" cy="-1.5" r="1.6" fill="#FFF" />
          {/* Golden Drop Finial */}
          <path d="M0 8L0 14" stroke="#F5D061" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="0" cy="15.5" r="2.2" fill="#FFEAA7" />
        </g>
      </g>
    </svg>
  );
}

/* =========================================================================
   2. QUẠT NAN TRE GẤP LỤA HOÀNG GIA (Imperial Folding Silk Fan)
   ========================================================================= */

/** Card/Badge View for Quạt */
export function Graphic3DQuatGiay({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cardQuatGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="silkPaper" cx="50%" cy="70%" r="65%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="45%" stopColor="#FBF4E4" />
          <stop offset="85%" stopColor="#EAD8B0" />
          <stop offset="100%" stopColor="#D4BA82" />
        </radialGradient>
        <linearGradient id="bambooGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D69E56" />
          <stop offset="50%" stopColor="#A86A28" />
          <stop offset="100%" stopColor="#6E3E0F" />
        </linearGradient>
        <filter id="softFanShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#000" floodOpacity="0.35" />
        </filter>
      </defs>

      <circle cx="55" cy="50" r="46" fill="url(#cardQuatGlow)" />

      <g filter="url(#softFanShadow)">
        {/* Open Fan Silk Body */}
        <path
          d="M55 76L10 32C22 17 38 9 55 9C72 9 88 17 100 32L55 76Z"
          fill="url(#silkPaper)"
          stroke="#D4AF37"
          strokeWidth="1.5"
        />

        {/* Pleat Shading (Subtle 3D folds) */}
        <path
          d="M55 76L23 21L33 76L38 14L46 76L55 9L64 76L72 14L77 76L87 21Z"
          fill="rgba(196, 149, 78, 0.12)"
        />

        {/* Gold Lotus Blossom Painting */}
        <path
          d="M36 34C42 27 50 26 58 31C64 35 69 34 72 29"
          stroke="#B33939"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="41" cy="29" r="2.8" fill="#E03131" />
        <circle cx="49" cy="24" r="2.5" fill="#E03131" />
        <circle cx="62" cy="29" r="2.8" fill="#E03131" />
        <circle cx="68" cy="27" r="2" fill="#E03131" />

        {/* Bamboo Ribs (Light warm bamboo lines, NOT dark black) */}
        <line
          x1="55"
          y1="76"
          x2="18"
          y2="25"
          stroke="url(#bambooGrad)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line
          x1="55"
          y1="76"
          x2="30"
          y2="16"
          stroke="url(#bambooGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="55"
          y1="76"
          x2="43"
          y2="11"
          stroke="url(#bambooGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="55"
          y1="76"
          x2="55"
          y2="9"
          stroke="url(#bambooGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <line
          x1="55"
          y1="76"
          x2="67"
          y2="11"
          stroke="url(#bambooGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="55"
          y1="76"
          x2="80"
          y2="16"
          stroke="url(#bambooGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="55"
          y1="76"
          x2="92"
          y2="25"
          stroke="url(#bambooGrad)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Guard sticks */}
        <path d="M55 76L10 32" stroke="#875621" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M55 76L100 32" stroke="#875621" strokeWidth="2.4" strokeLinecap="round" />

        {/* Golden Pivot */}
        <circle cx="55" cy="76" r="3.8" fill="#D4AF37" stroke="#FFF2A3" strokeWidth="1" />

        {/* Silk Tassel with Jade Bead */}
        <path d="M55 79V85" stroke="#D4AF37" strokeWidth="1.8" />
        <circle cx="55" cy="86" r="2.2" fill="#20BF6B" />
        <path
          d="M52 88L50 96M55 88L55 97M58 88L60 96"
          stroke="#E03131"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/** Wearable Quạt: Beautiful hand-held fan with luminous silk and clean soft contact shadow */
export function Wearable3DFan({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 115" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="wearFanSilk" cx="50%" cy="75%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#FCF7EB" />
          <stop offset="75%" stopColor="#F0DFBA" />
          <stop offset="100%" stopColor="#D9BE84" />
        </radialGradient>
        <linearGradient id="wearBamboo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D9A25A" />
          <stop offset="50%" stopColor="#A86E2D" />
          <stop offset="100%" stopColor="#754415" />
        </linearGradient>
        <filter id="gentleFanShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>

      <g filter="url(#gentleFanShadow)">
        {/* Fan Arc Fabric (Silk with Gold Trim) */}
        <path
          d="M65 86L12 36C26 19 44 10 65 10C86 10 104 19 118 36L65 86Z"
          fill="url(#wearFanSilk)"
          stroke="#D4AF37"
          strokeWidth="1.6"
        />

        {/* Pleated Fabric Creases (Soft warm tones) */}
        <path
          d="M65 86L27 24L38 86L44 16L53 86L65 10L77 86L86 16L92 86L103 24Z"
          fill="rgba(196, 149, 78, 0.14)"
        />

        {/* Handpainted Gold & Coral Lotus */}
        <path
          d="M42 38C50 31 60 30 70 35C77 39 82 38 86 33"
          stroke="#B3282C"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="48" cy="33" r="3.2" fill="#E03131" />
        <circle cx="58" cy="27" r="2.8" fill="#E03131" />
        <circle cx="74" cy="33" r="3.2" fill="#E03131" />
        <circle cx="82" cy="31" r="2.2" fill="#E03131" />

        {/* Bamboo Ribs (Clean polished wood) */}
        <line
          x1="65"
          y1="86"
          x2="22"
          y2="28"
          stroke="url(#wearBamboo)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <line
          x1="65"
          y1="86"
          x2="35"
          y2="18"
          stroke="url(#wearBamboo)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line
          x1="65"
          y1="86"
          x2="50"
          y2="12"
          stroke="url(#wearBamboo)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line
          x1="65"
          y1="86"
          x2="65"
          y2="10"
          stroke="url(#wearBamboo)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <line
          x1="65"
          y1="86"
          x2="80"
          y2="12"
          stroke="url(#wearBamboo)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line
          x1="65"
          y1="86"
          x2="95"
          y2="18"
          stroke="url(#wearBamboo)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line
          x1="65"
          y1="86"
          x2="108"
          y2="28"
          stroke="url(#wearBamboo)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Guard sticks */}
        <path d="M65 86L12 36" stroke="#875621" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M65 86L118 36" stroke="#875621" strokeWidth="2.6" strokeLinecap="round" />

        {/* Golden Pivot Rivet */}
        <circle cx="65" cy="86" r="4.2" fill="#D4AF37" stroke="#FFF2A3" strokeWidth="1.2" />

        {/* Crimson Silk Hanging Tassel with Jade Bead */}
        <path d="M65 90V96" stroke="#D4AF37" strokeWidth="2" />
        <circle cx="65" cy="97" r="2.5" fill="#20BF6B" stroke="#A8E6CF" strokeWidth="0.8" />
        <path
          d="M62 99L59 109M65 99L65 111M68 99L71 109"
          stroke="#E03131"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/* =========================================================================
   3. GUỐC MỘC TRUYỀN THỐNG KHẮC HOA (Traditional Wooden Clogs)
   ========================================================================= */

/** Card/Badge View for Guốc Mộc */
export function Graphic3DGuocMoc({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cardGuocGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="woodSole"
          x1="20"
          y1="30"
          x2="90"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E2AD75" />
          <stop offset="45%" stopColor="#BA7B3E" />
          <stop offset="85%" stopColor="#874E1F" />
          <stop offset="100%" stopColor="#542B0A" />
        </linearGradient>
        <radialGradient id="velvetStrap" cx="45%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FF4D4D" />
          <stop offset="60%" stopColor="#C92A2A" />
          <stop offset="100%" stopColor="#5C0D10" />
        </radialGradient>
        <filter id="softGuocShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#000" floodOpacity="0.35" />
        </filter>
      </defs>

      <circle cx="55" cy="50" r="46" fill="url(#cardGuocGlow)" />

      <g filter="url(#softGuocShadow)">
        {/* Left Clog Sole */}
        <path
          d="M20 40C20 34 27 30 36 30C45 30 49 36 50 44L48 68C48 72 43 75 35 75C27 75 20 70 20 64V40Z"
          fill="url(#woodSole)"
          stroke="#D4AF37"
          strokeWidth="1.2"
        />
        <path d="M20 60L48 64V71H20V60Z" fill="#3D2107" />

        {/* Right Clog Sole */}
        <path
          d="M58 44C59 36 63 30 72 30C81 30 88 34 88 40V64C88 70 81 75 73 75C65 75 60 72 60 68L58 44Z"
          fill="url(#woodSole)"
          stroke="#D4AF37"
          strokeWidth="1.2"
        />
        <path d="M60 64L88 60V71H60V64Z" fill="#3D2107" />

        {/* Left Velvet Strap */}
        <path
          d="M22 46C24 38 38 38 50 44"
          stroke="url(#velvetStrap)"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
        <circle cx="23" cy="46" r="2" fill="#D4AF37" />
        <circle cx="49" cy="44" r="2" fill="#D4AF37" />

        {/* Right Velvet Strap */}
        <path
          d="M58 44C70 38 84 38 86 46"
          stroke="url(#velvetStrap)"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
        <circle cx="59" cy="44" r="2" fill="#D4AF37" />
        <circle cx="85" cy="46" r="2" fill="#D4AF37" />

        {/* Golden Insole Lotus Motifs */}
        <circle cx="34" cy="54" r="2.2" fill="#FFEAA7" opacity="0.85" />
        <circle cx="74" cy="54" r="2.2" fill="#FFEAA7" opacity="0.85" />
      </g>
    </svg>
  );
}

/** Wearable Guốc Mộc: Authentic pair of Vietnamese clogs worn naturally at the model's feet */
export function Wearable3DGuocMoc({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 70" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient
          id="wearWoodSole"
          x1="20"
          y1="10"
          x2="130"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E5B27D" />
          <stop offset="45%" stopColor="#C08447" />
          <stop offset="85%" stopColor="#8C5221" />
          <stop offset="100%" stopColor="#542B0A" />
        </linearGradient>
        <radialGradient id="wearStrap" cx="45%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FF4D4D" />
          <stop offset="65%" stopColor="#C92A2A" />
          <stop offset="100%" stopColor="#5C0D10" />
        </radialGradient>
        <filter id="feetFloorShadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#000" floodOpacity="0.4" />
        </filter>
      </defs>

      <g filter="url(#feetFloorShadow)">
        {/* Soft floor shadow under feet */}
        <ellipse cx="48" cy="58" rx="28" ry="6" fill="rgba(0,0,0,0.35)" />
        <ellipse cx="102" cy="58" rx="28" ry="6" fill="rgba(0,0,0,0.35)" />

        {/* Left Foot Clog (Ergonomic wooden shape) */}
        <path
          d="M26 24C26 16 35 12 48 12C60 12 66 18 67 28L65 52C65 56 58 59 47 59C36 59 26 55 26 48V24Z"
          fill="url(#wearWoodSole)"
          stroke="#D4AF37"
          strokeWidth="1.2"
        />
        {/* Left Heel Elevation */}
        <path d="M26 44L65 48V56H26V44Z" fill="#3D2107" />

        {/* Right Foot Clog */}
        <path
          d="M83 28C84 18 90 12 102 12C115 12 124 16 124 24V48C124 55 114 59 103 59C92 59 85 56 85 52L83 28Z"
          fill="url(#wearWoodSole)"
          stroke="#D4AF37"
          strokeWidth="1.2"
        />
        {/* Right Heel Elevation */}
        <path d="M85 48L124 44V56H85V48Z" fill="#3D2107" />

        {/* Left Foot Velvet Strap */}
        <path
          d="M28 32C31 22 50 22 66 30"
          stroke="url(#wearStrap)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="30" cy="32" r="2.2" fill="#D4AF37" />
        <circle cx="64" cy="30" r="2.2" fill="#D4AF37" />

        {/* Right Foot Velvet Strap */}
        <path
          d="M84 30C100 22 119 22 122 32"
          stroke="url(#wearStrap)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="86" cy="30" r="2.2" fill="#D4AF37" />
        <circle cx="120" cy="32" r="2.2" fill="#D4AF37" />

        {/* Gold embroidered insole flower */}
        <circle cx="47" cy="38" r="2.6" fill="#FFEAA7" opacity="0.9" />
        <circle cx="103" cy="38" r="2.6" fill="#FFEAA7" opacity="0.9" />
      </g>
    </svg>
  );
}

/* =========================================================================
   4. GIÀY / BOOTS / SNEAKER TÂN THỜI (Modern Footwear)
   ========================================================================= */

/** Card/Badge View for Boots/Sneaker */
export function Graphic3DBoots({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cardBootsGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="leatherGrad"
          x1="20"
          y1="15"
          x2="80"
          y2="85"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8A4E27" />
          <stop offset="35%" stopColor="#5A2E14" />
          <stop offset="85%" stopColor="#2E1508" />
          <stop offset="100%" stopColor="#140803" />
        </linearGradient>
        <linearGradient
          id="soleGrad"
          x1="15"
          y1="75"
          x2="85"
          y2="88"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F5E6CC" />
          <stop offset="50%" stopColor="#D8BE96" />
          <stop offset="100%" stopColor="#9C7F58" />
        </linearGradient>
        <filter id="softBootsShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#000" floodOpacity="0.35" />
        </filter>
      </defs>

      <circle cx="50" cy="50" r="44" fill="url(#cardBootsGlow)" />

      <g filter="url(#softBootsShadow)">
        {/* Front 3D Boot Main Body */}
        <path
          d="M26 22H42C44 32 50 42 60 47L75 53C81 55 84 59 84 64V72H22C17 72 14 68 14 63V31C14 25 19 22 26 22Z"
          fill="url(#leatherGrad)"
          stroke="#D4AF37"
          strokeWidth="1.2"
        />

        {/* Ankle Collar */}
        <path
          d="M26 22C26 25 35 27 42 24"
          stroke="#D4AF37"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Speed eyelets and laces */}
        <circle cx="37" cy="33" r="1.8" fill="#F5D061" />
        <circle cx="43" cy="40" r="1.8" fill="#F5D061" />
        <circle cx="49" cy="47" r="1.8" fill="#F5D061" />
        <path
          d="M35 34L45 39M41 41L51 46"
          stroke="#F5D061"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Chunky Sole */}
        <path
          d="M16 72H86C88 72 89 74 88 76L86 82C85 84 83 85 81 85H20C17 85 15 83 15 80L16 72Z"
          fill="url(#soleGrad)"
          stroke="#3D2B18"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}

/** Wearable Boots/Sneaker */
export function Wearable3DBoots({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 60" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient
          id="wearLeather"
          x1="10"
          y1="10"
          x2="130"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#693B1E" />
          <stop offset="50%" stopColor="#40200D" />
          <stop offset="100%" stopColor="#1E0D05" />
        </linearGradient>
        <linearGradient id="wearSole" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FAF1DA" />
          <stop offset="50%" stopColor="#E2CA9E" />
          <stop offset="100%" stopColor="#B3925F" />
        </linearGradient>
        <filter id="softFloorBoots" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#000" floodOpacity="0.35" />
        </filter>
      </defs>

      <g filter="url(#softFloorBoots)">
        {/* Floor Contact Shadow */}
        <ellipse cx="40" cy="52" rx="25" ry="5" fill="rgba(0,0,0,0.3)" />
        <ellipse cx="100" cy="52" rx="25" ry="5" fill="rgba(0,0,0,0.3)" />

        {/* Left Foot Boot */}
        <path
          d="M20 18H36C38 26 44 34 54 39L64 43C67 44 68 46 68 48H18C15 48 13 46 13 43V24C13 20 16 18 20 18Z"
          fill="url(#wearLeather)"
          stroke="#D4AF37"
          strokeWidth="1"
        />
        <path d="M14 48H68V54H16C14 54 13 52 14 48Z" fill="url(#wearSole)" />

        {/* Right Foot Boot */}
        <path
          d="M76 43L86 39C96 34 102 26 104 18H120C124 18 127 20 127 24V43C127 46 125 48 122 48H72C72 46 73 44 76 43Z"
          fill="url(#wearLeather)"
          stroke="#D4AF37"
          strokeWidth="1"
        />
        <path d="M72 48H126C127 52 126 54 124 54H72V48Z" fill="url(#wearSole)" />
      </g>
    </svg>
  );
}

/* =========================================================================
   5. TÚI GẤM & NGỌC BỘI HOÀNG GIA (Silk Brocade Pouch & Jade Pendant)
   ========================================================================= */

/** Card/Badge View for Túi & Ngọc Bội */
export function Graphic3DTuiTrangSuc({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cardTuiGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pouchSilk" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E03131" />
          <stop offset="55%" stopColor="#B3181C" />
          <stop offset="100%" stopColor="#4A0507" />
        </radialGradient>
        <radialGradient id="jadeGlow" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#A8E6CF" />
          <stop offset="45%" stopColor="#20BF6B" />
          <stop offset="90%" stopColor="#0B6B38" />
        </radialGradient>
        <filter id="softPouchShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#000" floodOpacity="0.35" />
        </filter>
      </defs>

      <circle cx="50" cy="50" r="44" fill="url(#cardTuiGlow)" />

      <g filter="url(#softPouchShadow)">
        {/* Drawstring loop */}
        <path
          d="M50 8C35 8 30 20 35 30M50 8C65 8 70 20 65 30"
          stroke="#F5D061"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Ruched Silk Top */}
        <path
          d="M32 28C35 22 45 20 50 22C55 20 65 22 68 28C65 32 55 33 50 32C45 33 35 32 32 28Z"
          fill="#B3181C"
          stroke="#D4AF37"
          strokeWidth="1.4"
        />

        {/* Pouch Main Body */}
        <path
          d="M32 30C24 38 22 56 24 66C26 74 36 80 50 80C64 80 74 74 76 66C78 56 76 38 68 30C60 34 40 34 32 30Z"
          fill="url(#pouchSilk)"
          stroke="#D4AF37"
          strokeWidth="1.4"
        />

        {/* Carved Jade Bi-Disk */}
        <circle cx="50" cy="53" r="12" fill="url(#jadeGlow)" stroke="#FFE899" strokeWidth="1.6" />
        <circle cx="50" cy="53" r="4" fill="#3D0B0E" stroke="#FFE899" strokeWidth="1" />

        {/* Hanging Tassel */}
        <circle cx="50" cy="81" r="2.8" fill="#D4AF37" />
        <path
          d="M47 84L45 96M50 84L50 98M53 84L55 96"
          stroke="#F5D061"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/** Wearable Túi & Ngọc Bội (Hanging at waist) */
export function Wearable3DPouch({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 110" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="wearPouchSilk" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#DF2B2B" />
          <stop offset="55%" stopColor="#A81417" />
          <stop offset="100%" stopColor="#450507" />
        </radialGradient>
        <radialGradient id="wearJadeGlow" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#B8F2E6" />
          <stop offset="45%" stopColor="#20BF6B" />
          <stop offset="90%" stopColor="#0B6B38" />
        </radialGradient>
        <filter id="softWaistShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>

      <g filter="url(#softWaistShadow)">
        {/* Golden Sash Cord */}
        <path d="M40 4L32 26M40 4L48 26" stroke="#F5D061" strokeWidth="2" strokeLinecap="round" />

        {/* Pouch Top */}
        <path
          d="M24 26C27 20 36 18 40 20C44 18 53 20 56 26C53 30 45 31 40 30C35 31 27 30 24 26Z"
          fill="#A81417"
          stroke="#D4AF37"
          strokeWidth="1.2"
        />

        {/* Pouch Body */}
        <path
          d="M24 28C16 36 14 54 16 64C18 72 28 78 40 78C52 78 62 72 64 64C66 54 64 36 56 28C48 32 32 32 24 28Z"
          fill="url(#wearPouchSilk)"
          stroke="#D4AF37"
          strokeWidth="1.2"
        />

        {/* Jade Bi-Disk Pendant */}
        <circle
          cx="40"
          cy="51"
          r="11"
          fill="url(#wearJadeGlow)"
          stroke="#FFEAA7"
          strokeWidth="1.5"
        />
        <circle cx="40" cy="51" r="3.8" fill="#3B0507" stroke="#FFEAA7" strokeWidth="1" />

        {/* Golden Fringe Tassel */}
        <circle cx="40" cy="79" r="2.5" fill="#D4AF37" />
        <path
          d="M37 82L35 98M40 82L40 100M43 82L45 98"
          stroke="#F5D061"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/* =========================================================================
   6. VÒNG KIỀNG BẠC & HOA TAI BẠC (Silver Torque & Lotus Earrings)
   ========================================================================= */

export function Graphic3DChokerEarrings({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="silverGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DFE6E9" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#DFE6E9" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="silverTorque"
          x1="15"
          y1="20"
          x2="85"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#DFE6E9" />
          <stop offset="70%" stopColor="#B2BEC3" />
          <stop offset="100%" stopColor="#636E72" />
        </linearGradient>
      </defs>

      <circle cx="50" cy="50" r="44" fill="url(#silverGlow)" />

      {/* Silver Choker Ring */}
      <ellipse
        cx="50"
        cy="48"
        rx="30"
        ry="22"
        fill="none"
        stroke="url(#silverTorque)"
        strokeWidth="5.5"
      />
      <circle cx="43" cy="27" r="3" fill="#FFF" stroke="#636E72" strokeWidth="1" />
      <circle cx="57" cy="27" r="3" fill="#FFF" stroke="#636E72" strokeWidth="1" />

      {/* Dangling lotus earrings */}
      <circle cx="20" cy="72" r="2.8" fill="#FFF" stroke="#636E72" strokeWidth="1" />
      <path d="M20 75V84" stroke="url(#silverTorque)" strokeWidth="1.5" />
      <ellipse
        cx="20"
        cy="88"
        rx="3.5"
        ry="5.5"
        fill="url(#silverTorque)"
        stroke="#FFF"
        strokeWidth="1"
      />

      <circle cx="80" cy="72" r="2.8" fill="#FFF" stroke="#636E72" strokeWidth="1" />
      <path d="M80 75V84" stroke="url(#silverTorque)" strokeWidth="1.5" />
      <ellipse
        cx="80"
        cy="88"
        rx="3.5"
        ry="5.5"
        fill="url(#silverTorque)"
        stroke="#FFF"
        strokeWidth="1"
      />
    </svg>
  );
}

/* =========================================================================
   HELPER: MAP ACCESSORY LABEL TO 3D GRAPHIC FOR CARDS
   ========================================================================= */

export function getAccessory3DGraphic(name: string): React.ComponentType<{ className?: string }> {
  if (/mấn|khăn/i.test(name)) return Graphic3DManKhan;
  if (/quạt/i.test(name)) return Graphic3DQuatGiay;
  if (/guốc/i.test(name)) return Graphic3DGuocMoc;
  if (/giày|boot|sneaker/i.test(name)) return Graphic3DBoots;
  if (/túi|ngọc|trang sức/i.test(name)) return Graphic3DTuiTrangSuc;
  if (/kiềng|bạc|khuyên|tai/i.test(name)) return Graphic3DChokerEarrings;
  return Graphic3DManKhan;
}

/* =========================================================================
   WEARABLE 3D ACCESSORIES OVERLAY DIRECTLY ONTO MODEL PHOTO
   =========================================================================
   Precision-anchored to the model's head, face, neck, waist, hand & feet.
   Smooth interactive transitions with authentic cultural fidelity.
*/

interface ModelWearAccessoriesProps {
  activeAccessories: string[];
  outfitId?: string;
  compact?: boolean;
}

export function ModelWearAccessories({ activeAccessories = [] }: ModelWearAccessoriesProps) {
  // Flexible string matching across all naming variations in user selections
  const hasTurban = activeAccessories.some((a) => /mấn|khăn/i.test(a));
  const hasFan = activeAccessories.some((a) => /quạt/i.test(a));
  const hasClogs = activeAccessories.some((a) => /guốc/i.test(a));
  const hasBootsOrSneaker = activeAccessories.some((a) => /giày|boot|sneaker/i.test(a));
  const hasBagOrJewelry = activeAccessories.some((a) => /túi|ngọc|trang sức/i.test(a));
  const hasEarringsOrChoker = activeAccessories.some((a) => /khuyên|tai|bạc|kiềng/i.test(a));

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-20 overflow-hidden">
      {/* 1. MẤN / KHĂN VẤN 3D - Worn crowning the model's head like a regal crown */}
      {hasTurban && (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[4.5%] w-[24%] sm:w-[23%] transition-all duration-500 ease-out animate-in fade-in zoom-in-95"
          style={{
            filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.5))",
          }}
        >
          <Wearable3DMan className="w-full h-auto drop-shadow-md" />
        </div>
      )}

      {/* 2. KHUYÊN TAI BẠC 3D - Dangling at sides of face */}
      {hasEarringsOrChoker && (
        <>
          <div
            className="absolute left-[39.5%] top-[16.5%] w-[3%] transition-all duration-500 ease-out animate-in fade-in"
            style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}
          >
            <svg viewBox="0 0 16 32" fill="none" className="w-full h-auto">
              <circle cx="8" cy="4" r="2.5" fill="#FFF" stroke="#CBD5E1" strokeWidth="0.8" />
              <path d="M8 6.5V14" stroke="#E2E8F0" strokeWidth="1.4" />
              <ellipse
                cx="8"
                cy="20"
                rx="3.5"
                ry="6"
                fill="#E2E8F0"
                stroke="#FFF"
                strokeWidth="0.8"
              />
            </svg>
          </div>
          <div
            className="absolute right-[39.5%] top-[16.5%] w-[3%] transition-all duration-500 ease-out animate-in fade-in"
            style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}
          >
            <svg viewBox="0 0 16 32" fill="none" className="w-full h-auto">
              <circle cx="8" cy="4" r="2.5" fill="#FFF" stroke="#CBD5E1" strokeWidth="0.8" />
              <path d="M8 6.5V14" stroke="#E2E8F0" strokeWidth="1.4" />
              <ellipse
                cx="8"
                cy="20"
                rx="3.5"
                ry="6"
                fill="#E2E8F0"
                stroke="#FFF"
                strokeWidth="0.8"
              />
            </svg>
          </div>
        </>
      )}

      {/* 3. TÚI GẤM & NGỌC BỘI 3D - Worn gracefully hanging from left sash / waist */}
      {hasBagOrJewelry && (
        <div
          className="absolute left-[26%] top-[49%] w-[16%] transition-all duration-500 ease-out animate-in fade-in zoom-in-95"
          style={{
            transform: "rotate(4deg)",
            filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.4))",
          }}
        >
          <Wearable3DPouch className="w-full h-auto drop-shadow-lg" />
        </div>
      )}

      {/* 4. QUẠT NAN TRE GẤP 3D - Held gracefully in right hand at waist (clean, warm, NO black streak) */}
      {hasFan && (
        <div
          className="absolute right-[24%] top-[48%] w-[23%] transition-all duration-500 ease-out animate-in fade-in zoom-in-95"
          style={{
            transform: "rotate(-8deg)",
            filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.35))",
          }}
        >
          <Wearable3DFan className="w-full h-auto drop-shadow-lg" />
        </div>
      )}

      {/* 5. GUỐC MỘC TRUYỀN THỐNG 3D - Worn at model's feet */}
      {hasClogs && (
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-[3.5%] w-[24%] transition-all duration-500 ease-out animate-in fade-in zoom-in-95"
          style={{
            filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.45))",
          }}
        >
          <Wearable3DGuocMoc className="w-full h-auto drop-shadow-md" />
        </div>
      )}

      {/* 6. GIÀY / BOOTS / SNEAKER 3D - Worn at feet (if clogs not selected) */}
      {hasBootsOrSneaker && !hasClogs && (
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-[3.5%] w-[23%] transition-all duration-500 ease-out animate-in fade-in zoom-in-95"
          style={{
            filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.45))",
          }}
        >
          <Wearable3DBoots className="w-full h-auto drop-shadow-md" />
        </div>
      )}
    </div>
  );
}
