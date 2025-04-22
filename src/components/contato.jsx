import React, { useState, useRef, useEffect } from 'react';
import './Cart.css';
import './contatocss.css';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contato = () => {
    return (
        <section id="contato" className="contact-section">
            <div className="container">
                <div className="contact-header animated">
                    <h2>Entre em <span>Contato</span></h2>
                    <p>Estamos ansiosos para atender seu pedido especial</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info animated">
                        <div className="info-item">
                            <div className="icon">
                                <MapPin />
                            </div>
                            <div className="info-text">
                                <h3>Localização</h3>
                                <p>Rua dos Doces, 123</p>
                                <p>São Paulo, SP</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon">
                                <Phone />
                            </div>
                            <div className="info-text">
                                <h3>WhatsApp</h3>
                                <p>(11) 98765-4321</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon">
                                <Mail />
                            </div>
                            <div className="info-text">
                                <h3>Email</h3>
                                <p>contato@caseirinhos.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon">
                                <Clock />
                            </div>
                            <div className="info-text">
                                <h3>Horários de Atendimento</h3>
                                <p>Segunda - Sexta: 8h às 18h</p>
                                <p>Sábado: 9h às 15h</p>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-link">
                                <Instagram />
                            </a>
                            <a href="#" className="social-link">
                                <Facebook />
                            </a>
                            <a href="#" className="social-link">
                                <MessageCircle />
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container animated">
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" id="nome" name="nome" placeholder="Seu nome completo" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Seu email" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefone">Telefone</label>
                                <input type="tel" id="telefone" name="telefone" placeholder="Seu WhatsApp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="assunto">Assunto</label>
                                <select id="assunto" name="assunto">
                                    <option value="encomenda">Encomenda de Bolo</option>
                                    <option value="orcamento">Orçamento</option>
                                    <option value="informacao">Informações</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea id="mensagem" name="mensagem" placeholder="Detalhes do seu pedido ou mensagem" rows="5" required></textarea>
                            </div>

                            <button type="submit" className="btn-primary">Enviar Mensagem</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contato;