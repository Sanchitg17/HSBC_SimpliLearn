# HSBC Website Automation Test

## Overview

This project contains automated tests for the HSBC website using Cypress, a testing framework for web applications. The tests are designed to verify the functionality and behavior of various elements on the HSBC website.

## Setup

To run the tests locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run Cypress:

    ```bash
    npm run cypress:open
    ```

4. Click on the test file (`search_hsbc_spec.js`) to run the tests.

## Test Description

The `HSBC_proj.cy.js` file contains a Cypress test suite named `SearchHSBC`, which consists of one test case:

- `CheckText`: This test navigates to the HSBC security page, clicks on various elements such as links, input fields, checkboxes, and buttons, and verifies their functionality.

## Test Steps

1. Visit the HSBC security page (`https://www.hsbc.co.in/security/`).
2. Click on a specific link.
3. Type text into an input field.
4. Click on a checkbox.
5. Click on an icon.
6. Click on another icon.
7. Click on a button.

Refer Repo for more insights
