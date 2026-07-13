"use client";

import { CategoryItem } from "@/src/types";

export const homeCategories: CategoryItem[] = [
  { id: "all", label: "Todas" },
  { id: "playa", label: "Playa" },
  { id: "cabanas", label: "Cabanas" },
  { id: "ciudad", label: "Ciudad" },
  { id: "montana", label: "Montana" },
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
    <nav className="border-b border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl overflow-x-auto px-4 py-3 md:px-6">
        <div className="flex min-w-max gap-3">
          {homeCategories.map((category) => {
            const isActive = category.id === activeCategory;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onSelectCategory(category.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-stone-900 bg-stone-900 text-white"
                    : "border-stone-200 bg-white text-stone-600"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}