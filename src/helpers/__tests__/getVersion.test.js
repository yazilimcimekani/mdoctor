import path from 'path';
import getVersion from '../getVersion.js';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync(path.join(process.cwd(), 'package.json')));

describe('getVersion-test', () => {
    test('returns the version number that same as package.json version', () => {
        expect('v' + pkg.version).toEqual(getVersion());
    });
});
