const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productShema = new schema(
  {
    productName: {
      type: String,
      // required: true,
    },
    serialNumber: {
      type: String,
      // required: true,
    },
    productDescription: {
      type: String,
      // required: true,
    },
    productPhoto: {
      type: String,
    },
    goodsBill: {
      type: String,
    },
    status: {
      type: String,
      default: "done",
    },
    productUrl: {
      type: String,
      default:null,
      required: false,
    },
    urlStatus: {
      type: String,
      default: "review",
    },
    companyId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", productShema);
