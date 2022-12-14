const db = require("../models");
const Profile = db.Profile;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.last_name | !req.body.first_name) {
    res.status(400).send({
      message: "Last name and first name can not be empty!"
    });
    return;
  }

  // Create a Profile
  const profile = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    birthday: req.body.birthday,
    user_id: req.params.user_id
  };

  // Save User in the database
  Profile.create(profile)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the profile."
      });
    });
};

exports.findOne = (req, res) => {
  const user_id = req.params.user_id;

  Profile.findOne(
    {
      where: { user_id: user_id }
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Profile with user_id=${user_id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Profile with user id=" + user_id
      });
    });
};

exports.update = (req, res) => {
  const user_id = req.params.user_id;

  Profile.update(req.body, {
    where: { user_id: user_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Profile was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Profile with user_id=${user_id}. Maybe Profile was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Cannot updating Profile with  user id=${user_id}.`
      });
    });
};

exports.delete = (req, res) => {
  const user_id = req.params.user_id;

  Profile.destroy({
    where: { user_id: user_id }

  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Profile was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Profile with user_id=${user_id}. Maybe Profile was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Profile with user id=" + user_id
      });
    });
};
