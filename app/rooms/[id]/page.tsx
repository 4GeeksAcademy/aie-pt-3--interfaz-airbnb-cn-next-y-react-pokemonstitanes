"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { BookingPanel } from "@/components/BookingPanel";
import { HostInfo } from "@/components/HostInfo";
import { Navbar } from "@/components/Navbar";
import { RoomAmenities } from "@/components/RoomAmenities";
import { RoomGallery } from "@/components/RoomGallery";
import { RoomHeader } from "@/components/RoomHeader";
import { mockStays } from "@/src/data/stays";
import { Stay } from "@/src/types";

export default function RoomDetailPage() {
  const params = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [room, setRoom] = useState<Stay | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [guests, setGuests] = useState(1);
  const [nights, setNights] = useState(1);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const matchedRoom = mockStays.find((item) => item.id === params.id) ?? null;
      setRoom(matchedRoom);
      setGuests(matchedRoom ? Math.min(2, matchedRoom.maxGuests) : 1);
      setIsLoading(false);
    }, 1000);

    return () => window.clearTimeout(timeoutId);
  }, [params.id]);

  const totalImages = room?.images.length ?? 0;
  const safeImageIndex = useMemo(() => {
    if (totalImages === 0) {
      return 0;
    }
    return activeImageIndex % totalImages;
  }, [activeImageIndex, totalImages]);

  const goToPreviousImage = () => {
    if (totalImages <= 1) {
      return;
    }
    setActiveImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const goToNextImage = () => {
    if (totalImages <= 1) {
      return;
    }
    setActiveImageIndex((prev) => (prev + 1) % totalImages);
  };

  if (isLoading) {
    return (
      <div className="min-h-full bg-stone-50">
        <Navbar searchTerm="" onSearchChange={() => undefined} />
        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="flex min-h-80 items-center justify-center rounded-[32px] border border-dashed border-stone-300 bg-white">
            <p className="text-sm text-stone-500">Cargando habitacion...</p>
          </div>
        </section>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-full bg-stone-50">
        <Navbar searchTerm="" onSearchChange={() => undefined} />
        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="rounded-[32px] border border-stone-200 bg-white p-10 text-center">
            <h1 className="text-2xl font-semibold text-stone-900">Habitacion no encontrada</h1>
            <Link href="/catalog" className="mt-4 inline-block rounded-full bg-stone-900 px-5 py-2 text-sm text-white">
              Volver al catalogo
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-stone-50">
      <Navbar searchTerm="" onSearchChange={() => undefined} />
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-6 md:px-6 md:py-8">
        <Link href="/catalog" className="inline-flex rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700">
          Volver al catalogo
        </Link>

        <RoomGallery
          images={room.images}
          currentIndex={safeImageIndex}
          onPrevious={goToPreviousImage}
          onNext={goToNextImage}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6">
            <RoomHeader
              title={room.title}
              rating={room.rating}
              reviewsCount={room.reviewsCount}
              location={room.location}
            />
            <HostInfo hostName={room.hostName} hostYears={room.hostYears} />
            <section className="space-y-2 rounded-2xl border border-stone-200 bg-white p-4">
              <h2 className="text-xl font-semibold text-stone-900">Descripcion de la habitacion</h2>
              <p className="text-sm leading-7 text-stone-600">{room.description}</p>
            </section>
            <RoomAmenities amenities={room.amenities} />
          </div>

          <BookingPanel
            pricePerNight={room.pricePerNight}
            currency={room.currency}
            guests={guests}
            nights={nights}
            maxGuests={room.maxGuests}
            onChangeGuests={setGuests}
            onChangeNights={setNights}
          />
        </div>
      </section>
    </div>
  );
}