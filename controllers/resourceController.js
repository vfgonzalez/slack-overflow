// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// Resources Controller
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

const db = require("../models");

// Defining methods for the resourcesController
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
    //{ name: 'jason bourne' }
    //{$inc : {'post.likes' : 1}}
    // req.body should look like this: { voteCount: 1 } or { voteCount: -1 }
    console.log('req.body', req.body);
    db.Resource
      .findOneAndUpdate({ _id: req.params.id }, { $inc: req.body })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("Removing Resource: " + req.params.title)
    // console.log(req.params.stringify())
    var stringtitle = JSON.stringify(req.params.title)
    console.log("Stringify: " + stringtitle)
    // console.log(req)
    // console.log(req.params)
    // console.log(req.params.title)
    console.log(req.body)
    db.Resource
      .findById({ title: req.params.title })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};