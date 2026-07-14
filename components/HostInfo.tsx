interface HostInfoProps {
  hostName: string;
  hostYears: number;
}

export function HostInfo({ hostName, hostYears }: HostInfoProps) {
  return (
    <section className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-4">
      <div className="grid h-14 w-14 place-items-center rounded-full bg-stone-900 text-sm font-semibold text-white">
        {hostName.slice(0, 2).toUpperCase()}
      </div>
      <div>
        <h2 className="text-base font-semibold text-stone-900">Anfitrion: {hostName}</h2>
        <p className="text-sm text-stone-600">{hostYears} años recibiendo huespedes</p>
      </div>
    </section>
  );
}