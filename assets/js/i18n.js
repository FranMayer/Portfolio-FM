// Internationalization (i18n) System
const translations = {
    es: {
        // Navigation
        nav: {
            home: "Inicio",
            about: "Acerca de mi",
            skills: "Skills",
            qualification: "Curriculum",
            services: "Servicios",
            portfolio: "Portfolio",
            contact: "Contacto"
        },
        // Home Section
        home: {
            greeting: "Hola! 👋",
            title: 'Soy <span class="typing-text"></span>',
            description: "Con mas de un año de experiencia en mejorar la vida de los usuarios a través de la web.",
            cta: 'Conoceme!<i class="fas fa-user"></i>'
        },
        // Typed.js strings
        typedStrings: ['proactividad', 'innovación', 'versatilidad', 'desarrollador web'],
        // About Section
        about: {
            title: 'Acerca de <span>mí</span>',
            description: `¡Hola! Soy <strong>Fran Mayer</strong>, desarrollador <strong>frontend</strong> con pasión por crear interfaces web modernas, funcionales y centradas en la experiencia del usuario.  
                    <br><br>
                    Hace un par de años comencé mi camino en el mundo del desarrollo web, y desde entonces no he dejado de aprender ni de desafiarme. Actualmente, estoy ampliando mis conocimientos hacia el área de <strong>QA Automation</strong>, con el objetivo de convertirme en un profesional integral que entienda tanto el desarrollo como la calidad del software.  
                    <br><br>
                    Disfruto enfrentar nuevos retos, escribir código limpio y seguir las mejores prácticas del sector. Me motiva mantenerme actualizado con las últimas tendencias tecnológicas y aprender constantemente.  
                    <br><br>
                    Fuera del código, me gusta el <strong>fútbol</strong>, la <strong>naturaleza</strong> y compartir conocimientos con otros apasionados de la tecnología. Creo firmemente en el poder de la comunidad y en el aprendizaje colaborativo.  
                    <br><br>
                    Si buscás a alguien comprometido, curioso y con ganas de seguir creciendo, ¡me encantaría que conectemos!`,
            downloadCV: 'Descargar CV <i class="fas fa-download"></i>'
        },
        // Skills Section
        skills: {
            title: 'Mis <span>habilidades</span>'
        },
        // Qualification Section
        qualification: {
            title: 'Mi <span>curriculum</span>',
            job1: {
                date: "Jul 2024 - Actual",
                title: "QA Automation / Freelance",
                description: "Desarrollé scripts E2E para validar flujos principales de la aplicación (login, navegación, formularios, UI). Validación de códigos de estado, estructuras de datos y respuestas negativas"
            },
            job2: {
                date: "Feb 2024 - Actual",
                title: "Technical Support N1 / FUDO",
                description: "Soporte técnico de primera linea, brindando ayuda a usuarios a configurar el software para locales de gastronomia."
            },
            job3: {
                date: "2023 - 2024",
                title: "Front end dev / SCTR Group LLC",
                description: "Proyecto ePlay. Optimicé y desarrollé animaciones en CSS, Javascript, React. Ayudé a mejorar la experiencia de usuario (UX/UI)."
            },
            job4: {
                date: "Ene 2022 - Dic 2023",
                title: "Desarrollador Front End, QA Tester/ Agencia de marketing HUB",
                description: "Creé del sitio web de la agencia para mostrar sus servicios que nosotros brindábamos. Implemente casos de prueba sobre el mismo proyecto para mejorar la accesibilidad y funcionabilidad del mismo. Colaboré con el cliente y diseñadores para priorizar y reprobar errores corregidos."
            },
            job5: {
                date: "2021 - 2022",
                title: "Customer Support Agent / APEX AMERICA BPO",
                description: "Atención telefonica del servicio de Loyalty para la empresa Claro."
            }
        },
        // Services Section
        services: {
            title: 'Mis <span>servicios</span>',
            webdev: {
                title: "Desarrollo Web",
                description: "Desarrollo, creacion y diseño de paginas webs, landing pages y E-commerce"
            },
            webdesign: {
                title: "Diseño Web",
                description: "Puedo brindarte una mirada objetiva sobre la interfaz de tu sitio para que sea mas efectivo y dinamico."
            },
            consulting: {
                title: "Consultoria",
                description: "Servicio de asistencia ante cualquier duda con respecto a tu sitio web nuevo o que ya dispongas."
            },
            marketing: {
                title: "Marketing digital",
                description: "Poseo experiencia en marketing digital para fomentar el crecimiento de tu negocio a través de la web."
            },
            hosting: {
                title: "Hosting y Dominios",
                description: "Brindar asistencia en los mejores host y compra de dominios para la web de tu emprendimiento."
            },
            seo: {
                title: "SEO Marketing",
                description: "Posicionamiento SEO, es decir, como los motores de busqueda posicionan tu sitio en internet."
            }
        },
        // Portfolio Section
        portfolio: {
            title: 'Mi <span>portfolio</span>',
            filter: {
                all: "General",
                qa: "QA",
                frontend: "Front-end",
                coming: "Proximamente..."
            },
            githubBtn: 'Ver proyectos en GitHub <i class="fab fa-github"></i>'
        },
        // Contact Section
        contact: {
            title: '<span>Contacta</span>me',
            infoTitle: "Datos de contacto",
            infoSubtitle: "Disponible para comenzar a trabajar juntos",
            phone: "Telefono:",
            email: "Email:",
            form: {
                name: "Nombre",
                email: "Email",
                subject: "Motivo",
                message: "Escribe aqui tu mensaje...",
                submit: "Enviar"
            }
        },
        // Footer
        footer: {
            text: 'Hecho por <span>Fran Mayer</span> | Let\'s do this!'
        }
    },
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About me",
            skills: "Skills",
            qualification: "Resume",
            services: "Services",
            portfolio: "Portfolio",
            contact: "Contact"
        },
        // Home Section
        home: {
            greeting: "Hello! 👋",
            title: 'I\'m a <span class="typing-text"></span>',
            description: "With over a year of experience improving users' lives through the web.",
            cta: 'About me!<i class="fas fa-user"></i>'
        },
        // Typed.js strings
        typedStrings: ['proactivity', 'innovation', 'versatility', 'web developer'],
        // About Section
        about: {
            title: 'About <span>me</span>',
            description: `Hi! I'm <strong>Fran Mayer</strong>, a <strong>frontend</strong> developer passionate about creating modern, functional web interfaces focused on user experience.
                    <br><br>
                    A couple of years ago I started my journey in web development, and since then I haven't stopped learning or challenging myself. Currently, I'm expanding my knowledge into <strong>QA Automation</strong>, with the goal of becoming a well-rounded professional who understands both development and software quality.
                    <br><br>
                    I enjoy facing new challenges, writing clean code, and following industry best practices. I'm motivated to stay updated with the latest tech trends and constantly learn.
                    <br><br>
                    Outside of code, I enjoy <strong>football</strong>, <strong>nature</strong>, and sharing knowledge with other tech enthusiasts. I firmly believe in the power of community and collaborative learning.
                    <br><br>
                    If you're looking for someone committed, curious, and eager to keep growing, I'd love to connect!`,
            downloadCV: 'Download CV <i class="fas fa-download"></i>'
        },
        // Skills Section
        skills: {
            title: 'My <span>skills</span>'
        },
        // Qualification Section
        qualification: {
            title: 'My <span>resume</span>',
            job1: {
                date: "Jul 2024 - Present",
                title: "QA Automation / Freelance",
                description: "Developed E2E scripts to validate main application flows (login, navigation, forms, UI). Validation of status codes, data structures, and negative responses"
            },
            job2: {
                date: "Feb 2024 - Present",
                title: "Technical Support N1 / FUDO",
                description: "First-line technical support, helping users configure software for gastronomy venues."
            },
            job3: {
                date: "2023 - 2024",
                title: "Front end dev / SCTR Group LLC",
                description: "ePlay Project. Optimized and developed animations in CSS, Javascript, React. Helped improve user experience (UX/UI)."
            },
            job4: {
                date: "Jan 2022 - Dec 2023",
                title: "Front End Developer, QA Tester / HUB Marketing Agency",
                description: "Created the agency's website to showcase our services. Implemented test cases on the same project to improve accessibility and functionality. Collaborated with clients and designers to prioritize and retest fixed bugs."
            },
            job5: {
                date: "2021 - 2022",
                title: "Customer Support Agent / APEX AMERICA BPO",
                description: "Phone support for Claro's Loyalty service."
            }
        },
        // Services Section
        services: {
            title: 'My <span>services</span>',
            webdev: {
                title: "Web Development",
                description: "Development, creation and design of websites, landing pages and E-commerce"
            },
            webdesign: {
                title: "Web Design",
                description: "I can provide an objective view of your site's interface to make it more effective and dynamic."
            },
            consulting: {
                title: "Consulting",
                description: "Assistance service for any questions about your new or existing website."
            },
            marketing: {
                title: "Digital Marketing",
                description: "I have experience in digital marketing to foster your business growth through the web."
            },
            hosting: {
                title: "Hosting & Domains",
                description: "Provide assistance on the best hosts and domain purchases for your business website."
            },
            seo: {
                title: "SEO Marketing",
                description: "SEO positioning, meaning how search engines rank your site on the internet."
            }
        },
        // Portfolio Section
        portfolio: {
            title: 'My <span>portfolio</span>',
            filter: {
                all: "All",
                qa: "QA",
                frontend: "Front-end",
                coming: "Coming soon..."
            },
            githubBtn: 'View projects on GitHub <i class="fab fa-github"></i>'
        },
        // Contact Section
        contact: {
            title: '<span>Contact</span> me',
            infoTitle: "Contact information",
            infoSubtitle: "Available to start working together",
            phone: "Phone:",
            email: "Email:",
            form: {
                name: "Name",
                email: "Email",
                subject: "Subject",
                message: "Write your message here...",
                submit: "Send"
            }
        },
        // Footer
        footer: {
            text: 'Made by <span>Fran Mayer</span> | Let\'s do this!'
        }
    }
};

// i18n System
class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'es';
        this.typedInstance = null;
    }

    init() {
        this.updateLanguage(this.currentLang);
        this.setupToggle();
        this.updateToggleButton();
    }

    setupToggle() {
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
                localStorage.setItem('language', this.currentLang);
                this.updateLanguage(this.currentLang);
                this.updateToggleButton();
            });
        }
    }

    updateToggleButton() {
        const langText = document.querySelector('.lang-text');
        if (langText) {
            // Show opposite language (what it will change to)
            langText.textContent = this.currentLang === 'es' ? 'EN' : 'ES';
        }
        // Update html lang attribute
        document.documentElement.lang = this.currentLang;
    }

    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }

    updateLanguage(lang) {
        const t = translations[lang];
        if (!t) return;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const value = this.getNestedValue(t, key);
            if (value) {
                element.innerHTML = value;
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const value = this.getNestedValue(t, key);
            if (value) {
                element.placeholder = value;
            }
        });

        // Update page title
        document.title = lang === 'es' 
            ? 'Franco Mayer | Desarrollador Web' 
            : 'Franco Mayer | Web Developer';

        // Reinitialize Typed.js with new strings
        this.updateTyped(t.typedStrings);
    }

    updateTyped(strings) {
        // Destroy existing instance if it exists
        if (this.typedInstance) {
            this.typedInstance.destroy();
        }

        // Create new instance with translated strings
        const typingElement = document.querySelector('.typing-text');
        if (typingElement && typeof Typed !== 'undefined') {
            this.typedInstance = new Typed('.typing-text', {
                strings: strings,
                typeSpeed: 110,
                loop: true
            });
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    window.i18n = new I18n();
    window.i18n.init();
});

