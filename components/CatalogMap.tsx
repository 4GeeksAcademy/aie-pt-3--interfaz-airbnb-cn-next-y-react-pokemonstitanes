"use client";

import Link from "next/link";
import { divIcon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Stay } from "@/src/types";

interface CatalogMapProps {
  stays: Stay[];
}

const pinIcon = divIcon({
  className: "",
  html: '<div class="map-pin"></div>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

export function CatalogMap({ stays }: CatalogMapProps) {
  const fallbackCenter: [number, number] = [40.4168, -3.7038];

  const center: [number, number] =
    stays.length > 0
      ? [
          stays.reduce((acc, stay) => acc + stay.latitude, 0) / stays.length,
          stays.reduce((acc, stay) => acc + stay.longitude, 0) / stays.length,
        ]
      : fallbackCenter;

  return (
    <aside className="overflow-hidden rounded-[28px] border border-stone-200 bg-white md:sticky md:top-28 md:h-[calc(100vh-9rem)]">
      <MapContainer center={center} zoom={5} className="h-80 w-full md:h-full" scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {stays.map((stay) => (
          <Marker key={stay.id} position={[stay.latitude, stay.longitude]} icon={pinIcon}>
            <Popup>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-stone-900">{stay.title}</p>
                <p className="text-xs text-stone-500">{stay.location}</p>
                <Link href={`/rooms/${stay.id}`} className="text-xs font-medium text-rose-500">
                  Ver detalle
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </aside>
  );
}