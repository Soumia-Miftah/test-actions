# SauceDemo E2E Automation Testing Suite

An automated End-to-End (E2E) testing suite for the **SauceDemo** website, built using **Playwright** and **TypeScript**. The project implements the **Page Object Model (POM)** design pattern to ensure clean code separation, maintainability, and reusability. It is also integrated with **GitHub Actions** for CI/CD automation.

---

## 🛠️ Tech Stack

*   **Core:** Playwright
*   **Language:** TypeScript
*   **CI/CD:** GitHub Actions
*   **Design Pattern:** Page Object Model (POM)

---

## 🏗️ Architecture

The project architecture follows the POM pattern:
*   `pages/`: Contains page classes holding element locators and action methods (e.g., login, adding items to cart).
*   `tests/`: Contains the actual test scripts and assertions, keeping them completely decoupled from UI locators.

---

## ⚙️ Test Coverage

The suite covers critical user journeys on the platform:
*   **Authentication:** Valid, invalid, and locked-out user scenarios.
*   **Products & Cart:** Item sorting, product details view, and adding/removing items from the cart.
*   **Checkout Flow:** Entering shipping info, verifying the overview, and completing the order.

---

## 🚀 Setup & Execution

### Prerequisites
*   Node.js installed on your machine.

### 1. Installation
```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY>
npm install
npx playwright install
```

### 2. Running Tests
*   Run tests in headless mode:
    ```bash
    npx playwright test
    ```
*   Run tests in Interactive UI Mode:
    ```bash
    npx playwright test --ui
    ```

---

## 🔄 CI/CD Pipeline

A custom workflow is configured via **GitHub Actions**:
*   Triggers automatically on every `push` or `pull_request` to the `main` branch.
*   Sets up the environment (Ubuntu + Node.js), installs browsers, and executes the suite.
*   **Artifacts:** In case of any test failure, the HTML report is automatically uploaded for quick debugging via screenshots and traces.
*
