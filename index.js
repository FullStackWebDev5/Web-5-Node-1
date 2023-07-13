const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/about', (req, res) => {
  res.send('About Us')
})

app.get('/contact', (req, res) => {
  res.send('Contact Us')
})

app.get('/users', (req, res) => {
  let users = [
    {
      firstName: 'Reetvik',
      lastName: 'Suthar'
    },
    {
      firstName: 'Ayush',
      lastName: 'Karpre'
    },
    {
      firstName: 'Saksham',
      lastName: 'Verma'
    }
  ]
  res.json(users)
})

app.get('/download-instagram-logo', (req, res) => {
  res.download(__dirname + '/sample.png')
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})












/*
  HTTP Methods:
  - GET: Read (R)
  - POST: Create (C)
  - PUT/PATCH: Update (U)
  - DELETE: Delete (D)
*/

















/*
  const http = require('http');

  const server = http.createServer((req, res) => {
    res.end('We are learning Node.js!')
  })

  server.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
  })

  Frameworks: Express.js, Hapi.js, Fastify, etc.

  // MERN: MongoDB, Express, React, Node
*/