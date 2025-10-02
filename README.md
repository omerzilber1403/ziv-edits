# Z-I-V Portfolio — Video Editor Portfolio Website

A production-ready, one-page portfolio website for Z-I-V, a social media video editor. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🌐 **Bilingual**: Hebrew (RTL) and English (LTR) with persistent language toggle
- 📱 **Fully Responsive**: Optimized for desktop to iPhone (13/14/15)
- 🎨 **Futuristic Design**: Dark theme with glassmorphism, neon accents, and smooth animations
- 🎬 **Google Drive Video Integration**: Modal player with lazy-loaded iframes
- ♿ **Accessible**: WCAG AA compliant, keyboard navigation, focus management
- ⚡ **Performance Optimized**: Lazy loading, scroll-snap, reduced motion support
- 🚀 **Deploy-Ready**: Optimized for Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Customization Guide

### 1. Update Video Portfolio

Edit `lib/videos.ts` to add your actual Google Drive video IDs:

```typescript
export const videos: Video[] = [
  {
    id: 'YOUR_DRIVE_FILE_ID',  // Get from Drive share link
    titleHe: 'כותרת בעברית',
    titleEn: 'English Title',
    thumb: '/thumbs/your-thumbnail.jpg',
  },
  // Add more videos...
];
```

**How to get Drive ID:**
1. Upload video to Google Drive
2. Right-click → Share → "Anyone with the link"
3. Copy the ID from the URL: `https://drive.google.com/file/d/YOUR_ID_HERE/view`
4. Paste the ID into `videos.ts`

### 2. Add Custom Thumbnails

Replace placeholder thumbnails in `public/thumbs/`:
- **Recommended size**: 400×711px (9:16 aspect ratio)
- **Format**: JPG, PNG, or WebP
- **Optimization**: Use tools like TinyPNG or ImageOptim

```bash
# Example thumbnail naming
public/thumbs/product-campaign.jpg
public/thumbs/artist-clips.jpg
# etc.
```

### 3. Update Contact Information

Edit `components/Contact.tsx`:

```typescript
const email = 'your-email@example.com';
const instagramUrl = 'https://instagram.com/your_handle';
const linkedinUrl = 'https://linkedin.com/in/your-profile';
```

### 4. Customize Text Content

All text is in `lib/i18n.ts`. Edit both Hebrew (`he`) and English (`en`) translations:

```typescript
export const translations: Record<Lang, Translations> = {
  he: {
    hero: {
      title: 'Your custom title',
      // ...
    },
  },
  // ...
};
```

### 5. Theme Customization

Edit CSS variables in `app/globals.css`:

```css
:root {
  --bg: #0b0f14;        /* Background */
  --fg: #e6f1ff;        /* Foreground text */
  --neon: #66ddff;      /* Primary accent */
  --neon-2: #bb66ff;    /* Secondary accent */
}
```

## 🎨 Design System

### Colors
- **Background**: Deep dark blue (`#0b0f14`)
- **Text**: Light blue-white (`#e6f1ff`)
- **Neon Accent**: Electric cyan (`#66ddff`)
- **Secondary**: Purple (`#bb66ff`)

### Typography
- **Display**: Space Grotesk (hero, headings)
- **Body**: Inter (English), Heebo (Hebrew)

### Effects
- Glassmorphism panels with backdrop blur
- Neon glows on interactive elements
- Subtle parallax and hover animations
- Smooth scroll-snap sections

## 📱 Responsive Breakpoints

- **Mobile**: 390px–768px (iPhone 13/14/15)
- **Tablet**: 768px–1024px
- **Desktop**: 1024px+

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image

## 📦 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with lang switching
│   ├── page.tsx            # Main page with sections
│   └── globals.css         # Global styles & theme
├── components/
│   ├── Navbar.tsx          # Sticky navigation
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Portfolio.tsx       # Video grid
│   ├── VideoModal.tsx      # Drive player modal
│   ├── Contact.tsx         # Contact section
│   └── LangToggle.tsx      # Language switcher
├── lib/
│   ├── i18n.ts             # Translations (he/en)
│   └── videos.ts           # Portfolio data
├── public/
│   └── thumbs/             # Video thumbnails
└── README.md
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub/GitLab
2. Import project in [Vercel](https://vercel.com)
3. Deploy (auto-configured for Next.js)

```bash
# Or use Vercel CLI
pnpm add -g vercel
vercel
```

### Environment Variables

No environment variables needed for basic setup. All configuration is in code.

### Build Optimization

The site is pre-configured for optimal performance:
- Automatic code splitting
- Image optimization via Next.js
- Font optimization with next/font
- Lazy loading for images and modals

## ♿ Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus visible indicators
- ✅ Focus trap in modal
- ✅ Reduced motion support
- ✅ WCAG AA color contrast

## 🐛 Troubleshooting

### Videos not loading
- Check that Drive videos are set to "Anyone with the link"
- Verify Drive IDs are correct in `lib/videos.ts`
- Check browser console for iframe errors

### Language not persisting
- Ensure localStorage is enabled in browser
- Check browser console for errors

### Scroll-snap issues on mobile
- This is browser-dependent; works best in modern Chrome/Safari
- Fallback smooth scroll works in all browsers

## 📄 License

Private project for Z-I-V portfolio. All rights reserved.

## 🤝 Support

For questions or issues, contact: your-email@example.com

---

**Built with Next.js 14 • Deployed on Vercel**

