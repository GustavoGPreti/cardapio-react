import React, { useState, useRef, useEffect } from 'react';
import './Cart.css';
import { useCart } from './cartcontext';
import { CartItem } from './productcard';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, addItem, removeItem, getTotal, getTotalItems, clearCart } = useCart();
  const cartRef = useRef(null);

  const handleCheckout = () => {
    if (items.size > 0) {
      alert(`Pedido finalizado! Total: R$ ${getTotal()}`);
      clearCart();
      setIsOpen(false);
    }
  };

  // Fechar o carrinho quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="cart-container" ref={cartRef}>
      <button 
        className="cart-button" 
        aria-label="Abrir carrinho"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="cart-icon">🛒</span>
        {getTotalItems() > 0 && (
          <span className="cart-count">
            {getTotalItems()}
          </span>
        )}
      </button>
      
      {isOpen && (
        <div className="cart-dropdown">
          <h3>Seu Carrinho</h3>
          <div className="cart-items">
            {Array.from(items.values()).map(item => (
              <CartItem 
                key={item.id}
                item={item}
                onIncrement={addItem}
                onDecrement={removeItem}
              />
            ))}
            {items.size === 0 && (
              <p className="cart-empty">Seu carrinho está vazio</p>
            )}
          </div>
          <div className="cart-total">
            <span>Total:</span>
            <span className="total-amount">R$ {getTotal()}</span>
          </div>
          {items.size > 0 && (
            <button 
              className="checkout-button"
              onClick={handleCheckout}
            >
              Finalizar Pedido
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;