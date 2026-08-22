import React, { createContext, useContext, useState, useEffect } from 'react';
import { ScreenType, Product, CartItem, Address, Order, FilterState } from '../types';
import { PRODUCTS, INITIAL_ADDRESSES, INITIAL_ORDERS } from '../data/products';

interface ShopContextType {
  currentScreen: ScreenType;
  setCurrentScreen: (screen: ScreenType) => void;
  selectedProductId: string;
  setSelectedProductId: (id: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedSubCategory: string;
  setSelectedSubCategory: (subCat: string) => void;
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, color?: string, storage?: string, ram?: string) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  savedForLater: CartItem[];
  saveForLater: (productId: string) => void;
  moveToCartFromSaved: (productId: string) => void;
  removeSavedForLater: (productId: string) => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  addresses: Address[];
  selectedAddress: Address;
  setSelectedAddress: (addr: Address) => void;
  orders: Order[];
  latestPlacedOrder: Order | null;
  placeOrder: (deliveryType: 'Standard' | 'Express', paymentMethod: 'UPI' | 'Card' | 'Net Banking' | 'COD') => Order;
  trackingOrder: Order | null;
  setTrackingOrder: (order: Order | null) => void;
  filterState: FilterState;
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  navigateToProduct: (productId: string) => void;
  navigateToCategory: (category: string, subCategory?: string) => void;
  cartSubtotal: number;
  cartDiscount: number;
  cartDeliveryCharges: number;
  cartTotalAmount: number;
  cartTotalCount: number;
  pincodeChecked: { pincode: string; message: string; valid: boolean } | null;
  checkPincode: (pincode: string) => void;
}

const initialFilters: FilterState = {
  brand: [],
  priceRange: [0, 200000],
  minRating: 0,
  minDiscount: 0,
  inStockOnly: false,
  searchQuery: '',
  sortBy: 'popularity'
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('samsung-galaxy-s25-5g');
  const [selectedCategory, setSelectedCategory] = useState<string>('Mobiles');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('Mobiles & Smartphones');

  // Initial cart seeded with the exact 3 items from Mockup 4
  const [cart, setCart] = useState<CartItem[]>(() => {
    const s25 = PRODUCTS.find(p => p.id === 'samsung-galaxy-s25-5g');
    const sony = PRODUCTS.find(p => p.id === 'sony-wh-1000xm5');
    const nike = PRODUCTS.find(p => p.id === 'nike-air-max');
    const items: CartItem[] = [];
    if (s25) items.push({ product: s25, quantity: 1, selectedColor: 'Phantom Black', selectedStorage: '256GB' });
    if (sony) items.push({ product: sony, quantity: 1, selectedColor: 'Platinum Silver' });
    if (nike) items.push({ product: nike, quantity: 1, selectedColor: 'White/Red', selectedStorage: 'Size 9 (UK)' });
    return items;
  });

  const [savedForLater, setSavedForLater] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>(['samsung-galaxy-s25-5g']);
  const [addresses, setAddresses] = useState<Address[]>(INITIAL_ADDRESSES);
  const [selectedAddress, setSelectedAddress] = useState<Address>(INITIAL_ADDRESSES[0]);
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [latestPlacedOrder, setLatestPlacedOrder] = useState<Order | null>(null);
  const [trackingOrder, setTrackingOrder] = useState<Order | null>(null);
  const [filterState, setFilterState] = useState<FilterState>(initialFilters);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [pincodeChecked, setPincodeChecked] = useState<{ pincode: string; message: string; valid: boolean } | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const navigateToProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentScreen('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCategory = (category: string, subCategory?: string) => {
    setSelectedCategory(category);
    if (subCategory) setSelectedSubCategory(subCategory);
    setCurrentScreen('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: Product, quantity = 1, color?: string, storage?: string, ram?: string) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        if (color) updated[existingIndex].selectedColor = color;
        if (storage) updated[existingIndex].selectedStorage = storage;
        if (ram) updated[existingIndex].selectedRam = ram;
        return updated;
      } else {
        return [...prev, {
          product,
          quantity,
          selectedColor: color || product.colors?.[0]?.name,
          selectedStorage: storage || product.storageOptions?.[0],
          selectedRam: ram || product.ramOptions?.[0]
        }];
      }
    });
    showToast(`Added "${product.name}" to cart!`);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from cart');
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => item.product.id === productId ? { ...item, quantity } : item));
  };

  const saveForLater = (productId: string) => {
    const item = cart.find(i => i.product.id === productId);
    if (item) {
      setSavedForLater(prev => [...prev, item]);
      removeFromCart(productId);
      showToast(`Saved "${item.product.name}" for later`);
    }
  };

  const moveToCartFromSaved = (productId: string) => {
    const item = savedForLater.find(i => i.product.id === productId);
    if (item) {
      addToCart(item.product, item.quantity, item.selectedColor, item.selectedStorage, item.selectedRam);
      setSavedForLater(prev => prev.filter(i => i.product.id !== productId));
    }
  };

  const removeSavedForLater = (productId: string) => {
    setSavedForLater(prev => prev.filter(i => i.product.id !== productId));
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        showToast('Removed from Wishlist');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved to Wishlist');
        return [...prev, productId];
      }
    });
  };

  const checkPincode = (pincode: string) => {
    if (pincode.length >= 6) {
      setPincodeChecked({
        pincode,
        valid: true,
        message: 'Delivery available in 2-4 business days. Free delivery on orders over ₹499.'
      });
      showToast(`Delivery available for ${pincode}!`);
    } else {
      setPincodeChecked({
        pincode,
        valid: false,
        message: 'Please enter a valid 6-digit postal code.'
      });
    }
  };

  const resetFilters = () => {
    setFilterState(initialFilters);
  };

  // Calculations for cart
  const cartSubtotal = cart.reduce((sum, item) => {
    const orig = item.product.originalPrice || item.product.price;
    return sum + (orig * item.quantity);
  }, 0);

  const cartActualPrice = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const cartDiscount = cartSubtotal > cartActualPrice ? (cartSubtotal - cartActualPrice) : 4500;
  const cartDeliveryCharges = 0;
  const cartTotalAmount = Math.max(0, cartSubtotal - cartDiscount + cartDeliveryCharges);
  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const placeOrder = (deliveryType: 'Standard' | 'Express', paymentMethod: 'UPI' | 'Card' | 'Net Banking' | 'COD'): Order => {
    const newOrderId = `SS${Math.floor(1000000 + Math.random() * 9000000)}`;
    const shippingCost = deliveryType === 'Express' ? 150 : 0;
    const estTax = Math.round(cartActualPrice * 0.018);
    const finalTotal = cartActualPrice + shippingCost + estTax;

    const newOrder: Order = {
      id: newOrderId,
      date: 'Today, Just now',
      items: cart.map(item => ({
        productId: item.product.id,
        productName: item.product.name,
        productImage: item.product.imageUrl,
        price: item.product.price,
        quantity: item.quantity,
        color: item.selectedColor,
        storage: item.selectedStorage
      })),
      subtotal: cartActualPrice,
      discount: cartDiscount,
      shipping: shippingCost,
      tax: estTax,
      total: finalTotal,
      status: 'Processing',
      deliveryType,
      paymentMethod,
      address: selectedAddress,
      estimatedDelivery: deliveryType === 'Express' ? 'Tomorrow by 8 PM' : 'Oct 26 - Oct 28'
    };

    setOrders(prev => [newOrder, ...prev]);
    setLatestPlacedOrder(newOrder);
    setCart([]);
    setCurrentScreen('success-dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Order #${newOrderId} placed successfully!`);
    return newOrder;
  };

  return (
    <ShopContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        selectedProductId,
        setSelectedProductId,
        selectedCategory,
        setSelectedCategory,
        selectedSubCategory,
        setSelectedSubCategory,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        savedForLater,
        saveForLater,
        moveToCartFromSaved,
        removeSavedForLater,
        wishlist,
        toggleWishlist,
        addresses,
        selectedAddress,
        setSelectedAddress,
        orders,
        latestPlacedOrder,
        placeOrder,
        trackingOrder,
        setTrackingOrder,
        filterState,
        setFilterState,
        resetFilters,
        toastMessage,
        showToast,
        navigateToProduct,
        navigateToCategory,
        cartSubtotal,
        cartDiscount,
        cartDeliveryCharges,
        cartTotalAmount,
        cartTotalCount,
        pincodeChecked,
        checkPincode
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
