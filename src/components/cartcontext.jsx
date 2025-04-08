import React, { createContext, useContext, useState } from 'react';

// Criando o contexto
const CartContext = createContext();

// Hook personalizado para usar o contexto do carrinho
export const useCart = () => useContext(CartContext);

// Provider do contexto do carrinho
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(new Map());

  const formatPrice = (price) => {
    return parseFloat(price.replace('R$ ', '').replace(',', '.'));
  };

  const addItem = (id, item) => {
    setItems(prevItems => {
      const newItems = new Map(prevItems);
      const currentQty = newItems.get(id)?.quantity || 0;
      
      newItems.set(id, {
        ...item,
        quantity: currentQty + 1,
        priceNumber: formatPrice(item.preco)
      });
      
      return newItems;
    });
  };

  const removeItem = (id) => {
    setItems(prevItems => {
      const newItems = new Map(prevItems);
      const item = newItems.get(id);
      
      if (item && item.quantity > 1) {
        item.quantity--;
        newItems.set(id, item);
      } else {
        newItems.delete(id);
      }
      
      return newItems;
    });
  };

  const getTotal = () => {
    let total = 0;
    for (const item of items.values()) {
      total += item.priceNumber * item.quantity;
    }
    return total.toFixed(2);
  };

  const getTotalItems = () => {
    let total = 0;
    for (const item of items.values()) {
      total += item.quantity;
    }
    return total;
  };

  const clearCart = () => {
    setItems(new Map());
  };

  const value = {
    items,
    addItem,
    removeItem,
    getTotal,
    getTotalItems,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;