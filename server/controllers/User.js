import { db } from '../Database.js'

export const getUser = (req, res) => {
  const username=req.params.username;
  const q="SELECT users.id, users.username, users.password, users.email FROM users WHERE users.username=?;";
  db.query(q,[username],(err,data)=>{
    if(err) return res.send(err);
    return res.json(data);
  })
}
