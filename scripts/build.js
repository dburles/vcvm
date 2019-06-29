const { execSync } = require('child_process');
const { readdirSync, readFileSync, writeFileSync } = require('fs');

const MANIFEST_PATH = 'temp/library/manifests/';

execSync('git clone https://github.com/VCVRack/library.git temp/library');
try {
  const files = readdirSync(MANIFEST_PATH);
  const data = files.map(file =>
    JSON.parse(readFileSync(MANIFEST_PATH + file, 'utf8')),
  );
  writeFileSync('./src/data.json', JSON.stringify(data));
  execSync('rm -rf ./temp');
} catch (error) {
  console.log(error);
}

console.log('Done');
