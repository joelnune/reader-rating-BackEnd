import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({ path: 'src/.env' });
const insertRating  =  async(req,res) => {
console.log("Insert Rating...")
const PASSWD = process.env.DB_PASSWORD
const ADMIN = process.env.DB_ADMIN
//let RatingName = req.params.RatingName
//console.log( "Ratingname: ", RatingName)
console.log(ADMIN)
try {
await mongoose.connect(`mongodb+srv://${ADMIN}:${PASSWD}@cluster-readerrating.2r0grde.mongodb.net/`);
console.log(mongoose.connection.readyState);
}
catch(e){
console.log("failed");
}
}
export {insertRating};
