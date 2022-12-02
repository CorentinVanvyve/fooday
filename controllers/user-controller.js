const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.findAll = (req, res) => {
    const phone = req.query.phone;
    let condition = phone ? { phone: { [Op.like]: `%${phone}%` } } : null;
  
    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
};
