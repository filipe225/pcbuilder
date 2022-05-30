import mongoose from "mongoose";


export async function connectToDatabase() {

    const uri: string = process.env.DB_URI as string;
    try {
        const client = await mongoose.connect(uri);
        //console.log(client);
        console.log("Connected to Database!");
    } catch (error) {
        console.log(error);
    }

}