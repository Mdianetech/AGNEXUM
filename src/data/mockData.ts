import { User, Equipment, Booking, Review, Product, Quote, FinancingRequest, FinancingOffer, Transaction } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Mamadou Diallo',
    email: 'mamadou@example.com',
    phone: '+224 621 123 456',
    location: 'Conakry, Guinée',
    roles: ['farmer'],
    rating: 4.8,
    reviewCount: 15,
    verified: true,
    joinDate: '2024-01-15',
    description: 'Agriculteur expérimenté spécialisé dans la culture du riz et des légumes.',
  },
  {
    id: '2',
    name: 'Fatima Sylla',
    email: 'fatima@example.com',
    phone: '+224 664 789 012',
    location: 'Kindia, Guinée',
    roles: ['owner'],
    rating: 4.9,
    reviewCount: 32,
    verified: true,
    joinDate: '2023-08-20',
    description: 'Propriétaire d\'une flotte de matériel agricole moderne.',
  },
  {
    id: '3',
    name: 'Ibrahim Koné',
    email: 'ibrahim@example.com',
    phone: '+224 655 345 678',
    location: 'Labé, Guinée',
    roles: ['farmer', 'owner'],
    rating: 4.7,
    reviewCount: 8,
    verified: true,
    joinDate: '2024-03-10',
    description: 'Agriculteur et propriétaire d\'équipements.',
  },
  {
    id: '4',
    name: 'Tracteurs Guinée SARL',
    email: 'contact@tracteursguinee.com',
    phone: '+224 622 555 000',
    location: 'Conakry, Guinée',
    roles: ['manufacturer'],
    rating: 4.6,
    reviewCount: 24,
    verified: true,
    joinDate: '2023-05-15',
    companyName: 'Tracteurs Guinée SARL',
    description: 'Distributeur officiel de tracteurs et équipements agricoles.',
    website: 'https://tracteursguinee.com',
  },
  {
    id: '5',
    name: 'Banque Agricole de Guinée',
    email: 'agri@bag.gn',
    phone: '+224 628 100 200',
    location: 'Conakry, Guinée',
    roles: ['funder'],
    rating: 4.4,
    reviewCount: 156,
    verified: true,
    joinDate: '2023-01-10',
    companyName: 'Banque Agricole de Guinée',
    description: 'Institution financière spécialisée dans le financement agricole.',
    website: 'https://bag.gn',
  },
  {
    id: '6',
    name: 'Coopérative Fouta Djallon',
    email: 'coop@foutadjallon.org',
    phone: '+224 655 777 888',
    location: 'Labé, Guinée',
    roles: ['buyer'],
    rating: 4.5,
    reviewCount: 12,
    verified: true,
    joinDate: '2024-02-20',
    companyName: 'Coopérative Fouta Djallon',
    description: 'Coopérative de 200 agriculteurs.',
  },
];

export const mockEquipment: Equipment[] = [
  {
    id: '1',
    title: 'Tracteur John Deere 5055E',
    description: 'Tracteur polyvalent de 55 CV, parfait pour les moyennes exploitations.',
    category: 'tractors',
    type: 'Tracteur',
    brand: 'John Deere',
    model: '5055E',
    year: 2020,
    condition: 'excellent',
    images: [
      'https://images.pexels.com/photos/158829/tractor-agriculture-farming-158829.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
    ],
    dailyRate: 50000,
    weeklyRate: 300000,
    monthlyRate: 1000000,
    location: 'Kindia, Guinée',
    ownerId: '2',
    owner: mockUsers[1],
    available: true,
    features: ['4WD', 'Cabine climatisée', 'Relevage hydraulique'],
    rating: 4.8,
    reviewCount: 12,
    specifications: {
      'Puissance': '55 CV',
      'Transmission': 'Hydrostatic',
      'Poids': '2.5 tonnes',
    },
    createdAt: '2024-01-20',
    status: 'active',
    insurance: {
      covered: true,
      provider: 'Assurance Agricole Guinée',
      coverage: 'Dommages, vol, responsabilité civile',
      premium: 5000
    },
    deliveryOptions: [
      { type: 'both', cost: 25000, radius: 50 }
    ]
  },
  {
    id: '2',
    title: 'Moissonneuse-batteuse Massey Ferguson',
    description: 'Moissonneuse-batteuse performante pour la récolte de céréales.',
    category: 'harvesters',
    type: 'Moissonneuse-batteuse',
    brand: 'Massey Ferguson',
    model: 'MF 7370',
    year: 2019,
    condition: 'good',
    images: [
      'https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
    ],
    dailyRate: 120000,
    weeklyRate: 750000,
    monthlyRate: 2500000,
    location: 'Conakry, Guinée',
    ownerId: '2',
    owner: mockUsers[1],
    available: true,
    features: ['Batteur axial', 'Cabine panoramique', 'GPS intégré'],
    rating: 4.6,
    reviewCount: 8,
    specifications: {
      'Largeur de coupe': '6.1 m',
      'Capacité trémie': '9000 L',
      'Puissance moteur': '300 CV',
    },
    createdAt: '2024-02-10',
    status: 'active',
    insurance: {
      covered: true,
      provider: 'Assurance Agricole Guinée',
      coverage: 'Tous risques',
      premium: 15000
    },
    deliveryOptions: [
      { type: 'delivery', cost: 50000, radius: 100 }
    ]
  },
  {
    id: '3',
    title: 'Semoir de précision Kuhn',
    description: 'Semoir pneumatique de précision pour cultures en ligne.',
    category: 'planting',
    type: 'Semoir',
    brand: 'Kuhn',
    model: 'Planter 3',
    year: 2021,
    condition: 'excellent',
    images: [
      'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/158829/tractor-agriculture-farming-158829.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
    ],
    dailyRate: 35000,
    weeklyRate: 210000,
    monthlyRate: 700000,
    location: 'Labé, Guinée',
    ownerId: '3',
    owner: mockUsers[2],
    available: true,
    features: ['Distribution pneumatique', '12 rangs', 'Fertilisation localisée'],
    rating: 4.9,
    reviewCount: 5,
    specifications: {
      'Nombre de rangs': '12',
      'Écartement': '75 cm',
      'Capacité trémie': '2500 L',
    },
    createdAt: '2024-03-05',
    status: 'active',
    insurance: {
      covered: false
    },
    deliveryOptions: [
      { type: 'both', cost: 20000, radius: 30 }
    ]
  },
  {
    id: '4',
    title: 'Charrue réversible Lemken',
    description: 'Charrue réversible 4 corps pour labour profond et retournement optimal.',
    category: 'tools',
    type: 'Charrue',
    brand: 'Lemken',
    model: 'Opal 140',
    year: 2020,
    condition: 'good',
    images: [
      'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/158829/tractor-agriculture-farming-158829.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
    ],
    dailyRate: 25000,
    weeklyRate: 150000,
    monthlyRate: 500000,
    location: 'Mamou, Guinée',
    ownerId: '2',
    owner: mockUsers[1],
    available: true,
    features: ['4 corps', 'Réversible', 'Réglage hydraulique'],
    rating: 4.5,
    reviewCount: 7,
    specifications: {
      'Nombre de corps': '4',
      'Largeur de travail': '1.6 m',
      'Profondeur': '30 cm',
    },
    createdAt: '2024-02-15',
    status: 'active',
    insurance: {
      covered: true,
      provider: 'Assurance Agricole Guinée',
      coverage: 'Dommages et vol',
      premium: 3000
    },
    deliveryOptions: [
      { type: 'both', cost: 15000, radius: 40 }
    ]
  },
  {
    id: '5',
    title: 'Pulvérisateur traîné Amazone',
    description: 'Pulvérisateur de 1000L pour traitement phytosanitaire efficace.',
    category: 'tools',
    type: 'Pulvérisateur',
    brand: 'Amazone',
    model: 'UF 1000',
    year: 2021,
    condition: 'excellent',
    images: [
      'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
    ],
    dailyRate: 40000,
    weeklyRate: 240000,
    monthlyRate: 800000,
    location: 'Boké, Guinée',
    ownerId: '3',
    owner: mockUsers[2],
    available: true,
    features: ['Cuve 1000L', 'Rampe 12m', 'Régulation électronique'],
    rating: 4.7,
    reviewCount: 9,
    specifications: {
      'Capacité cuve': '1000 L',
      'Largeur rampe': '12 m',
      'Débit': '200 L/min',
    },
    createdAt: '2024-03-01',
    status: 'active',
    insurance: {
      covered: true,
      provider: 'Assurance Agricole Guinée',
      coverage: 'Tous risques',
      premium: 8000
    },
    deliveryOptions: [
      { type: 'delivery', cost: 30000, radius: 60 }
    ]
  },
  {
    id: '6',
    title: 'Faucheuse rotative Kuhn',
    description: 'Faucheuse rotative pour fauche de prairies et fourrages.',
    category: 'harvesters',
    type: 'Faucheuse',
    brand: 'Kuhn',
    model: 'FC 283',
    year: 2019,
    condition: 'good',
    images: [
      'https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
    ],
    dailyRate: 30000,
    weeklyRate: 180000,
    monthlyRate: 600000,
    location: 'Faranah, Guinée',
    ownerId: '2',
    owner: mockUsers[1],
    available: true,
    features: ['Largeur 2.8m', 'Suspension', 'Conditionneur'],
    rating: 4.4,
    reviewCount: 6,
    specifications: {
      'Largeur de coupe': '2.8 m',
      'Nombre de disques': '6',
      'Vitesse de travail': '15 km/h',
    },
    createdAt: '2024-01-25',
    status: 'active',
    insurance: {
      covered: true,
      provider: 'Assurance Agricole Guinée',
      coverage: 'Dommages',
      premium: 4000
    },
    deliveryOptions: [
      { type: 'both', cost: 20000, radius: 35 }
    ]
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Tracteur New Holland T4.75',
    description: 'Tracteur compact et polyvalent, idéal pour les exploitations moyennes.',
    category: 'tractors',
    manufacturerId: '4',
    manufacturer: mockUsers[3],
    images: [
      'https://images.pexels.com/photos/158829/tractor-agriculture-farming-158829.jpeg?w=400&h=300&fit=crop&auto=compress&cs=tinysrgb',
    ],
    specifications: {
      'Puissance': '75 CV',
      'Transmission': 'Mécanique 12x12',
      'Poids': '3.2 tonnes',
    },
    price: 25000000,
    currency: 'GNF',
    availability: 'in_stock',
    features: ['4WD', 'Cabine ROPS', 'Relevage hydraulique'],
    warranty: '2 ans pièces et main d\'œuvre',
    createdAt: '2024-01-15',
  }
];

export const mockBookings: Booking[] = [
  {
    id: '1',
    equipmentId: '1',
    equipment: mockEquipment[0],
    farmerId: '1',
    farmer: mockUsers[0],
    startDate: '2024-12-25',
    endDate: '2024-12-31',
    totalCost: 300000,
    commission: 24000,
    status: 'confirmed',
    message: 'J\'ai besoin du tracteur pour préparer mes champs',
    createdAt: '2024-12-20',
    paymentStatus: 'paid',
    deliveryMethod: 'delivery',
    deliveryAddress: 'Ferme Diallo, Route de Dubréka, Conakry'
  }
];

export const mockQuotes: Quote[] = [
  {
    id: '1',
    productId: '1',
    product: mockProducts[0],
    buyerId: '6',
    buyer: mockUsers[5],
    manufacturerId: '4',
    manufacturer: mockUsers[3],
    quantity: 3,
    customizations: 'Cabine climatisée, pneus larges',
    status: 'responded',
    quotedPrice: 72000000,
    validUntil: '2025-01-31',
    notes: 'Prix spécial pour commande groupée.',
    createdAt: '2024-12-15',
    financingRequested: true
  }
];

export const mockFinancingRequests: FinancingRequest[] = [
  {
    id: '1',
    requesterId: '6',
    requester: mockUsers[5],
    type: 'equipment_purchase',
    amount: 72000000,
    currency: 'GNF',
    purpose: 'Acquisition de 3 tracteurs pour moderniser la coopérative',
    businessPlan: 'Plan de développement sur 5 ans',
    status: 'under_review',
    createdAt: '2024-12-16',
    relatedId: '1',
    proposals: []
  }
];

export const mockFinancingOffers: FinancingOffer[] = [
  {
    id: '1',
    funderId: '5',
    funder: mockUsers[4],
    title: 'Prêt Équipement Agricole',
    description: 'Financement jusqu\'à 80% du coût d\'acquisition d\'équipements agricoles neufs',
    type: 'loan',
    minAmount: 5000000,
    maxAmount: 100000000,
    interestRate: 12,
    maxTerm: 60,
    requirements: ['Garantie personnelle', 'Business plan', 'Apport personnel 20%'],
    targetAudience: ['Agriculteurs', 'Coopératives', 'Entreprises agricoles'],
    active: true,
    createdAt: '2024-01-01'
  }
];

export const mockReviews: Review[] = [
  {
    id: '1',
    bookingId: '1',
    reviewerId: '1',
    reviewer: mockUsers[0],
    targetId: '1',
    targetType: 'equipment',
    rating: 5,
    comment: 'Excellent tracteur, très bien entretenu.',
    createdAt: '2024-11-15',
    helpful: 8,
    reported: false
  }
];

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'rental_payment',
    amount: 300000,
    currency: 'GNF',
    fromUserId: '1',
    toUserId: '2',
    relatedId: '1',
    status: 'completed',
    paymentMethod: 'mobile_money',
    platformCommission: 24000,
    createdAt: '2024-12-20',
    processedAt: '2024-12-20'
  }
];