"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { CategoryNav } from "@/components/CategoryNav";
import { Navbar } from "@/components/Navbar";
import { SortControls } from "@/components/SortControls";
import { StayCard } from "@/components/StayCard";
import { mockStays } from "@/src/data/stays";
import { Stay } from "@/src/types";

const CatalogMap = dynamic(
  () => import("@/components/CatalogMap").then((mod) => mod.CatalogMap),
  { ssr: false }
);

export default function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [stays, setStays] = useState<Stay[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setStays(mockStays);
      setIsLoading(false);
    }, 1000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const normalizedQuery = searchTerm.trim().toLowerCase();
  const filteredStays = useMemo(() => {
    const base = stays.filter((stay) => {
      const matchesCategory =
        activeCategory === "all" || stay.categoryId === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${stay.title} ${stay.location}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });

    return [...base].sort((a, b) =>
      sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight
    );
  }, [activeCategory, normalizedQuery, sortOrder, stays]);

  return (
    <div className="min-h-full bg-stone-50">
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CategoryNav activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

      <section className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-500">Catalogo</p>
            <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
              {filteredStays.length} resultados disponibles
            </h1>
          </div>
          <SortControls currentOrder={sortOrder} onOrderChange={setSortOrder} />
        </div>

        {isLoading ? (
          <div className="flex min-h-72 items-center justify-center rounded-[32px] border border-dashed border-stone-300 bg-white">
            <p className="text-sm text-stone-500">Cargando catalogo...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.7fr_1fr]">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {filteredStays.map((stay) => (
                <StayCard key={stay.id} stay={stay} />
              ))}
            </div>
            <CatalogMap stays={filteredStays} />
          </div>
        )}
      </section>
    </div>
  );
}