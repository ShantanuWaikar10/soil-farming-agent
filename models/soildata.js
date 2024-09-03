import mongoose, { Schema, models } from "mongoose";

const soildataSchema = new Schema(
  {
    soilname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    distributorName: {
      type: String,
      required: true,
    },
    distributorContact: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Soildata = models.Soildata || mongoose.model("Soildata", soildataSchema);
export default Soildata;
