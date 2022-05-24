import mongoose from "mongoose";


export async function connectToDatabase() {

    const uri = 'mongodb+srv://filipe225:Chocapic1Mongodb@pc-builder-cluster.gsyro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    try {
        const client = await mongoose.connect(uri);
        console.log("Connected to Database!");
    } catch (error) {
        console.log(error);
    }

}



// import { MongoClient } from 'mongodb';

// export async function connectToDatabase(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     const uri = "mongodb+srv://filipe225:Chocapic1Mongodb@pc-builder-cluster/test?retryWrites=true&w=majority";
 

//     const client = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// async function listDatabases(client: any){
//     const databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach( (db: any) => console.log(` - ${db.name}`));
// };