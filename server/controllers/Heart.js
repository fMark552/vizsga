import { db } from '../Database.js';

export const getHeart = (req, res) => {
  const blogId=req.params.id;
  const q='SELECT COUNT(id) FROM hearts WHERE heartBlogId=?;'
  db.query(q,[blogId],(err,data)=>{
    if(err) return res.send(err);
    return res.json(data);
  })
}

export const postHeart=(req,res)=>{
  const q='INSERT INTO hearts (heartUserId,heartBlogId) VALUES (?, ?);';
  db.query(q,[req.body.heartUserId,req.body.heartBlogId],(err,data)=>{
    if(err) return res.status(500).json(err);
    return res.status(200).json('Heart has been created!')
  })
}
