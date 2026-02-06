import React from 'react';
import './Events.css';

interface EventsPageProps {
  onShowModal: () => void;
}

const Events: React.FC<EventsPageProps> = ({ onShowModal }) => {
  return (
    <div className="events-page-container">
      <section className="events-page-banner">
        <div className="events-banner-inner">
          <h1 className="events-page-title">Eventos Privados</h1>
          <p className="events-page-tagline">Celebra momentos especiales en BOB TORONJA</p>
        </div>
      </section>

      <section className="events-main-content">
        <div className="events-content-container">
          <div className="events-intro-block">
            <h2 className="events-section-heading">Un Espacio Para Tus Celebraciones</h2>
            <p className="events-intro-text">
              Nuestro restaurante ofrece espacios privados ideales para bodas, cumpleaños, reuniones corporativas 
              y eventos especiales. Con un servicio personalizado y una cocina excepcional, hacemos de tu evento 
              una experiencia inolvidable.
            </p>
          </div>

          <div className="events-features-grid">
            <div className="event-feature-card">
              <h3 className="feature-card-title">🎉 Eventos Sociales</h3>
              <p className="feature-card-description">
                Bodas, aniversarios, cumpleaños y celebraciones familiares con menús personalizados.
              </p>
            </div>

            <div className="event-feature-card">
              <h3 className="feature-card-title">💼 Eventos Corporativos</h3>
              <p className="feature-card-description">
                Reuniones de negocios, conferencias y cenas empresariales en un ambiente profesional.
              </p>
            </div>

            <div className="event-feature-card">
              <h3 className="feature-card-title">🍽️ Menús Personalizados</h3>
              <p className="feature-card-description">
                Diseñamos menús especiales adaptados a tus preferencias y necesidades dietéticas.
              </p>
            </div>

            <div className="event-feature-card">
              <h3 className="feature-card-title">🎵 Ambiente Especial</h3>
              <p className="feature-card-description">
                Decoración, música y servicio adaptados para crear la atmósfera perfecta.
              </p>
            </div>
          </div>

          <div className="events-cta-block">
            <h3 className="cta-block-heading">¿Listo para planear tu evento?</h3>
            <p className="cta-block-text">
              Contáctanos para discutir los detalles de tu evento y recibir una cotización personalizada.
            </p>
            <button className="events-contact-button" onClick={onShowModal}>
              Solicitar Información
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
