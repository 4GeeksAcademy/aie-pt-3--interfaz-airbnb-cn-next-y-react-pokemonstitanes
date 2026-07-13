import { Stay } from '../types';

export const mockStays: Stay[] = [
  {
    id: "1",
    title: "Villa de Lujo frente al Mar",
    location: "Ibiza, España",
    categoryId: "playa",
    pricePerNight: 250,
    currency: "EUR",
    rating: 4.9,
    reviewsCount: 124,
    maxGuests: 6,
    coverImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef", // Url de ejemplo
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ],
    description: "Una espectacular villa con piscina infinita y vistas directas al mar Mediterráneo...",
    hostName: "Jorge",
    hostYears: 5,
    amenities: ["WiFi", "Piscina", "Aire Acondicionado", "Cocina Equipada"]
  },
  {
    id: "2",
    title: "Cabaña Moderna en el Bosque",
    location: "Portland, EE.UU.",
    categoryId: "cabanas",
    pricePerNight: 120,
    currency: "USD",
    rating: 4.75,
    reviewsCount: 88,
    maxGuests: 2,
    coverImage: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739"],
    description: "Desconecta de la ciudad en esta increíble cabaña de diseño rodeada de naturaleza...",
    hostName: "Carla",
    hostYears: 2,
    amenities: ["Chimenea", "Jacuzzi", "WiFi", "Pet Friendly"]
  }
];