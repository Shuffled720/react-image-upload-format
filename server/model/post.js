import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    myFile: String
});
export default mongoose.model.posts || mongoose.model("Post", postSchema);