const fs = require('fs');

//copy function for files - where file1.txt is a SOURCE & f2.txt is destination of copying.
//run 'node index.js' in terminal for the output.
fs.copyFileSync("file1.txt", "file2.txt");
