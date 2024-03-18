import mongoose from "mongoose";
import dotenv from 'dotenv';
import BooksRating from "../models/ratingModel.js";
dotenv.config({ path: 'src/.env' });
const insertRating  =  async(req,res) => {
console.log("Insert Rating...")
const PASSWD = process.env.DB_PASSWORD
const ADMIN = process.env.DB_ADMIN

console.log(req.body);
const data = req.body

const myRating = new BooksRating({ userId: data.userId,
    bookId: data.bookId,
    comment: data.comment,
    rating: data.rating});

await myRating.save()

res.send("Ok")
}


export {insertRating};
