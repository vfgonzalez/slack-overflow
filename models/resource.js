// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// Resource Model
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  link: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  author: { type: String, required: false },
  voteCount: {type: Number, default:0, required: false}
})

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;