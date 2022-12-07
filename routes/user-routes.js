const express = require('express');

const router = express.Router();

const userController = require('../controllers/user-controller');
const metricController = require('../controllers/metric-controller');
const profileController = require('../controllers/profile-controller');
const alimentController = require('../controllers/aliment-controller');

// USER CRUD
router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:id", userController.findOne);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

// METRIC CRUD
router.get("/:user_id/metric", metricController.findOne);
router.post("/:user_id/metric", metricController.create);
router.put("/:user_id/metric", metricController.update);
router.delete("/:user_id/metric", metricController.delete);

// PROFILE CRUD
router.get("/:user_id/profile", profileController.findOne);
router.post("/:user_id/profile", profileController.create);
router.put("/:user_id/profile", profileController.update);
router.delete("/:user_id/profile", profileController.delete);

// ALIMENT CRUD
router.get("/:user_id/aliments", alimentController.findAll);
router.get("/:user_id/aliment", alimentController.findOne);
router.post("/:user_id/aliment", alimentController.create);
router.put("/:user_id/aliment", alimentController.update);
router.delete("/:user_id/aliment", alimentController.delete);


module.exports = router;
