interface SortControlsProps {
  currentOrder: "asc" | "desc";
  onOrderChange: (order: "asc" | "desc") => void;
}

export function SortControls({
  currentOrder,
  onOrderChange,
}: SortControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-stone-500">Ordenar por precio</span>
      <select
        value={currentOrder}
        onChange={(event) => onOrderChange(event.target.value as "asc" | "desc")}
        className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 outline-none"
      >
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </div>
  );
}