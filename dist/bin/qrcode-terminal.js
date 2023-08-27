#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Module dependencies.
 */
const main_1 = __importDefault(require("../lib/main"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
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
    let opts = {};
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
}
else {
    // called with piped input, e.g.:
    // echo "INPUT" | ./qrcode-terminal.js
    var readline = require('readline');
    var intfce = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    intfce.on('line', function (line) {
        handleInput(line);
    });
}
/*!
 * Process the input
 */
function handleInput(input, opts) {
    /*!
     * Render the QR Code
     */
    main_1.default.generate(input, opts);
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
    var packagePath = path_1.default.join(__dirname, '..', 'package.json'), packageJSON = JSON.parse(fs_1.default.readFileSync(packagePath), 'utf8');
    console.log(packageJSON.version);
}
