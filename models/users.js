// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// User Model
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { type: String, required: true },
  accountLevel: { type: String, required: true },
  password: { type: String, required: true },
  cohortname: {type: String, default: "UCIRV201801FSF2", required:true},
  date: { type: Date, default: Date.now }
});

const Users = mongoose.model("User", usersSchema);

module.exports = Users;