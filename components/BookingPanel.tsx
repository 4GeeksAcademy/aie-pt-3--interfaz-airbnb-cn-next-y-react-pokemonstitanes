interface BookingPanelProps {
  pricePerNight: number;
  currency: string;
  guests: number;
  nights: number;
  maxGuests: number;
  onChangeGuests: (next: number) => void;
  onChangeNights: (next: number) => void;
}

export function BookingPanel({
  pricePerNight,
  currency,
  guests,
  nights,
  maxGuests,
  onChangeGuests,
  onChangeNights,
}: BookingPanelProps) {
  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(pricePerNight);

  const total = pricePerNight * guests * nights;
  const formattedTotal = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(total);

  return (
    <aside className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm shadow-stone-200/80 md:sticky md:top-28">
      <p className="text-lg font-semibold text-stone-900">{formattedPrice} / noche</p>
      <div className="mt-4 rounded-2xl border border-stone-200 p-4">
        <p className="text-sm text-stone-500">Huespedes</p>
        <div className="mt-2 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onChangeGuests(Math.max(1, guests - 1))}
            className="h-9 w-9 rounded-full border border-stone-300 text-lg text-stone-700"
          >
            -
          </button>
          <span className="text-sm font-medium text-stone-800">{guests}</span>
          <button
            type="button"
            onClick={() => onChangeGuests(Math.min(maxGuests, guests + 1))}
            className="h-9 w-9 rounded-full border border-stone-300 text-lg text-stone-700"
          >
            +
          </button>
        </div>

        <p className="mt-4 text-sm text-stone-500">Noches</p>
        <div className="mt-2 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onChangeNights(Math.max(1, nights - 1))}
            className="h-9 w-9 rounded-full border border-stone-300 text-lg text-stone-700"
          >
            -
          </button>
          <span className="text-sm font-medium text-stone-800">{nights}</span>
          <button
            type="button"
            onClick={() => onChangeNights(Math.min(30, nights + 1))}
            className="h-9 w-9 rounded-full border border-stone-300 text-lg text-stone-700"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 p-4">
        <p className="text-sm text-stone-500">
          {formattedPrice} x {guests} huespedes x {nights} noches
        </p>
        <p className="mt-1 text-lg font-semibold text-stone-900">Total: {formattedTotal}</p>
      </div>
      <button
        type="button"
        className="mt-4 w-full rounded-xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white"
      >
        Reservar ahora
      </button>
    </aside>
  );
}