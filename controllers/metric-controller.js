const db = require("../models");
const Metric = db.Metric;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.height
    | !req.body.weight
    | !req.body.gender) {
    res.status(400).send({
      message: "Height, weight and gender can not be empty!"
    });
    return;
  }

  // Create a Profile
  const metric = {
    height: req.body.height,
    weight: req.body.weight,
    gender: req.body.gender,
    birthday: req.body.birthday,
    user_id: req.params.user_id
  };

  // Save User in the database
  Metric.create(metric)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the metric."
      });
    });
};


exports.findOne = (req, res) => {
  const user_id = req.params.user_id;

  Metric.findOne(
    {
      where: { user_id: user_id }
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Metric with  user_id=${user_id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Metric with user_id=" + user_id
      });
    });
};

exports.update = (req, res) => {
  const user_id = req.params.user_id;

  Metric.update(req.body, {
    where: { user_id: user_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Metric was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Metric with id=${id} and user_id=${user_id}. Maybe Profile was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Cannot updating Metric with user_id=${user_id}.`
      });
    });
};

exports.delete = (req, res) => {
  const user_id = req.params.user_id;

  Metric.destroy({
    where: { user_id: user_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Metric was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Metric with user_id=${user_id}. Maybe Metric was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Metric with user_id=" + user_id
      });
    });
};
