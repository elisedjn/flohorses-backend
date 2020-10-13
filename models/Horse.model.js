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
  phases: [
    {
      phaseName: {
        type: String,
        enum: ["Cheval de selle", "Débourrage", "Pré-entrainement"],
      },
      arrivalDate: Date,
      departureDate: Date,
      phaseNotes: String,
    },
  ],
});

module.exports = model("Horse", HorseSchema);
