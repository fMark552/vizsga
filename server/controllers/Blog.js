import { db } from '../Database.js';

export const getBlog = (req, res) => {
  const q='SELECT blog.id, blog.text, blog.timestamp, users.username FROM blog INNER JOIN users ON blog.userId=users.id;';
  db.query(q, (err,data)=>{
    if (err) return res.send(err);
    return res.json(data);
  })
}
