import express from 'express'
import { db } from './Database.js'
import cors from 'cors'
import { getUser } from './controllers/User.js'
import { getPost } from './controllers/Post.js'
import { getComment } from './controllers/Comment.js'
import { getHeart } from './controllers/Heart.js'
import { Registration, Login, Logout } from './controllers/Auth.js'
import cookieParser from 'cookie-parser'
 
const app = express()

const port = 1997

app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(cookieParser())

app.get('/users', getUser)
app.get('/posts', getPost)
app.get('/comments', getComment)
app.get('/hearts', getHeart)

//Auth route-ok
app.post('/login', Login)
app.post('/registration', Registration)
app.post('/logout', Logout)

// app.get('/home', (req, res) => {
//   const q = 'SELECT * FROM blog'
//   db.query(q, (err, data) => {
//     if (err) return res.send(err)
//     return res.json(data)
//   })
// })

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
