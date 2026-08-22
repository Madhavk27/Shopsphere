import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Headphones, Mail, Phone, MapPin } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Footer: React.FC = () => {
  const { setCurrentScreen, navigateToCategory } = useShop();

  return (
    <footer className="bg-[#0A0A0A] text-[#808080] border-t border-[#1F1F1F] mt-16">
      {/* Value Propositions / Trust Strip */}
      <div className="border-b border-[#1F1F1F] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-[#1F1F1F]">
              <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-[#C0A080] shrink-0 border border-[#262626]">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Free Express Shipping</h4>
                <p className="text-xs text-[#808080] mt-0.5">On all orders above ₹499 across India</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-[#1F1F1F]">
              <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-[#C0A080] shrink-0 border border-[#262626]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">100% Genuine Products</h4>
                <p className="text-xs text-[#808080] mt-0.5">Direct brand warranty & verification</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-[#1F1F1F]">
              <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-[#C0A080] shrink-0 border border-[#262626]">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">7-Day Easy Replacement</h4>
                <p className="text-xs text-[#808080] mt-0.5">No-questions-asked replacement policy</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-[#1F1F1F]">
              <div className="w-12 h-12 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-[#C0A080] shrink-0 border border-[#262626]">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">24/7 Dedicated Support</h4>
                <p className="text-xs text-[#808080] mt-0.5">Toll-free customer hotline and live chat</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#C0A080] to-[#E5D5C5] flex items-center justify-center text-black font-black text-lg">
                S
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Shop<span className="text-[#C0A080]">Sphere</span>
              </span>
            </div>
            <p className="text-xs text-[#808080] leading-relaxed max-w-sm">
              ShopSphere is India's leading digital electronics platform delivering authentic devices, flagship smartphones, lifestyle accessories, and premium tech with guaranteed next-day dispatch.
            </p>
            <div className="pt-2 text-xs text-[#808080] space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C0A080]" />
                <span>Hotline: 1800-419-0157 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C0A080]" />
                <span>support@shopsphere.corporate.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C0A080] shrink-0" />
                <span>ShopSphere HQ, Cyber City Phase 2, Gurugram, Haryana 122002</span>
              </div>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Shop Categories</h4>
            <ul className="space-y-2 text-xs text-[#808080]">
              <li>
                <button onClick={() => navigateToCategory('Mobiles', 'Mobiles & Smartphones')} className="hover:text-[#C0A080] transition-colors">
                  Flagship Smartphones
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('Electronics', 'Audio & Headphones')} className="hover:text-[#C0A080] transition-colors">
                  Audio & Headphones
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('Electronics', 'Laptops & Computers')} className="hover:text-[#C0A080] transition-colors">
                  Laptops & Computers
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('Electronics', 'Smart Watches')} className="hover:text-[#C0A080] transition-colors">
                  Smart Watches & Wearables
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('Fashion', 'Men Fashion')} className="hover:text-[#C0A080] transition-colors">
                  Fashion & Footwear
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('Beauty', 'Skincare')} className="hover:text-[#C0A080] transition-colors">
                  Beauty & Personal Care
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Customer Care</h4>
            <ul className="space-y-2 text-xs text-[#808080]">
              <li>
                <button onClick={() => setCurrentScreen('success-dashboard')} className="hover:text-[#C0A080] transition-colors">
                  Track Your Order
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentScreen('success-dashboard')} className="hover:text-[#C0A080] transition-colors">
                  Manage Account & Addresses
                </button>
              </li>
              <li><span className="hover:text-[#C0A080] cursor-pointer transition-colors">Shipping & Delivery Rates</span></li>
              <li><span className="hover:text-[#C0A080] cursor-pointer transition-colors">Returns & Refunds Policy</span></li>
              <li><span className="hover:text-[#C0A080] cursor-pointer transition-colors">Terms of Service & Privacy</span></li>
              <li><span className="hover:text-[#C0A080] cursor-pointer transition-colors">Security & Trust Center</span></li>
            </ul>
          </div>

          {/* Quick Demo Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Mockup Screens</h4>
            <ul className="space-y-2 text-xs text-[#808080]">
              <li>
                <button onClick={() => setCurrentScreen('home')} className="hover:text-[#C0A080] transition-colors">
                  1. Home Storefront
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCategory('Mobiles')} className="hover:text-[#C0A080] transition-colors">
                  2. Smartphone Catalog
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentScreen('product-detail')} className="hover:text-[#C0A080] transition-colors">
                  3. Product Detail (Galaxy S25)
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentScreen('cart')} className="hover:text-[#C0A080] transition-colors">
                  4. Shopping Cart
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentScreen('checkout')} className="hover:text-[#C0A080] transition-colors">
                  5. Multi-Step Checkout
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentScreen('success-dashboard')} className="hover:text-[#C0A080] transition-colors">
                  6. Account & Order Success
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-[#1F1F1F] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#606060] gap-4">
          <p>© {new Date().getFullYear()} ShopSphere Technologies Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#808080] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#808080] cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-[#808080] cursor-pointer">Security Certifications</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
