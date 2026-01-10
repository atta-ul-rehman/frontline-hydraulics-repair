import React from 'react';
import { Phone } from 'lucide-react';

const FloatingCallButton: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <a 
        href="tel:555-123-4567"
        className="flex items-center gap-2 bg-brand-orange text-white font-bold py-3 px-6 rounded-full shadow-2xl border-2 border-white animate-pulse hover:animate-none transition-all transform active:scale-95"
      >
        <Phone className="w-5 h-5 fill-current" />
        <span>CALL DISPATCH</span>
      </a>
    </div>
  );
};

export default FloatingCallButton;