const { execSync } = require('child_process');
const { readdirSync, readFileSync, writeFileSync } = require('fs');

const MANIFEST_PATH = 'temp/library/manifests/';

try {
  execSync('git clone https://github.com/VCVRack/library.git temp/library');
  const data = readdirSync(MANIFEST_PATH).map(file =>
    JSON.parse(readFileSync(MANIFEST_PATH + file, 'utf8')),
  );
  writeFileSync('./src/data/data.json', JSON.stringify(data));
  execSync('rm -rf ./temp');
} catch (error) {
  console.log(error);
}

console.log('Done');
