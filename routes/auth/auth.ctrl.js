const db = require('../../db');

exports.signIn = async (req, res) => {
  const { name, password, stud_id, phone_number } = req.body;

  // db.User.create({
  //   name: name,
  //   password: password,
  //   stud_id: stud_id,
  //   phone_number: phone_number
  // }).then(r => {
  //   console.log(r);
  // });

  try {
    const result = await db.User.create({
      name: name,
      password: password,
      stud_id: stud_id,
      phone_number: phone_number
    });
    console.log(result);
  } catch (error) {}

  res.status(200).json(res.body);
};
