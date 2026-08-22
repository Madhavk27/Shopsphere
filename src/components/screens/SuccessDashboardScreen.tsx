import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Package, 
  Truck, 
  Heart, 
  MapPin, 
  User, 
  ChevronRight, 
  ExternalLink, 
  Clock, 
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Bell,
  Settings,
  LogOut,
  RotateCcw
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { OrderTrackModal } from '../OrderTrackModal';
import { Order } from '../../types';
import { PRODUCTS } from '../../data/products';

export const SuccessDashboardScreen: React.FC = () => {
  const { 
    orders, 
    latestPlacedOrder, 
    setCurrentScreen, 
    trackingOrder, 
    setTrackingOrder, 
    addresses, 
    wishlist,
    navigateToProduct,
    showToast
  } = useShop();

  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'addresses' | 'settings'>('orders');

  const wishlistedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  // Determine which order to highlight in celebration box
  const highlightOrder = latestPlacedOrder || orders[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* 1. Order Placed Celebration Banner (Matching Mockup 6 Top) */}
      {highlightOrder && (
        <div className="bg-linear-to-r from-[#141414] via-[#1A1A1A] to-[#141414] border border-[#262626] rounded-3xl p-6 sm:p-8 text-[#E5E5E5] shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-start gap-4 z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#C0A080] text-black flex items-center justify-center shrink-0 shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C0A080] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Order Confirmed</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Order #{highlightOrder.id}
              </h1>
              <p className="text-xs text-[#A3A3A3] max-w-xl">
                Thank you, <strong className="text-white">{highlightOrder.address.name}</strong>! Your order has been placed and is currently being packed for express courier dispatch.
              </p>
              <p className="text-xs text-[#C0A080] font-semibold pt-1">
                Estimated Delivery: {highlightOrder.estimatedDelivery}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 z-10 w-full md:w-auto">
            <button
              onClick={() => setTrackingOrder(highlightOrder)}
              className="bg-[#C0A080] hover:bg-[#B39373] text-black px-6 py-3 rounded-xl text-xs font-bold shadow-md transition-all hover:scale-105 flex items-center justify-center gap-2 flex-1 md:flex-initial"
            >
              <Truck className="w-4 h-4" />
              <span>Track Order</span>
            </button>
            <button
              onClick={() => setCurrentScreen('home')}
              className="bg-[#1F1F1F] hover:bg-[#262626] text-white border border-[#2A2A2A] px-5 py-3 rounded-xl text-xs font-semibold backdrop-blur-xs transition-colors flex items-center justify-center gap-2 flex-1 md:flex-initial"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 2. Account Dashboard Layout: Sidebar (3 cols) + Content (9 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar Profile & Navigation (3 cols) */}
        <aside className="lg:col-span-3 space-y-4">
          <div className="bg-[#141414] rounded-2xl border border-[#1F1F1F] p-5 shadow-xl space-y-4 text-[#E5E5E5]">
            {/* User Profile Card */}
            <div className="flex items-center gap-3 pb-4 border-b border-[#1F1F1F]">
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A] text-[#C0A080] border border-[#262626] flex items-center justify-center font-bold text-lg shadow-sm">
                AP
              </div>
              <div className="overflow-hidden">
                <h3 className="text-sm font-bold text-white truncate">Arjun Patel</h3>
                <p className="text-[11px] text-[#808080] truncate">arjun.patel@corporate.in</p>
              </div>
            </div>

            {/* Menu Links */}
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                  activeTab === 'orders'
                    ? 'bg-[#1F1F1F] text-[#C0A080] border border-[#2A2A2A]'
                    : 'text-[#808080] hover:bg-[#1A1A1A] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Package className="w-4 h-4" />
                  <span>My Orders</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  activeTab === 'orders' ? 'bg-[#C0A080] text-black font-bold' : 'bg-[#1A1A1A] text-[#808080]'
                }`}>
                  {orders.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('wishlist')}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                  activeTab === 'wishlist'
                    ? 'bg-[#1F1F1F] text-[#C0A080] border border-[#2A2A2A]'
                    : 'text-[#808080] hover:bg-[#1A1A1A] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Heart className="w-4 h-4" />
                  <span>My Wishlist</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  activeTab === 'wishlist' ? 'bg-[#C0A080] text-black font-bold' : 'bg-[#1A1A1A] text-[#808080]'
                }`}>
                  {wishlist.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('addresses')}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors ${
                  activeTab === 'addresses'
                    ? 'bg-[#1F1F1F] text-[#C0A080] border border-[#2A2A2A]'
                    : 'text-[#808080] hover:bg-[#1A1A1A] hover:text-white'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>Saved Addresses</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-colors ${
                  activeTab === 'settings'
                    ? 'bg-[#1F1F1F] text-[#C0A080] border border-[#2A2A2A]'
                    : 'text-[#808080] hover:bg-[#1A1A1A] hover:text-white'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>Account Settings</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Right Dashboard Content (9 cols) */}
        <main className="lg:col-span-9 space-y-6">
          {/* Summary Stat Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#141414] p-5 rounded-2xl border border-[#1F1F1F] shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] text-[#C0A080] border border-[#262626] flex items-center justify-center shrink-0">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-[#808080] font-semibold uppercase tracking-wider">Total Orders</p>
                <h4 className="text-xl font-bold text-white">{orders.length + 8}</h4>
              </div>
            </div>

            <div className="bg-[#141414] p-5 rounded-2xl border border-[#1F1F1F] shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] text-[#C0A080] border border-[#262626] flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-[#808080] font-semibold uppercase tracking-wider">Active Shipments</p>
                <h4 className="text-xl font-bold text-white">
                  {orders.filter(o => o.status === 'Processing' || o.status === 'Shipped').length}
                </h4>
              </div>
            </div>

            <div className="bg-[#141414] p-5 rounded-2xl border border-[#1F1F1F] shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] text-[#C0A080] border border-[#262626] flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-[#808080] font-semibold uppercase tracking-wider">Saved Wishlist</p>
                <h4 className="text-xl font-bold text-white">{wishlist.length} items</h4>
              </div>
            </div>
          </div>

          {/* Orders Tab View */}
          {activeTab === 'orders' && (
            <div className="bg-[#141414] rounded-2xl border border-[#1F1F1F] p-6 shadow-xl space-y-6 text-[#E5E5E5]">
              <div className="flex items-center justify-between pb-4 border-b border-[#1F1F1F]">
                <h2 className="text-lg font-bold text-white">Order History</h2>
                <span className="text-xs text-[#808080]">Showing recent deliveries & active orders</span>
              </div>

              <div className="space-y-4">
                {orders.map((ord) => (
                  <div 
                    key={ord.id}
                    className="border border-[#1F1F1F] rounded-2xl p-5 bg-[#181818] hover:border-[#C0A080]/60 transition-all space-y-4 shadow-sm"
                  >
                    {/* Header line */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#262626]">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-white">Order #{ord.id}</span>
                        <span className="text-xs text-[#808080]">Placed: {ord.date}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                          ord.status === 'Delivered'
                            ? 'bg-[#C0A080]/15 text-[#C0A080] border border-[#C0A080]/30'
                            : 'bg-[#1F1F1F] text-white border border-[#2A2A2A]'
                        }`}>
                          {ord.status}
                        </span>
                      </div>
                    </div>

                    {/* Items row */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        {ord.items.map((item, idx) => (
                          <div 
                            key={idx} 
                            onClick={() => navigateToProduct(item.productId)}
                            className="flex items-center gap-2.5 bg-[#141414] p-2 rounded-xl border border-[#262626] cursor-pointer hover:border-[#C0A080]/50 transition-colors"
                          >
                            <img
                              src={item.productImage}
                              alt={item.productName}
                              className="w-10 h-10 object-contain rounded bg-[#1F1F1F] p-0.5 border border-[#2A2A2A]"
                              referrerPolicy="no-referrer"
                            />
                            <div className="text-left max-w-[180px]">
                              <p className="text-xs font-bold text-white truncate">{item.productName}</p>
                              <p className="text-[11px] text-[#808080]">Qty: {item.quantity} · ₹{item.price.toLocaleString('en-IN')}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        <div className="text-right">
                          <span className="text-[11px] text-[#808080] block">Total Amount</span>
                          <span className="text-sm font-bold text-white">₹{ord.total.toLocaleString('en-IN')}</span>
                        </div>

                        <button
                          onClick={() => setTrackingOrder(ord)}
                          className="bg-[#C0A080] hover:bg-[#B39373] text-black px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                        >
                          <Truck className="w-3.5 h-3.5" />
                          <span>Track Package</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wishlist Tab View */}
          {activeTab === 'wishlist' && (
            <div className="bg-[#141414] rounded-2xl border border-[#1F1F1F] p-6 shadow-xl space-y-6 text-[#E5E5E5]">
              <h2 className="text-lg font-bold text-white">My Wishlist ({wishlist.length} items)</h2>
              {wishlistedProducts.length === 0 ? (
                <p className="text-xs text-[#808080]">Your wishlist is currently empty.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {wishlistedProducts.map(p => (
                    <div key={p.id} className="p-4 border border-[#262626] bg-[#181818] rounded-xl flex items-center gap-4">
                      <img src={p.imageUrl} alt={p.name} className="w-14 h-14 object-contain bg-[#141414] rounded-lg p-1 border border-[#262626]" referrerPolicy="no-referrer" />
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-white line-clamp-1">{p.name}</h4>
                        <p className="text-xs font-bold text-[#C0A080]">₹{p.price.toLocaleString('en-IN')}</p>
                        <button 
                          onClick={() => navigateToProduct(p.id)}
                          className="text-xs font-semibold text-[#C0A080] hover:underline mt-1 block"
                        >
                          View Details →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Addresses Tab View */}
          {activeTab === 'addresses' && (
            <div className="bg-[#141414] rounded-2xl border border-[#1F1F1F] p-6 shadow-xl space-y-4 text-[#E5E5E5]">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">Saved Addresses</h2>
                <button 
                  onClick={() => showToast('New address form')}
                  className="bg-[#C0A080] hover:bg-[#B39373] text-black px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors"
                >
                  + Add Address
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {addresses.map(addr => (
                  <div key={addr.id} className="p-4 rounded-xl border border-[#262626] bg-[#181818] space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{addr.name}</span>
                      {addr.isDefault && (
                        <span className="text-[10px] bg-[#C0A080] text-black px-2 py-0.5 rounded font-bold">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-[#A3A3A3]">{addr.addressLine}, {addr.city}, {addr.state} - {addr.pincode}</p>
                    <p className="text-[#808080]">Phone: {addr.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab View */}
          {activeTab === 'settings' && (
            <div className="bg-[#141414] rounded-2xl border border-[#1F1F1F] p-6 shadow-xl space-y-4 text-xs text-[#E5E5E5]">
              <h2 className="text-lg font-bold text-white">Account Preferences</h2>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 border border-[#262626] bg-[#181818] rounded-xl cursor-pointer">
                  <span>Order status SMS and WhatsApp alerts</span>
                  <input type="checkbox" defaultChecked className="accent-[#C0A080]" />
                </label>
                <label className="flex items-center justify-between p-3 border border-[#262626] bg-[#181818] rounded-xl cursor-pointer">
                  <span>Promotional email digest for weekly deals</span>
                  <input type="checkbox" defaultChecked className="accent-[#C0A080]" />
                </label>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Live Order Tracking Modal */}
      {trackingOrder && (
        <OrderTrackModal
          order={trackingOrder}
          onClose={() => setTrackingOrder(null)}
        />
      )}
    </div>
  );
};
