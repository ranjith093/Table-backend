const express = require("express");
const {
 addTableData
} = require("../controller/tableController");
const router = express.Router();

router
  .route("/")
  .post(
  addTableData
  );

module.exports = router;
