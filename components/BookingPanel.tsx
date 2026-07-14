interface BookingPanelProps {
  pricePerNight: number;
  currency: string;
  guests: number;
  checkInDate: string;
  checkOutDate: string;
  minCheckOutDate: string;
  nights: number;
  maxGuests: number;
  onChangeGuests: (next: number) => void;
  onChangeCheckInDate: (next: string) => void;
  onChangeCheckOutDate: (next: string) => void;
}

export function BookingPanel({
  pricePerNight,
  currency,
  guests,
  checkInDate,
  checkOutDate,
  minCheckOutDate,
  nights,
  maxGuests,
  onChangeGuests,
  onChangeCheckInDate,
  onChangeCheckOutDate,
}: BookingPanelProps) {
  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(pricePerNight);

  const total = nights > 0 ? pricePerNight * guests * nights : 0;
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

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="space-y-1">
            <span className="text-sm text-stone-500">Llegada</span>
            <input
              type="date"
              value={checkInDate}
              onChange={(event) => onChangeCheckInDate(event.target.value)}
              className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none"
            />
          </label>
          <label className="space-y-1">
            <span className="text-sm text-stone-500">Salida</span>
            <input
              type="date"
              value={checkOutDate}
              min={minCheckOutDate}
              onChange={(event) => onChangeCheckOutDate(event.target.value)}
              className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-700 outline-none"
            />
          </label>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-stone-200 bg-stone-50 p-4">
        <p className="text-sm text-stone-500">{formattedPrice} x {guests} huespedes x {nights} noches</p>
        <p className="mt-1 text-lg font-semibold text-stone-900">Total: {formattedTotal}</p>
      </div>
      <button
        type="button"
        disabled={nights <= 0}
        className="mt-4 w-full rounded-xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white"
      >
        Reservar ahora
      </button>
    </aside>
  );
}