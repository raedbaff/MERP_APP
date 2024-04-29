const mongoUser = require("../Models/User");

exports.Create = async (req, res) => {
  try {
    const { Email } = req.body;
    if (!Email) {
      return res.status(400).json("please provide Email")
    }

    const User = new mongoUser({ Email });
    const savedUser = await User.save();
    res.status(200).json({ savedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.Get = async (req,res) => {
    try {
        const users = await mongoUser.find({});
        if (!users) res.status(404).json({ Error: "No users found" });
        return res.status(200).json(users);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
}