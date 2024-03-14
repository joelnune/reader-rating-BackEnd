import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    userId: String,
    bookId: String,
    comment:String,
    rating: Number,

});

const booksRating = mongoose.model('books-rating', schema);

export default booksRating