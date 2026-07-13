"use client";

import { useEffect, useState } from "react";
import { CategoryNav } from "@/components/CategoryNav";
import { Navbar } from "@/components/Navbar";
import { StayCard } from "@/components/StayCard";
import { mockStays } from "@/src/data/stays";
import { Stay } from "@/src/types";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
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
  const filteredStays = stays.filter((stay) => {
    const matchesCategory =
      activeCategory === "all" || stay.categoryId === activeCategory;
    const matchesSearch =
      normalizedQuery.length === 0 ||
      `${stay.title} ${stay.location}`.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-full bg-stone-50">
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CategoryNav
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <section className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
        <div className="mb-6 space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-rose-500">
            Estancias destacadas
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
                Encuentra tu proxima escapada
              </h1>
              <p className="mt-1 text-sm text-stone-500">
                Resultados visibles: {filteredStays.length}
              </p>
            </div>
            <p className="max-w-xl text-sm text-stone-500">
              Explora alojamientos con carga simulada, filtros por categoria y
              busqueda en tiempo real.
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="flex min-h-72 flex-col items-center justify-center gap-4 rounded-[32px] border border-dashed border-stone-300 bg-white">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-stone-200 border-t-rose-500" />
            <p className="text-sm text-stone-500">Cargando alojamientos...</p>
          </div>
        ) : filteredStays.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredStays.map((stay) => (
              <StayCard key={stay.id} stay={stay} />
            ))}
          </div>
        ) : (
          <div className="rounded-[32px] border border-stone-200 bg-white px-6 py-12 text-center">
            <h2 className="text-lg font-semibold text-stone-900">
              No encontramos alojamientos para esa busqueda.
            </h2>
            <p className="mt-2 text-sm text-stone-500">
              Prueba otra categoria o ajusta el texto del buscador.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
