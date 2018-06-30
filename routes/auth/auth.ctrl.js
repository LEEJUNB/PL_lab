const crypto = require('crypto-promise');
const signale = require('signale');

const db = require('../../db');

const pbkdf2 = async (password, salt) => {
  const passwordHashed = await crypto.pbkdf2(
    password,
    salt,
    10000,
    64,
    'sha512'
  );
  return passwordHashed;
};

const hashPassword = async password => {
  const salt = await crypto.randomBytes(64);
  const passwordHashed = await pbkdf2(password, salt.toString('base64'));
  return {
    salt: salt.toString('base64'),
    passwordHashed: passwordHashed.toString('base64')
  };
};

exports.signIn = async (req, res) => {
  const { name, password, stud_id, phone_number } = req.body;
  try {
    const user = await db.User.findOne({
      where: { stud_id: stud_id }
    });
    if (user) {
      return res.status(200).json({
        message: '이미 가입된 학번입니다.'
      });
    }
    const { salt, passwordHashed } = await hashPassword(password);
    const result = await db.User.create({
      name: name,
      password: passwordHashed,
      salt: salt,
      stud_id: stud_id,
      phone_number: phone_number
    });
    return res.status(200).json({ result });
  } catch (error) {
    signale.fatal(error);
    return res.status(500).json(error);
  }
};

exports.logIn = async (req, res) => {
  const { stud_id } = req.body;
  const inputPassword = req.body.password;
  try {
    const user = await db.User.findOne({
      where: { stud_id: stud_id }
    });
    if (!user) {
      return res.status(401).json({
        message: '해당 학번에 해당하는 사용자가 없습니다.'
      });
    }
    const { salt, name } = user.dataValues;
    const realPassword = user.dataValues.password;
    const hashedInputPassword = await pbkdf2(inputPassword, salt);
    if (hashedInputPassword.toString('base64') == realPassword) {
      sess = req.session;
      sess['id'] = stud_id;
      return res.status(200).json({
        message: `${name}님, 로그인 되었습니다.`,
        user: user.dataValues
      });
    } else {
      res.status(200).json({
        message: '비밀번호가 틀렸습니다.',
        salt: salt,
        hashedInputPassword: hashedInputPassword.toString('base64')
      });
    }
  } catch (error) {
    signale.fatal(error);
    res.status(500).json(error);
  }
};

exports.renderRegisterPage = (req, res) => {
  return res.render('register', { title: 'register page' });
};
