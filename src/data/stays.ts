import { Stay } from "../types";

export const mockStays: Stay[] = [
  {
    id: "1",
    title: "Villa con piscina infinita",
    location: "Ibiza, Espana",
    categoryId: "playa",
    pricePerNight: 250,
    currency: "EUR",
    rating: 4.9,
    reviewsCount: 124,
    maxGuests: 6,
    coverImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    ],
    description:
      "Una villa luminosa frente al mar con terraza privada, diseno moderno y atardeceres abiertos.",
    hostName: "Jorge",
    hostYears: 5,
    amenities: ["Wifi", "Piscina", "Aire acondicionado", "Cocina equipada"],
    latitude: 38.9067,
    longitude: 1.4206
  },
  {
    id: "2",
    title: "Cabana de autor en bosque",
    location: "Portland, Estados Unidos",
    categoryId: "cabanas",
    pricePerNight: 120,
    currency: "USD",
    rating: 4.8,
    reviewsCount: 88,
    maxGuests: 2,
    coverImage: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
      "https://images.unsplash.com/photo-1475855581690-80accde3a8a9",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    ],
    description:
      "Cabana minimalista rodeada de pinos con jacuzzi exterior y senderos privados.",
    hostName: "Carla",
    hostYears: 2,
    amenities: ["Chimenea", "Jacuzzi", "Wifi", "Mascotas permitidas"],
    latitude: 45.5152,
    longitude: -122.6784
  },
  {
    id: "3",
    title: "Loft premium en barrio historico",
    location: "Madrid, Espana",
    categoryId: "ciudad",
    pricePerNight: 190,
    currency: "EUR",
    rating: 4.7,
    reviewsCount: 203,
    maxGuests: 4,
    coverImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    ],
    description:
      "Loft de dos alturas con cocina abierta, balcon frances y acceso caminando a museos.",
    hostName: "Lucia",
    hostYears: 6,
    amenities: ["Wifi", "Lavadora", "Ascensor", "Smart TV"],
    latitude: 40.4168,
    longitude: -3.7038
  },
  {
    id: "4",
    title: "Casa en acantilado con vistas",
    location: "Madeira, Portugal",
    categoryId: "mansiones",
    pricePerNight: 320,
    currency: "EUR",
    rating: 4.95,
    reviewsCount: 67,
    maxGuests: 8,
    coverImage: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    ],
    description:
      "Propiedad de lujo con fachada de piedra, sala panoramica y piscina climatizada.",
    hostName: "Teresa",
    hostYears: 9,
    amenities: ["Piscina", "Barbacoa", "Parking", "Vista al oceano"],
    latitude: 32.7607,
    longitude: -16.9595
  },
  {
    id: "5",
    title: "Refugio alpino con sauna",
    location: "Zermatt, Suiza",
    categoryId: "montana",
    pricePerNight: 280,
    currency: "CHF",
    rating: 4.85,
    reviewsCount: 142,
    maxGuests: 5,
    coverImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6"
    ],
    description:
      "Chalet de madera con vistas a la montana, sauna privada y zona de fuego exterior.",
    hostName: "Nora",
    hostYears: 4,
    amenities: ["Sauna", "Wifi", "Calefaccion", "Guardaesquis"],
    latitude: 46.0207,
    longitude: 7.7491
  },
  {
    id: "6",
    title: "Departamento trendy con terraza",
    location: "Ciudad de Mexico, Mexico",
    categoryId: "tendencias",
    pricePerNight: 135,
    currency: "MXN",
    rating: 4.65,
    reviewsCount: 95,
    maxGuests: 3,
    coverImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    ],
    description:
      "Espacio contemporaneo en zona gastronomica con terraza privada y rooftop comun.",
    hostName: "Rene",
    hostYears: 3,
    amenities: ["Rooftop", "Wifi", "Zona de trabajo", "Aire acondicionado"],
    latitude: 19.4326,
    longitude: -99.1332
  }
];
