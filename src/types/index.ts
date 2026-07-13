export interface Stay {
  id: string;
  title: string;
  location: string;
  categoryId: string;
  pricePerNight: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  maxGuests: number;
  coverImage: string;
  images: string[];
  description: string;
  hostName: string;
  hostYears: number;
  amenities: string[];
}

export interface CategoryItem {
  id: string;
  label: string;
}