import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { HomeScreen } from './components/screens/HomeScreen';
import { CategoryListingScreen } from './components/screens/CategoryListingScreen';
import { ProductDetailScreen } from './components/screens/ProductDetailScreen';
import { CartScreen } from './components/screens/CartScreen';
import { CheckoutScreen } from './components/screens/CheckoutScreen';
import { SuccessDashboardScreen } from './components/screens/SuccessDashboardScreen';

const MainContent: React.FC = () => {
  const { currentScreen } = useShop();

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#E5E5E5]">
      <Header />
      
      <main className="flex-1 bg-[#0F0F0F]">
        {currentScreen === 'home' && <HomeScreen />}
        {currentScreen === 'category' && <CategoryListingScreen />}
        {currentScreen === 'product-detail' && <ProductDetailScreen />}
        {currentScreen === 'cart' && <CartScreen />}
        {currentScreen === 'checkout' && <CheckoutScreen />}
        {currentScreen === 'success-dashboard' && <SuccessDashboardScreen />}
      </main>

      {/* Render footer on all screens except the streamlined checkout */}
      {currentScreen !== 'checkout' && <Footer />}
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}
