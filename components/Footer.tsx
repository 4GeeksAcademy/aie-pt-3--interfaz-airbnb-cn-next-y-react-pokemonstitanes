export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-stone-600 md:flex-row md:items-center md:justify-between md:px-6">
        <p>© 2026 Airbnb CN. Inspiracion para descubrir estancias unicas.</p>
        <div className="flex flex-wrap gap-4">
          <span>Soporte</span>
          <span>Privacidad</span>
          <span>Terminos</span>
        </div>
      </div>
    </footer>
  );
}