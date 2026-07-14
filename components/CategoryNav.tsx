"use client";

import { CategoryItem } from "@/src/types";

export const homeCategories: CategoryItem[] = [
  { id: "all", label: "Todas", icon: "AL" },
  { id: "playa", label: "Playa", icon: "PL" },
  { id: "mansiones", label: "Mansiones", icon: "MS" },
  { id: "tendencias", label: "Tendencias", icon: "TD" },
  { id: "cabanas", label: "Cabanas", icon: "CB" },
  { id: "ciudad", label: "Ciudad", icon: "CD" },
  { id: "montana", label: "Montana", icon: "MT" },
];

interface CategoryNavProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export function CategoryNav({
  activeCategory,
  onSelectCategory,
}: CategoryNavProps) {
  return (
    <nav className="border-b border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl overflow-x-auto px-4 py-3 md:px-6">
        <div className="flex min-w-max gap-2 md:gap-3">
          {homeCategories.map((category) => {
            const isActive = category.id === activeCategory;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onSelectCategory(category.id)}
                className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-stone-900 bg-stone-900 text-white"
                    : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                }`}
              >
                <span
                  className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-semibold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-stone-100 text-stone-700"
                  }`}
                >
                  {category.icon}
                </span>
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}