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
            description: "Con más de 4 años de experiencia mejorando la experiencia de los usuarios: del soporte y QA al desarrollo web.",
            cta: 'Conoceme!<i class="fas fa-user"></i>'
        },
        // About Section
        about: {
            title: 'Acerca de <span>mí</span>',
            description: `¡Hola! Soy <strong>Fran Mayer</strong>, <strong>Técnico de Soporte y QA</strong> con más de 4 años de experiencia en atención multicanal, resolución de incidencias de hardware/software y gestión de tickets en entornos de alta demanda, en transición activa hacia <strong>QA Testing</strong> y desarrollo <strong>Front End</strong>.
                    <br><br>
                    Tengo historial comprobado con plataformas <strong>SaaS</strong>, impresoras térmicas en red y CRMs líderes como <strong>JIRA</strong>, <strong>HubSpot</strong> y <strong>Salesforce</strong>. Me destaco por la documentación y reproducción de bugs, la comunicación clara con usuarios de cualquier nivel técnico y la trazabilidad completa en el cierre de casos.
                    <br><br>
                    Cuento con formación certificada en <strong>testing manual y automatizado (Cypress)</strong> y en desarrollo web, además de experiencia en equipos como <strong>SCTR Group</strong> controlando la calidad de interfaces y documentando buenas prácticas de testing.
                    <br><br>
                    Me apasiona seguir creciendo en la intersección entre el testing y el front end. Fuera del trabajo, disfruto del <strong>fútbol</strong>, la <strong>naturaleza</strong> y el aprendizaje colaborativo dentro de la comunidad tech.
                    <br><br>
                    Si buscas a alguien detallista, con foco en la calidad y la experiencia de usuario, ¡me encantaría que conectemos!`,
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
                date: "Feb 2024 - Actual",
                title: "Soporte Técnico - FUDO",
                description: "Resolución de incidencias N1/N2 vía chat, teléfono y correo en un software de gestión gastronómica usado por cientos de locales, dentro de SLA. Diagnóstico y configuración de impresoras térmicas LAN/USB, documentación de bugs con pasos de reproducción y coordinación con desarrollo para su escalamiento, y trazabilidad completa de casos en el sistema de ticketing."
            },
            job2: {
                date: "2022 - 2024",
                title: "Soporte Técnico - Funiversity L.A.",
                description: "Asistencia técnica a estudiantes y docentes en acceso a plataforma, videoconferencias, entrega de tareas y configuración de dispositivos. Identificación, documentación y escalamiento de bugs con pasos de reproducción detallados, y gestión de la cola de tickets con registro completo de cada interacción."
            },
            job3: {
                date: "2022 - 2024",
                title: "Soporte & QA Web - SCTR Group",
                description: "Control de calidad de interfaces web, reportando inconsistencias bajo criterios de aceptación claros y verificables. Documentación de procesos y buenas prácticas de testing, facilitando el onboarding de nuevos integrantes al equipo."
            },
            job4: {
                date: "2021 - 2022",
                title: "Customer Support & Retención - APEX America BPO",
                description: "Contacto proactivo con clientes en riesgo de baja mediante Avaya, negociando planes y beneficios personalizados para reducir la tasa de cancelación. Registro completo de interacciones, acuerdos y seguimientos en CRM, asegurando trazabilidad end-to-end del proceso de retención."
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
            description: "With over 4 years of experience improving the user experience: from support and QA to web development.",
            cta: 'About me!<i class="fas fa-user"></i>'
        },
        // About Section
        about: {
            title: 'About <span>me</span>',
            description: `Hi! I'm <strong>Fran Mayer</strong>, a <strong>Technical Support & QA specialist</strong> with over 4 years of experience in multichannel support, hardware/software incident resolution and ticket management in high-demand environments, actively transitioning into <strong>QA Testing</strong> and <strong>Front End</strong> development.
                    <br><br>
                    I have a proven track record with <strong>SaaS</strong> platforms, networked thermal printers and leading CRMs like <strong>JIRA</strong>, <strong>HubSpot</strong> and <strong>Salesforce</strong>. I stand out for bug documentation and reproduction, clear communication with users of any technical level, and full traceability when closing cases.
                    <br><br>
                    I hold certified training in <strong>manual and automated testing (Cypress)</strong> and web development, plus experience on teams like <strong>SCTR Group</strong> ensuring interface quality and documenting testing best practices.
                    <br><br>
                    I'm passionate about growing at the intersection of testing and front end. Outside of work, I enjoy <strong>football</strong>, <strong>nature</strong>, and collaborative learning within the tech community.
                    <br><br>
                    If you're looking for someone detail-oriented, focused on quality and user experience, I'd love to connect!`,
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
                date: "Feb 2024 - Present",
                title: "Technical Support - FUDO",
                description: "N1/N2 incident resolution via chat, phone and email on restaurant management software used by hundreds of venues, within SLA. Thermal printer (LAN/USB) diagnosis and setup, bug documentation with reproduction steps and coordination with development for escalation, plus full case traceability in the ticketing system."
            },
            job2: {
                date: "2022 - 2024",
                title: "Technical Support - Funiversity L.A.",
                description: "Technical support for students and teachers on platform access, video conferencing, assignment submission and device setup. Identification, documentation and escalation of bugs with detailed reproduction steps, and ticket queue management with full logging of every interaction."
            },
            job3: {
                date: "2022 - 2024",
                title: "Web Support & QA - SCTR Group",
                description: "Web interface quality control, reporting inconsistencies against clear and verifiable acceptance criteria. Documentation of testing processes and best practices, easing onboarding of new team members."
            },
            job4: {
                date: "2021 - 2022",
                title: "Customer Support & Retention - APEX America BPO",
                description: "Proactive outreach to at-risk customers through Avaya, negotiating personalized plans and benefits to reduce churn. Full logging of interactions, agreements and follow-ups in CRM, ensuring end-to-end traceability of the retention process."
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

