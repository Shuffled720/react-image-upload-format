import express from "express";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
import post from "./model/post.js";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
app.use(cors());
app.use(bodyParser({ limit: '50mb' }));
dotenv.config();
app.use(express.json({ extended: false }));
const port = process.env.PORT || 5000;
connectDB();


app.get('/', async (req, res) => {
    try {
        // res.json("Home route");
        const data = await post.find();
        if (data.length === 0) {
            res.status(404).json({ msg: "No images found" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.json({ error: error.message });
    }
})

app.post("/upload", async (req, res) => {
    const body = req.body;
    try {
        const newImage = await post.create(body);
        if (newImage.save()) {
            res.status(200).json({ msg: "Image uploaded successfully" });
        }
    } catch (error) {
        res.status(409).json({ msg: error.message });
    }
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});