const db = require('../../db');

exports.index = (req,res) => {
  db.User.create({name:`aa`,password:`asd`,stud_id:123,admin:true}).then((r) => {
    console.log(r);
    res.send(r);
  })
}
