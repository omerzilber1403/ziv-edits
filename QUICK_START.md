# 🚀 Quick Start Guide

## Step 1: Install Dependencies

```bash
pnpm install
```

*(Or use `npm install` if you don't have pnpm)*

## Step 2: Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 3: Customize Your Portfolio

### Replace Video IDs

1. Open `lib/videos.ts`
2. Upload your videos to Google Drive
3. Share each video: Right-click → Share → "Anyone with the link"
4. Copy the ID from the URL (the part after `/d/` and before `/view`)
5. Replace the placeholder IDs in `videos.ts`

Example URL: `https://drive.google.com/file/d/1AbC2DeFgHIjkLMno/view`
→ ID is: `1AbC2DeFgHIjkLMno`

### Add Thumbnails

1. Create 9:16 aspect ratio images (400×711px recommended)
2. Save them as JPG/PNG in `public/thumbs/`
3. Update the `thumb` path in `lib/videos.ts`

### Update Contact Info

Open `components/Contact.tsx` and change:
- Email address
- Instagram URL
- LinkedIn URL

### Customize Text

Edit `lib/i18n.ts` to change all text in Hebrew and English.

## Step 4: Deploy to Vercel

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

Or push to GitHub and import in [vercel.com](https://vercel.com).

## 📱 Test on Mobile

The site uses scroll-snap for smooth section navigation. Test on:
- Chrome mobile
- Safari iOS
- Different screen sizes

---

**Need help?** Read the full [README.md](./README.md)

