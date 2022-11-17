const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const {upload} = require('../middleware/filehelper')
const Controller = require('../controllers/files');

router.get("/:id", checkAuth, Controller.get_all);

router.get("/download/:id", Controller.download);

router.post("/create", checkAuth, upload.single('file'), Controller.create);

router.patch("/:id", checkAuth, Controller.update);

router.delete("/:id", checkAuth, Controller.delete);

module.exports = router;
