const db = require("../models");
const Dose = db.Dose;
const Dishe = db.Dishe;
const Aliment = db.Aliment;
const Op = db.Sequelize.Op;
const express = require('express')

async function doseUploaded(dose) {
  const dishe = {
    kcal: dose.kcal,
    protein: dose.protein,
    saturated_lipid: dose.saturated_lipid,
    unsaturated_lipid: dose.unsaturated_lipid,
    sugar: dose.sugar,
    carbohydrate: dose.carbohydrate
  };

  const allDoses = await Dose.findAll({ where: {user_id: dose.user_id, dishe_id: dose.dishe_id}}, {raw: true});
  console.log(allDoses)

  for (let i = 0; i < allDoses.length; i++) {
    dishe.kcal += allDoses[i]["dataValues"].kcal
    dishe.protein += allDoses[i]["dataValues"].protein
    dishe.saturated_lipid += allDoses[i]["dataValues"].saturated_lipid
    dishe.unsaturated_lipid += allDoses[i]["dataValues"].unsaturated_lipid
    dishe.sugar += allDoses[i]["dataValues"].sugar
    dishe.carbohydrate += allDoses[i]["dataValues"].carbohydrate
  }

  Dishe.update(dishe, {
    where: {
      id: dose.dishe_id
  }
  });
}

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

    doseUploaded(dose);
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

      doseUploaded(dose);
  };


exports.delete = async (req, res) => {
    const user_id = req.params.user_id;
    const id = req.params.id;


    const dose = await Dose.findByPk(id);
    console.log(dose)

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

      const emptyDose = {
        id: id,
        gram: 0,
        aliment_name: 0,
        kcal: 0,
        protein: 0,
        saturated_lipid: 0,
        unsaturated_lipid: 0,
        carbohydrate: 0,
        sugar: 0,
        user_id: dose.user_id,
        aliment_id: dose.aliment_id,
        dishe_id: dose.dishe_id
      }

      doseUploaded(emptyDose);
  };
