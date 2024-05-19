import mongoose from "mongoose";

export const connectToMongo = async () => {
    try {
        if(mongoose.connection.readyState === 1) {
            console.log('Already connect to MongoDB');
            return;
        }
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}