#!/usr/bin/env node

var out = "2,";

var size = 100;
for (var i = 2; i <= size; ++i) {
  var maxDivisor = Math.ceil( Math.sqrt(i) );
  var isPrime = true;
  for (var divisor=2; divisor<=maxDivisor; ++divisor ) {
    if (i % divisor == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    out += i.toString();
    out += ",";
  }
}


var fs = require('fs');
var outfile = "prime.txt";
fs.writeFileSync(outfile, out);
console.log(out);


