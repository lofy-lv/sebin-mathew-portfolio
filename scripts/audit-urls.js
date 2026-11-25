const fs = require('fs');
const path = require('path');

const projectsFile = path.join(__dirname, '..', 'src', 'data', 'projects.ts');
const content = fs.readFileSync(projectsFile, 'utf8');

// Match rawProjects block
const rawProjectsBlockMatch = content.match(/const rawProjects: Project\[\] = (\[[\s\S]*?\n\];)/);
if (!rawProjectsBlockMatch) {
  console.error('Could not find rawProjects in projects.ts');
  process.exit(1);
}

// Extract each object
const block = rawProjectsBlockMatch[1];
const projectBlockRegex = /{\s*id:\s*"([^"]+)"[\s\S]*?domain:\s*"([^"]+)"[\s\S]*?liveUrl:\s*"([^"]+)"/g;
const projects = [];
let match;
while ((match = projectBlockRegex.exec(block)) !== null) {
  projects.push({
    id: match[1],
    domain: match[2],
    liveUrl: match[3]
  });
}

console.log(`Parsed ${projects.length} projects from rawProjects array.`);

let issues = 0;
projects.forEach(p => {
  if (!p.domain.startsWith('https://')) {
    console.warn(`[WARN] Project "${p.id}" domain lacks https://: "${p.domain}"`);
    issues++;
  }
  if (!p.liveUrl.startsWith('https://')) {
    console.warn(`[WARN] Project "${p.id}" liveUrl lacks https://: "${p.liveUrl}"`);
    issues++;
  }
});

console.log('\nChecking specific target domains:');
const checkList = [
  'gaspetworld.com',
  'virtunerealtors.com',
  'neethusstudyabroad.com',
  'liveducationconsultancy.com',
  'missionarideisacricuori.com'
];

checkList.forEach(item => {
  const found = projects.find(p => p.domain.includes(item) || p.liveUrl.includes(item));
  console.log(`  - ${item}: ${found ? 'FOUND (' + found.liveUrl + ')' : 'MISSING!'}`);
  if (!found) issues++;
});

if (issues === 0) {
  console.log(`\nSUCCESS: All ${projects.length} projects verified with valid https:// links and domains!`);
} else {
  console.log(`\nFound ${issues} issues to address.`);
}
