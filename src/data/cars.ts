import landCruiserImg from '../assets/land_cruiser.jpg'
import hondaFitImg from '../assets/honda_fit.jpg'

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

export const cars: Car[] = [
    {
        id: 1,
        name: 'Toyota Land Cruiser V8',
        rawPrice: 12500000,
        price: 'KES 12,500,000',
        specs: 'Toyota • Diesel • Automatic • 2018',
        img: landCruiserImg,
        year: 2018,
        location: 'Nairobi, Kenya',
        availability: 'Available',
        drive: '4WD',
        mileage: '45,000 KM',
        engineSize: '4500 CC',
        fuelType: 'Diesel',
        horsePower: '261 Hp',
        transmission: 'Automatic',
        torque: '650 Nm',
        aspiration: 'Twin Turbo',
        acceleration: '8.9 Secs',
        description: 'The Toyota Land Cruiser V8 is the pinnacle of off-road luxury and reliability. Built to conquer any terrain while providing a first-class cabin experience, this unit features a robust diesel V8 engine, advanced 4WD capabilities, and a spacious, premium interior. Perfect for both executive city driving and upcountry adventures.',
        sellerType: 'Verified Dealer',
        conditionScore: 9.5,
        images: [landCruiserImg, 'https://images.unsplash.com/photo-1594502184342-28ef3795e2c8?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1594502184342-28ef3795e2c8?auto=format&fit=crop&q=80&w=800']
    },
    {
        id: 2,
        name: 'Range Rover Sport',
        rawPrice: 8900000,
        price: 'KES 8,900,000',
        specs: 'Land Rover • Petrol • Automatic • 2017',
        img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
        year: 2017,
        location: 'Mombasa, Kenya',
        availability: 'Available',
        drive: 'AWD',
        mileage: '62,000 KM',
        engineSize: '3000 CC',
        fuelType: 'Petrol',
        horsePower: '340 Hp',
        transmission: 'Automatic',
        torque: '450 Nm',
        aspiration: 'Supercharged',
        acceleration: '7.2 Secs',
        description: 'A perfect blend of dynamic sports performance and sophisticated luxury. This Range Rover Sport delivers an engaging drive with its supercharged engine and agile handling, all while wrapping you in a tech-forward, leather-clad interior.',
        sellerType: 'Private Seller',
        conditionScore: 9.0,
        images: ['https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800']
    },
    {
        id: 3,
        name: 'Mercedes-Benz GLE 350',
        rawPrice: 7200000,
        price: 'KES 7,200,000',
        specs: 'Mercedes • Diesel • Automatic • 2016',
        img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
        year: 2016,
        location: 'Nairobi, Kenya',
        availability: 'Available',
        drive: 'AWD',
        mileage: '58,000 KM',
        engineSize: '3000 CC',
        fuelType: 'Diesel',
        horsePower: '255 Hp',
        transmission: 'Automatic',
        torque: '620 Nm',
        aspiration: 'Turbocharged',
        acceleration: '7.6 Secs',
        description: 'The Mercedes-Benz GLE 350 offers a commanding road presence with the comfort and safety you expect from the brand. Featuring a torquey diesel engine and 4MATIC all-wheel drive, it is an ideal family SUV for long-distance cruising.',
        sellerType: 'Verified Dealer',
        conditionScore: 9.2,
        images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800']
    },
    {
        id: 4,
        name: 'BMW X5 xDrive',
        rawPrice: 6800000,
        price: 'KES 6,800,000',
        specs: 'BMW • Petrol • Automatic • 2015',
        img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
        year: 2015,
        location: 'Nairobi, Kenya',
        availability: 'Available',
        drive: 'AWD',
        mileage: '70,000 KM',
        engineSize: '3000 CC',
        fuelType: 'Petrol',
        horsePower: '300 Hp',
        transmission: 'Automatic',
        torque: '400 Nm',
        aspiration: 'Turbocharged',
        acceleration: '6.5 Secs',
        description: 'The BMW X5 defines the Sports Activity Vehicle segment. With its driver-focused cockpit, sharp handling, and powerful inline-6 engine, it rewards the driver while providing ample space and luxury for passengers.',
        sellerType: 'Private Seller',
        conditionScore: 8.8,
        images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800']
    },
    {
        id: 5,
        name: 'Subaru Forester XT',
        rawPrice: 3200000,
        price: 'KES 3,200,000',
        specs: 'Subaru • Petrol • AWD • 2017',
        img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
        year: 2017,
        location: 'Nakuru, Kenya',
        availability: 'Available',
        drive: 'AWD',
        mileage: '85,000 KM',
        engineSize: '2000 CC',
        fuelType: 'Petrol',
        horsePower: '250 Hp',
        transmission: 'CVT',
        torque: '350 Nm',
        aspiration: 'Turbocharged',
        acceleration: '7.5 Secs',
        description: 'The Forester XT adds a turbocharged punch to Subaru\'s legendary practicality. With Symmetrical All-Wheel Drive and X-MODE, it is ready for any weather or road condition, making it a favorite for Kenyan adventures.',
        sellerType: 'Private Seller',
        conditionScore: 8.5,
        images: ['https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800']
    },
    {
        id: 6,
        name: 'Volkswagen Tiguan',
        rawPrice: 4500000,
        price: 'KES 4,500,000',
        specs: 'VW • Petrol • DSG • 2019',
        img: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800',
        year: 2019,
        location: 'Nairobi, Kenya',
        availability: 'Available',
        drive: 'AWD',
        mileage: '40,000 KM',
        engineSize: '2000 CC',
        fuelType: 'Petrol',
        horsePower: '184 Hp',
        transmission: 'DSG Automatic',
        torque: '300 Nm',
        aspiration: 'Turbocharged',
        acceleration: '8.2 Secs',
        description: 'German engineering meets compact SUV versatility. The Tiguan offers a refined ride, crisp styling, and a high-tech cabin featuring the Digital Cockpit.',
        sellerType: 'Verified Dealer',
        conditionScore: 9.3,
        images: ['https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800']
    },
    {
        id: 7,
        name: 'Toyota Vitz (Grade F)',
        rawPrice: 450000,
        price: 'KES 450,000',
        specs: 'Toyota • Petrol • Automatic • 2012',
        img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
        year: 2012,
        location: 'Nairobi, Kenya',
        availability: 'Available',
        drive: '2WD',
        mileage: '95,000 KM',
        engineSize: '1000 CC',
        fuelType: 'Petrol',
        horsePower: '68 Hp',
        transmission: 'Automatic',
        torque: '90 Nm',
        aspiration: 'Natural',
        acceleration: '14.0 Secs',
        description: 'The ultimate reliable city runabout. Excellent fuel economy, compact dimensions for easy parking, and Toyota\'s legendary durability make this Vitz an ideal first car or daily commuter.',
        sellerType: 'Private Seller',
        conditionScore: 8.0,
        images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800']
    },
    {
        id: 10,
        name: 'Mazda Demio',
        rawPrice: 650000,
        price: 'KES 650,000',
        specs: 'Mazda • Petrol • Automatic • 2014',
        img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800',
        year: 2014,
        location: 'Nairobi, Kenya',
        availability: 'Available',
        drive: '2WD',
        mileage: '88,000 KM',
        engineSize: '1300 CC',
        fuelType: 'Petrol',
        horsePower: '90 Hp',
        transmission: 'Automatic',
        torque: '120 Nm',
        aspiration: 'Natural',
        acceleration: '11.5 Secs',
        description: 'Stylish and fun to drive, the Mazda Demio stands out in the hatchback segment with its KODO design language and SkyActiv technology for improved efficiency.',
        sellerType: 'Verified Dealer',
        conditionScore: 8.7,
        images: ['https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800']
    },
    {
        id: 11,
        name: 'Honda Fit (Hybrid)',
        rawPrice: 950000,
        price: 'KES 950,000',
        specs: 'Honda • Hybrid • Automatic • 2016',
        img: hondaFitImg,
        year: 2016,
        location: 'Mombasa, Kenya',
        availability: 'Available',
        drive: '2WD',
        mileage: '75,000 KM',
        engineSize: '1500 CC',
        fuelType: 'Petrol Hybrid',
        horsePower: '135 Hp',
        transmission: 'DCT Automatic',
        torque: '170 Nm',
        aspiration: 'Natural',
        acceleration: '8.5 Secs',
        description: 'Maximize your efficiency with the Honda Fit Hybrid. Featuring Honda\'s clever Magic Seats for unmatched versatility and a potent hybrid powertrain that delivers impressive fuel economy without sacrificing performance.',
        sellerType: 'Verified Dealer',
        conditionScore: 9.1,
        images: [hondaFitImg]
    },
    // Special placeholder for the exact car requested in prompt as ID 12 (Toyota Crown Hybrid)
    {
        id: 12,
        name: 'Toyota Crown Hybrid',
        rawPrice: 1899999,
        price: 'KES 1,899,999',
        specs: 'Toyota • Hybrid • Automatic • 2014',
        img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800',
        year: 2014,
        location: 'Nairobi, Kenya',
        availability: 'Available',
        drive: '2WD',
        mileage: '142,000 KM',
        engineSize: '2500 CC',
        fuelType: 'Petrol Hybrid',
        horsePower: '220 Hp',
        transmission: 'Automatic',
        torque: '270 Nm',
        aspiration: 'Natural',
        acceleration: '7.8 Secs',
        description: '#Paidlisting Premium Japanese Domestic Market (JDM) executive sedan known for its blend of high-end luxury, rear-wheel-drive performance, and fuel efficiency. It is primarily offered in two main styles: the formal Royal Saloon or the sportier Athlete.',
        sellerType: 'Private Seller',
        conditionScore: 8.5,
        images: [
            'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800', /* Front */
            'https://images.unsplash.com/photo-1627453308333-e57585db8b0f?auto=format&fit=crop&q=80&w=800', /* Interior/Detail */
            'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800', /* Side/Rear */
            'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=800', /* Interior */
        ]
    }
];
