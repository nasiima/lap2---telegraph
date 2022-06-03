const path = require('path');


// gives us the path to the file
console.log(__filename);


// gives us just the file name 
console.log(path.basename(__filename));

// gives us just the directory 
console.log(path.dirname(__filename));

// file extension (e.j this is a js file)
console.log(path.extname(__filename))

//create path object 
console.log(path.parse(__filename))


// just the file name
console.log(path.parse(__filename).base)

// concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))

