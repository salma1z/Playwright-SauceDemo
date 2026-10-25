# Playwright SauceDemo Automation Project

## About the Project
An end-to-end test automation project for the SauceDemo website using Playwright, TypeScript, and the Page Object Model (POM).

## Tools & Technologies
- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)

## Test Scenarios
- Login with valid credentials
- Add products to the shopping cart
- Verify cart badge count
- Complete the checkout process
- Validate required checkout fields

## Project Structure
- `Pages/` - Page Object classes
- `tests/` - Automated test cases
- `playwright.config.ts` - Playwright configuration

## How to Run

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run tests:

```bash
npx playwright test
```

Run tests with the browser visible:

```bash
npx playwright test --headed
```

## Application Under Test
https://www.saucedemo.com/

## Author
Salma Adel Elzeheiry
