import express from 'express'
import { db } from './Database.js'
import cors from 'cors'
import { getUser } from './controllers/User.js'
import { deleteBlog, getBlog, pakkBlog, postBlog } from './controllers/Blog.js'
import { deleteComment, getComment, postComment } from './controllers/Comment.js'
import { getHeart, getHearts, postHeart } from './controllers/Heart.js'
import { Registration, Login, Logout } from './controllers/Auth.js'
import cookieParser from 'cookie-parser'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()

const port = 1997

app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(cookieParser())

//Get kérések
//app.get('/users', getUser)
app.get('/blogs', getBlog)
app.get('/pakkBlog',pakkBlog)
app.get('/users/:username', getUser)
//Comment get a Blog id-je szerint
app.get('/comments/:id', getComment)
//Heart count get a Blog id-je szerint
app.get('/hearts/:id', getHeart)
//Heart get a Blog id-je szerint
app.get('/heart/:id',getHearts)

//Post kérések
app.post('/postblog', postBlog)
app.post('/postcomment', postComment)
app.post('/postheart', postHeart)

//Delete kérések
app.delete('/deleteblog/:id', deleteBlog)
app.delete('/deletecomment/:id' ,deleteComment)

//Auth route-ok
app.post('/login', Login)
app.post('/registration', Registration)
app.post('/logout', Logout)

app.get('/home', (req, res) => {
  prisma.users.findMany().then(users => {
    res.json(users)
  }).catch(err => {
    res.send(err)
  })
  /*

  const q = 'SELECT * FROM users'
  db.query(q, (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
  */
})

// app.post('/home', (req, res) => {
//   const q = 'INSERT INTO blog (`text`, `userId`, `timestamp`) VALUES (?)'
//   const value = [req.body.text]

//   db.query(q, [value], (err, data) => {
//     if (err) return res.send(err)
//     return res.json(data)
//   })
// })

// app.delete('/home/:id', (req, res) => {
//   const blogId = req.params.id
//   const q = 'DELETE FROM blog WHERE id = ?'

//   db.query(q, [blogId], (err, data) => {
//     if (err) return res.send(err)
//     return res.json(data)
//   })
// })

// app.put('/home/:id', (req, res) => {
//   const blogId = req.params.id
//   const q = 'UPDATE blog SET `text` = ? WHERE id = ? '

//   const value = [req.body.text]

//   db.query(q, [...value, blogId], (err, data) => {
//     if (err) return res.send(err)
//     return res.json(data)
//   })
// })

app.listen(port, () => {
  console.log(`The server is running on port ${port}`)
})
