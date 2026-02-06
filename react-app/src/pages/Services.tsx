import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <div className="services-page-container">
      <section className="services-page-banner">
        <div className="services-banner-inner">
          <h1 className="services-page-title">Nuestros Servicios</h1>
          <p className="services-page-tagline">Experiencias gastronómicas excepcionales</p>
        </div>
      </section>

      <section className="services-main-content">
        <div className="services-content-container">
          <div className="services-intro-block">
            <h2 className="services-section-heading">Lo Que Ofrecemos</h2>
            <p className="services-intro-text">
              En BOB TORONJA, nos dedicamos a ofrecer servicios de alta calidad que superan las expectativas. 
              Desde comidas íntimas hasta grandes celebraciones, nuestro equipo está comprometido con la 
              excelencia en cada detalle.
            </p>
          </div>

          <div className="services-offerings-grid">
            <div className="service-offering-card">
              <h3 className="offering-card-title">🍴 Servicio de Restaurante</h3>
              <p className="offering-card-description">
                Disfruta de nuestra cocina excepcional en un ambiente elegante y acogedor. Nuestro menú combina 
                tradición y modernidad para crear platos memorables.
              </p>
            </div>

            <div className="service-offering-card">
              <h3 className="offering-card-title">🚚 Servicio de Entrega</h3>
              <p className="offering-card-description">
                Lleva la experiencia BOB TORONJA a tu hogar con nuestro servicio de entrega. Comida fresca y 
                deliciosa entregada con cuidado.
              </p>
            </div>

            <div className="service-offering-card">
              <h3 className="offering-card-title">🎊 Catering para Eventos</h3>
              <p className="offering-card-description">
                Servicio de catering completo para eventos de cualquier tamaño. Menús personalizados y servicio 
                profesional garantizado.
              </p>
            </div>

            <div className="service-offering-card">
              <h3 className="offering-card-title">🏢 Espacios Privados</h3>
              <p className="offering-card-description">
                Salones privados disponibles para reuniones, celebraciones y eventos especiales con capacidad 
                flexible.
              </p>
            </div>

            <div className="service-offering-card">
              <h3 className="offering-card-title">👨‍🍳 Chef Personalizado</h3>
              <p className="offering-card-description">
                Servicio de chef a domicilio para eventos especiales. Experiencia culinaria personalizada en la 
                comodidad de tu hogar.
              </p>
            </div>

            <div className="service-offering-card">
              <h3 className="offering-card-title">🍷 Cata de Vinos</h3>
              <p className="offering-card-description">
                Eventos especiales de cata de vinos con maridaje de platos. Una experiencia educativa y deliciosa 
                para los amantes del vino.
              </p>
            </div>
          </div>

          <div className="services-quality-block">
            <h3 className="quality-block-heading">Nuestro Compromiso con la Calidad</h3>
            <p className="quality-block-text">
              Utilizamos ingredientes frescos de origen local, técnicas culinarias probadas y un servicio al 
              cliente excepcional para garantizar que cada experiencia en BOB TORONJA sea memorable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
