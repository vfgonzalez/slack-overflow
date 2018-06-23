const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cohortsSchema = new Schema({
  cohortname: { type: String, required: true }
});

const Cohorts = mongoose.model("Cohort", cohortsSchema);

module.exports = Cohorts;