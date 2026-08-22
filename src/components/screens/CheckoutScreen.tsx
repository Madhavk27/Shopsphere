import React, { useState } from 'react';
import { 
  Check, 
  MapPin, 
  Truck, 
  CreditCard, 
  ShieldCheck, 
  Lock, 
  Sparkles,
  Smartphone,
  Building2,
  Banknote,
  Plus
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { Address } from '../../types';

export const CheckoutScreen: React.FC = () => {
  const { 
    cart, 
    cartSubtotal, 
    cartDiscount, 
    addresses, 
    selectedAddress, 
    setSelectedAddress, 
    placeOrder, 
    showToast 
  } = useShop();

  const [deliveryType, setDeliveryType] = useState<'Standard' | 'Express'>('Standard');
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'Net Banking' | 'COD'>('UPI');
  const [upiId, setUpiId] = useState('arjunpatel@okaxis');
  const [upiVerified, setUpiVerified] = useState(true);
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8821');
  const [cardExpiry, setCardExpiry] = useState('08/28');
  const [cardCvv, setCardCvv] = useState('432');
  const [isChangingAddress, setIsChangingAddress] = useState(false);
  const [isPlacing, setIsPlacing] = useState(false);

  const shippingCost = deliveryType === 'Express' ? 150 : 0;
  const actualItemsPrice = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const finalTotal = actualItemsPrice + shippingCost;

  const handlePlaceOrder = () => {
    setIsPlacing(true);
    setTimeout(() => {
      placeOrder(deliveryType, paymentMethod);
      setIsPlacing(false);
    }, 800);
  };

  const handleVerifyUpi = () => {
    if (upiId.includes('@')) {
      setUpiVerified(true);
      showToast('UPI ID verified successfully (Arjun Patel)');
    } else {
      showToast('Please enter a valid UPI ID (e.g. user@bank)');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* 1. Multi-Step Progress Indicator */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-[#262626] -z-1"></div>
          
          {/* Step 1: Cart */}
          <div className="flex flex-col items-center gap-1.5 bg-[#0A0A0A] px-3 z-10">
            <div className="w-9 h-9 rounded-full bg-[#C0A080] text-black flex items-center justify-center text-xs font-bold shadow-xs">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="text-xs font-semibold text-white">1. Cart</span>
          </div>

          {/* Step 2: Address */}
          <div className="flex flex-col items-center gap-1.5 bg-[#0A0A0A] px-3 z-10">
            <div className="w-9 h-9 rounded-full bg-[#1A1A1A] text-[#C0A080] border border-[#C0A080]/50 ring-4 ring-[#C0A080]/15 flex items-center justify-center text-xs font-bold shadow-xs">
              2
            </div>
            <span className="text-xs font-bold text-white">2. Address</span>
          </div>

          {/* Step 3: Delivery */}
          <div className="flex flex-col items-center gap-1.5 bg-[#0A0A0A] px-3 z-10">
            <div className="w-9 h-9 rounded-full bg-[#1A1A1A] text-[#C0A080] border border-[#C0A080]/50 ring-4 ring-[#C0A080]/15 flex items-center justify-center text-xs font-bold shadow-xs">
              3
            </div>
            <span className="text-xs font-bold text-white">3. Delivery</span>
          </div>

          {/* Step 4: Payment */}
          <div className="flex flex-col items-center gap-1.5 bg-[#0A0A0A] px-3 z-10">
            <div className="w-9 h-9 rounded-full bg-[#1A1A1A] text-[#C0A080] border border-[#C0A080]/50 ring-4 ring-[#C0A080]/15 flex items-center justify-center text-xs font-bold shadow-xs">
              4
            </div>
            <span className="text-xs font-bold text-white">4. Payment</span>
          </div>
        </div>
      </div>

      {/* 2. Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Forms & Options (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Section 1: Delivery Address */}
          <div className="bg-[#141414] rounded-2xl border border-[#1F1F1F] p-6 shadow-xl space-y-4 text-[#E5E5E5]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#C0A080] border border-[#262626] flex items-center justify-center font-bold text-xs">
                  <MapPin className="w-4 h-4 text-[#C0A080]" />
                </div>
                <h2 className="text-base font-bold text-white">1. Delivery Address</h2>
              </div>
              
              <button
                onClick={() => setIsChangingAddress(!isChangingAddress)}
                className="text-xs font-bold text-[#C0A080] hover:text-[#E5D5C5] border border-[#2A2A2A] px-3 py-1.5 rounded-lg hover:bg-[#1A1A1A] transition-colors"
              >
                {isChangingAddress ? 'Done' : 'CHANGE ADDRESS'}
              </button>
            </div>

            {/* Address selector / card */}
            {!isChangingAddress ? (
              <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#262626] flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{selectedAddress.name}</span>
                    <span className="text-[10px] bg-[#C0A080] text-black px-2 py-0.5 rounded font-bold uppercase">
                      Home
                    </span>
                    <span className="text-xs text-[#808080] font-medium">{selectedAddress.phone}</span>
                  </div>
                  <p className="text-xs text-[#A3A3A3] mt-1.5">
                    {selectedAddress.addressLine}, {selectedAddress.city}, {selectedAddress.state} - <strong className="text-white">{selectedAddress.pincode}</strong>
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-3 pt-2">
                {addresses.map((addr) => (
                  <div
                    key={addr.id}
                    onClick={() => {
                      setSelectedAddress(addr);
                      setIsChangingAddress(false);
                    }}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedAddress.id === addr.id
                        ? 'border-[#C0A080] bg-[#1F1F1F] shadow-sm'
                        : 'border-[#262626] hover:bg-[#1A1A1A]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{addr.name}</span>
                      {selectedAddress.id === addr.id && (
                        <span className="text-[10px] font-bold text-black bg-[#C0A080] px-2 py-0.5 rounded">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#808080] mt-1">
                      {addr.addressLine}, {addr.city} - {addr.pincode}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 2: Delivery Speed Options */}
          <div className="bg-[#141414] rounded-2xl border border-[#1F1F1F] p-6 shadow-xl space-y-4 text-[#E5E5E5]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#C0A080] border border-[#262626] flex items-center justify-center font-bold text-xs">
                <Truck className="w-4 h-4 text-[#C0A080]" />
              </div>
              <h2 className="text-base font-bold text-white">2. Choose Delivery Speed</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => setDeliveryType('Standard')}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  deliveryType === 'Standard'
                    ? 'border-[#C0A080] bg-[#1F1F1F] ring-2 ring-[#C0A080]/30'
                    : 'border-[#262626] hover:bg-[#1A1A1A]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Standard Delivery</span>
                  <span className="text-xs font-bold text-[#C0A080]">FREE</span>
                </div>
                <p className="text-xs text-[#808080] mt-1">Estimated: Oct 26 - Oct 28</p>
                <p className="text-[10px] text-[#606060] mt-0.5">Reliable surface express courier</p>
              </div>

              <div
                onClick={() => setDeliveryType('Express')}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  deliveryType === 'Express'
                    ? 'border-[#C0A080] bg-[#1F1F1F] ring-2 ring-[#C0A080]/30'
                    : 'border-[#262626] hover:bg-[#1A1A1A]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Express Priority Delivery</span>
                  <span className="text-xs font-bold text-white">₹150</span>
                </div>
                <p className="text-xs text-[#C0A080] font-semibold mt-1">Guaranteed Tomorrow by 8 PM</p>
                <p className="text-[10px] text-[#606060] mt-0.5">Dispatched via air priority courier</p>
              </div>
            </div>
          </div>

          {/* Section 3: Payment Options */}
          <div className="bg-[#141414] rounded-2xl border border-[#1F1F1F] p-6 shadow-xl space-y-5 text-[#E5E5E5]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#C0A080] border border-[#262626] flex items-center justify-center font-bold text-xs">
                <CreditCard className="w-4 h-4 text-[#C0A080]" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">3. Select Payment Method</h2>
                <p className="text-[11px] text-[#808080]">All transactions are end-to-end 256-bit encrypted</p>
              </div>
            </div>

            <div className="space-y-3">
              {/* UPI Option */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  paymentMethod === 'UPI' ? 'border-[#C0A080] bg-[#1F1F1F]' : 'border-[#262626] bg-[#141414]'
                }`}
              >
                <label 
                  onClick={() => setPaymentMethod('UPI')}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'UPI'}
                      onChange={() => setPaymentMethod('UPI')}
                      className="accent-[#C0A080]"
                    />
                    <Smartphone className="w-4 h-4 text-[#C0A080]" />
                    <span className="text-xs font-bold text-white">
                      UPI (Google Pay, PhonePe, Paytm, BHIM)
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-black bg-[#C0A080] px-2 py-0.5 rounded">
                    FASTEST
                  </span>
                </label>

                {paymentMethod === 'UPI' && (
                  <div className="mt-4 pt-3 border-t border-[#2A2A2A] space-y-2">
                    <p className="text-xs text-[#808080]">Enter your UPI Virtual Payment Address (VPA):</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@okhdfcbank"
                        className="bg-[#141414] border border-[#2A2A2A] rounded-xl px-3.5 py-2 text-xs font-semibold text-white flex-1 focus:ring-2 focus:ring-[#C0A080] focus:outline-none"
                      />
                      <button
                        onClick={handleVerifyUpi}
                        className="bg-[#C0A080] hover:bg-[#B39373] text-black px-4 py-2 rounded-xl text-xs font-bold transition-colors"
                      >
                        Verify
                      </button>
                    </div>
                    {upiVerified && (
                      <p className="text-[11px] text-[#C0A080] font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        Verified account for Arjun Patel
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Credit / Debit Card Option */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  paymentMethod === 'Card' ? 'border-[#C0A080] bg-[#1F1F1F]' : 'border-[#262626] bg-[#141414]'
                }`}
              >
                <label 
                  onClick={() => setPaymentMethod('Card')}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'Card'}
                      onChange={() => setPaymentMethod('Card')}
                      className="accent-[#C0A080]"
                    />
                    <CreditCard className="w-4 h-4 text-[#C0A080]" />
                    <span className="text-xs font-bold text-white">Credit / Debit / ATM Card</span>
                  </div>
                  <span className="text-[10px] text-[#808080]">Visa, Mastercard, RuPay</span>
                </label>

                {paymentMethod === 'Card' && (
                  <div className="mt-4 pt-3 border-t border-[#2A2A2A] space-y-3">
                    <div>
                      <label className="text-[11px] font-semibold text-[#808080]">Card Number</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="16-digit Card Number"
                        className="w-full bg-[#141414] border border-[#2A2A2A] rounded-xl px-3.5 py-2 text-xs font-semibold text-white mt-1 focus:ring-2 focus:ring-[#C0A080] focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-semibold text-[#808080]">Valid Thru (MM/YY)</label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="MM/YY"
                          className="w-full bg-[#141414] border border-[#2A2A2A] rounded-xl px-3.5 py-2 text-xs font-semibold text-white mt-1 focus:ring-2 focus:ring-[#C0A080] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-[#808080]">CVV</label>
                        <input
                          type="password"
                          maxLength={4}
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          placeholder="3 or 4 digits"
                          className="w-full bg-[#141414] border border-[#2A2A2A] rounded-xl px-3.5 py-2 text-xs font-semibold text-white mt-1 focus:ring-2 focus:ring-[#C0A080] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Net Banking */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  paymentMethod === 'Net Banking' ? 'border-[#C0A080] bg-[#1F1F1F]' : 'border-[#262626] bg-[#141414]'
                }`}
              >
                <label 
                  onClick={() => setPaymentMethod('Net Banking')}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'Net Banking'}
                      onChange={() => setPaymentMethod('Net Banking')}
                      className="accent-[#C0A080]"
                    />
                    <Building2 className="w-4 h-4 text-[#C0A080]" />
                    <span className="text-xs font-bold text-white">Net Banking</span>
                  </div>
                  <span className="text-[10px] text-[#808080]">All Major Indian Banks</span>
                </label>
              </div>

              {/* Cash On Delivery */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  paymentMethod === 'COD' ? 'border-[#C0A080] bg-[#1F1F1F]' : 'border-[#262626] bg-[#141414]'
                }`}
              >
                <label 
                  onClick={() => setPaymentMethod('COD')}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'COD'}
                      onChange={() => setPaymentMethod('COD')}
                      className="accent-[#C0A080]"
                    />
                    <Banknote className="w-4 h-4 text-[#C0A080]" />
                    <span className="text-xs font-bold text-white">Cash on Delivery (COD)</span>
                  </div>
                  <span className="text-[10px] text-[#808080]">Pay cash or UPI upon delivery</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary & Instant Place Order (4 cols) */}
        <div className="lg:col-span-4 sticky top-24 space-y-4">
          <div className="bg-[#141414] rounded-2xl border border-[#1F1F1F] p-6 shadow-xl space-y-5 text-[#E5E5E5]">
            <h2 className="text-base font-bold text-white tracking-tight pb-3 border-b border-[#1F1F1F]">
              Order Summary ({cart.length} items)
            </h2>

            {/* Thumbnails row */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {cart.map(item => (
                <div key={item.product.id} className="w-12 h-12 bg-[#181818] rounded-lg p-1 border border-[#262626] shrink-0 flex items-center justify-center">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="max-h-full max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-[#808080]">
                <span>Items Subtotal</span>
                <span className="font-semibold text-white">₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between text-[#C0A080] font-semibold">
                <span>Special Promotion Discount</span>
                <span>-₹{cartDiscount.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between text-[#808080]">
                <span>Delivery Charge</span>
                <span>{shippingCost === 0 ? <strong className="text-[#C0A080]">FREE</strong> : `₹${shippingCost}`}</span>
              </div>

              <div className="pt-4 border-t border-[#1F1F1F] flex justify-between items-baseline">
                <span className="text-sm font-bold text-white">Total to Pay</span>
                <span className="text-2xl font-bold text-white">
                  ₹{finalTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Place Order CTA */}
            <button
              disabled={isPlacing}
              onClick={handlePlaceOrder}
              className="w-full bg-[#C0A080] hover:bg-[#B39373] text-black py-4 px-6 rounded-2xl text-sm font-bold shadow-xl shadow-[#C0A080]/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-75"
            >
              <Lock className="w-4 h-4" />
              <span>{isPlacing ? 'Processing Order...' : `Pay ₹${finalTotal.toLocaleString('en-IN')}`}</span>
            </button>

            <div className="pt-2 text-center space-y-1">
              <p className="text-[11px] text-[#808080]">
                By placing the order, you agree to ShopSphere's Terms & Conditions.
              </p>
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#C0A080] font-bold pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>256-Bit SSL Encrypted & Bank Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
