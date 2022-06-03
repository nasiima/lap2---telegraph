// const Person = require('./person')

// const person1 = new Person('me', 20)

// person1.greeting();

const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>hi</h1>')
    }
})

const PORT = process.env.PROT || 5001;
server.listen(PORT, () => console.log(`server running on ${PORT}`))