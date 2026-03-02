# CORE Assignment Interface

## Overview
This is a pixel-perfect React application built based on the provided Figma design for the CORE Assignment. It focuses on rendering a responsive employee grid view sidebar layout (ScreenOne) and a complementary routing setup (ScreenTwo) leveraging modern React patterns.

## Tech Stack Used
- **React.js (Vite)**: For fast development and optimized production builds.
- **JavaScript (ES6+)**: For robust logic and modern syntax.
- **Bootstrap 5 (npm)**: Used purely for the grid layout (`row`, `col`) and utility classes to ensure responsive behavior without relying on CDN.
- **Custom CSS3**: Written alongside Bootstrap to maintain strict pixel-perfect control over colors, spacing, and typography matching the Figma mockup.
- **React Router (v6)**: For client-side navigation between Screen One and Screen Two.
- **React Icons**: For clean, scalable SVG icons matching the UI elements.

## Why Bootstrap + Custom CSS was chosen
Bootstrap 5 provides an excellent foundation for responsive flexbox grids. However, relying purely on Bootstrap components often leads to generic-looking applications. By combining Bootstrap's robust grid system with bespoke Custom CSS, we achieve the best of both worlds: reliable responsiveness across all device breakpoints and a unique, pixel-perfect visual fidelity that perfectly translates the custom Figma design into reality.

## Folder Structure
```text
src/
 ┣ components/
 ┃ ┣ Navbar/
 ┃ ┃ ┣ Navbar.jsx
 ┃ ┃ ┗ Navbar.css
 ┃ ┣ Sidebar/
 ┃ ┃ ┗ Sidebar.jsx
 ┃ ┣ Toolbar/
 ┃ ┃ ┗ Toolbar.jsx
 ┃ ┣ Card/
 ┃ ┃ ┣ Card.jsx
 ┃ ┃ ┗ Card.css
 ┃ ┣ Button/
 ┃ ┃ ┣ Button.jsx
 ┃ ┃ ┗ Button.css
 ┃ ┗ Footer/
 ┃   ┣ Footer.jsx
 ┃   ┗ Footer.css
 ┣ data/
 ┃ ┗ mockData.jsx
 ┣ pages/
 ┃ ┣ ScreenOne/
 ┃ ┃ ┣ ScreenOne.jsx
 ┃ ┃ ┗ ScreenOne.css
 ┃ ┗ ScreenTwo/
 ┃   ┣ ScreenTwo.jsx
 ┃   ┗ ScreenTwo.css
 ┣ assets/
 ┣ styles/
 ┃ ┗ global.css
 ┣ App.jsx
 ┗ main.jsx
```

## Setup Instructions
1. Ensure you have Node.js (v18+ recommended) installed.
2. Clone or download this repository.
3. Open a terminal in the project root directory.

## How to Run
Initialize the dependencies first:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```

## Production Build
To create an optimized production build, run:
```bash
npm run build
```
This generates a `dist` folder that can be deployed to any static hosting provider.

## Responsive Strategy
A strictly mobile-first approach was adopted using Bootstrap's grid breakpoints:
- **sm (≥576px)**: Stacked elements begin to unfold (e.g., 2 columns).
- **md (≥768px)**: 3 column layouts for grids.
- **lg (≥992px)**: Sidebar navigation changes from an offcanvas overlay to a persistent side navigation layout.
- **xl (≥1200px)**: 4 columns for maximum screen utilization on wide monitors.

Horizontal scrolling is prevented via wrapping and controlled max widths.

## CSS Architecture Explanation
Each major component has its own encapsulated CSS file (e.g., `Card.css` alongside `Card.jsx`). 
The `global.css` file contains:
- CSS Custom Properties (Variables) for primary colors, sidebar background, fonts, and border radii extracted directly from the Figma design's dev mode tokens.
- Global resets overriding browser default margins/paddings and integrating the "Inter" typography stack.
This modular BEM-like styling approach ensures styles don't heavily leak across the application, keeping maintenance straightforward.
