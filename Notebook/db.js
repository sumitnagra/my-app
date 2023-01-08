import mongoose from "mongoose";
const uri = process.env.URI || "mongodb://localhost:27017/sumit";

const connectMongo = async () => {
 mongoose.connect(uri, () => {
        console.log("Connected Mongo Successfully")
    })
}

export default connectMongo 