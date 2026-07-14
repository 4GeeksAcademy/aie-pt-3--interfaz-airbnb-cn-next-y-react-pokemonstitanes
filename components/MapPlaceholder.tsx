interface MapPlaceholderProps {
  total: number;
}

export function MapPlaceholder({ total }: MapPlaceholderProps) {
  return (
    <aside className="rounded-[28px] border border-stone-200 bg-stone-200/70 p-6 md:sticky md:top-28 md:h-[calc(100vh-9rem)]">
      <div className="flex h-full min-h-60 flex-col items-center justify-center rounded-[22px] border border-dashed border-stone-400 bg-stone-300/40 text-center">
        <p className="text-2xl font-semibold text-stone-700">Mapa</p>
        <p className="mt-2 text-sm text-stone-600">{total} alojamientos visibles</p>
      </div>
    </aside>
  );
}