const express = require("express");
const pTypeController = require("../controllers/pType.controller.js");

const router = express.Router();

router.get("/", pTypeController.getAllpType);
router.post("/", pTypeController.createpType);
router.get("/:id", pTypeController.getpTypeById);
router.put("/:id", pTypeController.updatepTypeById);
router.delete("/:id", pTypeController.deletepType);

module.exports = router;
