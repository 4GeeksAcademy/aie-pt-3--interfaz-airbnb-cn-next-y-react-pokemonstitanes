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
      className="overflow-hidden rounded-[28px] bg-white shadow-sm shadow-stone-200/80 transition hover:-translate-y-0.5"
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={stay.coverImage}
          alt={stay.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-stone-900">{stay.title}</h2>
            <p className="text-sm text-stone-500">{stay.location}</p>
          </div>
          <p className="text-sm font-medium text-stone-700">★ {stay.rating}</p>
        </div>
        <p className="text-sm text-stone-600">
          <span className="font-semibold text-stone-900">{formattedPrice}</span> / noche
        </p>
      </div>
    </Link>
  );
}