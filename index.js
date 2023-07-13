const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// app.use(express.static('./public'))

const middleware1 = (req, res, next) => {
  let isLoggedIn = false;
  if(isLoggedIn) {
    next()
  } else {
    res.send('You cannot access this content!')
  }
}

app.use(middleware1)

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
  // Images:
  // 1. https://madooei.github.io/cs421_sp20_homepage/assets/client-server-1.png
  // 2. https://miro.medium.com/v2/resize:fit:945/1*RgPEcCE3mHSGR-fS5lXTCQ.png
*/