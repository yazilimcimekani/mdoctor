import getVersion from '../getVersion.js';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json'));

describe('getVersion-test', () => {
    test('returns the version number that same as package.json version', () => {
        expect(getVersion()).toEqual('v' + pkg.version);
    });
});
