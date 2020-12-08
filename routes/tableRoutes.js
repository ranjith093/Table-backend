const express = require("express");
const {
  addTableData,
  getTableData,
  getTableRow,
  updateTableRow,
  removeTableRow,
} = require("../controller/tableController");
const router = express.Router();

router.route("/")
.get(getTableData)
.post(addTableData);

router
  .route("/:id")
  .get(getTableRow)
  .put(updateTableRow)
  .delete(removeTableRow);
module.exports = router;
