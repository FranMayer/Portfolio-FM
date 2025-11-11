# 💼 Portfolio FM - Frontend con Pruebas de QA Automatizadas

> Mi portafolio personal donde muestro mis proyectos y habilidades, ahora validado con una suite de pruebas E2E (End-to-End) usando Cypress.

## 🚀 Demo

🔗 [Ver Portfolio FM en vivo](https://franmayer.github.io/Portfolio-FM/)

---

## 🧪 Pruebas de Calidad (QA) con Cypress

Este proyecto no solo sirve como mi portfolio de frontend, sino también como un caso de estudio real para **pruebas de automatización con Cypress**. El objetivo es asegurar que las funcionalidades críticas de la página siempre funcionen como se espera.

### Casos de Prueba Implementados

Se ha creado una suite de pruebas (en `cypress/e2e/test-cases.cy.js`) que valida dos flujos de usuario clave:

**1. Verificación del Botón "Descargar CV":**
* **Test:** `TC0X - Should verify the CV download button`
* **Qué hace:**
    * Verifica que el botón de descarga esté visible y contenga el texto correcto.
    * Valida que el botón tenga el atributo `download`.
    * Confirma que el `href` apunte al archivo `.pdf` correcto.
    * Realiza un `cy.request` al archivo para asegurar que existe y devuelve un `status 200`, previniendo un link roto.

**2. Validación del Formulario de Contacto (Test de Regresión):**
* **Test:** `TC02 - Should NOT submit the form if fields are empty`
* **Qué hace:**
    * Prueba que el formulario **no se pueda enviar** si los campos `required` (Nombre, Email, Motivo) están vacíos.
    * Simula un clic en "Enviar" y verifica que la página no se recargue (la URL no cambia).
    * Confirma que la validación nativa de HTML5 funciona, comprobando que el navegador marca los campos como inválidos.

---

## 🛠️ Tecnologías utilizadas

### Frontend
* HTML5
* CSS3
* JavaScript
* Bootstrap 5 (para el diseño responsive)
* FontAwesome (para iconos)

### Testing (QA)
* **Cypress** (para pruebas E2E y de validación)

---

## 📑 Descripción

**Portfolio FM** es un proyecto personal que diseñé para tener un espacio online donde mostrar mi perfil profesional, mis proyectos más destacados y las tecnologías que domino. Sirve como carta de presentación para futuros empleadores, colaboradores o clientes.

### Secciones principales

* ✅ **Home** - Presentación personal.
* ✅ **Sobre mí** - Un resumen de mi trayectoria, enfoque y pasiones.
* ✅ **Proyectos** - Galería de trabajos y prácticas que reflejan mis habilidades.
* ✅ **Contacto** - Formulario de contacto directo (validado con tests).
* ✅ **Footer con redes sociales**.

### Objetivo del proyecto

Este portafolio me permitió practicar y mejorar:

* Maquetado adaptable usando **Bootstrap 5**.
* Creación de una interfaz amigable y profesional.
* Uso de **JavaScript** para interactividad.
* **Aplicar habilidades de QA Automation**, escribiendo pruebas E2E con Cypress para validar las funcionalidades clave.

---

## 📥 Instalación y Pruebas

Si querés clonar el repositorio y correr las pruebas en local:

1.  Clonar el repositorio:
    ```bash
    git clone [https://github.com/FranMayer/Portfolio-FM.git](https://github.com/FranMayer/Portfolio-FM.git)
    cd Portfolio-FM
    ```

2.  Instalar las dependencias de Cypress:
    ```bash
    npm install
    ```

3.  ¡Importante! Iniciar un servidor local (como **Live Server** en VS Code) para que la web esté corriendo.

4.  Abrir el Test Runner interactivo de Cypress:
    ```bash
    npx cypress open
    ```

5.  Correr todos los tests en modo *headless* (en la terminal):
    ```bash
    npx cypress run
    ```