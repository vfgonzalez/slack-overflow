const db = require("../models");

// methods for user
module.exports = {
  findAll: function (req, res) {
    console.log('Finding All Users')
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log('woops wrong one 2')
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUsername: function (req, res) {
    console.log("Finding By Username: " + req.params.username)
    db.User
      .find({ username: req.params.username })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log('Creating New User: ' + req.body.username)
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log('Removing By Username: ' + req.params.username)
    db.User
      .deleteOne({ username: req.params.username })
      .catch(err => res.status(422).json(err));
  },
};
