import React from 'react';
import { 
  ChevronRight, 
  Trash2, 
  Bookmark, 
  Plus, 
  Minus, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  ShoppingCart,
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';

export const CartScreen: React.FC = () => {
  const { 
    cart, 
    updateCartQuantity, 
    removeFromCart, 
    saveForLater, 
    savedForLater, 
    moveToCartFromSaved, 
    removeSavedForLater,
    setCurrentScreen, 
    navigateToProduct,
    addToCart,
    cartSubtotal,
    cartDiscount,
    cartTotalAmount,
    cartTotalCount
  } = useShop();

  const recommendedItems = PRODUCTS.filter(p => p.isRecommended);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* 1. Breadcrumbs */}
      <nav className="flex items-center text-xs text-[#808080] space-x-2">
        <button onClick={() => setCurrentScreen('home')} className="hover:text-[#C0A080] transition-colors">Home</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-white">Shopping Cart</span>
      </nav>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Shopping Cart</h1>
          <p className="text-xs text-[#808080] mt-1">
            You have <span className="font-bold text-white">{cartTotalCount} items</span> in your cart
          </p>
        </div>
        {cart.length > 0 && (
          <button 
            onClick={() => setCurrentScreen('category')}
            className="text-xs font-bold text-[#C0A080] hover:underline hidden sm:block"
          >
            + Continue Shopping
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="bg-[#141414] rounded-3xl border border-[#1F1F1F] p-12 text-center space-y-4 shadow-xl">
          <div className="w-20 h-20 rounded-full bg-[#1A1A1A] text-[#C0A080] mx-auto flex items-center justify-center border border-[#262626]">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-xl font-bold text-white">Your Cart is Currently Empty</h2>
          <p className="text-xs text-[#808080] max-w-md mx-auto">
            Discover our flagship smartphones, audio gear, and exclusive deals to fill your cart.
          </p>
          <button
            onClick={() => setCurrentScreen('home')}
            className="bg-[#C0A080] hover:bg-[#B39373] text-black px-7 py-3 rounded-full text-xs font-bold shadow-md transition-transform hover:scale-105"
          >
            Explore Today's Best Deals
          </button>
        </div>
      ) : (
        /* 2. Main Cart Layout: Items (8 cols) + Order Summary (4 cols) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-[#141414] rounded-2xl border border-[#1F1F1F] divide-y divide-[#1F1F1F] shadow-sm overflow-hidden">
              {cart.map(item => (
                <div key={item.product.id} className="p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
                  <div className="flex gap-4 items-center">
                    {/* Thumbnail */}
                    <div 
                      onClick={() => navigateToProduct(item.product.id)}
                      className="w-24 h-24 rounded-xl bg-[#181818] border border-[#262626] p-2 flex items-center justify-center shrink-0 cursor-pointer overflow-hidden"
                    >
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="max-h-full max-w-full object-contain hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Details */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-[#C0A080] uppercase tracking-wider">
                        {item.product.brand}
                      </span>
                      <h3 
                        onClick={() => navigateToProduct(item.product.id)}
                        className="text-sm font-bold text-white hover:text-[#C0A080] cursor-pointer line-clamp-1 transition-colors"
                      >
                        {item.product.name}
                      </h3>
                      
                      <div className="flex flex-wrap gap-2 text-xs text-[#808080] pt-0.5">
                        {item.selectedColor && (
                          <span className="bg-[#1A1A1A] px-2 py-0.5 rounded border border-[#262626]">
                            Color: <strong className="text-white">{item.selectedColor}</strong>
                          </span>
                        )}
                        {item.selectedStorage && (
                          <span className="bg-[#1A1A1A] px-2 py-0.5 rounded border border-[#262626]">
                            Storage: <strong className="text-white">{item.selectedStorage}</strong>
                          </span>
                        )}
                      </div>

                      <p className="text-[11px] text-[#C0A080] font-semibold pt-1">
                        In Stock · Free Express Delivery
                      </p>
                    </div>
                  </div>

                  {/* Quantity and Price */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#1F1F1F]">
                    <div className="text-right">
                      <div className="text-base sm:text-lg font-bold text-white">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                      {item.product.originalPrice && item.product.originalPrice > item.product.price && (
                        <div className="text-xs text-[#606060] line-through">
                          ₹{(item.product.originalPrice * item.quantity).toLocaleString('en-IN')}
                        </div>
                      )}
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-[#2A2A2A] rounded-lg bg-[#1A1A1A] overflow-hidden">
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#262626] text-[#E5E5E5] transition-colors"
                          title="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#262626] text-[#E5E5E5] transition-colors"
                          title="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Action buttons */}
                      <button
                        onClick={() => saveForLater(item.product.id)}
                        className="p-2 text-[#808080] hover:text-[#C0A080] hover:bg-[#1A1A1A] rounded-lg transition-colors border border-transparent hover:border-[#262626]"
                        title="Save for Later"
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-[#808080] hover:text-rose-400 hover:bg-rose-950/30 rounded-lg transition-colors border border-transparent hover:border-rose-900/40"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Saved for Later drawer if populated */}
            {savedForLater.length > 0 && (
              <div className="bg-[#141414] rounded-2xl border border-[#1F1F1F] p-5 space-y-4 shadow-sm">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-[#C0A080]" />
                  <span>Saved for Later ({savedForLater.length})</span>
                </h3>
                <div className="divide-y divide-[#1F1F1F]">
                  {savedForLater.map(item => (
                    <div key={item.product.id} className="py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={item.product.imageUrl} 
                          alt={item.product.name} 
                          className="w-12 h-12 object-contain bg-[#181818] rounded-lg p-1 border border-[#262626]"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="text-xs font-bold text-white">{item.product.name}</p>
                          <p className="text-xs font-bold text-[#C0A080]">₹{item.product.price.toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => moveToCartFromSaved(item.product.id)}
                          className="bg-[#C0A080] hover:bg-[#B39373] text-black px-3 py-1.5 rounded-lg text-xs font-bold transition-colors"
                        >
                          Move to Cart
                        </button>
                        <button
                          onClick={() => removeSavedForLater(item.product.id)}
                          className="text-xs text-[#808080] hover:text-rose-400 px-2 py-1 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Right Order Summary Box */}
          <div className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="bg-[#141414] rounded-2xl border border-[#1F1F1F] p-6 shadow-xl space-y-5 text-[#E5E5E5]">
              <h2 className="text-lg font-bold text-white tracking-tight pb-3 border-b border-[#1F1F1F]">
                Order Summary
              </h2>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-[#808080]">
                  <span>Subtotal ({cartTotalCount} items)</span>
                  <span className="font-semibold text-white">₹{cartSubtotal.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between text-[#C0A080] font-semibold">
                  <span>Discount</span>
                  <span>-₹{cartDiscount.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between text-[#808080]">
                  <span>Delivery Charges</span>
                  <div className="flex items-center gap-1.5">
                    <span className="line-through text-[#606060]">₹150</span>
                    <span className="text-[#C0A080] font-bold uppercase">Free</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1F1F1F] flex justify-between items-baseline">
                  <span className="text-sm font-bold text-white">Total Amount</span>
                  <span className="text-2xl font-bold text-white">
                    ₹{cartTotalAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Savings Announcement */}
              <div className="p-3 bg-[#C0A080]/10 rounded-xl border border-[#C0A080]/20 text-xs text-[#C0A080] flex items-center gap-2 font-medium">
                <Sparkles className="w-4 h-4 text-[#C0A080] shrink-0" />
                <span>You will save ₹{cartDiscount.toLocaleString('en-IN')} on this order!</span>
              </div>

              {/* Proceed to Checkout CTA */}
              <button
                onClick={() => {
                  setCurrentScreen('checkout');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full bg-[#C0A080] hover:bg-[#B39373] text-black py-3.5 px-6 rounded-2xl text-sm font-bold shadow-lg shadow-[#C0A080]/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-[#808080]">
                <ShieldCheck className="w-4 h-4 text-[#C0A080]" />
                <span>Safe and Secure Payments. 100% Authentic products.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Recommended for you Section (Matching Mockup 4 bottom) */}
      <div className="pt-10 border-t border-[#1F1F1F] space-y-6">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Recommended for you</h2>
          <p className="text-xs text-[#808080] mt-0.5">Popular companion accessories matching your cart items</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {recommendedItems.map(item => (
            <div 
              key={item.id}
              className="bg-[#141414] rounded-2xl border border-[#1F1F1F] p-5 flex flex-col sm:flex-row items-center gap-5 hover:border-[#C0A080]/60 transition-all shadow-sm"
            >
              <div 
                onClick={() => navigateToProduct(item.id)}
                className="w-28 h-28 bg-[#181818] border border-[#262626] rounded-xl p-3 flex items-center justify-center shrink-0 cursor-pointer overflow-hidden"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex-1 space-y-2 text-center sm:text-left">
                <span className="text-[10px] font-bold text-[#C0A080] uppercase tracking-wider">{item.brand}</span>
                <h3 
                  onClick={() => navigateToProduct(item.id)}
                  className="text-sm font-semibold text-white hover:text-[#C0A080] cursor-pointer line-clamp-1 transition-colors"
                >
                  {item.name}
                </h3>
                
                <div className="flex items-center justify-center sm:justify-start gap-1 text-xs text-[#C0A080]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-bold text-white">{item.rating}</span>
                  <span className="text-[#808080]">({item.reviewsCount})</span>
                </div>

                <div className="flex items-baseline justify-center sm:justify-start gap-2">
                  <span className="text-base font-bold text-white">₹{item.price.toLocaleString('en-IN')}</span>
                  {item.originalPrice && (
                    <span className="text-xs text-[#606060] line-through">₹{item.originalPrice.toLocaleString('en-IN')}</span>
                  )}
                </div>

                <button
                  onClick={() => addToCart(item)}
                  className="bg-[#1A1A1A] hover:bg-[#C0A080] hover:text-black text-white border border-[#2A2A2A] px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 w-full sm:w-auto"
                >
                  <ShoppingCart className="w-3 h-3" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
