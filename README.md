# Newsletter Sign-Up Form with Success Message

This project is a solution to the [Frontend Mentor Newsletter sign-up form with success message challenge](https://www.frontendmentor.io/learning-paths/javascript-fundamentals-oR7g6-mTZ-/steps/67b0f5d3d3e8481c151d33f9/challenge/start). It uses HTML, Sass/CSS, and vanilla JavaScript to create a responsive newsletter sign-up form. When a user enters their email and submits the form, a success message is shown. If the email is invalid, an error message is displayed.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Overview

This project is designed to practice form validation and DOM manipulation. When a user submits the newsletter sign-up form:

- If the entered email is **valid**, the form is hidden and a success message is displayed.
- If the entered email is **invalid**, an error message appears under the email input field.

The design is fully responsive, with adjustments for desktop, tablet, and mobile screen sizes.

## Features

- **Responsive Design:** Layout adapts to various screen sizes.
- **Form Validation:** Email input is validated using a regex pattern.
- **Success Message:** Displays a customized success screen upon valid submission.
- **Error Feedback:** Shows an error message if an invalid email is entered.
- **Clean UI:** Uses modern design techniques with CSS Flexbox and responsive images.

## Technologies Used

- **HTML5:** Structure of the application.
- **Sass/CSS3:** Styling, responsive design, and layout.
- **Vanilla JavaScript:** Form validation and DOM manipulation.
- **Frontend Mentor:** The design challenge that inspired this project.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mustapha909/newsletter-sign-up-form-with-success-message.git
   Navigate to the project directory:
   ```

cd newsletter-sign-up-form-with-success-message
Open the project in your favorite code editor.

Open index.html in your browser to view the project.

Note: If you're using Sass, compile your .scss file to CSS before running the project.

Usage
Enter your email address into the newsletter form.
Click the "Subscribe to monthly newsletter" button.
If the email is valid, the form will disappear and a success message will be displayed.
If the email is invalid, an error message ("Valid email required") will be shown under the input field.
Click the "Dismiss message" button on the success screen to return to the form.

Project Structure

newsletter-sign-up-form/
├── assets/
│ ├── images/
│ │ ├── favicon-32x32.png
│ │ ├── illustration-sign-up-desktop.svg
│ │ ├── illustration-sign-up-mobile.svg
│ │ └── icon-success.svg
├── index.html
├── styles.css // or styles.scss if using Sass (compiled to CSS)
├── script.js
└── README.md
