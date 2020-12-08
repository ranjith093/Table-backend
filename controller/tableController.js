const asyncHandler = require("../middleware/async");

const Table = require("../model/Table");

const ErrorResponse = require("../utils/errorResponse");


const addTableData = asyncHandler(async (req, res, next) => {
  const tableData = await Table.create(req.body);
  res.status(201).json({
    success: true,
    data: tableData,
  });
});


const getTableData = asyncHandler(async (req, res) => {
  const table = await Table.find();
  res.status(200).json({
    success: true,
    data: table,
  });
});


const getTableRow = asyncHandler(async (req, res, next) => {
  const tableRow = await Table.findById(req.params.id);
  if (!tableRow) {
    return next(
      new ErrorResponse(`Table Row with id of ${req.params.id} not found`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: tableRow,
  });
});


const updateTableRow = asyncHandler(async (req, res, next) => {
  const tableRow = await Table.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!tableRow) {
    return next(
      new ErrorResponse(`Table Row with id of ${req.params.id} not found`, 404)
    );
  }
  res.status(200).json({success: true, data: tableRow})
});


const removeTableRow = asyncHandler(async (req,res,next) => {
  const tableRow = await Table.findById(req.params.id)

  if (!tableRow) {
    return next(
      new ErrorResponse(`Table Row with id of ${req.params.id} not found`, 404)
    );
  }

    await tableRow.remove()
    res.status(200).json({success: true, data: {}})

})

module.exports = {
  addTableData: addTableData,
  getTableData: getTableData,
  getTableRow: getTableRow,
  updateTableRow: updateTableRow,
  removeTableRow: removeTableRow
};
