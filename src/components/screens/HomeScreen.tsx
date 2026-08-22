import React from 'react';
import { ArrowRight, Star, ShoppingCart, Sparkles, ChevronRight, Zap } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES, PRODUCTS } from '../../data/products';

export const HomeScreen: React.FC = () => {
  const { navigateToProduct, navigateToCategory, addToCart, setCurrentScreen } = useShop();

  // Deals items matching Mockup 1
  const dealProducts = PRODUCTS.filter(p => p.isDeal);

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Hero Lifestyle Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#181818] via-[#121212] to-[#0A0A0A] overflow-hidden text-white shadow-2xl border border-[#262626]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
            <div className="lg:col-span-7 space-y-6 z-10">
              <div className="inline-flex items-center gap-2 bg-[#C0A080]/10 text-[#C0A080] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-[#C0A080]/30 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C0A080]" />
                <span>Curated Luxury & Modern Tech</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                Curated for Tomorrow, <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C0A080] via-[#E5D5C5] to-[#FFFFFF]">
                  Delivered Today.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#A3A3A3] max-w-xl font-normal leading-relaxed">
                Explore the pinnacle of precision engineering and modern aesthetics with our latest arrivals. Up to 40% discount on flagship devices and studio audio gear.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => navigateToCategory('Mobiles', 'Mobiles & Smartphones')}
                  className="bg-[#C0A080] hover:bg-[#B39373] text-black px-7 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-[#C0A080]/20 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <span>Shop Flagships</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    navigateToCategory('Electronics');
                  }}
                  className="bg-[#1A1A1A] hover:bg-[#262626] text-[#E5E5E5] border border-[#2A2A2A] px-6 py-3.5 rounded-full text-sm font-semibold transition-all"
                >
                  Explore Deals
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-4/3 sm:aspect-square lg:aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-[#262626]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCapsn6jZQNKAuhe8aulzY3-S5wd1swTWtnNA4Qt-gZlCX7Uyf7ED3JwYMETTEnQPZcIW9nOzkWkCEdqROUBNRn0kd5HxcmhOdcbulklA3Xg7VK_-s8h7FM8Z4OxKUibhBzJ-S-HUU4dJsEQFjC6rXv-Jz4x6awnoP2aYGSGXkGqll2JZrdNHUED_wyD3RIPA55hxYWD1Dkt6YDQYOrBbg1PZe2C7DUA7GGHCyOfQxEHfFNC3oCFJwM"
                  alt="Modern Tech Lifestyle"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#141414]/90 backdrop-blur-md rounded-xl p-3.5 border border-[#262626] text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C0A080]">Special Release</span>
                    <p className="text-xs font-bold text-white">Galaxy S25 5G Series</p>
                  </div>
                  <button 
                    onClick={() => navigateToProduct('samsung-galaxy-s25-5g')}
                    className="text-xs font-bold text-[#C0A080] hover:underline"
                  >
                    View Product →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Shop by Category Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Shop by Category</h2>
            <p className="text-xs text-[#808080] mt-1">Explore our premium selection across diverse departments</p>
          </div>
          <button 
            onClick={() => navigateToCategory('Mobiles')}
            className="text-xs font-semibold text-[#C0A080] hover:text-[#E5D5C5] flex items-center gap-1 group transition-colors"
          >
            <span>View all categories</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map(category => (
            <div
              key={category.id}
              onClick={() => navigateToCategory(category.name, category.subcategories[0])}
              className="group relative bg-[#141414] rounded-2xl overflow-hidden border border-[#1F1F1F] hover:border-[#C0A080]/60 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="w-full aspect-4/3 overflow-hidden bg-[#1A1A1A] relative">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              </div>
              <div className="p-4 flex items-center justify-between bg-[#141414] flex-1">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#C0A080] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[11px] text-[#808080] line-clamp-1 mt-0.5">
                    {category.subcategories.slice(0, 2).join(', ')}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] group-hover:bg-[#C0A080] text-[#C0A080] group-hover:text-black flex items-center justify-center transition-colors border border-[#262626]">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Today's Best Deals Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C0A080]/10 text-[#C0A080] flex items-center justify-center border border-[#C0A080]/20">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Today's Best Deals</h2>
              <p className="text-xs text-[#808080] mt-0.5">Limited period pricing with extra bank cashback</p>
            </div>
          </div>
          <button 
            onClick={() => navigateToCategory('Mobiles')}
            className="text-xs font-semibold text-[#C0A080] hover:text-[#E5D5C5] flex items-center gap-1 group transition-colors"
          >
            <span>See all deals</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealProducts.map(product => (
            <div
              key={product.id}
              className="bg-[#141414] rounded-2xl border border-[#1F1F1F] overflow-hidden hover:border-[#C0A080]/60 hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              {/* Discount badge */}
              {product.discountPercentage && (
                <div className="absolute top-3 left-3 z-10 bg-[#C0A080] text-black text-[11px] font-black px-2.5 py-1 rounded-full shadow-sm">
                  {product.discountPercentage}% OFF
                </div>
              )}

              {/* Product Image Area */}
              <div 
                onClick={() => navigateToProduct(product.id)}
                className="w-full aspect-square p-6 flex items-center justify-center bg-[#181818] relative cursor-pointer overflow-hidden border-b border-[#1F1F1F]"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Product Info Area */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
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
                </div>

                <div className="pt-4 mt-2 border-t border-[#1F1F1F]">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-lg font-bold text-white">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
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
      </section>

      {/* 4. Promotional Banner Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C0A080]">ShopSphere Guarantee</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Looking for Enterprise Bulk Procurement?</h3>
            <p className="text-xs text-[#808080] max-w-xl">
              Get dedicated corporate invoicing, bulk discounts on 5+ units, and GST tax credit support for registered businesses.
            </p>
          </div>
          <button 
            onClick={() => setCurrentScreen('category')}
            className="whitespace-nowrap bg-[#C0A080] hover:bg-[#B39373] text-black px-6 py-3 rounded-full text-xs font-bold transition-all shadow-md"
          >
            Contact B2B Desk
          </button>
        </div>
      </section>
    </div>
  );
};
