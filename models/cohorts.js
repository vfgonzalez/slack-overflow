const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cohortSchema = new Schema({
  cohort: { type: String, required: true }
});

const Cohort = mongoose.model("Cohort", cohortSchema);

module.exports = Cohort;