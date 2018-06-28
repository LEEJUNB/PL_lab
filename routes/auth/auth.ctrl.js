const db = require('../../db');

exports.signIn = async (req, res) => {
  const { name, password, stud_id, phone_number } = req.body;

  try {
    const result = await db.User.create({
      name: name,
      password: password,
      stud_id: stud_id,
      phone_number: phone_number
    });
    sess = req.session;
    sess.stud_id = stud_id;
    console.log('req.session -> ', sess);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
