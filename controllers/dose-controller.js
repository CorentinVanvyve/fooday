const db = require("../models");
const Dose = db.Dose;
const Aliment = db.Aliment;
const Dishe = db.Dishe;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    // Validate request
    if (!req.body.gram) {
        res.status(400).send({
        message: "Gram can not be empty!"
        });
        return;
    }

  // Create a aliment
    const aliment =  await Aliment.findOne({ where: { id: req.body.aliment_id}});
    const gram = req.body.gram;
    const kcal = aliment.kcal * (gram/100);
    const protein = aliment.protein * (gram/100);
    const saturated_lipid = aliment.saturated_lipid * (gram/100);
    const unsaturated_lipid = aliment.unsaturated_lipid * (gram/100);
    const sugar = aliment.sugar * (gram/100);
    const carbohydrate = aliment.carbohydrate * (gram/100);

  // Create a dose
  const dose = {
    gram: req.body.gram,
    aliment_id: req.body.aliment_id,
    dishe_id: req.params.dishe_id,
    user_id: req.params.user_id,
    aliment_name: aliment.name,
    kcal: kcal,
    protein: protein,
    saturated_lipid: saturated_lipid,
    unsaturated_lipid: unsaturated_lipid,
    sugar: sugar,
    carbohydrate: carbohydrate
  };

  // Save dose in the database
  Dose.create(dose)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the dose."
      });
    });
};


exports.findOne = (req, res) => {
    const user_id = req.params.user_id;
    const dishe_id = req.params.dishe_id;
    const id = req.params.id;
  
    Dose.findOne(
      {
          where: {
              user_id: user_id,
              dishe_id: dishe_id,
              id: id
            }
    })
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Dose.`
          });
        }
      })
  };
  
  exports.findAll = (req, res) => {
      const user_id = req.params.user_id;
  
      Dose.findAll({
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
              err.message || "Some error occurred while retrieving Doses."
          });
        });
  };


  exports.update = async (req, res) => {
    const user_id = req.params.user_id;
    const dishe_id = req.params.dishe_id;
    const id = req.params.id;

    // ReCreate a aliment
    const aliment =  await Aliment.findOne({ where: { id: req.body.aliment_id}});
    const gram = req.body.gram;
    const kcal = aliment.kcal * (gram/100);
    const protein = aliment.protein * (gram/100);
    const saturated_lipid = aliment.saturated_lipid * (gram/100);
    const unsaturated_lipid = aliment.unsaturated_lipid * (gram/100);
    const sugar = aliment.sugar * (gram/100);
    const carbohydrate = aliment.carbohydrate * (gram/100);

  // ReCreate a dose
  const dose = {
    gram: req.body.gram,
    aliment_id: req.body.aliment_id,
    dishe_id: req.params.dishe_id,
    user_id: req.params.user_id,
    aliment_name: aliment.name,
    kcal: kcal,
    protein: protein,
    saturated_lipid: saturated_lipid,
    unsaturated_lipid: unsaturated_lipid,
    sugar: sugar,
    carbohydrate: carbohydrate
  };
  
    Dose.update(dose, {
        where: {
            user_id: user_id,
            dishe_id: dishe_id,
            id: id
          }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Dose was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Dose with user_id=${user_id} and id=${id}. Maybe Dose was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Cannot updating Dose with  user id=${user_id} and id=${id}.`
        });
      });
  };


exports.delete = (req, res) => {
    const user_id = req.params.user_id;
    const id = req.params.id;
    console.log(user_id)
    console.log(id)
  
    Dose.destroy({
        where: {
            user_id: user_id,
            id: id
          }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Dose was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Dose with user_id=${user_id}. Maybe Dose was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Dose with user_id=" + user_id
        });
      });
  };