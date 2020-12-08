const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  leadDate: {
    type: Date,
  },
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
    unique: true
    
  },
  whatsAppNumber: {
    type: Number,
    required: true,
    unique: true
  },
  panNumber: {
    type: Number,
    required: true,
    unique: true
  },
  type: {
    type: [String],
    enum: ["IRDA", "SAHI"],
    required: true,
    default: null,
  },
  partnerCompany: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  leadStatus: {
    type: [String],
    enum: ["picked", "closed", "pending", "cooded"],
    required: true,
  },
  lastRemark: {
    type: String,
    required: true,
  },
  leadStatusDate: {
    type: Date,
  },
  leadAging: {
    type: Number,
    required: true,
  },
  agencyCode: {
    type: String,
    required: true,
  },
  agencyDate: {
    type: Date,
    
  },
  codeAging: {
    type: Number,
    required: true,
  },
  businessActive: {
    type: [String],
    enum: ["yes", "no"],
    required: true,
  },
  businessPremium: {
    type: String,
    required: true,
  },
});

const Table = mongoose.model("Table", tableSchema);

module.exports = Table;
