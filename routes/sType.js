const express = require("express");
const sTypeController = require("../controllers/sType.controller.js");

const router = express.Router();

router.get("/", sTypeController.getAllsType);
router.get("/:id", sTypeController.getsTypeById);

router.post("/", sTypeController.createsType);

router.put("/:id", sTypeController.updatesTypeById);

router.delete("/:id", sTypeController.deletesType);

module.exports = router;
