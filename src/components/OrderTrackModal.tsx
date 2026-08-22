import React from 'react';
import { X, Check, Truck, Package, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { Order } from '../types';

interface OrderTrackModalProps {
  order: Order | null;
  onClose: () => void;
}

export const OrderTrackModal: React.FC<OrderTrackModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const steps = [
    { title: 'Order Confirmed', time: 'Today, 10:45 AM', done: true, desc: 'Your order was verified and sent to fulfillment' },
    { title: 'Packed at Warehouse', time: 'Today, 01:20 PM', done: true, desc: 'Quality checked and securely packaged' },
    { title: 'Dispatched in Transit', time: 'Today, 04:30 PM', done: order.status !== 'Processing', active: order.status === 'Processing', desc: 'Handed over to BlueDart Air Express (AWB: #BD982710492)' },
    { title: 'Out for Delivery', time: 'Tomorrow morning', done: order.status === 'Delivered', desc: 'Driver will contact you via phone' },
    { title: 'Delivered', time: order.estimatedDelivery, done: order.status === 'Delivered', desc: 'Package delivered at your doorstep' }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#141414] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#262626] space-y-6 relative max-h-[90vh] overflow-y-auto text-[#E5E5E5]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#808080] hover:text-white hover:bg-[#1F1F1F] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#C0A080] uppercase tracking-wider">
            <Truck className="w-4 h-4" />
            <span>Live Shipment Tracking</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">Order #{order.id}</h2>
          <p className="text-xs text-[#808080] mt-0.5">
            Estimated Delivery: <strong className="text-[#C0A080]">{order.estimatedDelivery}</strong>
          </p>
        </div>

        {/* Courier Info Banner */}
        <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#262626] flex items-center justify-between text-xs">
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-bold text-[#C0A080]">Courier Partner</span>
            <p className="font-bold text-white">BlueDart Air Express (Priority)</p>
            <p className="text-[11px] text-[#808080]">AWB Tracking: BD-9827-10492-IN</p>
          </div>
          <span className="bg-[#C0A080] text-black px-2.5 py-1 rounded-full text-[10px] font-bold">
            IN TRANSIT
          </span>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-6 pl-2 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-4 relative">
              {idx < steps.length - 1 && (
                <div 
                  className={`absolute left-4 top-8 w-0.5 h-12 -translate-x-1/2 ${
                    step.done ? 'bg-[#C0A080]' : 'bg-[#262626]'
                  }`}
                />
              )}

              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold z-10 ${
                  step.done 
                    ? 'bg-[#C0A080] text-black' 
                    : step.active 
                    ? 'bg-[#141414] text-[#C0A080] border-2 border-[#C0A080] ring-4 ring-[#C0A080]/20' 
                    : 'bg-[#1F1F1F] text-[#606060] border border-[#2A2A2A]'
                }`}
              >
                {step.done ? <Check className="w-4 h-4 stroke-[3]" /> : idx + 1}
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold ${step.done || step.active ? 'text-white' : 'text-[#606060]'}`}>
                    {step.title}
                  </span>
                  <span className="text-[11px] text-[#808080]">({step.time})</span>
                </div>
                <p className="text-xs text-[#808080]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping Address */}
        <div className="pt-4 border-t border-[#262626] space-y-1 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-white">
            <MapPin className="w-3.5 h-3.5 text-[#C0A080]" />
            <span>Delivery Destination:</span>
          </div>
          <p className="text-[#A3A3A3] pl-5">
            {order.address.name} · {order.address.addressLine}, {order.address.city} {order.address.pincode}
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#C0A080] hover:bg-[#B39373] text-black py-3 rounded-xl text-xs font-bold transition-colors"
        >
          Close Tracking
        </button>
      </div>
    </div>
  );
};
