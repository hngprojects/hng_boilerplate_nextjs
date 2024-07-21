export const formatPrice = (amount: number, locale: string, currency: string): string => {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
  };
  
  // Example usage:
  // formatPrice(45000, 'en-US', 'USD'); // "$45,000.00"
  // formatPrice(45000, 'de-DE', 'EUR'); // "45.000,00 €"
  