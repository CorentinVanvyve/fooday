const db = require("../models");
const Aliment = db.Aliment;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
        message: "Name can not be empty!"
        });
        return;
    }

  // Create an Aliment
  const aliment = {
    name: req.body.name,
    kcal: req.body.kcal,
    protein: req.body.protein,
    saturated_lipid: req.body.saturated_lipid,
    unsaturated_lipid: req.body.unsaturated_lipid,
    sugar: req.body.sugar,
    carbohydrate: req.body.carbohydrate,
    store_product_link: req.body.store_product_link,
    user_id: req.params.user_id
  };

  // Save User in the database
  Aliment.create(aliment)
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
  const id = req.params.id;

  Aliment.findOne(
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
          message: `Cannot find Aliment with  user_id=${user_id}.`
        });
      }
    })
};

exports.findAll = (req, res) => {
    const user_id = req.params.user_id;

    Aliment.findAll({
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
            err.message || "Some error occurred while retrieving aliments."
        });
      });
};

exports.update = (req, res) => {
    const user_id = req.params.user_id;
    const id = req.params.id;
  
    Aliment.update(req.body, {
      where: { 
        user_id: user_id,
        id: id
    }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Aliment was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Aliment with user_id=${user_id} and id=${id}. Maybe Aliment was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Cannot updating Aliment with  user id=${user_id} and id=${id}.`
        });
      });
  };

exports.delete = (req, res) => {
    const user_id = req.params.user_id;
    const id = req.params.id;
  
    Aliment.destroy(
      {
          where: {
              user_id: user_id,
              id: id
            }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Aliment was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Aliment with user_id=${user_id} and id=${id}. Maybe Aliment was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Aliment with user_id=${user_id} and id=${id}`
          });
    });
};
