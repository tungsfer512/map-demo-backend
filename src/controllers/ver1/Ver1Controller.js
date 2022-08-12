import db from "../../models/index";

let getAllUser = async (req, res) => {
  let data = await db.User.findAll();
  res.json(data);
}

export default {
  getAllUser,
}
