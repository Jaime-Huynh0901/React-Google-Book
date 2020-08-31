const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: (req, res) => {
    db.Book.find({}).then((dbModel) => res.json(dbModel));
  },

  findById: function (req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    db.Book.create(req.body).then((dbModel) => res.json(dbModel));
  },

  remove: (req, res) => {
    db.Book.findByIdAndDelete({ _id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
