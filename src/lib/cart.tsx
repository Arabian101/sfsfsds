import React, { createContext, useContext, useState } from 'react';
import products, { type Product } from '@/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  add: (slug: string, qty?: number) => void;
  totalCount: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const MAX_QUANTITY = 10;

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const add = (slug: string, qty = 1) => {
    const product = products.products ? null : products.find((p) => p.slug === slug);
    if (!product) return;
    setItems((prev) => {
      const existing = prev.find((i) => i.product.slug === slug);
      if (existing) {
        return prev.map((i) =>
          i.product.slug === slug ? { ...i, quantity: Math.min(MAX_QUANTITY, i.quantity + qty) } : i
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    setIsOpen(true);
  };

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, add, totalCount, subtotal, isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}