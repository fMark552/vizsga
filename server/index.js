import express from 'express'
import { db } from './Database.js'
import cors from 'cors'
import { getUser } from './controllers/User.js'
import { getPost } from './controllers/Post.js'
import { getComment } from './controllers/Comment.js'
import { getHeart } from './controllers/Heart.js'
import { Login, Registration, Logout } from './controllers/Auth.js'

const app = express()

const port = 1997

//Express middleware -> json file-ok küldéséhez
app.use(express.json())
app.use(cors())

app.get('/server/users', getUser)
app.get('/server/posts', getPost)
app.get('/server/comments', getComment)
app.get('/server/hearts', getHeart)

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
