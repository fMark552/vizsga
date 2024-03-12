import { db } from '../Database.js'

export const getBlog = (req, res) => {
  const q = `SELECT b.*, u.id AS userId, FROM blog AS b JOIN users AS u ON (u.id = b.userId)`

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err)
    return res.status(200).json(data)
  })
}
