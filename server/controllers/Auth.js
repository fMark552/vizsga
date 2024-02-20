import { db } from '../Database.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const Registration = (req, res) => {
  const q = 'SELECT * FROM users WHERE username = ?'

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err)
    if (data.length)
      return res
        .status(409)
        .json('An account with this username already exists!')

    const secure = bcrypt.genSaltSync(10)
    const securePassword = bcrypt.hashSync(req.body.password, secure)

    const q =
      'INSERT INTO users (`username`,`email`,`password`) VALUES (?, ?, ?)'

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

export const Login = (req, res) => {
  const q = 'SELECT * FROM users WHERE username = ?'

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err)
    if (data.length === 0)
      return res.status(404).json('Username was not found!')

    const passwordCheck = bcrypt.compareSync(
      req.body.password,
      data[0].password
    )

    if (!passwordCheck)
      return res.status(400).json('Wrong username or password!')

    const token = jwt.sign({ id: data[0].id }, 'Key')

    const { password, ...others } = data[0]

    res
      .cookie('Tolkien', token, {
        httpOnly: true,
      })
      .status(200)
      .json(others)
  })
}

export const Logout = (req, res) => {
  res
    .clearCookie('Tolkien', {
      secure: true,
      sameSite: 'none',
    })
    .status(200)
    .json('User just logged out!')
}
