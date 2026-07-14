interface RoomHeaderProps {
  title: string;
  rating: number;
  reviewsCount: number;
  location: string;
}

export function RoomHeader({
  title,
  rating,
  reviewsCount,
  location,
}: RoomHeaderProps) {
  return (
    <section className="space-y-2">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900">{title}</h1>
      <div className="flex flex-wrap items-center gap-3 text-sm text-stone-600">
        <span className="font-medium text-stone-800">★ {rating.toFixed(2)}</span>
        <span>{reviewsCount} resenas</span>
        <span>{location}</span>
      </div>
    </section>
  );
}