import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Camera,
  Compass,
  Palette,
  ShieldAlert,
  ArrowRight,
  User,
  Check,
  ChevronRight,
} from "lucide-react";

import heroImg from "@/assets/images/hero_viet_phuc_group_1791542766245.jpg";
import eventLeHoi from "@/assets/images/event_le_hoi_lanterns_1791542777519.jpg";
import eventCuoiHoi from "@/assets/images/event_cuoi_hoi_wedding_1791542792146.jpg";
import eventDaoPho from "@/assets/images/event_dao_pho_hoian_1791542802746.jpg";
import eventKyYeu from "@/assets/images/event_ky_yeu_yearbook_1791542813293.jpg";

import outfitAoDai from "@/assets/images/outfit_ao_dai_1791541761293.jpg";
import outfitTuThan from "@/assets/images/outfit_tu_than_1791541520253.jpg";
import outfitNguThan from "@/assets/images/outfit_ngu_than_1791541574185.jpg";
import outfitNhatBinh from "@/assets/images/outfit_nhat_binh_1791541469838.jpg";
import outfitGiaoLinh from "@/assets/images/outfit_giao_linh_1791541695824.jpg";

import tryonTuThan from "@/assets/images/tryon_tuthan_nu_1791536716131.jpg";
import tryonAoDai from "@/assets/images/tryon_aodai_nu_1791536773406.jpg";
import tryonNhatBinh from "@/assets/images/tryon_nhatbinh_nu_1791536691273.jpg";
import tryonNguThan from "@/assets/images/tryon_nguthan_nu_1791536743410.jpg";
import tryonGiaoLinh from "@/assets/images/tryon_giaolinh_nu_1791536876831.jpg";

import {
  Graphic3DBoots,
  Graphic3DGuocMoc,
  Graphic3DManKhan,
  Graphic3DQuatGiay,
  Graphic3DTuiTrangSuc,
  ModelWearAccessories,
} from "@/lib/accessory-3d";

interface HeritageHomeProps {
  onStartExplore: () => void;
  onSelectGarment: (garmentId: string) => void;
  onSelectOccasion?: (occasion: string) => void;
  onSelectAccessories?: (accessories: string[]) => void;
  onStartTryOn?: (garmentId: string, occasion: string, accessories: string[]) => void;
}

export function HeritageHome({
  onStartExplore,
  onSelectGarment,
  onSelectOccasion,
  onSelectAccessories,
  onStartTryOn,
}: HeritageHomeProps) {
  const [selectedGarmentId, setSelectedGarmentId] = useState("tu-than");
  const [selectedOccasion, setSelectedOccasion] = useState("Lễ hội");
  const [activeColor, setActiveColor] = useState(0);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([
    "Mấn / Khăn",
    "Quạt giấy",
  ]);
  const [activeStyleTag, setActiveStyleTag] = useState("Truyền thống");
  const [cultureModalOpen, setCultureModalOpen] = useState(false);

  const colors = [
    { name: "Đỏ chu sa", hex: "#a8261b" },
    { name: "Hồng đào", hex: "#d97d91" },
    { name: "Trắng ngà", hex: "#f3ede2" },
    { name: "Xanh ngọc", hex: "#4b8b7f" },
    { name: "Lam khói", hex: "#6389a9" },
    { name: "Xám trầm", hex: "#383b40" },
  ];

  const garmentList = [
    { id: "ao-dai", name: "Áo dài", image: outfitAoDai },
    { id: "tu-than", name: "Tứ thân", image: outfitTuThan },
    { id: "ngu-than", name: "Ngũ thân", image: outfitNguThan },
    { id: "nhat-binh", name: "Nhật bình", image: outfitNhatBinh },
    { id: "giao-linh", name: "Giao lĩnh", image: outfitGiaoLinh },
  ];

  const occasionList = [
    { id: "Lễ hội", name: "Lễ hội", image: eventLeHoi, tag: "Rực rỡ & Linh thiêng" },
    { id: "Cưới hỏi", name: "Cưới hỏi", image: eventCuoiHoi, tag: "Trang trọng & Cát tường" },
    { id: "Dạo phố", name: "Dạo phố", image: eventDaoPho, tag: "Năng động & Trẻ trung" },
    { id: "Kỷ yếu", name: "Kỷ yếu", image: eventKyYeu, tag: "Lưu giữ thanh xuân" },
  ];

  // 4 3D-styled accessory items
  const accessoryItems = [
    {
      id: "giay-boots",
      label: "Giày / Boots",
      Component: Graphic3DBoots,
      desc: "Sneaker / Boots da",
    },
    {
      id: "man-khan",
      label: "Mấn / Khăn",
      Component: Graphic3DManKhan,
      desc: "Khăn vấn hoàng triều",
    },
    {
      id: "quat-giay",
      label: "Quạt giấy",
      Component: Graphic3DQuatGiay,
      desc: "Quạt xếp nan tre",
    },
    {
      id: "tui-trang-suc",
      label: "Túi / Trang sức",
      Component: Graphic3DTuiTrangSuc,
      desc: "Túi gấm & ngọc bội",
    },
  ];

  const styleChips = ["Truyền thống", "Hiện đại", "Tối giản", "Vintage"];

  // Mapping selected garment to result preview and cultural story
  const garmentMetadata: Record<
    string,
    { title: string; subtitle: string; tryonImg: string; quote: string; quoteAuthor: string }
  > = {
    "tu-than": {
      title: "Áo tứ thân Kinh Bắc",
      subtitle: "Phối cùng yếm san hô & quạt giấy thanh nhã",
      tryonImg: tryonTuThan,
      quote:
        "Bốn vạt áo tượng trưng cho tứ thân phụ mẫu (cha mẹ mình và cha mẹ người). Vạt yếm bên trong che chở, thắt lưng bao lụa buộc vạt thể hiện tính nết đoan trang, dung dị của người phụ nữ Kinh Bắc.",
      quoteAuthor: "Di sản Kinh Bắc",
    },
    "ao-dai": {
      title: "Áo dài truyền thống",
      subtitle: "Nét thướt tha, trang nhã vượt thời gian",
      tryonImg: tryonAoDai,
      quote:
        "Tà áo dài ôm trọn cốt cách dịu dàng của người con gái Việt, vạt áo tung bay trong gió nhẹ tựa lời hẹn ước thiêng liêng giữa quá khứ hào hoa và nhịp sống đương đại.",
      quoteAuthor: "Biểu tượng Quốc phục",
    },
    "ngu-than": {
      title: "Áo ngũ thân tay chẽn",
      subtitle: "Phong thái đĩnh đạc, ngũ thường chuẩn mực",
      tryonImg: tryonNguThan,
      quote:
        "Năm vạt áo ứng với phụ mẫu và chính mình; năm chiếc khuy cài nhắc nhở ngũ thường: Nhân, Lễ, Nghĩa, Trí, Tín. Một thiết kế mẫu mực cho cả nam và nữ chốn hoàng thành.",
      quoteAuthor: "Quy chuẩn Thế kỷ XVIII - XIX",
    },
    "nhat-binh": {
      title: "Áo Nhật bình cung đình",
      subtitle: "Cổ áo chữ nhật thêu hoa văn ngũ sắc",
      tryonImg: tryonNhatBinh,
      quote:
        "Cổ áo hình chữ nhật viền thêu kỳ công là dấu ấn cung đình triều Nguyễn. Màu hồng ngọc đài các kết hợp dải ngũ sắc biểu trưng cho sự tôn quý, đoan chính.",
      quoteAuthor: "Lễ phục Cung đình Huế",
    },
    "giao-linh": {
      title: "Áo Giao lĩnh lam khói",
      subtitle: "Vạt chéo phóng khoáng, cổ phong uyển chuyển",
      tryonImg: tryonGiaoLinh,
      quote:
        "Cổ áo vạt chéo giao nhau tạo nên chiều sâu trang trọng, thanh thoát. Nét đẹp phóng khoáng thuở xưa nay hòa nhịp cùng phong cách dạo phố đương đại.",
      quoteAuthor: "Cổ phục Thăng Long",
    },
  };

  const currentMetadata = garmentMetadata[selectedGarmentId] ?? garmentMetadata["tu-than"]!;

  const toggleAccessory = (label: string) => {
    setSelectedAccessories((prev) => {
      const next = prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label];
      onSelectAccessories?.(next);
      return next;
    });
  };

  const handleGarmentClick = (id: string) => {
    setSelectedGarmentId(id);
    onSelectGarment(id);
  };

  const handleOccasionClick = (occ: string) => {
    setSelectedOccasion(occ);
    onSelectOccasion?.(occ);
  };

  const handleTryOnNow = () => {
    onSelectAccessories?.(selectedAccessories);
    onSelectGarment(selectedGarmentId);
    if (onStartTryOn) {
      onStartTryOn(selectedGarmentId, selectedOccasion, selectedAccessories);
    } else {
      onStartExplore();
    }
  };

  return (
    <div className="relative text-stone-100 font-sans selection:bg-amber-600 selection:text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-6 pb-12 lg:pt-8 lg:pb-16 border-b border-amber-900/40">
        {/* Subtle decorative background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c140e] via-[#140e0a] to-[#120c08] -z-10" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-red-950/20 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              {/* Kicker Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md">
                <span className="text-amber-400 text-xs tracking-[0.2em] font-medium uppercase font-sans">
                  PHỐI TRANG PHỤC TRUYỀN THỐNG THEO PHONG CÁCH GEN Z
                </span>
              </div>

              {/* Headings */}
              <div className="space-y-2">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffe4a0] via-[#f7cb68] to-[#df9e38] drop-shadow-sm">
                  Việt Phục Remix
                </h1>
                <p className="font-serif italic text-2xl sm:text-3xl text-amber-200/90 font-light tracking-wide flex items-center gap-2">
                  <span>Di sản trong phong cách của bạn</span>
                  <span className="text-xl not-italic">🍃</span>
                </p>
              </div>

              {/* Subtitle / Description */}
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-lg font-light">
                Khám phá, phối đồ và làm mới trang phục truyền thống Việt Nam theo sự kiện, địa
                phương hoặc phong cách cá nhân. Giữ gìn giá trị văn hóa – Thể hiện chất riêng!
              </p>

              {/* CTA Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onStartExplore}
                  className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#f5cf74] via-[#e6b94d] to-[#d69f32] px-8 py-3.5 text-sm sm:text-base font-semibold text-[#23170c] shadow-[0_4px_20px_rgba(230,185,77,0.35)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_6px_25px_rgba(230,185,77,0.5)] active:scale-95 cursor-pointer"
                >
                  <span>Bắt đầu khám phá</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Hero Image Composition */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.8)] group">
                <img
                  src={heroImg}
                  alt="Nhóm bạn trẻ mặc Việt phục truyền thống cách tân"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                />

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120c08]/85 via-black/15 to-black/30 pointer-events-none" />

                {/* ================= REQUIREMENT 1: BANNER BOX (BOTTOM-RIGHT, GLASSMORPHISM, GOLD) ================= */}
                {/* Dời xuống góc dưới cùng bên phải, tuyệt đối không đè mặt hay người nhân vật */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 px-5 py-3.5 sm:px-6 sm:py-4 text-center shadow-[0_12px_35px_rgba(0,0,0,0.6)] transition-all duration-300 hover:bg-black/50 hover:border-amber-400/40">
                  <div className="flex flex-col items-center justify-center gap-1 text-center">
                    {/* "Truyền thống" - Serif cổ điển màu vàng hoàng kim #D4AF37 */}
                    <div className="font-serif italic font-bold text-[#D4AF37] text-base sm:text-lg tracking-wide drop-shadow-sm text-center">
                      Truyền thống
                    </div>

                    {/* " + " - Căn giữa màu trắng ngà */}
                    <div className="text-xs sm:text-sm text-[#FAF6F0]/90 font-serif font-light text-center leading-none">
                      +
                    </div>

                    {/* "Hiện đại" - Căn giữa màu trắng ngà */}
                    <div className="font-serif text-[#FAF6F0] text-sm sm:text-base font-medium tracking-wide text-center">
                      Hiện đại
                    </div>

                    {/* " = " - Căn giữa màu trắng ngà */}
                    <div className="text-xs sm:text-sm text-[#FAF6F0]/90 font-serif font-light text-center leading-none">
                      =
                    </div>

                    {/* "BẠN" - In hoa màu Vàng Hoàng Kim #D4AF37, bỏ icon bông hoa thừa */}
                    <div className="font-sans font-black tracking-widest text-base sm:text-xl text-[#D4AF37] drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)] text-center pt-0.5">
                      BẠN
                    </div>
                  </div>
                </div>

                {/* Bottom caption (góc dưới bên trái để cân đối với Banner Box) */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 hidden sm:flex max-w-[260px] md:max-w-xs lg:max-w-sm items-center gap-2 text-xs text-amber-200/90 backdrop-blur-md bg-black/60 px-3.5 py-2.5 rounded-xl border border-white/10">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-sans line-clamp-1">Áo Tấc • Áo Ngũ Thân • Áo Tứ Thân</span>
                  <span className="font-mono text-[10px] text-amber-400/80 font-semibold tracking-wider shrink-0">
                    HERITAGE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5 BALANCED OPTION CARDS ================= */}
      <section className="py-12 lg:py-16 bg-[#140e0a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-amber-900/30 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 font-sans">
                TRẢI NGHIỆM ĐỒNG BỘ 5 BƯỚC
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100 mt-1">
                Tự Do Tùy Biến Cổ Phục
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 font-light max-w-md">
              Chọn mẫu áo, không gian lễ hội, điểm xuyết phụ kiện 3D và chiêm ngưỡng kết quả phục
              dựng chân thực bằng công nghệ số.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
            {/* ---------------- CARD 1: CHỌN TRANG PHỤC ---------------- */}
            <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-b from-[#1e150f]/95 to-[#160f0a]/95 p-5 sm:p-6 flex flex-col justify-between shadow-xl shadow-black/40 hover:border-amber-400/50 hover:shadow-amber-500/10 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs shadow-inner">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      CHỌN TRANG PHỤC
                    </h3>
                    <p className="text-[11px] text-stone-400">5 dòng cổ phục tiêu biểu</p>
                  </div>
                </div>

                {/* 5 Thumbnails + 1 "+ Khác" Button */}
                <div className="grid grid-cols-3 gap-2.5 my-4">
                  {garmentList.map((g) => {
                    const isActive = selectedGarmentId === g.id;
                    return (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => handleGarmentClick(g.id)}
                        className="group flex flex-col items-center focus:outline-none cursor-pointer"
                      >
                        <div
                          className={`relative w-full aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 shadow-md ${
                            isActive
                              ? "border-amber-400 ring-2 ring-amber-400/50 scale-105 shadow-amber-500/20"
                              : "border-stone-700/60 hover:border-amber-400/60 hover:scale-102"
                          }`}
                        >
                          <img
                            src={g.image}
                            alt={g.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {isActive && (
                            <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shadow">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          )}
                        </div>
                        <span
                          className={`mt-1.5 text-[11px] font-medium text-center transition-colors ${
                            isActive
                              ? "text-amber-300 font-bold"
                              : "text-stone-300 group-hover:text-amber-200"
                          }`}
                        >
                          {g.name}
                        </span>
                      </button>
                    );
                  })}

                  {/* "+ Khác" Button */}
                  <button
                    type="button"
                    onClick={onStartExplore}
                    className="group flex flex-col items-center focus:outline-none cursor-pointer"
                  >
                    <div className="w-full aspect-square rounded-2xl border-2 border-amber-400/90 bg-gradient-to-br from-amber-500/25 via-amber-600/20 to-orange-600/25 text-amber-300 flex flex-col items-center justify-center transition-all duration-300 shadow-md group-hover:bg-amber-500/35 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.35)]">
                      <span className="text-xl font-bold leading-none mb-0.5 text-amber-300 group-hover:rotate-90 transition-transform duration-300">
                        +
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-200">
                        Khác
                      </span>
                    </div>
                    <span className="mt-1.5 text-[11px] font-semibold text-amber-400 text-center">
                      Xem tất cả
                    </span>
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-amber-900/30 text-xs text-amber-400/90 flex items-center justify-between">
                <span className="font-serif italic">7+ mẫu phục dựng</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </div>
            </div>

            {/* ---------------- CARD 2: BỐI CẢNH / SỰ KIỆN ---------------- */}
            <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-b from-[#1e150f]/95 to-[#160f0a]/95 p-5 sm:p-6 flex flex-col justify-between shadow-xl shadow-black/40 hover:border-amber-400/50 hover:shadow-amber-500/10 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs shadow-inner">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      BỐI CẢNH / SỰ KIỆN
                    </h3>
                    <p className="text-[11px] text-stone-400">Không gian trải nghiệm</p>
                  </div>
                </div>

                {/* 4 Event Photos in 2x2 Grid with Hover Zoom */}
                <div className="grid grid-cols-2 gap-2.5 my-4">
                  {occasionList.map((occ) => {
                    const isActive = selectedOccasion === occ.id;
                    return (
                      <button
                        key={occ.id}
                        type="button"
                        onClick={() => handleOccasionClick(occ.id)}
                        className="group flex flex-col items-center focus:outline-none text-left cursor-pointer"
                      >
                        <div
                          className={`relative w-full aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 shadow-md ${
                            isActive
                              ? "border-amber-400 ring-2 ring-amber-400/50 scale-102 shadow-amber-500/20"
                              : "border-stone-700/60 hover:border-amber-400/60"
                          }`}
                        >
                          <img
                            src={occ.image}
                            alt={occ.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-115"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                          {isActive && (
                            <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shadow">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          )}
                          <div className="absolute bottom-1.5 left-2 right-2">
                            <span className="block text-[11px] font-bold text-amber-200 drop-shadow-sm">
                              {occ.name}
                            </span>
                          </div>
                        </div>
                        <span className="mt-1 text-[10px] text-stone-400 text-center line-clamp-1">
                          {occ.tag}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 border-t border-amber-900/30 text-xs text-amber-400/90 flex items-center justify-between">
                <span className="font-serif italic">Đang chọn: {selectedOccasion}</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </div>
            </div>

            {/* ---------------- CARD 3: TÙY CHỈNH PHONG CÁCH & PHỤ KIỆN (REQUIREMENT 2: 3D ASSETS) ---------------- */}
            <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-b from-[#21160f]/95 to-[#17100b]/95 p-5 sm:p-6 flex flex-col justify-between shadow-xl shadow-black/40 hover:border-amber-400/60 hover:shadow-amber-500/15 transition-all duration-300 ring-1 ring-amber-500/20">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-stone-950 flex items-center justify-center text-xs shadow-md font-bold">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      PHONG CÁCH & PHỤ KIỆN
                    </h3>
                    <p className="text-[11px] text-stone-400">Cá nhân hóa nét riêng</p>
                  </div>
                </div>

                {/* 1. Large Color Swatches with Bold Outline */}
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-medium text-stone-300">Màu sắc chủ đạo</span>
                    <span className="text-[11px] font-semibold text-amber-300">
                      {colors[activeColor]?.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-1.5 p-2 rounded-2xl bg-black/40 border border-amber-900/40">
                    {colors.map((c, idx) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setActiveColor(idx)}
                        title={c.name}
                        style={{ backgroundColor: c.hex }}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-300 shadow-md cursor-pointer ${
                          activeColor === idx
                            ? "ring-2 ring-amber-400 ring-offset-2 ring-offset-[#1b120c] scale-110 border-2 border-white shadow-[0_0_12px_rgba(251,191,36,0.5)]"
                            : "border border-stone-800 hover:scale-105 opacity-80 hover:opacity-100"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* 2. REQUIREMENT 2: 3D Image Asset Cards with hover:-translate-y-1 & shadow-lg */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-medium text-stone-300">
                      Phụ kiện phối kèm (3D)
                    </span>
                    <span className="text-[10px] text-amber-400 font-mono">
                      {selectedAccessories.length} đã chọn
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {accessoryItems.map((item) => {
                      const isSelected = selectedAccessories.includes(item.label);
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => toggleAccessory(item.label)}
                          className={`group p-2.5 rounded-2xl border flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg focus:outline-none cursor-pointer ${
                            isSelected
                              ? "bg-gradient-to-b from-amber-500/25 via-amber-600/15 to-[#1a120c] border-amber-400 ring-2 ring-amber-400/40 text-amber-200 shadow-[0_8px_20px_rgba(212,175,55,0.25)] scale-[1.02]"
                              : "bg-[#160e0a]/90 border-stone-800 text-stone-300 hover:border-amber-500/50 hover:bg-[#20140c] hover:shadow-black/60"
                          }`}
                        >
                          {/* 3D Asset Graphic Component */}
                          <div className="relative w-12 h-12 flex items-center justify-center mb-1.5 transition-transform duration-300 group-hover:scale-110">
                            <item.Component className="w-12 h-12 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]" />
                            {isSelected && (
                              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shadow">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                            )}
                          </div>
                          <span className="text-[11px] font-bold tracking-tight text-center leading-tight">
                            {item.label}
                          </span>
                          <span className="text-[9px] text-stone-400 text-center line-clamp-1 mt-0.5">
                            {item.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Style Tags: Pill-Shaped Chips */}
                <div className="mt-4">
                  <span className="block text-[11px] font-medium text-stone-300 mb-1.5">
                    Định hình phong cách
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {styleChips.map((tag) => {
                      const isActive = activeStyleTag === tag;
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setActiveStyleTag(tag)}
                          className={`rounded-full px-3 py-1.5 text-center text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "bg-gradient-to-r from-amber-400 to-amber-600 text-stone-950 font-bold shadow-md shadow-amber-500/25 border border-amber-300 scale-102"
                              : "bg-stone-900/90 text-stone-300 hover:text-amber-200 border border-amber-900/40 hover:border-amber-500/40"
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-amber-900/30 text-xs text-amber-400/90 flex items-center justify-between mt-4">
                <span className="font-serif italic">Hài hòa ngũ hành</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </div>
            </div>

            {/* ---------------- CARD 4: XEM KẾT QUẢ (REQUIREMENT 3: DYNAMIC ACCESSORY LAYERS) ---------------- */}
            <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-b from-[#1e150f]/95 to-[#160f0a]/95 p-5 sm:p-6 flex flex-col justify-between shadow-xl shadow-black/40 hover:border-amber-400/50 hover:shadow-amber-500/10 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs shadow-inner">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      XEM KẾT QUẢ
                    </h3>
                    <p className="text-[11px] text-stone-400">Hình ảnh phối đồ AI</p>
                  </div>
                </div>

                {/* Expanded High Quality Try-On Mockup with dynamic Accessory Overlays */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/30 aspect-[848/1264] my-4 group shadow-xl bg-gradient-to-b from-[#18100b] to-black">
                  {/* Base Model Wearing Outfit */}
                  <img
                    src={currentMetadata.tryonImg}
                    alt={currentMetadata.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />

                  {/* 3D Worn Accessories on Model Mockup */}
                  <ModelWearAccessories
                    activeAccessories={selectedAccessories}
                    outfitId={selectedGarmentId}
                    compact
                  />

                  {/* Active Accessories Status Badges */}
                  <div className="absolute top-2.5 right-2.5 z-30 flex flex-wrap gap-1 max-w-[190px] justify-end">
                    {selectedAccessories.map((acc) => (
                      <span
                        key={acc}
                        className="rounded-full bg-black/60 border border-amber-400/80 text-amber-300 text-[9px] font-semibold px-2.5 py-0.5 backdrop-blur-md shadow-sm animate-in fade-in zoom-in-95 duration-200"
                      >
                        ✦ {acc}
                      </span>
                    ))}
                  </div>

                  {/* AI Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-black/65 backdrop-blur-md border border-amber-400/40 text-[9px] text-amber-300 font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow z-30">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>AI Mockup HD</span>
                  </div>

                  {/* Bottom details */}
                  <div className="absolute bottom-2.5 left-3 right-3 text-left z-20">
                    <div className="text-xs font-bold text-amber-200 font-serif drop-shadow-sm flex items-center justify-between">
                      <span>{currentMetadata.title}</span>
                      <span className="text-[10px] font-normal text-amber-400/90 font-mono">
                        {selectedAccessories.length} phụ kiện
                      </span>
                    </div>
                    <div className="text-[10px] text-stone-300 line-clamp-1 mt-0.5">
                      {currentMetadata.subtitle}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pill-Button in Golden-Orange Gradient */}
              <div className="mt-2">
                <button
                  type="button"
                  onClick={handleTryOnNow}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#F5AF19] via-[#E65C00] to-[#E52D27] text-white font-bold text-xs sm:text-sm shadow-[0_4px_22px_rgba(245,175,25,0.4)] hover:shadow-[0_6px_28px_rgba(245,175,25,0.6)] hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 tracking-wide cursor-pointer"
                >
                  <span>Thử trang phục ngay</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* ---------------- CARD 5: TÌM HIỂU VĂN HÓA ---------------- */}
            <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-b from-[#1e150f]/95 to-[#160f0a]/95 p-5 sm:p-6 flex flex-col justify-between shadow-xl shadow-black/40 hover:border-amber-400/50 hover:shadow-amber-500/10 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs shadow-inner">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      TÌM HIỂU VĂN HÓA
                    </h3>
                    <p className="text-[11px] text-stone-400">Ý nghĩa & cốt cách</p>
                  </div>
                </div>

                {/* Elegant Heritage Quote Parchment */}
                <div className="relative rounded-2xl bg-gradient-to-br from-[#241a12] to-[#1a120c] border border-amber-800/40 p-4 text-left my-4 shadow-inner">
                  {/* Decorative golden quote mark */}
                  <div className="text-3xl font-serif text-amber-400/40 leading-none select-none -mb-1">
                    “
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">🪭</span>
                    <span className="font-serif font-bold text-xs sm:text-sm text-amber-200">
                      {currentMetadata.title}
                    </span>
                  </div>

                  <p className="font-serif italic text-[11px] sm:text-xs text-stone-300/95 leading-relaxed">
                    {currentMetadata.quote}
                  </p>

                  <div className="mt-3 pt-2 border-t border-amber-900/40 flex items-center justify-between text-[10px] text-amber-400/80 font-mono">
                    <span>{currentMetadata.quoteAuthor}</span>
                    <span className="text-amber-500">✦ Di sản</span>
                  </div>
                </div>
              </div>

              {/* Button with Fine Gold Border */}
              <div className="mt-2">
                <button
                  type="button"
                  onClick={() => setCultureModalOpen(true)}
                  className="w-full py-3 px-5 rounded-full border border-[#D4AF37] bg-transparent text-[#D4AF37] hover:bg-[#D4AF37]/15 font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Tìm hiểu thêm →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6 FEATURE HIGHLIGHT BADGES ================= */}
      <section className="py-7 bg-[#110c08] border-y border-amber-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-amber-500/10 text-xs text-stone-300 hover:border-amber-500/30 transition-colors">
              <span className="p-2 rounded-xl bg-amber-500/15 text-amber-400 shrink-0">
                <User className="w-4 h-4" />
              </span>
              <span className="leading-tight">Tải ảnh hoặc chọn nhân vật thử đồ</span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-amber-500/10 text-xs text-stone-300 hover:border-amber-500/30 transition-colors">
              <span className="p-2 rounded-xl bg-amber-500/15 text-amber-400 shrink-0">
                <Compass className="w-4 h-4" />
              </span>
              <span className="leading-tight">Gợi ý trang phục theo sự kiện</span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-amber-500/10 text-xs text-stone-300 hover:border-amber-500/30 transition-colors">
              <span className="p-2 rounded-xl bg-amber-500/15 text-amber-400 shrink-0">
                <Palette className="w-4 h-4" />
              </span>
              <span className="leading-tight">Kiểm tra độ hài hòa màu sắc</span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-amber-500/10 text-xs text-stone-300 hover:border-amber-500/30 transition-colors">
              <span className="p-2 rounded-xl bg-amber-500/15 text-amber-400 shrink-0">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="leading-tight">So sánh cách phối đồ remix</span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-amber-500/10 text-xs text-stone-300 hover:border-amber-500/30 transition-colors">
              <span className="p-2 rounded-xl bg-amber-500/15 text-amber-400 shrink-0">
                <Camera className="w-4 h-4" />
              </span>
              <span className="leading-tight">Tạo & chia sẻ Lookbook Việt phục</span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-red-500/10 text-xs text-stone-300 hover:border-red-500/30 transition-colors">
              <span className="p-2 rounded-xl bg-red-500/15 text-amber-400 shrink-0">
                <ShieldAlert className="w-4 h-4" />
              </span>
              <span className="leading-tight">Cảnh báo bảo tồn văn hóa chuẩn mực</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GOLDEN TICKER FOOTER ================= */}
      <footer className="py-6 bg-[#0d0906] text-center border-t border-amber-950/40">
        <div className="flex items-center justify-center gap-4 text-xs font-serif tracking-[0.25em] text-amber-400/80 uppercase">
          <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-amber-600/60" />
          <span>TÔN VINH DI SẢN • KẾT NỐI THẾ HỆ • LAN TỎA VĂN HÓA VIỆT</span>
          <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-amber-600/60" />
        </div>
      </footer>

      {/* ================= CULTURE DETAIL MODAL ================= */}
      <AnimatePresence>
        {cultureModalOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setCultureModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-2xl w-full overflow-hidden rounded-3xl border border-amber-500/50 bg-[#1e150f] p-6 sm:p-8 text-stone-200 shadow-2xl ring-1 ring-amber-400/20"
            >
              <div className="flex items-center justify-between pb-4 border-b border-amber-900/50">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">🪭</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-300">
                    Ý Nghĩa Văn Hóa Cổ Phục Việt
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setCultureModalOpen(false)}
                  className="rounded-full bg-white/5 p-2 text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="mt-5 space-y-4 text-sm text-stone-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2 font-serif">
                <div className="p-3.5 rounded-2xl bg-black/40 border border-amber-900/40">
                  <h4 className="font-bold text-amber-200 mb-1 flex items-center gap-1.5 font-sans text-sm">
                    <span>1. Áo Tứ Thân Kinh Bắc</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    Bốn vạt áo tượng trưng cho tứ thân phụ mẫu (cha mẹ mình và cha mẹ người). Vạt
                    yếm bên trong che chở, thắt lưng bao lụa buộc vạt thể hiện tính nết đoan trang,
                    chịu thương chịu khó của người phụ nữ Kinh Bắc.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/40 border border-amber-900/40">
                  <h4 className="font-bold text-amber-200 mb-1 flex items-center gap-1.5 font-sans text-sm">
                    <span>2. Áo Ngũ Thân Hoàng Triều</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    Gồm năm vạt áo: bốn vạt ngoài tượng trưng cho tứ thân phụ mẫu và vạt thứ năm bên
                    trong tượng trưng cho chính mình. Năm cúc áo cài chéo ứng với ngũ thường của đạo
                    làm người: Nhân, Lễ, Nghĩa, Trí, Tín.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/40 border border-amber-900/40">
                  <h4 className="font-bold text-amber-200 mb-1 flex items-center gap-1.5 font-sans text-sm">
                    <span>3. Áo Tấc & Nhật Bình Triều Nguyễn</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    Lễ phục cung đình biểu trưng cho sự uy nghiêm, quyền quý. Phần cổ áo chữ nhật
                    đặc trưng của áo Nhật Bình kết hợp viền thêu hoa văn ngũ sắc đại diện cho trật
                    tự và vẻ đẹp đài các xứ Huế.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/40 border border-amber-900/40">
                  <h4 className="font-bold text-amber-200 mb-1 flex items-center gap-1.5 font-sans text-sm">
                    <span>4. Áo Giao Lĩnh Cổ Phong</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    Kiểu áo vạt chéo giao nhau phổ biến qua các triều đại Lý - Trần - Lê, thể hiện
                    phong thái tự do, phóng khoáng mà vẫn giữ trọn đạo mạo của tiền nhân.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-900/50 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-amber-400/80 font-serif italic">
                  Di sản Việt Nam trường tồn cùng thời gian
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setCultureModalOpen(false);
                    onStartExplore();
                  }}
                  className="rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-stone-950 shadow-md hover:brightness-110 transition-all cursor-pointer"
                >
                  Thử phối đồ ngay →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
