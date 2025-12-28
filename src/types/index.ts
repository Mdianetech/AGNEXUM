export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  avatar?: string;
  roles: UserRole[];
  rating: number;
  reviewCount: number;
  verified: boolean;
  joinDate: string;
  companyName?: string;
  description?: string;
  website?: string;
  businessLicense?: string;
}

export type UserRole = 'farmer' | 'owner' | 'manufacturer' | 'buyer' | 'funder' | 'admin';

export interface Equipment {
  id: string;
  title: string;
  description: string;
  category: EquipmentCategory;
  type: string;
  brand: string;
  model: string;
  year: number;
  condition: 'excellent' | 'good' | 'fair';
  images: string[];
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  location: string;
  ownerId: string;
  owner: User;
  available: boolean;
  features: string[];
  rating: number;
  reviewCount: number;
  specifications: Record<string, string>;
  createdAt: string;
  status: 'active' | 'rented' | 'maintenance' | 'inactive';
  insurance?: InsuranceInfo;
  deliveryOptions: DeliveryOption[];
}

export interface InsuranceInfo {
  covered: boolean;
  provider?: string;
  coverage?: string;
  premium?: number;
}

export interface DeliveryOption {
  type: 'pickup' | 'delivery' | 'both';
  cost: number;
  radius: number; // in km
}

export type EquipmentCategory = 
  | 'tractors'
  | 'harvesters'
  | 'planting'
  | 'irrigation'
  | 'processing'
  | 'transport'
  | 'tools'
  | 'livestock';

export interface Booking {
  id: string;
  equipmentId: string;
  equipment: Equipment;
  farmerId: string;
  farmer: User;
  startDate: string;
  endDate: string;
  totalCost: number;
  commission: number;
  status: 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled' | 'disputed';
  message?: string;
  createdAt: string;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  deliveryMethod: 'pickup' | 'delivery';
  deliveryAddress?: string;
  contractUrl?: string;
}

export interface Review {
  id: string;
  bookingId: string;
  reviewerId: string;
  reviewer: User;
  targetId: string; // equipment or user ID
  targetType: 'equipment' | 'user';
  rating: number;
  comment: string;
  createdAt: string;
  helpful: number;
  reported: boolean;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  sender: User;
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: MessageAttachment[];
}

export interface MessageAttachment {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'document' | 'video';
  size: number;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: Message;
  unreadCount: number;
  type: 'rental' | 'purchase' | 'financing' | 'support';
  relatedId?: string; // booking, quote, or financing request ID
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: EquipmentCategory;
  manufacturerId: string;
  manufacturer: User;
  images: string[];
  specifications: Record<string, string>;
  price: number;
  currency: string;
  availability: 'in_stock' | 'pre_order' | 'out_of_stock';
  features: string[];
  warranty: string;
  createdAt: string;
  brochureUrl?: string;
  videoUrl?: string;
}

export interface Quote {
  id: string;
  productId: string;
  product: Product;
  buyerId: string;
  buyer: User;
  manufacturerId: string;
  manufacturer: User;
  quantity: number;
  customizations?: string;
  status: 'pending' | 'responded' | 'accepted' | 'rejected' | 'expired';
  quotedPrice?: number;
  validUntil?: string;
  notes?: string;
  createdAt: string;
  financingRequested: boolean;
}

export interface FinancingRequest {
  id: string;
  requesterId: string;
  requester: User;
  type: 'equipment_purchase' | 'equipment_rental' | 'business_loan';
  amount: number;
  currency: string;
  purpose: string;
  businessPlan?: string;
  collateral?: string;
  status: 'pending' | 'under_review' | 'approved' | 'rejected' | 'funded';
  createdAt: string;
  relatedId?: string; // quote or equipment ID
  proposals: FinancingProposal[];
}

export interface FinancingProposal {
  id: string;
  financingRequestId: string;
  funderId: string;
  funder: User;
  amount: number;
  interestRate: number;
  term: number; // in months
  conditions: string;
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn';
  createdAt: string;
}

export interface FinancingOffer {
  id: string;
  funderId: string;
  funder: User;
  title: string;
  description: string;
  type: 'loan' | 'leasing' | 'microfinance' | 'grant';
  minAmount: number;
  maxAmount: number;
  interestRate: number;
  maxTerm: number;
  requirements: string[];
  targetAudience: string[];
  active: boolean;
  createdAt: string;
}

export interface Transaction {
  id: string;
  type: 'rental_payment' | 'purchase_payment' | 'commission' | 'refund';
  amount: number;
  currency: string;
  fromUserId: string;
  toUserId: string;
  relatedId: string; // booking, quote, etc.
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  paymentMethod: 'mobile_money' | 'bank_transfer' | 'card' | 'cash';
  platformCommission: number;
  createdAt: string;
  processedAt?: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'booking' | 'message' | 'payment' | 'review' | 'system';
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  createdAt: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Analytics {
  totalUsers: number;
  totalEquipment: number;
  totalBookings: number;
  totalRevenue: number;
  monthlyGrowth: number;
  popularCategories: { category: string; count: number }[];
  topLocations: { location: string; count: number }[];
  usersByRole: { role: UserRole; count: number }[];
}

export interface SearchFilters {
  category?: EquipmentCategory;
  location?: string;
  priceRange?: { min: number; max: number };
  dateRange?: { start: string; end: string };
  brand?: string;
  condition?: string[];
  features?: string[];
  rating?: number;
  verified?: boolean;
  deliveryAvailable?: boolean;
  insuranceIncluded?: boolean;
}

export interface DashboardStats {
  farmer: {
    activeBookings: number;
    totalSpent: number;
    equipmentUsed: number;
    savings: number;
    upcomingBookings: Booking[];
    favoriteEquipment: Equipment[];
  };
  owner: {
    totalEquipment: number;
    activeRentals: number;
    monthlyRevenue: number;
    totalRentals: number;
    pendingRequests: Booking[];
    topPerformingEquipment: Equipment[];
  };
  manufacturer: {
    totalProducts: number;
    quotesReceived: number;
    monthlyLeads: number;
    conversionRate: number;
    recentQuotes: Quote[];
    popularProducts: Product[];
  };
  buyer: {
    activeQuotes: number;
    savedProducts: number;
    financingApplications: number;
    purchaseHistory: Quote[];
    recommendedProducts: Product[];
  };
  funder: {
    activeOffers: number;
    fundingRequests: number;
    totalFunded: number;
    portfolioValue: number;
    recentRequests: FinancingRequest[];
    performanceMetrics: any;
  };
}