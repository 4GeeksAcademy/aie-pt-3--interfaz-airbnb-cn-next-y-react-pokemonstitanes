import Image from "next/image";

interface RoomGalleryProps {
  images: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function RoomGallery({
  images,
  currentIndex,
  onPrevious,
  onNext,
}: RoomGalleryProps) {
  return (
    <section className="relative overflow-hidden rounded-[28px] bg-stone-100">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          fill
          sizes="(min-width: 768px) 66vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
        <button
          type="button"
          onClick={onPrevious}
          className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-stone-800"
        >
          Anterior
        </button>
        <p className="rounded-full bg-black/60 px-3 py-1 text-xs text-white">
          {currentIndex + 1} / {images.length}
        </p>
        <button
          type="button"
          onClick={onNext}
          className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-stone-800"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
}