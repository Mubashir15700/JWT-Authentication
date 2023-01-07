import mongoose from "mongoose";

const Connection = async () => {
    const localURL = "mongodb://127.0.0.1:27017/CRUD-app";

    try {
        await mongoose.connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Connected to database succesfully.");
    } catch (error) {
        console.log(error);
    }
}

export default Connection;
