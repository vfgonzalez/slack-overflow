const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { type: String, required: true },
  accountLevel: { type: String, required: true },
  password: { type: String, required: true },
  cohort: "UCIRV201801FSF2"
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;