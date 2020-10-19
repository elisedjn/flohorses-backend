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
    enum: ["Femelle", "Mâle", "Hongre"],
  },
  pictures: [String],
  generalNotes: String,
  phases: [
    {
      shortName:{
        type: String,
        enum: ["selle","breaking","pretraining"],
        required: true
      },
      phaseName: String,
      arrivalDate: Date,
      departureDate: Date,
      phaseNotes: String,
      active: Boolean,
    },
  ],
});

module.exports = model("Horse", HorseSchema);
