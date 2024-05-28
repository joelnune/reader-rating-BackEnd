import app from './server.js';
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config({ path: '.env' });
const port = 8080;
const PASSWD = process.env.DB_PASSWORD
const ADMIN = process.env.DB_ADMIN
const DB_NAME = process.env.DB_NAME
app.listen(port, async () => {
    try {
        console.log("connecting to mongoDB...")
        await mongoose.connect(`mongodb+srv://${ADMIN}:${PASSWD}@cluster-readerrating.2r0grde.mongodb.net/${DB_NAME}`);
        console.log(mongoose.connection.readyState == 1 ? "Connection Ok": "Error on Connection");
        }
        catch(e){
        console.log(e);
        }
    console.log(`Running service on port ${port}`);
});