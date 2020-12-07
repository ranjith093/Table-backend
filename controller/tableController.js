const Table = require("../model/Table");

const addTableData = async (req, res, next) => {
  const {
    leadDate,
    name,
    mobileNumber,
    whatsAppNumber,
    panNumber,
    type,
    partnerCompany,
    city,
    branch,
    leadStatus,
    lastRemark,
    leadStatusDate,
    leadAging,
    agencyCode,
    agencyDate,
    codeAging,
    businessActive,
    businessPremium,
  } = req.body;

  const tableFields = {};
  if (leadDate) tableFields.leadDate = leadDate;
  if (name) tableFields.name = name;
  if (mobileNumber) tableFields.mobileNumber = mobileNumber;
  if (whatsAppNumber) tableFields.whatsAppNumber = whatsAppNumber;
  if (panNumber) tableFields.panNumber = panNumber;
  if (type) tableFields.type = type;
  if (partnerCompany) tableFields.partnerCompany = partnerCompany;
  if (city) tableFields.city = city;
  if (branch) tableFields.branch = branch;
  if (leadStatus) tableFields.leadStatus = leadStatus;
  if (lastRemark) tableFields.lastRemark = lastRemark;
  if (leadStatusDate) tableFields.leadStatusDate = leadStatusDate;
  if (leadAging) tableFields.leadAging = leadAging;
  if (agencyCode) tableFields.agencyCode = agencyCode;
  if (agencyDate) tableFields.agencyDate = agencyDate;
  if (codeAging) tableFields.codeAging = codeAging;
  if (businessActive) tableFields.businessActive = businessActive;
  if (businessPremium) tableFields.businessPremium = businessPremium;

  try {
    let tableData = await Table.findOne({ _id: req._id });

    if (tableData) {
      // Update
      tableData = await Table.findOneAndUpdate(
        { _id: req.id },
        { $set: tableFields },
        { new: true }
      );
      return res.json(tableData);
    }

    // Create
    tableData = new Table(tableFields);
    await tableData.save();
    res.json(tableData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  addTableData: addTableData,
};
