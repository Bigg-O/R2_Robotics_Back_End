const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const Controller = require('../controllers/files');

router.get("/:id", checkAuth, Controller.get_all);

router.post("/create", checkAuth, Controller.create);

// router.patch("/:id", checkAuth, Controller.update);

// router.delete("/:id", checkAuth, Controller.delete);

module.exports = router;
