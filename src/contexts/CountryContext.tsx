import React, { createContext, useContext, useState, ReactNode } from "react";

type Country = "USA" | "NGN";

interface CountryContextType {
  country: Country;
  setCountry: (country: Country) => void;
  formatPrice: (price: number) => string;
  exchangeRate: number;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [country, setCountry] = useState<Country>("USA");

  // Exchange rate: 1 USD = X NGN (Nigerian Naira)
  const exchangeRate = 1500;

  const formatPrice = (price: number): string => {
    if (country === "USA") {
      return `$${price.toFixed(2)}`;
    } else {
      // Convert USD to NGN
      const ngnPrice = price * exchangeRate;
      return `₦${ngnPrice.toLocaleString()}`;
    }
  };

  return (
    <CountryContext.Provider
      value={{ country, setCountry, formatPrice, exchangeRate }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = (): CountryContextType => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
};
