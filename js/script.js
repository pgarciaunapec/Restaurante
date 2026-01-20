// Restaurant Website Interactive Functions - JavaScript Version

class RestaurantWebsite {
    constructor() {
        this.header = document.querySelector('.header');
        this.navigationLinks = document.querySelectorAll('.navigation a');
        
        this.init();
    }
    
    init() {
        this.setupSmoothScrolling();
        this.setupHeaderScrollEffect();
        this.setupButtonInteractions();
        this.setupMobileMenu();
    }
    
    // Smooth scrolling for navigation links
    setupSmoothScrolling() {
        this.navigationLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                if (targetId) {
                    this.scrollToSection(targetId);
                }
            });
        });
    }
    
    // Scroll to specific section with offset for fixed header
    scrollToSection(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = this.header ? this.header.offsetHeight : 80;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Header effect on scroll
    setupHeaderScrollEffect() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
            
            if (this.header) {
                if (scrollDirection === 'down' && currentScrollY > 100) {
                    this.header.style.transform = 'translateY(-100%)';
                } else {
                    this.header.style.transform = 'translateY(0)';
                }
                
                // Add shadow when scrolled
                if (currentScrollY > 50) {
                    this.header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
                } else {
                    this.header.style.boxShadow = 'none';
                }
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    // Button interaction effects
    setupButtonInteractions() {
        const buttons = document.querySelectorAll('button');
        
        buttons.forEach((button) => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'scale(1.05)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'scale(1)';
            });
            
            button.addEventListener('click', (e) => {
                this.handleButtonClick(e.target);
            });
        });
    }
    
    // Handle different button actions
    handleButtonClick(button) {
        const buttonText = button.textContent?.trim() || '';
        console.log('Button clicked:', buttonText);
        
        switch (buttonText) {
            case 'Ordenar En Línea':
                this.openOnlineOrdering();
                break;
            case 'Reserva Tu Mesa':
            case 'Reserva Una Mesa':
                this.showComingSoonAlert('Reservaciones', 'Esta función estará disponible próximamente.');
                break;
            case 'Nuestros Servicios':
                this.showComingSoonAlert('Nuestros Servicios', 'Esta función estará disponible próximamente.');
                break;
            case 'Planea Tu Evento':
                this.showComingSoonAlert('Eventos Privados', 'Esta función estará disponible próximamente.');
                break;
            case 'Conoce Más Sobre Nosotros':
                this.showComingSoonAlert('Sobre Nosotros', 'Esta función estará disponible próximamente.');
                break;
            case 'Enviar Mensaje':
                this.openContactForm();
                break;
            default:
                console.log('Button clicked:', buttonText);
        }
    }
    
    // Open online ordering (placeholder)
    openOnlineOrdering() {
        this.showComingSoonAlert(
            'Pedidos En Línea',
            'Funcionalidad de pedidos en línea próximamente disponible.'
        );
    }
    
    // Open contact form (placeholder)
    openContactForm() {
        this.showCustomAlert(
            'Contacto',
            'Para ponerte en contacto con nosotros:\n\nTeléfono: (555) 123-4567\nEmail: info@bobtoronja.com\nDirección: Rapa Jincao, Río San Juan',
            'Aceptar'
        );
    }
    
    // Coming soon alert
    showComingSoonAlert(title, message) {
        console.log('Showing coming soon alert:', title, message);
        this.showCustomAlert(title, message, 'Entendido');
    }
    
    // Custom alert function
    showCustomAlert(title, message, buttonText) {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'alert-overlay';
        
        // Create alert container
        const alertBox = document.createElement('div');
        alertBox.className = 'custom-alert';
        
        // Create content
        alertBox.innerHTML = `
            <h3>${title}</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <button class="alert-button">${buttonText}</button>
        `;
        
        // Add to DOM
        document.body.appendChild(overlay);
        document.body.appendChild(alertBox);
        
        // Close on button click
        const closeButton = alertBox.querySelector('.alert-button');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                document.body.removeChild(overlay);
                document.body.removeChild(alertBox);
            });
        }
        
        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
                document.body.removeChild(alertBox);
            }
        });
        
        // Close on Escape key
        const closeOnEscape = (e) => {
            if (e.key === 'Escape') {
                document.body.removeChild(overlay);
                document.body.removeChild(alertBox);
                document.removeEventListener('keydown', closeOnEscape);
            }
        };
        document.addEventListener('keydown', closeOnEscape);
    }
    
    // Mobile menu functionality
    setupMobileMenu() {
        // Create mobile menu toggle
        const mobileToggle = document.createElement('div');
        mobileToggle.className = 'mobile-toggle';
        mobileToggle.innerHTML = '☰';
        mobileToggle.style.cssText = `
            display: none;
            position: absolute;
            right: 20px;
            top: 25px;
            font-size: 2rem;
            color: white;
            cursor: pointer;
            z-index: 1001;
        `;
        
        if (this.header) {
            this.header.appendChild(mobileToggle);
            
            // Show/hide mobile menu
            mobileToggle.addEventListener('click', () => {
                const nav = this.header.querySelector('.navigation');
                if (nav) {
                    nav.classList.toggle('mobile-active');
                }
            });
        }
        
        // Add responsive styles for mobile
        this.addMobileStyles();
    }
    
    // Add dynamic mobile styles
    addMobileStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .mobile-toggle {
                    display: block !important;
                }
                
                .navigation {
                    position: fixed;
                    top: 80px;
                    left: -100%;
                    width: 100%;
                    height: calc(100vh - 80px);
                    background-color: rgba(0, 0, 0, 0.95);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: left 0.3s ease;
                    z-index: 999;
                }
                
                .navigation.mobile-active {
                    left: 0;
                }
                
                .navigation ul {
                    flex-direction: column;
                    gap: 30px;
                }
                
                .navigation a {
                    font-size: 1.5rem;
                    padding: 10px 20px;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const restaurantWebsite = new RestaurantWebsite();
    
    // Log initialization
    console.log('Website initialized successfully');
    console.log('Restaurant: BOB TORONJA');
    console.log('Location: Rabo Duro, Salcedo');
});