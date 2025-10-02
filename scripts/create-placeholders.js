const fs = require('fs');
const path = require('path');

// Minimal 1x1 PNG in base64 (transparent)
const minimalPNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);

const thumbsDir = path.join(__dirname, '..', 'public', 'thumbs');

if (!fs.existsSync(thumbsDir)) {
  fs.mkdirSync(thumbsDir, { recursive: true });
}

const placeholders = [
  'product-campaign.jpg',
  'artist-clips.jpg',
  'branding-intro.jpg',
  'tech-reels.jpg',
  'launch-event.jpg',
  'music-festival.jpg'
];

placeholders.forEach(filename => {
  const filepath = path.join(thumbsDir, filename);
  fs.writeFileSync(filepath, minimalPNG);
  console.log(`Created: ${filename}`);
});

console.log('\n✅ All placeholder thumbnails created!');
console.log('⚠️  Replace these with real 400x711px images for your videos.');

