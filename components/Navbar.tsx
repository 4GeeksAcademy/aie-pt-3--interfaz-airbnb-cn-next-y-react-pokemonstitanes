import Link from "next/link";
import { SearchBar } from "@/components/SearchBar";

interface NavbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function Navbar({ searchTerm, onSearchChange }: NavbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-xl font-semibold tracking-tight text-rose-500">
            Airbnb CN
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-600 md:hidden"
            aria-label="Abrir menu de usuario"
          >
            <span className="text-lg">=</span>
          </button>
        </div>
        <div className="flex items-center gap-3 md:flex-1 md:justify-end">
          <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
          <button
            type="button"
            className="hidden rounded-full border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-700 shadow-sm shadow-stone-200/60 md:inline-flex"
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}