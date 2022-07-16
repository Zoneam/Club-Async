import mongoose from "mongoose";
const { Schema } = mongoose;

const linkSchema = new Schema({
  link: {
    type: String,
    required: true,
  },
}
);

export default mongoose.model("Link", linkSchema);
