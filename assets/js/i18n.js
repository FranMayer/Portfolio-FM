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
            description: `¡Hola! Soy <strong>Fran Mayer</strong>, un profesional de IT con un sólido perfil en <strong>Frontend Development</strong> y actualmente desempeñándome como <strong>QA Engineer</strong>. Esta combinación me permite no solo construir interfaces modernas y funcionales, sino asegurar que el software sea robusto y centrado en la experiencia del usuario.
                    <br><br>
                    Actualmente, formo parte del equipo de <strong>PinApp</strong>, donde trabajo en el proyecto <strong>Innova Schools</strong>. En este rol, aplico mi mentalidad de desarrollador para elevar los estándares de calidad, integrando mis conocimientos técnicos en la detección de fallos y la optimización de procesos desde la raíz del código.
                    <br><br>
                    Mi trayectoria comenzó en el desarrollo web, lo que me brindó una visión profunda sobre cómo se estructuran y renderizan las aplicaciones. Hoy, utilizo esa base para especializarme en <strong>QA Automation</strong>, buscando el equilibrio perfecto entre escribir código limpio y garantizar que cada entrega sea impecable.
                    <br><br>
                    Disfruto enfrentar retos técnicos, colaborar en equipos ágiles y mantenerme al día con las últimas tendencias del sector. Fuera del código, me apasiona el <strong>fútbol</strong>, la <strong>naturaleza</strong> y el aprendizaje colaborativo dentro de la comunidad tecnológica.
                    <br><br>
                    Si buscas a alguien que entienda el ciclo de vida del software de principio a fin —desde la creación de la interfaz hasta su validación final— ¡me encantaría que conectemos!`,
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
                title: "QA Manual / Automation - PinApp (Innova Schools)",
                description: "Desarrollé e implementé test cases en distintos proyectos. Creé scripts E2E para validar flujos principales de la aplicación (login, navegación, formularios, UI). Realicé reporte y seguimiento de bugs."
            },
            job2: {
                date: "Feb 2024 - Sep 2024",
                title: "Soporte Técnico - FUDO",
                description: "Brindé atención al cliente personalizada a través de chat, teléfono y correo electrónico, ofreciendo soluciones efectivas y manteniendo una comunicación clara y empática. Proporcioné soporte técnico integral para software de gestión alimentaria, resolviendo incidencias y garantizando su correcto funcionamiento."
            },
            job3: {
                date: "2022 - 2024",
                title: "Front End / QA - SCTR Group (Proyecto E-Play)",
                description: "Asistí al equipo frontend revisando código y documentando buenas prácticas, adquiriendo experiencia en flujos de trabajo reales. Brindé apoyo a desarrolladores senior durante la implementación de funcionalidades, aprendiendo sobre estándares de la industria. Diseñé test cases para ejecutar pruebas manuales dentro de la aplicación."
            },
            job4: {
                date: "2022 - 2024",
                title: "Soporte Técnico / QA - Funiversity",
                description: "Brindé soporte técnico a usuarios de la institución. Creé la base de conocimiento del área para mantener la información organizada. Desarrollé automatizaciones para facilitar la comunicación a través del IRM."
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
            qatesting: {
                title: "QA Testing",
                description: "Testing manual y automatizado de aplicaciones web. Pruebas E2E, API testing y reportes de bugs detallados."
            },
            qualityConsulting: {
                title: "Consultoría de Calidad",
                description: "Revisión de código, implementación de buenas prácticas y estrategias de testing para mejorar la calidad de tu software."
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
                all: "General",
                qa: "QA",
                frontend: "Front-end"
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
            description: `Hi! I'm <strong>Fran Mayer</strong>, an IT professional with a solid background in <strong>Frontend Development</strong> and currently working as a <strong>QA Engineer</strong>. This combination allows me not only to build modern and functional interfaces, but also to ensure that software is robust and user-experience focused.
                    <br><br>
                    Currently, I'm part of the <strong>PinApp</strong> team, where I work on the <strong>Innova Schools</strong> project. In this role, I apply my developer mindset to elevate quality standards, integrating my technical knowledge in fault detection and process optimization from the code's root.
                    <br><br>
                    My journey started in web development, which gave me a deep understanding of how applications are structured and rendered. Today, I use that foundation to specialize in <strong>QA Automation</strong>, seeking the perfect balance between writing clean code and ensuring every delivery is flawless.
                    <br><br>
                    I enjoy tackling technical challenges, collaborating in agile teams, and staying up to date with the latest industry trends. Outside of code, I'm passionate about <strong>football</strong>, <strong>nature</strong>, and collaborative learning within the tech community.
                    <br><br>
                    If you're looking for someone who understands the software lifecycle from start to finish —from interface creation to final validation— I'd love to connect!`,
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
                title: "QA Manual / Automation - PinApp (Innova Schools)",
                description: "Developed and implemented test cases across multiple projects. Created E2E scripts to validate main application flows (login, navigation, forms, UI). Reported and tracked bugs."
            },
            job2: {
                date: "Feb 2024 - Sep 2024",
                title: "Technical Support - FUDO",
                description: "Provided personalized customer support via chat, phone, and email, delivering effective solutions while maintaining clear and empathetic communication. Delivered comprehensive technical support for food management software, resolving incidents and ensuring proper functionality."
            },
            job3: {
                date: "2022 - 2024",
                title: "Front End / QA - SCTR Group (E-Play Project)",
                description: "Assisted the frontend team by reviewing code and documenting best practices, gaining experience in real development workflows. Supported senior developers during feature implementation, learning about industry standards. Designed test cases to execute manual testing within the application."
            },
            job4: {
                date: "2022 - 2024",
                title: "Technical Support / QA - Funiversity",
                description: "Provided technical support to institution users. Created the department's knowledge base to keep information organized. Developed automations to streamline communication through the IRM."
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
            qatesting: {
                title: "QA Testing",
                description: "Manual and automated testing of web applications. E2E testing, API testing and detailed bug reports."
            },
            qualityConsulting: {
                title: "Quality Consulting",
                description: "Code review, implementation of best practices and testing strategies to improve your software quality."
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
                qa: "QA",
                frontend: "Front-end"
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
            ? 'Franco Mayer | Desarrollador Web' 
            : 'Franco Mayer | Web Developer';
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    window.i18n = new I18n();
    window.i18n.init();
});

