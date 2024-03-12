import { db } from '../Database.js';

export const getComment = (req, res) => {
  const blogId = req.params.id;
  const q='SELECT comments.id AS commentid, comments.commentText, comments.timestamp, users.username, blog.id AS blogid FROM comments INNER JOIN users ON comments.commentUserId=users.id INNER JOIN blog ON comments.commentBlogId=blog.id WHERE blog.id = ?;';
  db.query(q,[blogId],(err,data)=>{
    if(err) return res.send(err);
    return res.json(data);
  })
}

export const postComment=(req,res)=>{
  const q='INSERT INTO comments (commentText, timestamp, commentUserId, commentBlogId) VALUES (?, ?, ?, ?);';
  db.query(q,[req.body.commentText,req.body.timestamp,req.body.commentUserId,req.body.commentBlogId],(err,data)=>{
    if(err) return res.status(500).json(err);
    return res.status(200).json('Comment has been created!')
  })
}

export const deleteComment=(req,res)=>{
  const commentId=req.params.id;
  const q='DELETE FROM comments WHERE id=?;';
  db.query(q,[commentId],(err,data)=>{
    if(err) return res.status(500).json(err);
    return res.status(200).json('Comment has been deleted!');
  })
}