const { Schema, model } = require("mongoose");

const HorseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  birthdate: Date,
  breeder: String,
  owner: String,
  father: String,
  mother: String,
  sex: {
    type: String,
    enum: ["female", "male", "gelding"],
  },
  pictures: [String],
  phases: [
    {
      phaseName: {
        type: String,
        enum: ["weaning", "breaking", "pre-training"],
      },
      arrivalDate: Date,
      departureDate: Date,
      phaseNotes: String,
    },
  ],
});

module.exports = model("Horse", HorseSchema);
