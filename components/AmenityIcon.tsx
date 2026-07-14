interface AmenityIconProps {
  amenity: string;
}

function IconFrame({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-full bg-stone-100 text-stone-700">
      {children}
    </span>
  );
}

export function AmenityIcon({ amenity }: AmenityIconProps) {
  const key = amenity.toLowerCase();

  if (key.includes("wifi")) {
    return <IconFrame><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 8a15 15 0 0 1 20 0" /><path d="M5 12a10 10 0 0 1 14 0" /><path d="M8.5 15.5a5 5 0 0 1 7 0" /><circle cx="12" cy="19" r="1" fill="currentColor" /></svg></IconFrame>;
  }

  if (key.includes("piscina") || key.includes("jacuzzi") || key.includes("sauna")) {
    return <IconFrame><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 15c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1" /><path d="M4 18c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1" /><path d="M8 6c0-1 1-2 2-2" /><path d="M12 5c0-1 1-2 2-2" /></svg></IconFrame>;
  }

  if (key.includes("chimenea") || key.includes("calefaccion")) {
    return <IconFrame><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 10h10v10H7z" /><path d="M12 4c1.5 2 1 3.5-.5 5" /><path d="M13 7c1 1.2 1.3 2.5.5 4" /></svg></IconFrame>;
  }

  if (key.includes("cocina") || key.includes("barbacoa")) {
    return <IconFrame><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 6h14v4H5z" /><path d="M7 10v8" /><path d="M17 10v8" /><path d="M9 14h6" /></svg></IconFrame>;
  }

  if (key.includes("tv") || key.includes("smart")) {
    return <IconFrame><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="12" rx="2" /><path d="M8 20h8" /></svg></IconFrame>;
  }

  if (key.includes("parking") || key.includes("ascensor") || key.includes("guardaesquis")) {
    return <IconFrame><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="4" width="14" height="16" rx="2" /><path d="M9 16V8h4a2 2 0 1 1 0 4H9" /></svg></IconFrame>;
  }

  if (key.includes("mascotas")) {
    return <IconFrame><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="14" r="3" /><circle cx="7" cy="9" r="1.5" /><circle cx="10" cy="7" r="1.5" /><circle cx="14" cy="7" r="1.5" /><circle cx="17" cy="9" r="1.5" /></svg></IconFrame>;
  }

  return <IconFrame><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 12h8" /></svg></IconFrame>;
}