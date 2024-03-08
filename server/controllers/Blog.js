import { db } from '../Database.js';

export const getBlog = (req, res) => {
  const q='SELECT blog.id, blog.text, blog.timestamp, users.username FROM blog INNER JOIN users ON blog.userId=users.id;';
  db.query(q, (err,data)=>{
    if (err) return res.send(err);
    return res.json(data);
  })
}

export const postBlog=(req,res)=>{
  const q='INSERT INTO blog (text, userId, timestamp) VALUES (?, ?, ?);';
  db.query(q,[req.body.text,req.body.userId,req.body.timestamp],(err,data)=>{
    if(err) return res.status(500).json(err);
    return res.status(200).json('Post has been created!')
  })
}
