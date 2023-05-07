import fs from 'fs';
const data = JSON.parse(fs.readFileSync('./package.json'));

export default function getVersion() {
    let version = 'v' + data.version;
    return version;
}
