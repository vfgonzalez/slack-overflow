const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourcesSchema = new Schema({
  link: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  author: { type: String, required: false },
  voteCount: {numberInt: 0, required: true}
});

const Resources = mongoose.model("Resources", resourcesSchema);

module.exports = Resources;


