import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

interface HomePageProps {
  onShowModal: () => void;
}

const Home: React.FC<HomePageProps> = ({ onShowModal }) => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-inner">
          <h1 className="hero-heading">Gastronomía</h1>
          <p className="hero-subtext">
            Experimenta la auténtica cocina regional en un ambiente elegante y acogedor. 
            Más de 40 años sirviendo tradición y excelencia culinaria.
          </p>
          <button className="hero-cta-button" onClick={onShowModal}>
            Reserva Tu Mesa
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-wrapper">
          <div className="services-layout">
            <div className="service-item dining-experience">
              <div className="service-overlay-content">
                <h3>Experiencias Gastronómicas</h3>
                <p>Descubre sabores únicos en un ambiente sofisticado</p>
                <Link to="/services" className="service-link-button">
                  Nuestros Servicios
                </Link>
              </div>
            </div>
            <div className="service-item events-experience">
              <div className="service-overlay-content">
                <h3>Eventos Privados</h3>
                <p>Celebra ocasiones especiales con nuestro servicio personalizado</p>
                <Link to="/events" className="service-link-button">
                  Planea Tu Evento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-wrapper">
          <div className="story-content-box">
            <h2>Nuestra Historia</h2>
            <p>
              Durante más de cuatro décadas, BOB TORONJA ha sido sinónimo de excelencia 
              gastronómica en Santa Fe. Nuestra pasión por la hospitalidad y la tradición 
              se refleja en cada plato que servimos. Combinamos técnicas culinarias 
              contemporáneas con ingredientes locales de la más alta calidad, creando 
              experiencias memorables para nuestros comensales.
            </p>
            <Link to="/about" className="story-link-button">
              Conoce Más Sobre Nosotros
            </Link>
          </div>
        </div>
      </section>

      {/* Final Actions Section */}
      <section className="final-actions-section">
        <div className="actions-wrapper">
          <div className="actions-layout">
            <div className="action-item contact-action">
              <div className="action-overlay-content">
                <h3>Contacto</h3>
                <p>Ponte en contacto con nosotros para cualquier consulta</p>
                <button className="action-cta-button" onClick={onShowModal}>
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
          
          <div className="reservations-block">
            <div className="reservations-inner">
              <h3>Reservaciones</h3>
              <p>Vive una experiencia gastronómica inolvidable en nuestro restaurante</p>
              <button className="reservations-cta-button" onClick={onShowModal}>
                Reserva Una Mesa
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
