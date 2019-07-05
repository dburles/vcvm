const { writeFileSync } = require('fs');

try {
  writeFileSync(
    './src/data/updatedAt.js',
    `export const updatedAt = ${Date.now()};\n`,
  );
} catch (error) {
  console.log('Failed to write updatedAt', error);
}
