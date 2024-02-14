import { db } from '../Database.js'
import bcrypt from 'bcryptjs'

export const Login = (req, res) => {}

export const Registration = (req, res) => {
  const q = 'SELECT * FROM users WHERE username = ?'

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err)
    if (data.length) return res.status(409).json('This account already exists!')

    const secure = bcrypt.genSaltSync(10)
    const securePassword = bcrypt.hashSync(req.body.password, secure)

    const q = 'INSERT INTO users (`username`,`email`,`password`) VALUE (?)'

    db.query(
      q,
      [req.body.username, req.body.email, securePassword],
      (err, data) => {
        if (err) return res.status(500).json(err)
        return res.status(200).json('Account has been created!')
      }
    )
  })
}

export const Logout = (req, res) => {}
