# G3M Consulting — Website

A modern, high-performance website for G3M Consulting built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** - UI Framework
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Premium animation library

## Features

✨ **Premium Animations**
- Animated hero with actuarial data lines
- Smooth section reveal animations
- Card hover physics
- Scroll-driven storytelling

⚡ **Performance**
- Lightning-fast load times with Vite
- Optimized bundle size
- Smooth 60fps animations

🎯 **UX Excellence**
- Sticky intelligent navbar with scroll detection
- Tabbed domains with animated transitions
- Trust-focused references section
- Professional spacing and rhythm

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:5173` to see the site in development.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       - Sticky header with scroll detection
│   ├── Hero.jsx         - Animated hero section with data lines
│   ├── Presentation.jsx - Company introduction
│   ├── Objectifs.jsx    - Goals with numbered cards
│   ├── Domaines.jsx     - Tabbed expertise sections
│   ├── References.jsx   - Client references
│   ├── Contact.jsx      - Contact form and map
│   └── Footer.jsx       - Site footer
├── App.jsx              - Main app component
├── main.jsx             - React entry point
└── index.css            - Global styles + Tailwind directives
```

## Deployment

### Netlify / Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Netlify/Vercel
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## Customization

### Colors
Edit `tailwind.config.js` to customize brand colors:
```js
colors: {
  g3mBlue: '#3B82C4',
  g3mGold: '#F5B335',
  g3mDark: '#1F2933'
}
```

### Content
Update text in component files (e.g., `src/components/Domaines.jsx` for expertise sections).

### Assets
Place images in the `assets/` directory:
- `assets/logo.png` - Company logo
- `assets/refs.png` - Client references image

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

© 2024 G3M Consulting. All rights reserved.
