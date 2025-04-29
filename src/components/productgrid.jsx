import React, { useState, useEffect } from 'react';
import './ProductGrid.css';
import { ProductCard } from './productcard';
import { useCart } from './cartcontext';

const ProductGrid = ({ products, title, description, withFilters = false, id }) => {
    const { addItem } = useCart();
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [activeCategory, setActiveCategory] = useState('todos');
    const [activeTag, setActiveTag] = useState('todos');

    const categories = ['todos', 'tradicional', 'premium'];
    const tags = ['todos', 'sem glúten', 'sem lactose', 'novo'];

    useEffect(() => {
        if (withFilters) {
            filterProducts(activeCategory, activeTag);
        }
    }, [activeCategory, activeTag, products, withFilters]);

    const filterProducts = (category, tag) => {
        const filtered = products.filter(product => {
            const matchCategory = category === 'todos' || product.categoria === category;
            const matchTag = tag === 'todos' || (product.tags && product.tags.includes(tag));
            return matchCategory && matchTag;
        });

        setFilteredProducts(filtered);
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const handleTagChange = (tag) => {
        setActiveTag(tag);
    };

    return (
        <section id={id} className="menu-section">
            <div className="section-header">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            {withFilters && (
                <div className="filtros">
                    <div className="filtro-grupo">
                        <label>Categoria:</label>
                        <div className="filtro-botoes">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`filtro-btn ${category === activeCategory ? 'active' : ''}`}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="filtro-grupo">
                        <label>Filtrar por:</label>
                        <div className="filtro-botoes">
                            {tags.map(tag => (
                                <button
                                    key={tag}
                                    className={`filtro-btn ${tag === activeTag ? 'active' : ''}`}
                                    onClick={() => handleTagChange(tag)}
                                >
                                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="products-grid" role="menu" aria-label={`Lista de ${title.toLowerCase()}`}>
                {filteredProducts.map(produto => (
                    <ProductCard
                        key={produto.id}
                        produto={produto}
                        onAddToCart={(produto) => addItem(produto.id, produto)}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;