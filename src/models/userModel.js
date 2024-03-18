import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
    userId: String,
    passwd: String,
    userName: String,
    userEmail: String,

});

const userModel = mongoose.model('user', schema);

export default userModel