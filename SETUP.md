# Yves Dev 237 - Modern Portfolio Website

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

This will install:
- React 19
- React Router DOM 7
- TypeScript
- Vite
- Tailwind CSS
- PostCSS & Autoprefixer
- ESLint

### 2. Run Development Server
```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx        # Navigation bar with logo
│   ├── Footer.tsx        # Footer with links and social
│   ├── Hero.tsx          # Hero section with animations
│   ├── FeaturedProjects.tsx
│   └── Testimonials.tsx
├── pages/
│   ├── Home.tsx          # Home page (Hero + Projects + Testimonials)
│   ├── About.tsx         # About with animated skills
│   ├── Services.tsx      # Services offered
│   ├── Projects.tsx      # Full projects list
│   └── Contact.tsx       # Contact form
├── App.tsx               # Main app with routing
├── App.css               # App styles
├── index.css             # Tailwind CSS setup
└── main.tsx              # React entry point
```

## Features

✅ **Navbar** - Logo, name, and navigation links
✅ **Hero Section** - Animated background with CTA buttons
✅ **Featured Projects** - Project cards with tech badges
✅ **Testimonials** - Carousel slider with navigation
✅ **Services Page** - Service offerings and project results
✅ **About Page** - Biography and animated skill progress bars
✅ **Contact Page** - Contact form and social links
✅ **Responsive Design** - Mobile, tablet, desktop optimized
✅ **Lazy Loading** - React lazy loading for pages, native lazy loading for images
✅ **Modern Design** - Dark theme with purple/blue gradients, glassmorphism

### Update Content
- **About**: Edit `src/pages/About.tsx` for biography and skills
- **Services**: Update `src/pages/Services.tsx` with my services
- **Projects**: Modify project data in component files
- **Contact**: Update email and social links in `src/pages/Contact.tsx`

### Change Color Scheme
Edit `src/index.css` and `tailwind.config.js`:
- `text-accent` = `text-purple-400`
- `text-accent-light` = `text-blue-400`
- `bg-gradient-to-r from-purple-600 to-blue-500` = Primary gradient

## Deployment Options

### GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

## Troubleshooting

### Tailwind CSS not working?
Make sure you ran `npm install` to install Tailwind dependencies

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Images not loading?
Add your images to the `public/` folder and reference them with `/filename`

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License
Free to use and modify for personal portfolio
