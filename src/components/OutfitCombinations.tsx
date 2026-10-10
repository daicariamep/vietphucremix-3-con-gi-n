import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Combination } from "@/lib/styling";
import { getAccessory3DGraphic } from "@/lib/accessory-utils";

export function OutfitCombinations({
  combinations,
  selectedId,
  onSelect,
}: {
  combinations: Combination[];
  selectedId: string;
  onSelect: (combination: Combination) => void;
}) {
  return (
    <section className="mt-10 border-t border-border pt-8">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold">Phối cùng bộ áo này</h2>
        <p className="text-xs text-muted-foreground mt-0.5">
          Bản phối phụ kiện 3D tinh tế theo từng phong cách
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {combinations.map((combination) => {
          const active = selectedId === combination.id;
          return (
            <article
              key={combination.id}
              className={`flex flex-col rounded-2xl border bg-secondary/40 p-5 transition-all duration-300 hover:border-accent/60 ${
                active
                  ? "border-accent ring-2 ring-accent/30 shadow-[var(--shadow-glow)]"
                  : "border-border"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-semibold">{combination.name}</h3>
                {active && (
                  <span className="rounded-full bg-accent/20 border border-accent/40 text-accent text-[11px] font-semibold px-2.5 py-0.5">
                    Đang chọn
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm font-medium text-stone-200">{combination.bottom}</p>

              {/* 3D Accessories Visual Row */}
              <div className="mt-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-300/90 mb-2">
                  Phụ kiện phối kèm (3D):
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {combination.accessories.map((accessory) => {
                    const Graphic = getAccessory3DGraphic(accessory);
                    return (
                      <div
                        key={accessory}
                        className="flex flex-col items-center justify-center p-2 rounded-xl bg-background/60 border border-border/80 text-center group/acc hover:border-accent/50 transition-colors"
                      >
                        <div className="w-9 h-9 flex items-center justify-center transition-transform duration-300 group-hover/acc:scale-110">
                          <Graphic className="w-8 h-8 object-contain drop-shadow-md" />
                        </div>
                        <span className="mt-1 text-[10px] font-medium text-stone-300 line-clamp-1 leading-tight">
                          {accessory}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="mt-4 text-xs text-coral">
                Hài hòa màu: <span className="font-semibold">{combination.harmony}</span>
              </p>
              <p className="mb-5 mt-2 text-sm leading-relaxed text-muted-foreground">
                {combination.note}
              </p>
              <Button
                variant={active ? "default" : "outline"}
                className="mt-auto w-full"
                aria-pressed={active}
                onClick={() => onSelect(combination)}
              >
                {active && <Check aria-hidden="true" className="mr-1.5 h-4 w-4" />}{" "}
                {active ? "Đang chọn cách phối" : "Chọn cách phối này"}
              </Button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
