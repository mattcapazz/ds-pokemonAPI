const express = require("express");
const sTypeController = require("../controllers/sType.controller.js");

const router = express.Router();

router.get("/", sTypeController.getAllsType);
router.post("/", sTypeController.createsType);
router.get("/:id", sTypeController.getsTypeById);
router.put("/:id", sTypeController.updatesTypeById);
router.delete("/:id", sTypeController.deletesType);

module.exports = router;
