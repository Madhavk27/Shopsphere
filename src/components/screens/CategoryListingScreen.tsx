import React, { useMemo } from 'react';
import { 
  ChevronRight, 
  Star, 
  ShoppingCart, 
  Filter, 
  SlidersHorizontal, 
  X, 
  RotateCcw,
  Check
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';

export const CategoryListingScreen: React.FC = () => {
  const { 
    selectedCategory, 
    selectedSubCategory, 
    setCurrentScreen, 
    navigateToProduct, 
    addToCart,
    filterState,
    setFilterState,
    resetFilters
  } = useShop();

  const brandsList = [
    { name: 'SAMSUNG', count: 4 },
    { name: 'APPLE', count: 2 },
    { name: 'ONEPLUS', count: 2 },
    { name: 'GOOGLE', count: 1 },
    { name: 'HORIZON', count: 1 },
    { name: 'SONY', count: 1 }
  ];

  const handleBrandToggle = (brandName: string) => {
    setFilterState(prev => {
      const exists = prev.brand.includes(brandName);
      if (exists) {
        return { ...prev, brand: prev.brand.filter(b => b !== brandName) };
      } else {
        return { ...prev, brand: [...prev.brand, brandName] };
      }
    });
  };

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Category check
      if (selectedCategory === 'Mobiles') {
        if (p.category !== 'Mobiles' && !p.name.toLowerCase().includes('phone') && !p.name.toLowerCase().includes('galaxy') && !p.name.toLowerCase().includes('pixel')) {
          // let mobile devices show
        }
      }

      // Brand filter
      if (filterState.brand.length > 0 && !filterState.brand.includes(p.brand.toUpperCase())) {
        return false;
      }

      // Price filter
      if (p.price < filterState.priceRange[0] || p.price > filterState.priceRange[1]) {
        return false;
      }

      // Rating filter
      if (filterState.minRating > 0 && p.rating < filterState.minRating) {
        return false;
      }

      // Discount filter
      if (filterState.minDiscount > 0 && (!p.discountPercentage || p.discountPercentage < filterState.minDiscount)) {
        return false;
      }

      // Search query
      if (filterState.searchQuery) {
        const q = filterState.searchQuery.toLowerCase();
        if (!p.name.toLowerCase().includes(q) && !p.brand.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filterState.sortBy === 'price-low') return a.price - b.price;
      if (filterState.sortBy === 'price-high') return b.price - a.price;
      if (filterState.sortBy === 'rating') return b.rating - a.rating;
      return (b.reviewsCount || 0) - (a.reviewsCount || 0); // Default popularity
    });
  }, [filterState, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* 1. Breadcrumbs */}
      <nav className="flex items-center text-xs text-[#808080] space-x-2">
        <button onClick={() => setCurrentScreen('home')} className="hover:text-[#C0A080] transition-colors">Home</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button onClick={() => setCurrentScreen('home')} className="hover:text-[#C0A080] transition-colors">Electronics</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-white">Smartphones</span>
      </nav>

      {/* 2. Page Header & Toolbar */}
      <div className="bg-[#141414] p-6 rounded-2xl border border-[#1F1F1F] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Smartphones</h1>
          <p className="text-xs text-[#808080] mt-1">
            Showing <span className="font-bold text-white">{filteredProducts.length}</span> of 1,420 products
            {filterState.brand.length > 0 && ` (Filtered by: ${filterState.brand.join(', ')})`}
          </p>
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-3">
          <label htmlFor="sort-by-select" className="text-xs font-semibold text-[#808080] whitespace-nowrap">Sort by:</label>
          <select
            id="sort-by-select"
            aria-label="Sort products by"
            value={filterState.sortBy}
            onChange={(e) => setFilterState(prev => ({ ...prev, sortBy: e.target.value as any }))}
            className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-3 py-2 text-xs font-medium text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#C0A080]"
          >
            <option value="popularity">Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
          </select>
        </div>
      </div>

      {/* 3. Main Content: Sidebar Filters + Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Filter Sidebar */}
        <aside className="space-y-6">
          <div className="bg-[#141414] rounded-2xl border border-[#1F1F1F] p-5 shadow-sm divide-y divide-[#1F1F1F] space-y-5">
            {/* Filter Title & Reset */}
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#C0A080]" />
                <h3 className="text-sm font-bold text-white">Filters</h3>
              </div>
              <button
                onClick={resetFilters}
                className="text-xs font-semibold text-[#C0A080] hover:text-[#E5D5C5] transition-colors flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset All</span>
              </button>
            </div>

            {/* Brand Filter Section */}
            <div className="pt-4 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Brand</h4>
              <div className="space-y-2.5">
                {brandsList.map(b => {
                  const isChecked = filterState.brand.includes(b.name);
                  return (
                    <label 
                      key={b.name}
                      className="flex items-center justify-between text-xs text-[#A3A3A3] hover:text-white cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div 
                          onClick={() => handleBrandToggle(b.name)}
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            isChecked ? 'bg-[#C0A080] border-[#C0A080] text-black' : 'border-[#2A2A2A] bg-[#1A1A1A]'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className={isChecked ? 'font-bold text-[#C0A080]' : ''}>{b.name}</span>
                      </div>
                      <span className="text-[11px] text-[#606060]">({b.count})</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Price Range</h4>
                <span className="text-xs font-bold text-[#C0A080]">
                  Up to ₹{filterState.priceRange[1].toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="200000"
                step="5000"
                value={filterState.priceRange[1]}
                onChange={(e) => setFilterState(prev => ({
                  ...prev,
                  priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                }))}
                className="w-full accent-[#C0A080] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#606060]">
                <span>₹10,000</span>
                <span>₹2,00,000+</span>
              </div>
            </div>

            {/* Customer Rating Filter */}
            <div className="pt-4 space-y-2.5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Customer Rating</h4>
              {[4, 3].map(stars => (
                <button
                  key={stars}
                  onClick={() => setFilterState(prev => ({ ...prev, minRating: prev.minRating === stars ? 0 : stars }))}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between border transition-all ${
                    filterState.minRating === stars 
                      ? 'bg-[#1A1A1A] border-[#C0A080] text-[#C0A080] font-bold' 
                      : 'border-[#1F1F1F] text-[#808080] hover:bg-[#1A1A1A]'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold">{stars}★ & above</span>
                  </div>
                  <div className="flex text-[#C0A080]">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </button>
              ))}
            </div>

            {/* Discount Filter */}
            <div className="pt-4 space-y-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Discount</h4>
              {[10, 20, 30].map(disc => (
                <button
                  key={disc}
                  onClick={() => setFilterState(prev => ({ ...prev, minDiscount: prev.minDiscount === disc ? 0 : disc }))}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                    filterState.minDiscount === disc ? 'bg-[#C0A080]/10 text-[#C0A080] font-bold' : 'text-[#808080] hover:bg-[#1A1A1A]'
                  }`}
                >
                  <span>{disc}% or more</span>
                  {filterState.minDiscount === disc && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>

            {/* In Stock toggle */}
            <div className="pt-4">
              <label className="flex items-center gap-2.5 text-xs text-[#A3A3A3] hover:text-white cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={filterState.inStockOnly}
                  onChange={(e) => setFilterState(prev => ({ ...prev, inStockOnly: e.target.checked }))}
                  className="rounded border-[#2A2A2A] bg-[#1A1A1A] text-[#C0A080] focus:ring-[#C0A080]"
                />
                <span className="font-medium">Exclude Out of Stock</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Right Product Grid */}
        <main className="lg:col-span-3 space-y-6">
          {filteredProducts.length === 0 ? (
            <div className="bg-[#141414] rounded-2xl border border-[#1F1F1F] p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#1A1A1A] text-[#808080] mx-auto flex items-center justify-center border border-[#262626]">
                <Filter className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white">No smartphones match your filters</h3>
              <p className="text-xs text-[#808080] max-w-sm mx-auto">
                Try widening your price range or clearing brand selections to view available flagship products.
              </p>
              <button
                onClick={resetFilters}
                className="bg-[#C0A080] hover:bg-[#B39373] text-black px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  className="bg-[#141414] rounded-2xl border border-[#1F1F1F] hover:border-[#C0A080]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Image Container */}
                  <div 
                    onClick={() => navigateToProduct(product.id)}
                    className="relative w-full aspect-square p-6 flex items-center justify-center bg-[#181818] cursor-pointer border-b border-[#1F1F1F] overflow-hidden"
                  >
                    {product.discountPercentage && (
                      <div className="absolute top-3 left-3 bg-[#C0A080] text-black text-[11px] font-black px-2.5 py-1 rounded-full shadow-sm z-10">
                        {product.discountPercentage}% OFF
                      </div>
                    )}

                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center text-[#C0A080]">
                          <Star className="w-3.5 h-3.5 fill-current" />
                        </div>
                        <span className="text-xs font-bold text-[#E5E5E5]">{product.rating}</span>
                        <span className="text-[11px] text-[#808080]">({product.reviewsCount.toLocaleString()})</span>
                      </div>

                      <h3 
                        onClick={() => navigateToProduct(product.id)}
                        className="text-sm font-semibold text-[#E0E0E0] group-hover:text-[#C0A080] cursor-pointer line-clamp-2 leading-snug transition-colors"
                      >
                        {product.name}
                      </h3>

                      {product.emiStartsAt && (
                        <p className="text-[11px] text-[#C0A080] font-semibold">
                          EMI starts at ₹{product.emiStartsAt.toLocaleString('en-IN')}/mo
                        </p>
                      )}
                    </div>

                    <div className="pt-3 border-t border-[#1F1F1F] space-y-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-white">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        {product.originalPrice && product.originalPrice > product.price && (
                          <span className="text-xs text-[#606060] line-through font-normal">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-[#1A1A1A] hover:bg-[#C0A080] hover:text-black text-white border border-[#2A2A2A] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-[#1F1F1F]">
            <p className="text-xs text-[#808080]">
              Page 1 of 48 (1,420 products)
            </p>
            <div className="flex items-center gap-1.5">
              <button className="px-3 py-1.5 rounded-lg border border-[#C0A080] bg-[#C0A080] text-black text-xs font-bold">1</button>
              <button className="px-3 py-1.5 rounded-lg border border-[#262626] bg-[#141414] hover:bg-[#1A1A1A] text-xs text-[#A3A3A3]">2</button>
              <button className="px-3 py-1.5 rounded-lg border border-[#262626] bg-[#141414] hover:bg-[#1A1A1A] text-xs text-[#A3A3A3]">3</button>
              <span className="px-2 text-xs text-[#606060]">...</span>
              <button className="px-3 py-1.5 rounded-lg border border-[#262626] bg-[#141414] hover:bg-[#1A1A1A] text-xs text-[#A3A3A3]">48</button>
              <button className="px-3.5 py-1.5 rounded-lg border border-[#2A2A2A] hover:border-[#C0A080] hover:text-[#C0A080] text-xs font-bold text-white transition-colors">Next →</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
