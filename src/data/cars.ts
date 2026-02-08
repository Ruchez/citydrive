// Unused imports removed - images now loaded from Supabase

export interface Car {
    id: number;
    name: string;
    price: string;
    rawPrice: number;
    specs: string;
    img: string;
    year: number;
    location: string;
    availability: 'Available' | 'Sold' | 'Reserved';
    drive: string;
    mileage: string;
    engineSize: string;
    fuelType: string;
    horsePower: string;
    transmission: string;
    torque: string;
    aspiration: string;
    acceleration: string;
    description: string;
    sellerType: 'Private Seller' | 'Verified Dealer';
    conditionScore: number;
    images: string[];
}

// Empty array - will be populated from backend/database
export const cars: Car[] = [];

// Empty array - will be populated from backend/database
export const allCars: Car[] = [];
