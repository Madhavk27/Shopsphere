import React, { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  MapPin, 
  User, 
  ChevronDown, 
  ShieldCheck, 
  Layers,
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const Header: React.FC = () => {
  const { 
    currentScreen, 
    setCurrentScreen, 
    cartTotalCount, 
    wishlist, 
    selectedAddress,
    selectedCategory,
    navigateToCategory,
    navigateToProduct,
    filterState,
    setFilterState
  } = useShop();

  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoSwitcherOpen, setDemoSwitcherOpen] = useState(false);

  const categoriesNav = [
    { name: 'Mobiles', id: 'Mobiles', sub: 'Mobiles & Smartphones' },
    { name: 'Electronics', id: 'Electronics', sub: 'Audio & Headphones' },
    { name: 'Fashion', id: 'Fashion', sub: 'Men Fashion' },
    { name: 'Beauty', id: 'Beauty', sub: 'Skincare' },
    { name: 'Home & Kitchen', id: 'Home', sub: 'Home & Kitchen' },
    { name: 'Appliances', id: 'Electronics', sub: 'Appliances' },
    { name: "Today's Deals", id: 'deals', sub: 'All Deals' }
  ];

  // If we are on Checkout screen, render the Minimalist Secure Header from Image 5
  if (currentScreen === 'checkout') {
    return (
      <header className="bg-[#0F0F0F] border-b border-[#1F1F1F] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button 
            onClick={() => setCurrentScreen('home')}
            className="flex items-center gap-2 text-left group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#C0A080] to-[#E5D5C5] flex items-center justify-center text-black shadow-md font-bold text-lg group-hover:scale-105 transition-transform">
              S
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Shop<span className="text-[#C0A080]">Sphere</span>
            </span>
          </button>

          <div className="flex items-center gap-2 bg-[#C0A080]/10 text-[#C0A080] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-[#C0A080]/20">
            <ShieldCheck className="w-4 h-4 text-[#C0A080]" />
            <span>100% SECURE CHECKOUT</span>
            <span className="hidden sm:inline text-[#808080]">| 256-Bit SSL Encryption</span>
          </div>

          <button 
            onClick={() => setCurrentScreen('cart')}
            className="text-sm font-medium text-[#A3A3A3] hover:text-[#C0A080] flex items-center gap-1 transition-colors"
          >
            Back to Cart
          </button>
        </div>
      </header>
    );
  }

  // Quick search suggestions
  const searchResults = filterState.searchQuery.trim().length > 1 
    ? PRODUCTS.filter(p => p.name.toLowerCase().includes(filterState.searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(filterState.searchQuery.toLowerCase())).slice(0, 5)
    : [];

  return (
    <>
      {/* Top Corporate Switcher / Demo Guide Banner */}
      <div className="bg-[#0A0A0A] border-b border-[#1F1F1F] text-[#808080] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#A3A3A3]">
            <Sparkles className="w-3.5 h-3.5 text-[#C0A080]" />
            <span>Summer Tech Fest Live: Extra 10% instant off on select cards</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <button 
                onClick={() => setDemoSwitcherOpen(!demoSwitcherOpen)}
                className="flex items-center gap-1.5 bg-[#161616] hover:bg-[#222222] border border-[#262626] text-[#E5E5E5] px-2.5 py-1 rounded-md text-xs font-medium transition-colors"
                title="Switch between the 6 design mockup screens"
              >
                <Layers className="w-3 h-3 text-[#C0A080]" />
                <span>Jump to Screen ({currentScreen})</span>
                <ChevronDown className="w-3 h-3 text-[#808080]" />
              </button>

              {demoSwitcherOpen && (
                <div 
                  className="absolute right-0 mt-1 w-64 bg-[#141414] rounded-lg shadow-2xl border border-[#262626] py-2 z-50 text-[#E5E5E5]"
                  onMouseLeave={() => setDemoSwitcherOpen(false)}
                >
                  <div className="px-3 py-1 text-[11px] font-bold text-[#808080] uppercase tracking-wider">
                    Design Mockup Screens
                  </div>
                  <button
                    onClick={() => { setCurrentScreen('home'); setDemoSwitcherOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-[#1F1F1F] transition-colors ${currentScreen === 'home' ? 'font-bold text-[#C0A080] bg-[#1A1A1A]' : 'text-[#D4D4D4]'}`}
                  >
                    <span>1. Home Page (Mockup 1)</span>
                    {currentScreen === 'home' && <span className="w-1.5 h-1.5 rounded-full bg-[#C0A080]"></span>}
                  </button>
                  <button
                    onClick={() => { setCurrentScreen('category'); setDemoSwitcherOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-[#1F1F1F] transition-colors ${currentScreen === 'category' ? 'font-bold text-[#C0A080] bg-[#1A1A1A]' : 'text-[#D4D4D4]'}`}
                  >
                    <span>2. Smartphones Listing (Mockup 2)</span>
                    {currentScreen === 'category' && <span className="w-1.5 h-1.5 rounded-full bg-[#C0A080]"></span>}
                  </button>
                  <button
                    onClick={() => { setCurrentScreen('product-detail'); setDemoSwitcherOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-[#1F1F1F] transition-colors ${currentScreen === 'product-detail' ? 'font-bold text-[#C0A080] bg-[#1A1A1A]' : 'text-[#D4D4D4]'}`}
                  >
                    <span>3. Product Detail - S25 (Mockup 3)</span>
                    {currentScreen === 'product-detail' && <span className="w-1.5 h-1.5 rounded-full bg-[#C0A080]"></span>}
                  </button>
                  <button
                    onClick={() => { setCurrentScreen('cart'); setDemoSwitcherOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-[#1F1F1F] transition-colors ${currentScreen === 'cart' ? 'font-bold text-[#C0A080] bg-[#1A1A1A]' : 'text-[#D4D4D4]'}`}
                  >
                    <span>4. Shopping Cart (Mockup 4)</span>
                    {currentScreen === 'cart' && <span className="w-1.5 h-1.5 rounded-full bg-[#C0A080]"></span>}
                  </button>
                  <button
                    onClick={() => { setCurrentScreen('checkout'); setDemoSwitcherOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-[#1F1F1F] transition-colors ${currentScreen === 'checkout' ? 'font-bold text-[#C0A080] bg-[#1A1A1A]' : 'text-[#D4D4D4]'}`}
                  >
                    <span>5. Checkout Step (Mockup 5)</span>
                    {currentScreen === 'checkout' && <span className="w-1.5 h-1.5 rounded-full bg-[#C0A080]"></span>}
                  </button>
                  <button
                    onClick={() => { setCurrentScreen('success-dashboard'); setDemoSwitcherOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-[#1F1F1F] transition-colors ${currentScreen === 'success-dashboard' ? 'font-bold text-[#C0A080] bg-[#1A1A1A]' : 'text-[#D4D4D4]'}`}
                  >
                    <span>6. Order Success / Dashboard (Mockup 6)</span>
                    {currentScreen === 'success-dashboard' && <span className="w-1.5 h-1.5 rounded-full bg-[#C0A080]"></span>}
                  </button>
                </div>
              )}
            </div>

            <span className="text-[#333333]">|</span>
            <span className="text-[#808080] hidden sm:inline">24x7 Customer Help: 1800-419-0157</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="bg-[#0F0F0F] border-b border-[#1F1F1F] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Brand Logo */}
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setCurrentScreen('home')}
                className="flex items-center gap-3 text-left group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C0A080] to-[#E5D5C5] flex items-center justify-center text-black font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                  S
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tight text-white leading-none">
                    Shop<span className="text-[#C0A080]">Sphere</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#808080] tracking-widest mt-0.5">
                    Studio & Corporate
                  </span>
                </div>
              </button>

              {/* Delivery Address quick info (Desktop) */}
              <div className="hidden lg:flex items-center gap-2 text-xs text-[#808080] border-l border-[#1F1F1F] pl-6 py-1">
                <MapPin className="w-4 h-4 text-[#C0A080] shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[#606060] text-[11px]">Deliver to {selectedAddress.name.split(' ')[0]}</span>
                  <span className="font-semibold text-[#E5E5E5]">{selectedAddress.city} {selectedAddress.pincode}</span>
                </div>
              </div>
            </div>

            {/* Search Input with Autocomplete */}
            <div className="flex-1 max-w-2xl relative hidden md:block">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={filterState.searchQuery}
                  onChange={(e) => setFilterState(prev => ({ ...prev, searchQuery: e.target.value }))}
                  onFocus={() => setSearchFocused(true)}
                  placeholder="Search for products, brands, smartphones, audio and more..."
                  className="w-full bg-[#161616] border border-[#262626] rounded-lg py-2.5 pl-11 pr-24 text-sm text-white placeholder-[#606060] focus:outline-none focus:border-[#C0A080] focus:ring-1 focus:ring-[#C0A080] transition-all"
                />
                <Search className="w-4 h-4 text-[#606060] absolute left-3.5" />
                {filterState.searchQuery && (
                  <button 
                    onClick={() => setFilterState(prev => ({ ...prev, searchQuery: '' }))}
                    className="absolute right-20 text-[#606060] hover:text-[#E5E5E5] p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button 
                  onClick={() => {
                    setCurrentScreen('category');
                    setSearchFocused(false);
                  }}
                  className="absolute right-1.5 bg-[#C0A080] hover:bg-[#B39373] text-black text-xs font-semibold px-4 py-1.5 rounded-md transition-colors"
                >
                  Search
                </button>
              </div>

              {/* Live search dropdown results */}
              {searchFocused && searchResults.length > 0 && (
                <div 
                  className="absolute left-0 right-0 mt-2 bg-[#141414] rounded-xl shadow-2xl border border-[#262626] py-2 z-50 overflow-hidden"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <div className="px-4 py-1.5 text-xs font-semibold text-[#808080] border-b border-[#1F1F1F]">
                    Matching Products
                  </div>
                  {searchResults.map(product => (
                    <button
                      key={product.id}
                      onClick={() => {
                        navigateToProduct(product.id);
                        setSearchFocused(false);
                      }}
                      className="w-full px-4 py-2.5 text-left flex items-center justify-between hover:bg-[#1F1F1F] transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="w-9 h-9 object-contain rounded bg-[#1A1A1A] p-0.5 border border-[#262626]"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="text-xs font-semibold text-[#E0E0E0] group-hover:text-[#C0A080] line-clamp-1">{product.name}</p>
                          <p className="text-[11px] text-[#808080]">{product.brand} · {product.category}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#C0A080]">₹{product.price.toLocaleString('en-IN')}</span>
                    </button>
                  ))}
                  <div className="px-4 py-2 border-t border-[#1F1F1F] text-center bg-[#0F0F0F]">
                    <button 
                      onClick={() => {
                        setCurrentScreen('category');
                        setSearchFocused(false);
                      }}
                      className="text-xs font-semibold text-[#C0A080] hover:underline"
                    >
                      View all matching products in catalog →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Account button */}
              <button 
                onClick={() => setCurrentScreen('success-dashboard')}
                className="flex items-center gap-2.5 text-xs font-medium text-[#E5E5E5] hover:text-[#C0A080] transition-colors py-1.5 px-2 rounded-lg hover:bg-[#1A1A1A]"
                title="Account & Orders"
              >
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#C0A080] flex items-center justify-center border border-[#2A2A2A]">
                  <User className="w-4 h-4" />
                </div>
                <div className="hidden xl:flex flex-col text-left">
                  <span className="text-[11px] text-[#808080]">Welcome</span>
                  <span className="font-semibold text-xs text-white">Arjun Patel</span>
                </div>
              </button>

              {/* Wishlist */}
              <button 
                onClick={() => setCurrentScreen('success-dashboard')}
                className="relative p-2 text-[#A3A3A3] hover:text-[#C0A080] transition-colors rounded-lg hover:bg-[#1A1A1A]"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 bg-[#C0A080] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Button */}
              <button 
                onClick={() => setCurrentScreen('cart')}
                className="flex items-center gap-2.5 bg-[#1A1A1A] hover:bg-[#262626] border border-[#2A2A2A] text-white px-3.5 sm:px-4 py-2.5 rounded-lg text-xs font-semibold transition-all"
              >
                <div className="relative">
                  <ShoppingCart className="w-4 h-4 text-[#C0A080]" />
                  {cartTotalCount > 0 && (
                    <span className="absolute -top-2 -right-2.5 bg-[#C0A080] text-black text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                      {cartTotalCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline">Cart</span>
              </button>

              {/* Mobile Menu toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#E5E5E5]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile search bar */}
          <div className="md:hidden pb-3">
            <div className="relative flex items-center">
              <input
                type="text"
                value={filterState.searchQuery}
                onChange={(e) => setFilterState(prev => ({ ...prev, searchQuery: e.target.value }))}
                placeholder="Search products..."
                className="w-full bg-[#161616] border border-[#262626] rounded-lg py-2 pl-9 pr-4 text-xs text-white placeholder-[#606060] focus:outline-none focus:border-[#C0A080]"
              />
              <Search className="w-4 h-4 text-[#606060] absolute left-3" />
            </div>
          </div>
        </div>

        {/* Secondary Navigation Categories Bar */}
        <nav className="border-t border-[#1F1F1F] bg-[#0A0A0A] hidden sm:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-8 overflow-x-auto scrollbar-none py-2.5 text-xs font-medium">
            {categoriesNav.map(item => {
              const isActive = (currentScreen === 'category' && selectedCategory.toLowerCase() === item.name.toLowerCase()) ||
                               (currentScreen === 'home' && item.name === 'Home') ||
                               (item.id === 'deals' && filterState.minDiscount > 0);
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.id === 'deals') {
                      setFilterState(prev => ({ ...prev, minDiscount: 15 }));
                      setCurrentScreen('category');
                    } else {
                      navigateToCategory(item.name, item.sub);
                    }
                  }}
                  className={`whitespace-nowrap transition-colors pb-0.5 relative ${
                    isActive 
                      ? 'text-white font-semibold after:content-[""] after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:h-[2px] after:bg-[#C0A080]' 
                      : 'text-[#808080] hover:text-[#E5E5E5]'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-[#1F1F1F] bg-[#0F0F0F] px-4 py-3 space-y-2">
            <div className="text-[11px] font-bold text-[#808080] uppercase">Categories</div>
            {categoriesNav.map(item => (
              <button
                key={item.name}
                onClick={() => {
                  navigateToCategory(item.name, item.sub);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-1.5 text-xs text-[#E5E5E5] font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
