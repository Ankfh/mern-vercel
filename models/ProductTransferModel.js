const mongoose = require("mongoose");

const schema = mongoose.Schema;

const ProductTransferShema = new schema(
  {
    customerCompanyName: {
      type: String,
      // required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    customerProductName: {
      type: String,
      // required: true,
    },
    customerProductDescription: {
      type: String,
    },
    serialNumber: {
      type: String,
    },
    
    productPhoto: {
      type: String,
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

module.exports = mongoose.model("Transferproducts", ProductTransferShema);
