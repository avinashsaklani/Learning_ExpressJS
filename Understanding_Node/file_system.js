const fs = require('fs')



// 1 How to read, write, delete and update a file

// Reading the File
let content = fs.readFileSync('f1.txt')

console.log('Data of File 1-> ' + content)

// Writing into a file

fs.writeFileSync('f2.txt', 'This is the data we want to write')

console.log('data written')

// there are several methods for delete,make,read,copy etc.






