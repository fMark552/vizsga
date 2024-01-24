import express from 'express'
import mysql from 'mysql'

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

app.get('/', (req, res) => {
  res.json('aha')
})

app.get('/home', (req, res) => {
  const q = 'SELECT * FROM blog'
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.post('/home', (req, res) => {
  const q = 'INSERT INTO blog (`text`) VALUES (?)'
  const value = [req.body.text]

  db.query(q, [value], (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.listen(port, () => {
  console.log(`The server is running on port ${port}`)
})
