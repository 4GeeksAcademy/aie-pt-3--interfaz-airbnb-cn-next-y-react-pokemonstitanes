import { AmenityIcon } from "@/components/AmenityIcon";

interface RoomAmenitiesProps {
  amenities: string[];
}

export function RoomAmenities({ amenities }: RoomAmenitiesProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-stone-900">Servicios</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {amenities.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-3"
          >
            <AmenityIcon amenity={item} />
            <span className="text-sm text-stone-700">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}