# Siddhartha Gundla - Portfolio Website

This is a personal portfolio website built with React, Bootstrap 5, and Vite.

## Tech Stack

- **React 19** - UI library
- **Bootstrap 5** - CSS framework
- **Vite** - Build tool and dev server
- **Sass** - CSS preprocessor

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Features

- Single page application with section navigation
- Responsive design
- Animated timeline for work experience
- Skills showcase
- Contact form

## Project Structure

```
├── public/          # Static assets
│   └── img/        # Images
├── src/
│   ├── components/ # React components
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Resume.jsx
│   │   ├── Work.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Wave.jsx
│   ├── styles/     # SCSS files
│   │   ├── main.scss
│   │   ├── _wave.scss
│   │   └── _timeline.scss
│   ├── App.jsx     # Main App component
│   └── main.jsx    # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## License

ISC
