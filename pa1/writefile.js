#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello.txt";
//var out = "Modify this script to write out something different.\n";
var out = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

