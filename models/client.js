const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  location: {
    type: String,
    default: "",
  },
  height: {
    type: Number,
    default: "",
  },
  weight: {
    type: Number,
    default: "",
  },
  birthday: {
    type: Date,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  trainer: {
    type: String,
    default: "example",
  }

});

const Client = mongoose.models.client || mongoose.model("client", ClientSchema);

export default Client;