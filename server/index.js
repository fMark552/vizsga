import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()

const port = 1997

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vizsga',
})

//Express middleware -> json file-ok küldéséhez
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json('aha')
})

app.get('/home', (req, res) => {
  const q = 'SELECT * FROM blog'
  db.query(q, (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
})

app.post('/home', (req, res) => {
  const q = 'INSERT INTO blog (`text`, `userId`, `timestamp`) VALUES (?)'
  const value = [
    req.body.text,
    userInfo.id,
    moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
  ]

  db.query(q, [value], (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
})

app.delete('/home/:id', (req, res) => {
  const blogId = req.params.id
  const q = 'DELETE FROM blog WHERE id = ?'

  db.query(q, [blogId], (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
})

app.put('/home/:id', (req, res) => {
  const blogId = req.params.id
  const q = 'UPDATE blog SET `text` = ? WHERE id = ? '

  const value = [req.body.text]

  db.query(q, [...value, blogId], (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
})

app.listen(port, () => {
  console.log(`The server is running on port ${port}`)
})
