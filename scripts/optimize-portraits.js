const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function optimize() {
  const assetsDir = path.join(__dirname, '..', 'public', 'assets');
  
  // sebin-portrait.jpg (About section portrait)
  const portraitPath = path.join(assetsDir, 'sebin-portrait.jpg');
  if (fs.existsSync(portraitPath)) {
    const meta = await sharp(portraitPath).metadata();
    console.log(`sebin-portrait.jpg: ${meta.width}x${meta.height}, ${(fs.statSync(portraitPath).size / 1024 / 1024).toFixed(2)} MB`);
    const optimized = await sharp(portraitPath)
      .resize(800, 1000, { fit: 'cover', position: 'top' })
      .jpeg({ quality: 88, mozjpeg: true })
      .toBuffer();
    fs.writeFileSync(portraitPath, optimized);
    console.log(`Optimized sebin-portrait.jpg to: ${(optimized.length / 1024).toFixed(1)} KB`);
  }

  // sebin-portrait3.jpg (Hero section portrait)
  const heroPortraitPath = path.join(assetsDir, 'sebin-portrait3.jpg');
  if (fs.existsSync(heroPortraitPath)) {
    const meta3 = await sharp(heroPortraitPath).metadata();
    console.log(`sebin-portrait3.jpg: ${meta3.width}x${meta3.height}, ${(fs.statSync(heroPortraitPath).size / 1024 / 1024).toFixed(2)} MB`);
    const optimized3 = await sharp(heroPortraitPath)
      .resize(800, 1000, { fit: 'cover', position: 'top' })
      .jpeg({ quality: 88, mozjpeg: true })
      .toBuffer();
    fs.writeFileSync(heroPortraitPath, optimized3);
    console.log(`Optimized sebin-portrait3.jpg to: ${(optimized3.length / 1024).toFixed(1)} KB`);
  }
}

optimize().catch(console.error);
