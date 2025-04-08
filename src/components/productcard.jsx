import React from 'react';
import { useState } from 'react';
import './ProductCard.css';
// Componente do Card de Produto
export const ProductCard = ({ produto, onAddToCart }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        onAddToCart(produto);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 1000);
    };

    return (
        <article className="product-card">
            <div className="product-image">
                {produto.tags && (
                    <div className="product-tags">
                        {produto.tags.map(tag => (
                            <span
                                key={tag}
                                className={`product-tag ${tag.toLowerCase().replace(' ', '-')}`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <img src={produto.imagem} alt={produto.nome} />
            </div>
            <div className="product-info">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <div className="product-footer">
                    <div className="product-price">{produto.preco}</div>
                    <button
                        className="btn-secondary add-to-cart"
                        onClick={handleAddToCart}
                    >
                        {isAdded ? 'Adicionado!' : 'Adicionar'}
                    </button>
                </div>
            </div>
        </article>
    );
};

// Componente do Item do Carrinho
export const CartItem = ({ item, onIncrement, onDecrement }) => {
    return (
        <div className="cart-item">
            <img src={item.imagem} alt={item.nome} />
            <div className="cart-item-info">
                <div className="cart-item-title">{item.nome}</div>
                <div className="cart-item-price">{item.preco}</div>
                <div className="cart-item-quantity">
                    <button
                        className="quantity-button minus"
                        onClick={() => onDecrement(item.id)}
                        aria-label={`Remover um ${item.nome}`}
                    >
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                        className="quantity-button plus"
                        onClick={() => onIncrement(item.id, item)}
                        aria-label={`Adicionar um ${item.nome}`}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

