export type ScreenType = 'home' | 'category' | 'product-detail' | 'cart' | 'checkout' | 'success-dashboard';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subCategory?: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  images?: string[];
  description: string;
  features?: string[];
  specifications?: Record<string, string>;
  colors?: { name: string; hex: string; label: string }[];
  storageOptions?: string[];
  ramOptions?: string[];
  emiStartsAt?: number;
  isDeal?: boolean;
  isRecommended?: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedStorage?: string;
  selectedRam?: string;
}

export interface Address {
  id: string;
  name: string;
  phone: string;
  addressLine: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  isDefault?: boolean;
}

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
  color?: string;
  storage?: string;
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  status: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
  deliveryType: 'Standard' | 'Express';
  paymentMethod: 'UPI' | 'Card' | 'Net Banking' | 'COD';
  address: Address;
  estimatedDelivery: string;
}

export interface FilterState {
  brand: string[];
  priceRange: [number, number];
  minRating: number;
  minDiscount: number;
  inStockOnly: boolean;
  searchQuery: string;
  sortBy: 'popularity' | 'price-low' | 'price-high' | 'newest' | 'rating';
}
