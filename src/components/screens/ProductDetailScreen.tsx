import React, { useState } from 'react';
import { 
  ChevronRight, 
  Star, 
  ShoppingCart, 
  Zap, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  MapPin, 
  Heart, 
  Share2, 
  Check, 
  CheckCircle2, 
  Info,
  Layers
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';

export const ProductDetailScreen: React.FC = () => {
  const { 
    selectedProductId, 
    setCurrentScreen, 
    addToCart, 
    wishlist, 
    toggleWishlist,
    pincodeChecked,
    checkPincode,
    showToast
  } = useShop();

  const product = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];

  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.imageUrl];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || 'Phantom Black');
  const [selectedStorage, setSelectedStorage] = useState(product.storageOptions?.[0] || '256 GB');
  const [selectedRam, setSelectedRam] = useState(product.ramOptions?.[0] || '8 GB');
  const [pincodeInput, setPincodeInput] = useState('122002');
  const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'reviews'>('specs');

  const isWishlisted = wishlist.includes(product.id);

  const handleBuyNow = () => {
    addToCart(product, 1, selectedColor, selectedStorage, selectedRam);
    setCurrentScreen('checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* 1. Breadcrumbs */}
      <nav className="flex items-center text-xs text-[#808080] space-x-2">
        <button onClick={() => setCurrentScreen('home')} className="hover:text-[#C0A080] transition-colors">Home</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button onClick={() => setCurrentScreen('home')} className="hover:text-[#C0A080] transition-colors">Electronics</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button onClick={() => setCurrentScreen('category')} className="hover:text-[#C0A080] transition-colors">Mobiles</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-white truncate max-w-xs sm:max-w-md">{product.name}</span>
      </nav>

      {/* 2. Main Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#141414] p-6 sm:p-8 rounded-3xl border border-[#1F1F1F] shadow-xl text-[#E5E5E5]">
        {/* Left Column: Image Gallery (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative aspect-square rounded-2xl bg-[#181818] border border-[#262626] p-8 flex items-center justify-center overflow-hidden">
            {/* Wishlist and Share Floating Buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all border border-[#2A2A2A] ${
                  isWishlisted ? 'bg-[#C0A080] text-black' : 'bg-[#1F1F1F] text-[#E5E5E5] hover:bg-[#262626]'
                }`}
                title="Save to Wishlist"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={() => showToast('Product link copied to clipboard!')}
                className="w-9 h-9 rounded-full bg-[#1F1F1F] hover:bg-[#262626] border border-[#2A2A2A] text-[#E5E5E5] flex items-center justify-center shadow-md transition-all"
                title="Share Product"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {product.discountPercentage && (
              <div className="absolute top-4 left-4 bg-[#C0A080] text-black text-xs font-black px-3 py-1 rounded-full shadow-sm">
                {product.discountPercentage}% OFF
              </div>
            )}

            <img
              src={images[activeImageIndex] || product.imageUrl}
              alt={product.name}
              className="max-h-full max-w-full object-contain transition-all duration-300 transform hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Thumbnails Row */}
          {images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-16 rounded-xl border-2 p-1.5 bg-[#181818] shrink-0 transition-all ${
                    activeImageIndex === idx 
                      ? 'border-[#C0A080] ring-2 ring-[#C0A080]/30' 
                      : 'border-[#262626] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Trust Value Badges under Gallery */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#1F1F1F] text-center">
            <div className="p-3 bg-[#1A1A1A] rounded-xl border border-[#262626]">
              <RotateCcw className="w-4 h-4 text-[#C0A080] mx-auto mb-1" />
              <p className="text-[11px] font-bold text-white">7 Days</p>
              <p className="text-[10px] text-[#808080]">Replacement</p>
            </div>
            <div className="p-3 bg-[#1A1A1A] rounded-xl border border-[#262626]">
              <ShieldCheck className="w-4 h-4 text-[#C0A080] mx-auto mb-1" />
              <p className="text-[11px] font-bold text-white">1 Year</p>
              <p className="text-[10px] text-[#808080]">Brand Warranty</p>
            </div>
            <div className="p-3 bg-[#1A1A1A] rounded-xl border border-[#262626]">
              <Truck className="w-4 h-4 text-[#C0A080] mx-auto mb-1" />
              <p className="text-[11px] font-bold text-white">Free Express</p>
              <p className="text-[10px] text-[#808080]">Delivery</p>
            </div>
          </div>
        </div>

        {/* Right Column: Details, Selection & Actions (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Brand & Title */}
          <div>
            <span className="text-xs font-bold text-[#C0A080] uppercase tracking-widest">
              {product.brand} Official Store
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 leading-tight">
              {product.name}
            </h1>

            {/* Ratings Bar */}
            <div className="flex items-center gap-3 mt-2.5">
              <div className="flex items-center gap-1.5 bg-[#1A1A1A] border border-[#262626] text-white px-2.5 py-1 rounded-md text-xs font-bold">
                <span>{product.rating}</span>
                <Star className="w-3.5 h-3.5 fill-current text-[#C0A080]" />
              </div>
              <span className="text-xs text-[#808080]">
                <strong className="text-[#E5E5E5]">{product.reviewsCount.toLocaleString()}</strong> Ratings & <strong className="text-[#E5E5E5]">382</strong> Reviews
              </span>
              <span className="text-[#262626]">|</span>
              <span className="text-xs text-[#C0A080] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C0A080]" />
                Verified Authentic
              </span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#262626] space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-white">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-sm text-[#606060] line-through font-normal">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              {product.discountPercentage && (
                <span className="text-xs font-bold text-black bg-[#C0A080] px-2 py-0.5 rounded">
                  {product.discountPercentage}% off
                </span>
              )}
            </div>
            <p className="text-[11px] text-[#808080]">Inclusive of all taxes</p>
            {product.emiStartsAt && (
              <p className="text-xs text-[#C0A080] font-semibold pt-1">
                No Cost EMI available starting from <strong>₹{product.emiStartsAt.toLocaleString('en-IN')}/month</strong>
              </p>
            )}
          </div>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Color: <span className="font-semibold text-[#808080]">{selectedColor}</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                {product.colors.map(c => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                      selectedColor === c.name 
                        ? 'border-[#C0A080] bg-[#1F1F1F] text-white font-bold shadow-xs' 
                        : 'border-[#262626] text-[#808080] hover:bg-[#1A1A1A]'
                    }`}
                  >
                    <span 
                      className="w-4 h-4 rounded-full border border-black/20" 
                      style={{ backgroundColor: c.hex }}
                    />
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Storage Selection */}
          {product.storageOptions && product.storageOptions.length > 0 && (
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Storage: <span className="font-semibold text-[#808080]">{selectedStorage}</span>
              </span>
              <div className="flex items-center gap-3">
                {product.storageOptions.map(st => (
                  <button
                    key={st}
                    onClick={() => setSelectedStorage(st)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      selectedStorage === st 
                        ? 'border-[#C0A080] bg-[#C0A080] text-black shadow-xs' 
                        : 'border-[#262626] text-[#808080] hover:border-[#C0A080]/50 hover:bg-[#1A1A1A]'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* RAM Selection */}
          {product.ramOptions && product.ramOptions.length > 0 && (
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                RAM: <span className="font-semibold text-[#808080]">{selectedRam}</span>
              </span>
              <div className="flex items-center gap-3">
                {product.ramOptions.map(ram => (
                  <button
                    key={ram}
                    onClick={() => setSelectedRam(ram)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      selectedRam === ram 
                        ? 'border-[#C0A080] bg-[#C0A080] text-black shadow-xs' 
                        : 'border-[#262626] text-[#808080] hover:border-[#C0A080]/50 hover:bg-[#1A1A1A]'
                    }`}
                  >
                    {ram}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Delivery & Pincode Checker */}
          <div className="p-4 rounded-2xl border border-[#262626] bg-[#1A1A1A] space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <MapPin className="w-4 h-4 text-[#C0A080]" />
              <span>Delivery Pincode Check</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                maxLength={6}
                value={pincodeInput}
                onChange={(e) => setPincodeInput(e.target.value)}
                placeholder="Enter 6-digit Pincode"
                className="bg-[#141414] border border-[#2A2A2A] rounded-xl px-3.5 py-2 text-xs text-white font-semibold w-44 focus:outline-none focus:ring-2 focus:ring-[#C0A080]"
              />
              <button
                onClick={() => checkPincode(pincodeInput)}
                className="bg-[#C0A080] hover:bg-[#B39373] text-black px-4 py-2 rounded-xl text-xs font-bold transition-colors"
              >
                Check
              </button>
            </div>
            {pincodeChecked && (
              <p className={`text-xs flex items-center gap-1.5 ${pincodeChecked.valid ? 'text-[#C0A080] font-semibold' : 'text-rose-400'}`}>
                {pincodeChecked.valid ? <Check className="w-3.5 h-3.5" /> : <Info className="w-3.5 h-3.5" />}
                {pincodeChecked.message}
              </p>
            )}
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <button
              onClick={() => addToCart(product, 1, selectedColor, selectedStorage, selectedRam)}
              className="w-full bg-[#1A1A1A] hover:bg-[#262626] text-white border border-[#2A2A2A] py-3.5 px-6 rounded-2xl text-sm font-bold transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={handleBuyNow}
              className="w-full bg-[#C0A080] hover:bg-[#B39373] text-black py-3.5 px-6 rounded-2xl text-sm font-bold shadow-lg shadow-[#C0A080]/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-current text-black" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Product Features & Technical Specifications Tabs */}
      <div className="bg-[#141414] rounded-3xl border border-[#1F1F1F] p-6 sm:p-8 shadow-sm space-y-6 text-[#E5E5E5]">
        <div className="flex border-b border-[#1F1F1F] space-x-6 text-sm font-bold">
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-3 transition-colors relative ${
              activeTab === 'specs' 
                ? 'text-[#C0A080] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-[#C0A080]' 
                : 'text-[#808080] hover:text-white'
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`pb-3 transition-colors relative ${
              activeTab === 'features' 
                ? 'text-[#C0A080] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-[#C0A080]' 
                : 'text-[#808080] hover:text-white'
            }`}
          >
            Key Highlights
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-3 transition-colors relative ${
              activeTab === 'reviews' 
                ? 'text-[#C0A080] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-[#C0A080]' 
                : 'text-[#808080] hover:text-white'
            }`}
          >
            Ratings & Reviews ({product.reviewsCount})
          </button>
        </div>

        {activeTab === 'specs' && product.specifications && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, val]) => (
              <div key={key} className="flex p-3 rounded-xl bg-[#1A1A1A] border border-[#262626] justify-between text-xs">
                <span className="font-semibold text-[#808080]">{key}</span>
                <span className="font-bold text-white text-right">{val}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'features' && (
          <div className="space-y-3">
            <p className="text-xs text-[#A3A3A3] leading-relaxed mb-4">{product.description}</p>
            <div className="space-y-2.5">
              {(product.features || [
                'Dynamic AMOLED 2X Ultra-Bright Display',
                'Advanced Snapdragon 8 Flagship Processor',
                'Pro-grade High Resolution Camera Setup',
                'All-Day Intelligent Fast-Charging Battery'
              ]).map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-xs text-[#E5E5E5]">
                  <div className="w-5 h-5 rounded-full bg-[#C0A080]/10 text-[#C0A080] flex items-center justify-center shrink-0 border border-[#C0A080]/20">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#262626] flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-white">{product.rating} out of 5</p>
                <p className="text-xs text-[#808080]">Based on {product.reviewsCount} verified buyers</p>
              </div>
              <button 
                onClick={() => showToast('Review submission opened')}
                className="bg-[#C0A080] hover:bg-[#B39373] text-black px-4 py-2 rounded-xl text-xs font-bold transition-colors"
              >
                Write a Review
              </button>
            </div>
            
            <div className="divide-y divide-[#1F1F1F] space-y-3">
              <div className="pt-3 space-y-1">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#C0A080]"><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /></div>
                  <span className="text-xs font-bold text-white">Outstanding flagship experience!</span>
                </div>
                <p className="text-xs text-[#808080]">Battery life easily lasts 1.5 days with heavy productivity use. Display is super crisp under direct sunlight.</p>
                <p className="text-[11px] text-[#606060]">Rohan V. · Verified Buyer · 3 days ago</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
