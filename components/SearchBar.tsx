interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function SearchBar({
  searchTerm,
  onSearchChange,
}: SearchBarProps) {
  return (
    <label className="flex w-full items-center gap-3 rounded-full border border-stone-200 bg-white px-4 py-3 shadow-sm shadow-stone-200/60 md:max-w-md">
      <span className="text-sm text-stone-400">Buscar</span>
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Destino o tipo de estancia"
        className="w-full bg-transparent text-sm text-stone-900 outline-none placeholder:text-stone-400"
      />
    </label>
  );
}