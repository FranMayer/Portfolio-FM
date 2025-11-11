# 💼 Portfolio FM - Frontend with QA Automation Tests

> My personal portfolio showcasing my projects and skills, now validated with an E2E (End-to-End) test suite using Cypress.

## 🚀 Live Demo

🔗 [See Portfolio FM live](https://franmayer.github.io/Portfolio-FM/)

---

## 🧪 Quality Assurance (QA) Tests with Cypress

This project serves not only as my frontend portfolio but also as a real-world case study for **QA automation testing with Cypress**. The goal is to ensure that the page's critical functionalities always work as expected.

### Implemented Test Cases

A test suite has been created (in `cypress/e2e/test-cases.cy.js`) that validates two key user flows:

**1. "Download CV" Button Verification:**
* **Test:** `TC0X - Should verify the CV download button`
* **What it does:**
    * Asserts that the download button is visible and contains the correct text.
    * Validates that the button has the `download` attribute.
    * Confirms that the `href` points to the correct `.pdf` file.
    * Performs a `cy.request` to the file's path to ensure it exists and returns a `status 200`, preventing a broken link.

**2. Contact Form Validation (Regression Test):**
* **Test:** `TC02 - Should NOT submit the form if fields are empty`
* **What it does:**
    * Tests the "sad path" by ensuring the form **cannot be submitted** if the `required` fields (Name, Email, Subject) are empty.
    * Simulates a click on the "Submit" button and verifies that the page does not reload (the URL remains unchanged).
    * Confirms that the native HTML5 validation is working by checking that the browser correctly marks the fields as invalid.

---

## 🛠️ Tech Stack

### Frontend
* HTML5
* CSS3
* JavaScript
* Bootstrap 5 (for responsive design)
* FontAwesome (for icons)

### Testing (QA)
* **Cypress** (for E2E and validation testing)

---

## 📑 Project Description

**Portfolio FM** is a personal project I designed to have an online space to display my professional profile, my most notable projects, and the technologies I command. It serves as a cover letter for future employers, collaborators, or clients.

### Main Sections

* ✅ **Home** - Personal introduction.
* ✅ **About Me** - A summary of my background, focus, and passions.
* ✅ **Projects** - A gallery of work and practice projects that reflect my skills.
* ✅ **Contact** - A direct contact form (validated with tests).
* ✅ **Footer with social media links**.

### Project Goals

This portfolio allowed me to practice and improve:

* Responsive layout design using **Bootstrap 5**.
* Creating a user-friendly and professional interface.
* Code optimization for better performance.
* Using **JavaScript** for interactivity.
* **Applying QA Automation skills** by writing E2E tests with Cypress to validate key functionalities.

---

## 📥 Installation and Testing

If you want to clone the repository and run the tests locally:

1.  Clone the repo:
    ```bash
    git clone [https://github.com/FranMayer/Portfolio-FM.git](https://github.com/FranMayer/Portfolio-FM.git)
    cd Portfolio-FM
    ```

2.  Install Cypress dependencies:
    ```bash
    npm install
    ```

3.  **Important!** Start a local server (like the **Live Server** extension in VS Code) so the site is running.

4.  Open the Cypress interactive Test Runner:
    ```bash
    npx cypress open
    ```

5.  Run all tests in *headless* mode (in the terminal):
    ```bash
    npx cypress run
    ```