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

app.listen(port, () => {
  console.log(`The server is running on port ${port}`)
})
