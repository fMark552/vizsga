import { db } from "../Database";

export const getBlog = (req, res) => {
  const q='SELECT blog.id, blog.text, blog.timestamp, users.username FROM blog INNER JOIN users ON blog.userId=users.id;';
  
  res.json('Blog cucc')
}
