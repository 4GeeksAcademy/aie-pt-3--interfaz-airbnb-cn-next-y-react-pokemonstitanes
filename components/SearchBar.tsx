interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function SearchBar({
  searchTerm,
  onSearchChange,
}: SearchBarProps) {
  return (
    <label className="flex w-full items-center gap-3 rounded-full border border-stone-200 bg-white px-4 py-2 shadow-sm shadow-stone-200/60 transition focus-within:border-stone-300 md:max-w-xl">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
        Buscar
      </span>
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Destino o tipo de estancia"
        className="w-full bg-transparent text-sm text-stone-900 outline-none placeholder:text-stone-400"
      />
      <span className="grid h-8 w-8 place-items-center rounded-full bg-rose-500 text-xs font-semibold text-white">
        GO
      </span>
    </label>
  );
}