#!/usr/bin/env node

import cli from '../src/cli.js';
import yargs from 'yargs-parser';

let args = yargs(process.argv.slice(2), {
    configuration: { 'short-option-groups': true, 'camel-case-expansion': true }
});

cli(args);
