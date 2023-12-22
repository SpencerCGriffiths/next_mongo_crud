import mongoose from "mongoose"; 

const connectMongoDB = async () => { 
    try { 
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to MongoDB")
    } catch (error) { 
        console.log(error)
    }
}

export default connectMongoDB;


// This document creates the connection to Mongo DB using our environment URI which is provided in the .env file