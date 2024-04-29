const { userService } = require("../services");

const addUser = async (req, res) => {
  try {
    const body = req.body;
    const user = await userService.addUser(body);

    if (user) {
    }
    console.log(body);

    res.status(201).json({
      message: "user Created success",
      user,
    });
  } catch (err) {
    console.log(err, "err");
  }
};

const getUser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const user = await userService.getUser();
    res.status(200).json({
      message: "user get Success",
      user,
    });
  } catch (err) {
    console.log(err, "err");
  }
};

const loginUser = async (req, res) => {
  const body = req.body;
  const password = body.password;
  const email = body.email;

  const findUser = await userService.findUser(email);

  if (!findUser) {
    res.status(500).json({
      message: "user not found",
      email,
    });
 
  };
  if (password == findUser.password) {
    res.status(201).json({
      message: "login success",
      email,
    });
  } else {
    let data = {
        email: body.email,
        Name: body.userName,
    }
    res.cookies("user_login", data);
  }
};

module.exports = {
  addUser,
  getUser,
  loginUser,
};
