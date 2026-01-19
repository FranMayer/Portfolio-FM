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
            description: "Con más de 3 años de experiencia en mejorar la vida de los usuarios a través de la web.",
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
            title: 'I\'m a <span class="typing-text"></span>',
            description: "With over 3 years of experience improving users' lives through the web.",
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

