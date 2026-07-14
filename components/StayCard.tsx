import Image from "next/image";
import Link from "next/link";
import { Stay } from "@/src/types";

interface StayCardProps {
  stay: Stay;
}

export function StayCard({ stay }: StayCardProps) {
  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: stay.currency,
    maximumFractionDigits: 0,
  }).format(stay.pricePerNight);

  return (
    <Link
      href={`/rooms/${stay.id}`}
      className="group overflow-hidden rounded-[24px] bg-white shadow-sm shadow-stone-200/80 transition hover:-translate-y-0.5"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={stay.coverImage}
          alt={stay.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-stone-700">
          Huespedes: {stay.maxGuests}
        </div>
        <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-xs text-stone-700">
          +
        </div>
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-stone-900">{stay.title}</h2>
            <p className="text-sm text-stone-500">{stay.location}</p>
          </div>
          <p className="text-sm font-medium text-stone-700">★ {stay.rating.toFixed(2)}</p>
        </div>
        <p className="text-sm text-stone-500">{stay.reviewsCount} evaluaciones</p>
        <p className="text-sm text-stone-600">
          <span className="font-semibold text-stone-900">{formattedPrice}</span> / noche
        </p>
      </div>
    </Link>
  );
}