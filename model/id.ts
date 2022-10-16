import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userid = new Schema({
  ids: {
    type: Number,
  },
})

const ids = mongoose.models.id || mongoose.model("Userids", userid);
export default ids;
