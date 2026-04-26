import { createContext, useContext, useState } from "react";

const QuoteContext = createContext();

export function QuoteProvider({ children }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <QuoteContext.Provider value={{ quoteOpen, openQuote: () => setQuoteOpen(true), closeQuote: () => setQuoteOpen(false) }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  return useContext(QuoteContext);
}