const db = require("../models");
const Dishe = db.Dishe;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
        message: "Name can not be empty!"
        });
        return;
    }

  // Create an Dishe
  const dishe = {
    name: req.body.name,
    kcal: req.body.kcal,
    protein: req.body.protein,
    saturated_lipid: req.body.saturated_lipid,
    unsaturated_lipid: req.body.unsaturated_lipid,
    sugar: req.body.sugar,
    carbohydrate: req.body.carbohydrate,
    user_id: req.params.user_id
  };

  // Save User in the database
  Dishe.create(dishe)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the dishe."
      });
    });
};


exports.findOne = (req, res) => {
  const user_id = req.params.user_id;
  const id = req.params.id;

  Dishe.findOne(
    {
        where: {
            user_id: user_id,
            id: id
          }
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Dishe with  user_id=${user_id}.`
        });
      }
    })
};

exports.findAll = (req, res) => {
    const user_id = req.params.user_id;

    Dishe.findAll({
        where: {
            user_id: user_id
          },
        order: [
            ['id', 'ASC']
           ],
        })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Dishes."
        });
      });
};

exports.update = (req, res) => {
    const user_id = req.params.user_id;
    const id = req.params.id;
  
    Dishe.update(req.body, {
      where: { 
        user_id: user_id,
        id: id
    }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Dishe was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Dishe with user_id=${user_id} and id=${id}. Maybe Dishe was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Cannot updating Dishe with  user id=${user_id} and id=${id}.`
        });
      });
  };

exports.delete = (req, res) => {
    const user_id = req.params.user_id;
    const id = req.params.id;
  
    Dishe.destroy(
      {
          where: {
              user_id: user_id,
              id: id
            }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Dishe was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Dishe with user_id=${user_id} and id=${id}. Maybe Dishe was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Dishe with user_id=${user_id} and id=${id}`
          });
    });
};