import { db } from '../Database.js';

export const getComment = (req, res) => {
  const q='SELECT comments.id, comments.commentText, comments.timestamp, users.username, blog.id AS blogid FROM comments INNER JOIN users ON comments.commentUserId=users.id INNER JOIN blog ON comments.commentBlogId=blog.id WHERE blogid = ?;';
  db.query(q,[req.body.blogid],(err,data)=>{
    if(err) return res.send(err);
    return res.json(data);
  })
}
