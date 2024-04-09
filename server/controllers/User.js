export const getUser = (req, res) => {
  const userId=req.params.id;
  const q="SELECT users.id, users.username, users.password, users.email FROM users WHERE users.id=?;";
  db.query(q,[userId],(err,data)=>{
    if(err) return res.send(err);
    return res.json(data);
  })
}
