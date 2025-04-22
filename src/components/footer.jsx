import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './footer.css'; // Importando o arquivo CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo e descrição */}
          <div className="footer-section">
            <h2 className="footer-title">Empresa</h2>
            <p className="footer-description">
              Oferecemos soluções inovadoras para transformar sua experiência digital.
              Nossa missão é criar produtos que façam a diferença.
            </p>
          </div>
          
          {/* Links úteis */}
          <div className="footer-section">
            <h3 className="footer-title">Links Úteis</h3>
            <ul className="footer-links">
              <li><a href="#">Início</a></li>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div className="footer-section">
            <h3 className="footer-title">Contato</h3>
            <ul className="footer-links">
              <li className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>Av. Paulista, 1000, São Paulo - SP</span>
              </li>
              <li className="contact-item">
                <Phone size={18} className="contact-icon" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="contact-item">
                <Mail size={18} className="contact-icon" />
                <span>contato@empresa.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-title">Newsletter</h3>
            <p className="footer-description">Inscreva-se para receber novidades e ofertas exclusivas.</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Seu email"
                className="newsletter-input"
              />
              <button className="newsletter-button">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
        
        {/* Redes sociais e copyright */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Empresa. Todos os direitos reservados.
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-icon">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-icon">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-icon">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}