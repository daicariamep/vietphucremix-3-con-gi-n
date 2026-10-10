import type React from "react";
import {
  Graphic3DBoots,
  Graphic3DGuocMoc,
  Graphic3DManKhan,
  Graphic3DQuatGiay,
  Graphic3DTuiTrangSuc,
  Graphic3DChokerEarrings,
} from "./accessory-3d";

export function getAccessory3DGraphic(name: string): React.ComponentType<{ className?: string }> {
  if (/mấn|khăn/i.test(name)) return Graphic3DManKhan;
  if (/quạt/i.test(name)) return Graphic3DQuatGiay;
  if (/guốc/i.test(name)) return Graphic3DGuocMoc;
  if (/giày|boot|sneaker/i.test(name)) return Graphic3DBoots;
  if (/túi|ngọc|trang sức/i.test(name)) return Graphic3DTuiTrangSuc;
  if (/khuyên|tai|bạc|kiềng/i.test(name)) return Graphic3DChokerEarrings;
  return Graphic3DQuatGiay;
}
