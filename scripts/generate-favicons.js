const sharp = require('sharp');
const path = require('path');

async function main() {
  const logoSquare = path.join(__dirname, '..', 'public', 'assets', 'logo-square.png');

  // 1. Generate 192x192 icon with white circle background
  const size = 192;
  const padding = 24;
  const logoSize = size - padding * 2;
  const logoBuf192 = await sharp(logoSquare).resize(logoSize, logoSize).toBuffer();
  const circleSvg192 = Buffer.from(`<svg width="${size}" height="${size}"><circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="#FFFFFF"/></svg>`);
  await sharp(circleSvg192)
    .composite([{ input: logoBuf192, left: padding, top: padding }])
    .png()
    .toFile(path.join(__dirname, '..', 'src', 'app', 'icon.png'));
  console.log('Generated src/app/icon.png');

  // 2. Generate 180x180 apple icon with rounded white background
  const appleSize = 180;
  const applePad = 22;
  const appleLogoSize = appleSize - applePad * 2;
  const appleLogoBuf = await sharp(logoSquare).resize(appleLogoSize, appleLogoSize).toBuffer();
  const appleSvg = Buffer.from(`<svg width="${appleSize}" height="${appleSize}"><rect width="${appleSize}" height="${appleSize}" rx="40" fill="#FFFFFF"/></svg>`);
  await sharp(appleSvg)
    .composite([{ input: appleLogoBuf, left: applePad, top: applePad }])
    .png()
    .toFile(path.join(__dirname, '..', 'src', 'app', 'apple-icon.png'));
  console.log('Generated src/app/apple-icon.png');

  // 3. Generate 48x48 favicon with white circle background
  const favSize = 48;
  const favPad = 6;
  const favLogoSize = favSize - favPad * 2;
  const favLogoBuf = await sharp(logoSquare).resize(favLogoSize, favLogoSize).toBuffer();
  const favSvg = Buffer.from(`<svg width="${favSize}" height="${favSize}"><circle cx="${favSize/2}" cy="${favSize/2}" r="${favSize/2}" fill="#FFFFFF"/></svg>`);
  await sharp(favSvg)
    .composite([{ input: favLogoBuf, left: favPad, top: favPad }])
    .png()
    .toFile(path.join(__dirname, '..', 'public', 'favicon.ico'));
  console.log('Generated public/favicon.ico');
}

main().catch(console.error);
