#!/usr/bin/env node

/*!
 * Module dependencies.
 */
import { generate } from '../lib/main';
import path from 'path';
import fs from 'fs';


/*!
 * Parse the process name
 */

var name = process.argv[1].replace(/^.*[\\\/]/, '').replace('.js', '');

/*!
 * Parse the input
 */

if (process.stdin.isTTY) {
    // called with input as argument, e.g.:
    // ./qrcode-terminal.js "INPUT"

    let args = process.argv.slice(2);
    let input = args[args.length - 1];
    let opts: { small: boolean } = { small: false };
    args.forEach(function (arg) {
        if (arg === '-h' || arg === '--help') {
            help();
            process.exit();
        }

        if (arg === '-v' || arg === '--version') {
            version();
            process.exit();
        }

        if (arg === '-s' || arg === '--small') {
            opts.small = true;
        }
    });

    handleInput(input, opts);
} else {
    // called with piped input, e.g.:
    // echo "INPUT" | ./qrcode-terminal.js

    var readline = require('readline');

    var intfce = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    intfce.on('line', function (line: any) {
        handleInput(line);
    });
}

/*!
 * Process the input
 */

function handleInput(input: string, opts?: { small: boolean; } | undefined) {
    /*!
     * Render the QR Code
     */

    generate(input, opts);
}

/*!
 * Helper functions
 */

function help() {
    console.log([
        '',
        'Usage: ' + name + ' [options] <input>',
        '',
        'Options:',
        '  -h, --help           output usage information',
        '  -v, --version        output version number',
        '  -s, --small          render a smaller QR Code',
        '',
        'Examples:',
        '',
        '  $ ' + name + ' hello',
        '  $ ' + name + ' "hello world"',
        '  $ ' + name + ' -s "hello world"',
        ''
    ].join('\n'));
}

function version() {
    var packagePath = path.join(__dirname, '..', 'package.json'),
        packageJSON = JSON.parse(fs.readFileSync(packagePath).toString());

    console.log(packageJSON.version);
}
