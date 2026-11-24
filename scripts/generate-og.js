const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Read logo-square.png as base64
const logoPath = path.join(__dirname, '..', 'public', 'assets', 'logo-square.png');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
const logoUri = 'data:image/png;base64,' + logoBase64;

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGrad1" cx="20%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#8B5CF6" stop-opacity="0.32" />
      <stop offset="100%" stop-color="#0B0D12" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="bgGrad2" cx="85%" cy="85%" r="60%">
      <stop offset="0%" stop-color="#FB923C" stop-opacity="0.26" />
      <stop offset="100%" stop-color="#0B0D12" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#A78BFA" />
      <stop offset="100%" stop-color="#FB923C" />
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(167, 139, 250, 0.45)" />
      <stop offset="100%" stop-color="rgba(251, 146, 60, 0.25)" />
    </linearGradient>
  </defs>

  <!-- Dark Base -->
  <rect width="1200" height="630" fill="#0B0D12" />
  <rect width="1200" height="630" fill="url(#bgGrad1)" />
  <rect width="1200" height="630" fill="url(#bgGrad2)" />

  <!-- Outer Card Frame -->
  <rect x="30" y="30" width="1140" height="570" rx="24" fill="#111318" fill-opacity="0.65" stroke="url(#borderGrad)" stroke-width="1.5" />

  <!-- Dubai Status Pill -->
  <g transform="translate(70, 70)">
    <rect width="440" height="44" rx="22" fill="rgba(45, 212, 191, 0.12)" stroke="rgba(45, 212, 191, 0.4)" stroke-width="1" />
    <circle cx="24" cy="22" r="6" fill="#2DD4BF" />
    <text x="42" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="18" font-weight="600" fill="#2DD4BF" letter-spacing="0.5">
      Available Immediately in Dubai · UAE
    </text>
  </g>

  <!-- Logo Mark Container -->
  <g transform="translate(70, 145)">
    <rect width="96" height="96" rx="48" fill="#FFFFFF" stroke="rgba(255, 255, 255, 0.5)" stroke-width="2" />
    <image href="${logoUri}" x="12" y="12" width="72" height="72" />
  </g>

  <!-- Name & Roles -->
  <text x="190" y="195" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="52" font-weight="800" fill="#F8FAFC" letter-spacing="-1">
    Sebin Mathew
  </text>
  <text x="190" y="232" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="24" font-weight="700" fill="url(#titleGrad)" letter-spacing="0.5">
    TECHNICAL PROJECT MANAGER · FULL STACK DEVELOPER
  </text>

  <!-- Core Proposition -->
  <text x="70" y="305" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="26" font-weight="400" fill="#CBD5E1">
    Bridging complex stakeholder visions with cross-functional engineering execution.
  </text>
  <text x="70" y="342" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="22" font-weight="400" fill="#94A3B8">
    PRD Documentation · Agile Sprint Cadence · QA &amp; UAT Verification · Production Deployment
  </text>

  <!-- Stats Grid / Badges -->
  <g transform="translate(70, 400)">
    <!-- Stat 1 -->
    <rect x="0" y="0" width="240" height="88" rx="16" fill="#161922" stroke="rgba(161, 161, 170, 0.2)" stroke-width="1" />
    <text x="24" y="42" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="800" fill="#2DD4BF">33+</text>
    <text x="24" y="68" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="600" fill="#94A3B8">Delivered Products</text>

    <!-- Stat 2 -->
    <rect x="260" y="0" width="240" height="88" rx="16" fill="#161922" stroke="rgba(161, 161, 170, 0.2)" stroke-width="1" />
    <text x="284" y="42" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="800" fill="#A78BFA">100%</text>
    <text x="284" y="68" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="600" fill="#94A3B8">CSAT Rating</text>

    <!-- Stat 3 -->
    <rect x="520" y="0" width="260" height="88" rx="16" fill="#161922" stroke="rgba(161, 161, 170, 0.2)" stroke-width="1" />
    <text x="544" y="42" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="800" fill="#FB923C">End-to-End</text>
    <text x="544" y="68" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="600" fill="#94A3B8">Lifecycle Ownership</text>

    <!-- Stat 4 -->
    <rect x="800" y="0" width="260" height="88" rx="16" fill="#161922" stroke="rgba(161, 161, 170, 0.2)" stroke-width="1" />
    <text x="824" y="42" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="800" fill="#38BDF8">MERN · Next</text>
    <text x="824" y="68" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="600" fill="#94A3B8">Full-Stack Foundation</text>
  </g>

  <!-- Bottom URL / Branding -->
  <text x="70" y="545" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="19" font-weight="500" fill="#64748B">
    sebinmathew.com · Dubai, UAE · Visit Visa · Immediate Joiner
  </text>
</svg>
`;

const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');
sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then(() => {
    console.log('Successfully generated ' + outputPath);
  })
  .catch((err) => {
    console.error('Error generating OG image:', err);
  });
