const fs = require('fs')
const fileName = "target.txt"

// This is blocking code and synchronous
const data = fs.readFileSync(fileName);
console.log(data.toString());

// fs.readFile(fileName, (err, data) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data.toString());
//     }
// });

// The console log output order is given as expected
console.log("NodeJs Sync Programming");