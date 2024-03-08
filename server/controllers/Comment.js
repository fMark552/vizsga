import { db } from '../Database.js';

export const getComment = (req, res) => {
  const blogId = req.params.id;
  const q='SELECT comments.id AS commentid, comments.commentText, comments.timestamp, users.username, blog.id AS blogid FROM comments INNER JOIN users ON comments.commentUserId=users.id INNER JOIN blog ON comments.commentBlogId=blog.id WHERE blog.id = ?;';
  db.query(q,[blogId],(err,data)=>{
    if(err) return res.send(err);
    return res.json(data);
  })
}
