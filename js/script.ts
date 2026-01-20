// Restaurant Website Interactive Functions - TypeScript Version

interface ReservationData {
    restaurant: string;
    location: string;
    message: string;
}

class RestaurantWebsite {
    private header: HTMLElement | null;
    private navigationLinks: NodeListOf<HTMLAnchorElement>;
    
    constructor() {
        this.header = document.querySelector('.header');
        this.navigationLinks = document.querySelectorAll('.navigation a');
        
        this.init();
    }
    
    private init(): void {
        this.setupSmoothScrolling();
        this.setupHeaderScrollEffect();
        this.setupButtonInteractions();
        this.setupMobileMenu();
    }
    
    // Smooth scrolling for navigation links
    private setupSmoothScrolling(): void {
        this.navigationLinks.forEach((link: HTMLAnchorElement) => {
            link.addEventListener('click', (e: Event) => {
                e.preventDefault();
                const targetId: string | null = link.getAttribute('href');
                if (targetId) {
                    this.scrollToSection(targetId);
                }
            });
        });
    }
    
    // Scroll to specific section with offset for fixed header
    private scrollToSection(targetId: string): void {
        const targetElement: Element | null = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight: number = this.header ? this.header.offsetHeight : 80;
            const targetPosition: number = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Header effect on scroll
    private setupHeaderScrollEffect(): void {
        let lastScrollY: number = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY: number = window.scrollY;
            const scrollDirection: string = currentScrollY > lastScrollY ? 'down' : 'up';
            
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
    private setupButtonInteractions(): void {
        const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');
        
        buttons.forEach((button: HTMLButtonElement) => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'scale(1.05)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'scale(1)';
            });
            
            button.addEventListener('click', (e: Event) => {
                this.handleButtonClick(e.target as HTMLButtonElement);
            });
        });
    }
    
    // Handle different button actions
    private handleButtonClick(button: HTMLButtonElement): void {
        const buttonText: string = button.textContent?.trim() || '';
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
    private openOnlineOrdering(): void {
        this.showComingSoonAlert(
            'Pedidos En Línea',
            'Funcionalidad de pedidos en línea próximamente disponible.'
        );
    }
    

    
    // Open contact form (placeholder)
    private openContactForm(): void {
        this.showCustomAlert(
            'Contacto',
            'Para ponerte en contacto con nosotros:\n\nTeléfono: (555) 123-4567\nEmail: info@bobtoronja.com\nDirección: Rabo Duro, Salcedo',
            'Aceptar'
        );
    }
    
    // Coming soon alert
    private showComingSoonAlert(title: string, message: string): void {
        console.log('Showing coming soon alert:', title, message);
        this.showCustomAlert(title, message, 'Entendido');
    }
    
    // Custom alert function
    private showCustomAlert(title: string, message: string, buttonText: string): void {
        // Create overlay
        const overlay: HTMLDivElement = document.createElement('div');
        overlay.className = 'alert-overlay';
        
        // Create alert container
        const alertBox: HTMLDivElement = document.createElement('div');
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
        const closeButton: HTMLButtonElement | null = alertBox.querySelector('.alert-button');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                document.body.removeChild(overlay);
                document.body.removeChild(alertBox);
            });
        }
        
        // Close on overlay click
        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
            document.body.removeChild(alertBox);
        });
        
        // Close on Escape key
        const closeOnEscape = (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                document.body.removeChild(overlay);
                document.body.removeChild(alertBox);
                document.removeEventListener('keydown', closeOnEscape);
            }
        };
        document.addEventListener('keydown', closeOnEscape);
    }
    
    // Mobile menu functionality
    private setupMobileMenu(): void {
        // Create mobile menu toggle
        const mobileToggle: HTMLDivElement = document.createElement('div');
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
                const nav: Element | null | undefined = this.header?.querySelector('.navigation');
                if (nav) {
                    nav.classList.toggle('mobile-active');
                }
            });
        }
        
        // Add responsive styles for mobile
        this.addMobileStyles();
    }
    
    // Add dynamic mobile styles
    private addMobileStyles(): void {
        const style: HTMLStyleElement = document.createElement('style');
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
    const restaurantWebsite: RestaurantWebsite = new RestaurantWebsite();
    
    // Log initialization
    console.log('Website initialized successfully');
    console.log('Restaurant: BOB TORONJA');
    console.log('Location: Rabo Duro, Salcedo');
});

// Export for potential module usage
export { RestaurantWebsite };