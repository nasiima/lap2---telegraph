const fs = require('fs');
const path = require('path');

// create folder

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log ('folder created')
// })



// create and wrote to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
//  'hello world' ,
//   err => {
//     if(err) throw err;
//     console.log ('file written to ....')
// })


// create file 
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
//  'hello world' ,
//   err => {
//     if(err) throw err;
//     console.log ('file written to ....')

//   })


// create and write and append to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
//  'hello world' ,
//   err => {
//     if(err) throw err;
//     console.log ('file written to ....')

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
//  'by bye' ,
//   err => {
//     if(err) throw err;
//     console.log ('file written to ....')
//       }
//    )
//  }
// )


// read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'),
//  'utf8' ,
//   (err, data) => {
//     if(err) throw err;
//     console.log (data)

//   })

  // rename a file 

  fs.rename(path.join(__dirname, '/test', 'bye.txt'),
 path.join(__dirname, '/test', 'helloworld.txt'), (err, data) => { 

     if(err) throw err;
     console.log ('file renamed')

 })






