### HW1 Programming: Basic Server-Side Javascript with node.js: Instructions

#### Part 1
In part 1, write a node.js script that writes the output "A startup is a business built to grow rapidly.\n" to a file. Run this script on an EC2 t1.micro instance as described in Lecture 2. To make this incredibly easy for you, here is some sample code that you can modify.

```
#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello.txt";
var out = "Modify this script to write out something different.\n";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
```

Submit: A file containing the string "A startup is a business built to grow rapidly.\n" and the corresponding node.js script that you used to generate it. PS: For aficionados, note that we are using the synchronous fs.writeFileSync for pedagogical simplicity in this first problem.

#### Part 2
In part 2, write a node.js script that writes the first 100 prime numbers to a file, with each prime separated by a comma. Remember that the first prime number is 2, and use a function that tests for primality. Here is what the file would look like for the first four prime numbers:

```
2,3,5,7
```

There are many ways to do this problem. You may want to look at the methods in the Javascript Math object, especially ceil, floor, and sqrt. You will also probably want to look at the Array object's length and push methods.

Submit: A file containing a comma-delimited list of the first 100 prime numbers, and the corresponding node.js script that you used to generate it. 
