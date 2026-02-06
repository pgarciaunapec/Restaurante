import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page-container">
      <section className="about-page-banner">
        <div className="about-banner-inner">
          <h1 className="about-page-title">Sobre Nosotros</h1>
          <p className="about-page-tagline">Más de 40 años de excelencia gastronómica</p>
        </div>
      </section>

      <section className="about-main-content">
        <div className="about-content-container">
          <div className="about-story-block text-centered">
            <h2 className="section-heading">Nuestra Historia</h2>
            <div className="content-row-centered">
              <div className="content-column-wide">
                <p className="large-text">
                  Durante más de cuatro décadas, BOB TORONJA ha sido sinónimo de excelencia gastronómica en Rabo Duro. 
                  Nuestra pasión por la hospitalidad y la tradición se refleja en cada plato que servimos. Combinamos 
                  técnicas culinarias contemporáneas con ingredientes locales de la más alta calidad, creando experiencias 
                  memorables para nuestros comensales que buscan algo más que una comida: buscan un momento para recordar.
                </p>
              </div>
            </div>
          </div>

          <div className="about-journey-block">
            <h2 className="section-heading text-centered">Nuestro Viaje</h2>
            <div className="content-row-split">
              <div className="content-column-half">
                <p className="regular-text">
                  Desde sus inicios, BOB TORONJA nació con la visión de convertirse en un punto de encuentro donde la 
                  buena mesa, el servicio cercano y el respeto por las raíces culinarias convivieran en perfecta armonía. 
                  A lo largo de los años, el restaurante ha evolucionado sin perder su esencia, adaptándose a los nuevos 
                  tiempos mientras honra las recetas, sabores y valores que le dieron identidad. Cada detalle desde la 
                  selección de ingredientes hasta la presentación final es el resultado de un compromiso constante con 
                  la excelencia.
                </p>
              </div>
              <div className="content-column-half">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0" 
                  alt="Nuestro Viaje" 
                  className="content-image rounded-image shadowed-image"
                />
              </div>
            </div>
          </div>

          <div className="about-present-block">
            <h2 className="section-heading text-centered">Hoy en Día</h2>
            <div className="content-row-split">
              <div className="content-column-half">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
                  alt="Hoy en Día" 
                  className="content-image rounded-image shadowed-image"
                />
              </div>
              <div className="content-column-half">
                <p className="regular-text">
                  Hoy, BOB TORONJA representa una historia viva que se renueva día a día. Nuestro equipo de chefs y 
                  anfitriones trabaja con dedicación para ofrecer una experiencia auténtica, donde el sabor, la calidez 
                  y la innovación se unen en cada visita. Más que un restaurante, somos parte de la historia gastronómica 
                  de Santa Fe, un lugar donde tradición y modernidad se encuentran para celebrar el placer de comer bien.
                </p>
              </div>
            </div>
          </div>

          <div className="mission-vision-wrapper">
            <div className="mission-vision-container">
              <div className="mv-cards-row">
                <div className="mv-card-column">
                  <div className="mv-card text-centered">
                    <h3 className="mv-card-title">
                      <span className="mv-icon">🍽️</span>
                      Nuestra Misión
                    </h3>
                    <p className="mv-card-text">
                      Brindar una experiencia gastronómica excepcional que combine la riqueza de la cocina tradicional 
                      dominicana con toques contemporáneos, ofreciendo servicios de alta calidad en un ambiente acogedor 
                      que celebre nuestra cultura y hospitalidad.
                    </p>
                  </div>
                </div>
                <div className="mv-card-column">
                  <div className="mv-card text-centered">
                    <h3 className="mv-card-title">
                      <span className="mv-icon">⭐</span>
                      Nuestra Visión
                    </h3>
                    <p className="mv-card-text">
                      Ser reconocidos como el referente de la gastronomía dominicana en Santa Fe, preservando nuestras 
                      raíces culturales mientras continuamos innovando y superando las expectativas de nuestros clientes 
                      con cada visita.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
