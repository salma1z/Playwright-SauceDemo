# Playwright SauceDemo Automation Project

## Overview
This project automates the main shopping and checkout workflow of the SauceDemo web application using Playwright and TypeScript.

## Technologies Used
- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)

## Project Structure
- `Pages/` - Contains page classes and locators.
- `tests/` - Contains automated test cases.
- `playwright.config.ts` - Playwright test configuration.

## Test Scenarios
- Login with valid credentials.
- Add products to the shopping cart.
- Verify the shopping cart badge.
- Complete the checkout process.
- Validate required checkout fields.

## Prerequisites
- Node.js
- npm

## Installation
Clone the repository, then run:

```bash
npm install
npx playwright install
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run tests with the browser visible:

```bash
npx playwright test --headed
```

## Application Under Test
[SauceDemo](https://www.saucedemo.com/)

## Author
Salma Elzeheiry