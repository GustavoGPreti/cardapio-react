import React from 'react';
import { CartProvider } from './components/cartcontext';
import Cart from './components/cart';
import ProductGrid from './components/productgrid';
import { produtos } from './components/produtos';
import Contato from './components/contato';
import Footer from './components/footer';
import { useState } from 'react';
import './styles/App.css'; // Atualizar o import do CSS
import './components/NavMenu.css';
import navimg from './components/images/images.jpeg';

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>

        <header>
          <div className="container">
            <div className="logo">
              <img src={navimg} alt="Logotipo da Caseirinhos Cakes" width="50" height="50" />
              <h1>Caseirinhos do <span>Gustavo</span></h1>
            </div>

            <NavMenu />
            <Cart />
          </div>
        </header>

        <div className="hero">
          <div className="container">
            <h2>Sabores que encantam</h2>
            <p>Bolos artesanais preparados com amor e ingredientes selecionados</p>
            <a href="#bolos" className="btn-primary">Ver Cardápio</a>
          </div>
        </div>

        <main id="main-content">
          <div className="container">
            <ProductGrid
              products={produtos.bolos}
              title="Nossos Bolos"
              description="Deliciosas opções feitas com carinho para você"
              withFilters={true}
            />

            <ProductGrid
              products={produtos.bebidas}
              title="Bebidas Refrescantes"
              description="O complemento perfeito para suas sobremesas"
            />
          </div>
        </main>

        <section id="contato" className="contact-section">
          <Contato />
        </section>

        <footer>
          
          <Footer/>
        </footer>
      </div>
    </CartProvider>
  );
};

// Componente de Menu de Navegação
const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <button
        className="nav-toggle"
        aria-label="Abrir menu de navegação"
        aria-expanded={isOpen}
        aria-controls="nav-menu"
        onClick={handleMenuClick}
      >
        <span className="hamburger"></span>
      </button>

      <nav aria-label="Navegação principal">
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`} id="nav-menu" role="menubar">
          <li role="none"><a href="#bolos" role="menuitem" onClick={closeMenu}>Bolos</a></li>
          <li role="none"><a href="#bebidas" role="menuitem" onClick={closeMenu}>Bebidas</a></li>
          <li role="none"><a href="#contato" role="menuitem" onClick={closeMenu}>Contato</a></li>
        </ul>
      </nav>
    </>
  );
};

export default App;