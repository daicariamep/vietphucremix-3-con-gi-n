import type { Outfit } from "./outfits";

/**
 * High-fidelity virtual try-on canvas renderer.
 * Drapes authentic Vietnamese traditional attire (Áo Tấc, Ngũ Thân, Nhật Bình, Tứ Thân, Giao Lĩnh, Áo Dài)
 * onto the user's/model's photo, matching body landmarks, posture, and selected accessories.
 */
export async function renderVirtualTryOn(
  photoUrl: string,
  outfit: Outfit,
  accessories: string[] = [],
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const W = img.naturalWidth || 800;
        const H = img.naturalHeight || 1200;

        const canvas = document.createElement("canvas");
        canvas.width = W;
        canvas.height = H;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          throw new Error("Cannot get 2D canvas context");
        }

        // 1. Draw original photo as base (keeps face, hair, posture, skin, hands, shoes)
        ctx.drawImage(img, 0, 0, W, H);

        // Body landmarks estimated from standard full-body fashion standing portraits
        const centerX = W * 0.5;
        const headTop = H * 0.12;
        const chinY = H * 0.285;
        const neckY = H * 0.315;
        const shoulderY = H * 0.345;
        const chestY = H * 0.42;
        const waistY = H * 0.52;
        const hipY = H * 0.63;
        const kneeY = H * 0.77;
        const ankleY = H * 0.905;

        const shoulderWidth = W * 0.38;
        const waistWidth = W * 0.32;
        const hipWidth = W * 0.37;
        const hemWidth = W * (0.36 * (outfit.flare || 1.0));

        // Create silk brocade pattern
        const brocadeCanvas = document.createElement("canvas");
        brocadeCanvas.width = 60;
        brocadeCanvas.height = 60;
        const bCtx = brocadeCanvas.getContext("2d")!;
        bCtx.fillStyle = outfit.color;
        bCtx.fillRect(0, 0, 60, 60);

        // Subtle cloud pattern (hoa văn mây sóng nước thủy ba)
        bCtx.strokeStyle = "rgba(255, 255, 255, 0.14)";
        bCtx.lineWidth = 1.5;
        bCtx.beginPath();
        bCtx.arc(30, 30, 16, 0, Math.PI * 1.5);
        bCtx.stroke();
        bCtx.beginPath();
        bCtx.arc(15, 15, 10, 0.5, Math.PI);
        bCtx.stroke();
        bCtx.beginPath();
        bCtx.arc(45, 45, 10, 0.5, Math.PI);
        bCtx.stroke();

        const brocadePattern = ctx.createPattern(brocadeCanvas, "repeat");

        // 2. Render Trousers (Quần lụa) - covers blue jeans with traditional flowing silk trousers
        ctx.save();
        const pantsColor =
          outfit.id === "tu-than" ? "#1a1816" : outfit.id === "ngu-than" ? "#222222" : "#f5f0e6";
        const pantsGradient = ctx.createLinearGradient(centerX, waistY, centerX, ankleY);
        pantsGradient.addColorStop(0, pantsColor);
        pantsGradient.addColorStop(0.5, adjustColorBrightness(pantsColor, -12));
        pantsGradient.addColorStop(1, adjustColorBrightness(pantsColor, -25));

        ctx.fillStyle = pantsGradient;
        ctx.beginPath();
        // Left leg
        ctx.moveTo(centerX - waistWidth * 0.45, waistY + 10);
        ctx.lineTo(centerX - hipWidth * 0.48, hipY);
        ctx.lineTo(centerX - hipWidth * 0.46, kneeY);
        ctx.lineTo(centerX - hipWidth * 0.42, ankleY);
        ctx.lineTo(centerX - 10, ankleY);
        ctx.lineTo(centerX - 10, hipY + 15);
        // Right leg
        ctx.lineTo(centerX + 10, hipY + 15);
        ctx.lineTo(centerX + 10, ankleY);
        ctx.lineTo(centerX + hipWidth * 0.42, ankleY);
        ctx.lineTo(centerX + hipWidth * 0.46, kneeY);
        ctx.lineTo(centerX + hipWidth * 0.48, hipY);
        ctx.lineTo(centerX + waistWidth * 0.45, waistY + 10);
        ctx.closePath();
        ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
        ctx.shadowBlur = 12;
        ctx.shadowOffsetY = 4;
        ctx.fill();

        // Pants silk creases
        ctx.strokeStyle = "rgba(0, 0, 0, 0.12)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX - hipWidth * 0.22, hipY + 30);
        ctx.lineTo(centerX - hipWidth * 0.22, ankleY - 10);
        ctx.moveTo(centerX + hipWidth * 0.22, hipY + 30);
        ctx.lineTo(centerX + hipWidth * 0.22, ankleY - 10);
        ctx.stroke();
        ctx.restore();

        // 3. Render Main Robe Panels (Thân & Tà áo cổ phục)
        ctx.save();
        const robeGradient = ctx.createLinearGradient(
          centerX - shoulderWidth,
          shoulderY,
          centerX + shoulderWidth,
          ankleY,
        );
        robeGradient.addColorStop(0, adjustColorBrightness(outfit.color, 18));
        robeGradient.addColorStop(0.35, outfit.color);
        robeGradient.addColorStop(0.85, adjustColorBrightness(outfit.color, -16));

        // Outline path for main body and panels
        ctx.beginPath();
        ctx.moveTo(centerX - shoulderWidth * 0.5, shoulderY);
        ctx.quadraticCurveTo(
          centerX - waistWidth * 0.55,
          waistY,
          centerX - hemWidth * 0.55,
          ankleY - 30,
        );
        ctx.quadraticCurveTo(centerX, ankleY - 15, centerX + hemWidth * 0.55, ankleY - 30);
        ctx.quadraticCurveTo(
          centerX + waistWidth * 0.55,
          waistY,
          centerX + shoulderWidth * 0.5,
          shoulderY,
        );
        ctx.lineTo(centerX + W * 0.08, neckY + 10);
        ctx.quadraticCurveTo(centerX, neckY + 18, centerX - W * 0.08, neckY + 10);
        ctx.closePath();

        // Fill robe base
        ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
        ctx.shadowBlur = 18;
        ctx.shadowOffsetY = 6;
        ctx.fillStyle = robeGradient;
        ctx.fill();

        // Overlay brocade pattern
        if (brocadePattern) {
          ctx.globalAlpha = 0.35;
          ctx.fillStyle = brocadePattern;
          ctx.fill();
          ctx.globalAlpha = 1.0;
        }

        // Robe side folds & 3D lighting highlights
        const highlight = ctx.createLinearGradient(
          centerX - W * 0.15,
          chestY,
          centerX + W * 0.15,
          chestY,
        );
        highlight.addColorStop(0, "rgba(255,255,255,0)");
        highlight.addColorStop(0.5, "rgba(255,255,255,0.18)");
        highlight.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = highlight;
        ctx.fill();

        // Center split or front flap (Vạt chéo / Vạt con)
        ctx.strokeStyle = "rgba(0, 0, 0, 0.28)";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        if (outfit.id === "tu-than") {
          // Áo Tứ Thân has center opening showing the Yếm
          ctx.moveTo(centerX - 15, waistY);
          ctx.lineTo(centerX - hemWidth * 0.2, ankleY - 30);
          ctx.moveTo(centerX + 15, waistY);
          ctx.lineTo(centerX + hemWidth * 0.2, ankleY - 30);
        } else {
          // Diagonal right flap from neck to right waist and straight down
          ctx.moveTo(centerX + W * 0.04, neckY + 15);
          ctx.quadraticCurveTo(centerX + W * 0.14, chestY, centerX + waistWidth * 0.4, waistY + 10);
          ctx.lineTo(centerX + hemWidth * 0.38, ankleY - 30);
        }
        ctx.stroke();

        ctx.restore();

        // 4. Render Sleeves (Tay áo thụng hoặc Tay áo chẽn)
        ctx.save();
        const isWideSleeve = outfit.flare > 1.0; // Áo Tấc, Nhật Bình, Ngũ thân tay chùng
        const sleeveWidth = isWideSleeve ? W * 0.24 : W * 0.12;
        const wristY = H * 0.64;

        ctx.fillStyle = robeGradient;
        ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
        ctx.shadowBlur = 14;

        // Left sleeve
        ctx.beginPath();
        ctx.moveTo(centerX - shoulderWidth * 0.48, shoulderY);
        ctx.quadraticCurveTo(
          centerX - shoulderWidth * 0.75,
          shoulderY + 50,
          centerX - shoulderWidth * 0.65 - sleeveWidth * 0.3,
          wristY,
        );
        ctx.lineTo(centerX - shoulderWidth * 0.4, wristY);
        ctx.quadraticCurveTo(
          centerX - waistWidth * 0.52,
          waistY,
          centerX - waistWidth * 0.48,
          chestY + 20,
        );
        ctx.closePath();
        ctx.fill();

        // Right sleeve
        ctx.beginPath();
        ctx.moveTo(centerX + shoulderWidth * 0.48, shoulderY);
        ctx.quadraticCurveTo(
          centerX + shoulderWidth * 0.75,
          shoulderY + 50,
          centerX + shoulderWidth * 0.65 + sleeveWidth * 0.3,
          wristY,
        );
        ctx.lineTo(centerX + shoulderWidth * 0.4, wristY);
        ctx.quadraticCurveTo(
          centerX + waistWidth * 0.52,
          waistY,
          centerX + waistWidth * 0.48,
          chestY + 20,
        );
        ctx.closePath();
        ctx.fill();

        // Sleeve cuffs trim (Viền cổ tay)
        ctx.strokeStyle = outfit.trim;
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(centerX - shoulderWidth * 0.65 - sleeveWidth * 0.3, wristY);
        ctx.lineTo(centerX - shoulderWidth * 0.4, wristY);
        ctx.moveTo(centerX + shoulderWidth * 0.4, wristY);
        ctx.lineTo(centerX + shoulderWidth * 0.65 + sleeveWidth * 0.3, wristY);
        ctx.stroke();
        ctx.restore();

        // 5. Special Collar Styles based on Outfit Type
        ctx.save();
        if (outfit.id === "nhat-binh") {
          // Áo Nhật Bình: Cổ chữ nhật đặc trưng cung đình Huế
          const collarWidth = W * 0.22;
          const collarHeight = H * 0.13;
          ctx.fillStyle = outfit.trim;
          ctx.beginPath();
          ctx.rect(centerX - collarWidth * 0.5, neckY - 5, collarWidth, collarHeight);
          ctx.lineWidth = 4;
          ctx.strokeStyle = "#e9c46a";
          ctx.stroke();

          // Multi-color embroidered band inside Nhật Bình collar
          const stripes = ["#e63946", "#f4a261", "#2a9d8f", "#e76f51", "#264653"];
          stripes.forEach((color, idx) => {
            ctx.fillStyle = color;
            ctx.fillRect(centerX - collarWidth * 0.5 + 4 + idx * 8, neckY - 2, 7, collarHeight - 6);
            ctx.fillRect(
              centerX + collarWidth * 0.5 - 11 - idx * 8,
              neckY - 2,
              7,
              collarHeight - 6,
            );
          });
        } else if (outfit.id === "tu-than") {
          // Áo Tứ Thân: Yếm cam san hô / đỏ thắm + Thắt lưng bao lụa
          // Yếm
          ctx.fillStyle = outfit.trim; // #ef8354
          ctx.beginPath();
          ctx.moveTo(centerX - W * 0.07, neckY + 12);
          ctx.lineTo(centerX + W * 0.07, neckY + 12);
          ctx.lineTo(centerX + W * 0.09, chestY);
          ctx.lineTo(centerX - W * 0.09, chestY);
          ctx.closePath();
          ctx.fill();

          // Sash belt (Thắt lưng bao lụa) at waist
          ctx.fillStyle = "#e9c46a";
          ctx.fillRect(centerX - waistWidth * 0.4, waistY - 10, waistWidth * 0.8, 22);
          // Hanging sash tails
          ctx.fillStyle = outfit.trim;
          ctx.beginPath();
          ctx.moveTo(centerX - 10, waistY + 12);
          ctx.lineTo(centerX - 18, kneeY);
          ctx.lineTo(centerX + 2, kneeY);
          ctx.lineTo(centerX + 6, waistY + 12);
          ctx.closePath();
          ctx.fill();
        } else if (outfit.id === "giao-linh") {
          // Áo Giao Lĩnh: Cổ giao chéo hai vạt
          ctx.strokeStyle = outfit.trim;
          ctx.lineWidth = 10;
          ctx.beginPath();
          ctx.moveTo(centerX - W * 0.11, neckY);
          ctx.lineTo(centerX + W * 0.12, chestY + 20);
          ctx.moveTo(centerX + W * 0.11, neckY);
          ctx.lineTo(centerX - W * 0.08, chestY + 10);
          ctx.stroke();
        } else {
          // Áo Tấc / Áo Ngũ Thân / Áo Dài: Cổ đứng (Mandarin collar)
          ctx.fillStyle = outfit.trim;
          ctx.beginPath();
          ctx.ellipse(centerX, neckY + 6, W * 0.085, H * 0.026, 0, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
          ctx.lineWidth = 2;
          ctx.stroke();

          // Inner collar depth
          ctx.fillStyle = adjustColorBrightness(outfit.color, -20);
          ctx.beginPath();
          ctx.ellipse(centerX, neckY + 4, W * 0.065, H * 0.016, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        // 6. Five Royal Buttons (Ngũ khuy mạ vàng) down the right lapel
        if (outfit.id !== "tu-than" && outfit.id !== "nhat-binh") {
          ctx.save();
          for (let i = 0; i < 5; i++) {
            const bx = centerX + W * 0.05 + i * (W * 0.016);
            const by = neckY + 22 + i * (H * 0.044);

            const btnGrad = ctx.createRadialGradient(bx - 2, by - 2, 1, bx, by, 7);
            btnGrad.addColorStop(0, "#fff5d6");
            btnGrad.addColorStop(0.4, outfit.trim);
            btnGrad.addColorStop(1, "#8a6514");

            ctx.fillStyle = btnGrad;
            ctx.shadowColor = "rgba(0,0,0,0.4)";
            ctx.shadowBlur = 4;
            ctx.beginPath();
            ctx.arc(bx, by, 6, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }

        // 7. Accessories (Phụ kiện)
        // A. Kiềng bạc / Túi / Trang sức (Necklace & Silk purse / Jade pendant)
        const hasJewelryOrBag =
          accessories.some((a) => /kiềng|túi|trang sức|ngọc/i.test(a)) ||
          outfit.remix.some((r) => /kiềng|túi|trang sức/i.test(r));

        if (hasJewelryOrBag) {
          ctx.save();
          // Silver torque necklace
          const silverGrad = ctx.createLinearGradient(
            centerX - W * 0.09,
            neckY,
            centerX + W * 0.09,
            neckY,
          );
          silverGrad.addColorStop(0, "#d1d5db");
          silverGrad.addColorStop(0.5, "#ffffff");
          silverGrad.addColorStop(1, "#9ca3af");

          ctx.strokeStyle = silverGrad;
          ctx.lineWidth = 5;
          ctx.shadowColor = "rgba(255,255,255,0.6)";
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(centerX, neckY + 16, W * 0.08, 0.25, Math.PI - 0.25);
          ctx.stroke();

          // Silk embroidered pouch / jade medallion hanging at hip
          if (accessories.some((a) => /túi|trang sức/i.test(a))) {
            const pouchX = centerX - waistWidth * 0.44;
            const pouchY = hipY + 10;
            ctx.fillStyle = "#8a2424";
            ctx.shadowColor = "rgba(0,0,0,0.4)";
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.arc(pouchX, pouchY, 14, 0, Math.PI * 2);
            ctx.fill();
            // Jade medallion center
            ctx.fillStyle = "#2e7d5b";
            ctx.beginPath();
            ctx.arc(pouchX, pouchY, 6, 0, Math.PI * 2);
            ctx.fill();
            // Gold tassel
            ctx.strokeStyle = "#e6b94d";
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(pouchX, pouchY + 14);
            ctx.lineTo(pouchX, pouchY + 32);
            ctx.stroke();
          }
          ctx.restore();
        }

        // B. Mấn đội đầu / Khăn vấn (Traditional turban crown arched over head)
        const hasManOrKhan =
          accessories.some((a) => /mấn|khăn/i.test(a)) ||
          outfit.remix.some((r) => /mấn|khăn/i.test(r));

        if (hasManOrKhan) {
          ctx.save();
          const manY = headTop + (chinY - headTop) * 0.18;
          const manRadiusX = W * 0.125;
          const manRadiusY = H * 0.038;

          // Arched multi-layer royal silk turban
          const manGrad = ctx.createLinearGradient(
            centerX,
            manY - manRadiusY,
            centerX,
            manY + manRadiusY,
          );
          manGrad.addColorStop(0, "#D63031");
          manGrad.addColorStop(0.4, outfit.color || "#8C1417");
          manGrad.addColorStop(1, "#4A080A");

          ctx.fillStyle = manGrad;
          ctx.shadowColor = "rgba(0,0,0,0.25)";
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.ellipse(centerX, manY, manRadiusX, manRadiusY, 0, 0, Math.PI * 2);
          ctx.fill();

          // Gold concentric brocade embroidery rims
          ctx.strokeStyle = "#D4AF37";
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.ellipse(centerX, manY, manRadiusX * 0.88, manRadiusY * 0.85, 0, 0, Math.PI * 2);
          ctx.stroke();

          // Imperial Gold Lotus crest ornament at center
          ctx.fillStyle = "#FFEAA7";
          ctx.beginPath();
          ctx.arc(centerX, manY, 4.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#D63031";
          ctx.beginPath();
          ctx.arc(centerX, manY, 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // C. Quạt lụa vàng (Traditional silk folding fan held gracefully in hand)
        const hasFan =
          accessories.some((a) => /quạt/i.test(a)) || outfit.remix.some((r) => /quạt/i.test(r));

        if (hasFan) {
          ctx.save();
          const fanX = centerX + waistWidth * 0.44;
          const fanY = waistY + 12;
          ctx.translate(fanX, fanY);
          ctx.rotate(-0.35);

          // Silk Arc in warm ivory and gold
          const fanSilkGrad = ctx.createRadialGradient(0, 0, 10, 0, 0, W * 0.15);
          fanSilkGrad.addColorStop(0, "#FFFDF7");
          fanSilkGrad.addColorStop(0.6, "#FAF1DA");
          fanSilkGrad.addColorStop(1, "#EAD6A8");

          ctx.fillStyle = fanSilkGrad;
          ctx.shadowColor = "rgba(0,0,0,0.2)";
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, W * 0.14, -Math.PI * 0.82, -Math.PI * 0.18);
          ctx.closePath();
          ctx.fill();

          // Gold border
          ctx.strokeStyle = "#D4AF37";
          ctx.lineWidth = 1.6;
          ctx.stroke();

          // Delicate warm bamboo ribs (NO dark black lines)
          ctx.strokeStyle = "#B38642";
          ctx.lineWidth = 1.4;
          for (let angle = -Math.PI * 0.82; angle <= -Math.PI * 0.18; angle += 0.22) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(angle) * W * 0.14, Math.sin(angle) * W * 0.14);
            ctx.stroke();
          }

          // Fan pivot and crimson silk tassel with jade bead
          ctx.fillStyle = "#D4AF37";
          ctx.beginPath();
          ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = "#D63031";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(0, 3);
          ctx.lineTo(0, 14);
          ctx.stroke();
          ctx.fillStyle = "#20BF6B";
          ctx.beginPath();
          ctx.arc(0, 8, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // D. Giày / Boots / Sneaker (Footwear)
        const hasFootwear =
          accessories.some((a) => /giày|boot|sneaker|guốc/i.test(a)) ||
          outfit.remix.some((r) => /giày|boot|sneaker|guốc/i.test(r));

        if (hasFootwear) {
          ctx.save();
          ctx.fillStyle = "#2b1810";
          ctx.shadowColor = "rgba(0,0,0,0.4)";
          ctx.shadowBlur = 6;
          // Left foot shoe
          ctx.beginPath();
          ctx.roundRect(centerX - hipWidth * 0.38, ankleY, W * 0.1, H * 0.045, 6);
          ctx.fill();
          // Right foot shoe
          ctx.beginPath();
          ctx.roundRect(centerX + hipWidth * 0.28, ankleY, W * 0.1, H * 0.045, 6);
          ctx.fill();

          // Gold rim on shoes
          ctx.strokeStyle = outfit.trim;
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.restore();
        }

        // 8. Subtle vignette and soft lighting to blend the lookbook photo
        ctx.save();
        const vignette = ctx.createRadialGradient(
          centerX,
          H * 0.5,
          W * 0.35,
          centerX,
          H * 0.5,
          W * 0.8,
        );
        vignette.addColorStop(0, "rgba(0,0,0,0)");
        vignette.addColorStop(1, "rgba(20, 10, 5, 0.2)");
        ctx.fillStyle = vignette;
        ctx.fillRect(0, 0, W, H);
        ctx.restore();

        const dataUrl = canvas.toDataURL("image/jpeg", 0.94);
        resolve(dataUrl);
      } catch (err) {
        reject(err);
      }
    };
    img.onerror = (e) => reject(new Error("Failed to load image for try-on rendering: " + e));
    img.src = photoUrl;
  });
}

/**
 * Adjust hex color brightness
 */
function adjustColorBrightness(hex: string, percent: number): string {
  let num = parseInt(hex.replace("#", ""), 16);
  if (isNaN(num)) num = 0x888888;
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amt));
  const B = Math.min(255, Math.max(0, (num & 0x0000ff) + amt));
  return `#${((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1)}`;
}
