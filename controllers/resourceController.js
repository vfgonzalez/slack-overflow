// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// Resources Controller
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

const db = require("../models");

// methods for resource
module.exports = {
  findAll: function(req, res) {
    console.log("Finding All Resources")
    db.Resource
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("Finding Resource By ID")
    db.Resource
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function(req, res) {
    console.log("Finding Resources By Category")
    db.Resource
      .find({category: req.params.category})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("Creating New Resource")
    console.log(req.body)
    db.Resource
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("Updating Resource")
    db.Resource
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  castVote: function(req, res) {
    console.log('req.body', req.body);
    db.Resource
      .findOneAndUpdate({ _id: req.params.id }, { $inc: req.body })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log('Removing By Title: ' + req.params.title)
    db.User
      .deleteOne({ title: req.params.title })
      .catch(err => res.status(422).json(err));
  },
};