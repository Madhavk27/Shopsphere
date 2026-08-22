import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="bg-[#1A1A1A] text-white px-5 py-3 rounded-2xl shadow-2xl border border-[#2A2A2A] flex items-center gap-3 text-xs font-semibold">
        <CheckCircle2 className="w-4 h-4 text-[#C0A080] shrink-0" />
        <span className="text-[#E5E5E5]">{toastMessage}</span>
      </div>
    </div>
  );
};
