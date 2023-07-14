import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI || "mongodb://0.0.0.0:27017/image-uploader"
const connectDb = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error.message);

    }
}

export default connectDb;