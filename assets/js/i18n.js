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
            description: "Con más de 3 años de experiencia en mejorar la vida de los usuarios a través de la web.",
            cta: 'Conoceme!<i class="fas fa-user"></i>'
        },
        // About Section
        about: {
            title: 'Acerca de <span>mí</span>',
            description: `¡Hola! Soy <strong>Fran Mayer</strong>, <strong>Frontend Developer</strong> con más de 3 años de experiencia creando interfaces web modernas, intuitivas y centradas en la experiencia del usuario.
                    <br><br>
                    Me especializo en <strong>React</strong>, <strong>JavaScript</strong> y <strong>TypeScript</strong>, desarrollando aplicaciones web responsive y de alto rendimiento. Mi enfoque combina código limpio con diseño funcional para crear productos que los usuarios disfrutan usar.
                    <br><br>
                    Cuento con experiencia trabajando en equipos ágiles para empresas como <strong>PinApp</strong> y <strong>SCTR Group</strong>, donde participé en el desarrollo de interfaces para proyectos de gran escala. Mi background técnico me permite colaborar eficientemente con diseñadores y backend developers para entregar soluciones completas.
                    <br><br>
                    Me apasiona mantenerme actualizado con las últimas tendencias del ecosistema frontend, desde nuevas features de React hasta herramientas de desarrollo modernas. Fuera del código, disfruto del <strong>fútbol</strong>, la <strong>naturaleza</strong> y el aprendizaje colaborativo dentro de la comunidad tech.
                    <br><br>
                    Si buscas un desarrollador frontend comprometido con la calidad y la experiencia de usuario, ¡me encantaría que conectemos!`,
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
                date: "Sep 2025 - Actual",
                title: "Frontend Developer - PinApp (Innova Schools)",
                description: "Desarrollo de interfaces de usuario para plataforma educativa. Implementación de componentes React reutilizables, integración con APIs REST y optimización de rendimiento. Colaboración en equipo ágil para entregar features de alto impacto."
            },
            job2: {
                date: "Feb 2024 - Sep 2024",
                title: "Soporte Técnico - FUDO",
                description: "Soporte integral para software de gestión gastronómica: diagnóstico de incidencias, configuración de impresoras térmicas y resolución de problemas de red. Atención multicanal con registro completo de casos en sistema de tickets."
            },
            job3: {
                date: "2022 - 2024",
                title: "Frontend Developer - Funiversity L.A.",
                description: "Desarrollo y testing de interfaces en plataforma e-learning. Construcción de base de conocimiento del equipo para centralizar soluciones. Automatización de flujos de comunicación interna a través del sistema IRM."
            },
            job4: {
                date: "2022 - 2024",
                title: "Junior Frontend Developer - SCTR Group (Proyecto E-Play)",
                description: "Colaboración en desarrollo de features frontend en ambiente de producción con flujos de trabajo reales. Revisión de código, control de calidad de UI y documentación técnica."
            }
        },
        // Services Section
        services: {
            title: 'Mis <span>servicios</span>',
            webdev: {
                title: "Desarrollo Web",
                description: "Desarrollo, creación y diseño de páginas webs, landing pages y E-commerce."
            },
            webdesign: {
                title: "Diseño Web",
                description: "Puedo brindarte una mirada objetiva sobre la interfaz de tu sitio para que sea más efectivo y dinámico."
            },
            responsive: {
                title: "Diseño Responsive",
                description: "Desarrollo de interfaces que se adaptan perfectamente a cualquier dispositivo: móvil, tablet y desktop."
            },
            optimization: {
                title: "Optimización Web",
                description: "Mejora del rendimiento de tu sitio web: velocidad de carga, SEO técnico y experiencia de usuario optimizada."
            },
            consulting: {
                title: "Consultoría",
                description: "Servicio de asistencia ante cualquier duda con respecto a tu sitio web nuevo o que ya dispongas."
            },
            hosting: {
                title: "Hosting y Dominios",
                description: "Asistencia en los mejores hosts y compra de dominios para la web de tu emprendimiento."
            }
        },
        // Portfolio Section
        portfolio: {
            title: 'Mi <span>portfolio</span>',
            filter: {
                all: "Todos",
                frontend: "Front-end",
                javascript: "JavaScript"
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
            description: "With over 3 years of experience improving users' lives through the web.",
            cta: 'About me!<i class="fas fa-user"></i>'
        },
        // About Section
        about: {
            title: 'About <span>me</span>',
            description: `Hi! I'm <strong>Fran Mayer</strong>, a <strong>Frontend Developer</strong> with over 3 years of experience creating modern, intuitive web interfaces focused on user experience.
                    <br><br>
                    I specialize in <strong>React</strong>, <strong>JavaScript</strong>, and <strong>TypeScript</strong>, building responsive and high-performance web applications. My approach combines clean code with functional design to create products that users enjoy using.
                    <br><br>
                    I have experience working in agile teams for companies like <strong>PinApp</strong> and <strong>SCTR Group</strong>, where I participated in developing interfaces for large-scale projects. My technical background allows me to collaborate efficiently with designers and backend developers to deliver complete solutions.
                    <br><br>
                    I'm passionate about staying up to date with the latest frontend ecosystem trends, from new React features to modern development tools. Outside of code, I enjoy <strong>football</strong>, <strong>nature</strong>, and collaborative learning within the tech community.
                    <br><br>
                    If you're looking for a frontend developer committed to quality and user experience, I'd love to connect!`,
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
                date: "Sep 2025 - Present",
                title: "Frontend Developer - PinApp (Innova Schools)",
                description: "User interface development for educational platform. Implementation of reusable React components, REST API integration and performance optimization. Agile team collaboration to deliver high-impact features."
            },
            job2: {
                date: "Feb 2024 - Sep 2024",
                title: "Technical Support - FUDO",
                description: "End-to-end support for restaurant management software: incident diagnosis, thermal printer setup and network troubleshooting. Multichannel support with full case logging in ticketing system."
            },
            job3: {
                date: "2022 - 2024",
                title: "Frontend Developer - Funiversity L.A.",
                description: "Interface development and testing on e-learning platform. Built team's knowledge base to centralize solutions. Automated internal communications workflows through the IRM system."
            },
            job4: {
                date: "2022 - 2024",
                title: "Junior Frontend Developer - SCTR Group (E-Play Project)",
                description: "Collaborated on frontend feature development in a production environment with real-world workflows. Code review, UI quality control and technical documentation writing."
            }
        },
        // Services Section
        services: {
            title: 'My <span>services</span>',
            webdev: {
                title: "Web Development",
                description: "Development, creation and design of websites, landing pages and E-commerce."
            },
            webdesign: {
                title: "Web Design",
                description: "I can provide an objective view of your site's interface to make it more effective and dynamic."
            },
            responsive: {
                title: "Responsive Design",
                description: "Development of interfaces that adapt perfectly to any device: mobile, tablet and desktop."
            },
            optimization: {
                title: "Web Optimization",
                description: "Improvement of your website performance: loading speed, technical SEO and optimized user experience."
            },
            consulting: {
                title: "Consulting",
                description: "Assistance service for any questions about your new or existing website."
            },
            hosting: {
                title: "Hosting & Domains",
                description: "Assistance on the best hosts and domain purchases for your business website."
            }
        },
        // Portfolio Section
        portfolio: {
            title: 'My <span>portfolio</span>',
            filter: {
                all: "All",
                frontend: "Front-end",
                javascript: "JavaScript"
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
            ? 'Franco Mayer | Frontend Developer' 
            : 'Franco Mayer | Frontend Developer';
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    window.i18n = new I18n();
    window.i18n.init();
});

