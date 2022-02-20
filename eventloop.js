const fs = require('fs')
const fileName = "target.txt"

fs.readFile(fileName, (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data.toString());
    }
});

// This part executes first even though we write
// it later because of asynchronous programming of nodejs.
// ReadFile  takes a bit more time hence the result of this comes
// first.
console.log("NodeJs Async Programming");