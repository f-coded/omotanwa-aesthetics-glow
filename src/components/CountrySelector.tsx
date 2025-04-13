
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountry } from '@/contexts/CountryContext';
import { Button } from '@/components/ui/button';

const CountrySelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { country, setCountry } = useCountry();
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const selectCountry = (selected: 'USA' | 'Nigeria') => {
    setCountry(selected);
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-sm"
      >
        <span>{country === 'USA' ? '🇺🇸' : '🇳🇬'}</span>
        <span>{country}</span>
        <ChevronDown size={16} />
      </Button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-1 w-36 bg-white rounded-lg shadow-md py-1 z-50"
          >
            <button
              className="w-full text-left px-4 py-2 text-sm hover:bg-brand-50 flex items-center space-x-2"
              onClick={() => selectCountry('USA')}
            >
              <span>🇺🇸</span>
              <span>USA</span>
              {country === 'USA' && (
                <span className="ml-auto text-brand-600">✓</span>
              )}
            </button>
            <button
              className="w-full text-left px-4 py-2 text-sm hover:bg-brand-50 flex items-center space-x-2"
              onClick={() => selectCountry('Nigeria')}
            >
              <span>🇳🇬</span>
              <span>Nigeria</span>
              {country === 'Nigeria' && (
                <span className="ml-auto text-brand-600">✓</span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountrySelector;
