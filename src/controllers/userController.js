import mongoose from "mongoose";
import dotenv from 'dotenv';
import bcrypt from 'bcrypt'
import User from "../models/userModel.js";
dotenv.config({ path: 'src/.env' });

const createUser  =  async(req,res) => {
console.log("Creating User...")
const PASSWD = process.env.DB_PASSWORD
const ADMIN = process.env.DB_ADMIN

console.log(req.body);
const data = req.body

await bcrypt
  .genSalt(10)
  .then(salt => {
    console.log('Salt: ', salt)
    return bcrypt.hash(data.passwd, salt)
  })
  .then(hash => {
    console.log('Hash: ', hash)
    const myUser = new User({ userId: data.userId,
      passwd: hash,
      userName: data.userName,
      userEmail: data.userEmail});
     myUser.save()
    // console.log(myUser)
  }).then(res.send("Ok"))
  .catch(err => console.error(err.message))
}

const Login = async(req,res) => {
  try {
  const data = req.body
  const myUser= User
  const getUser = await myUser.find({userEmail: data.userEmail}).exec();
  
  const userHash = getUser[0].passwd
  const inputPasswd = data.passwd
 
  bcrypt.compare(inputPasswd, userHash, function(err, result) {
    if (result) {
      console.log("Correct Password")
      res.status(200).send({
        message: 'Login Sucessful',
        hasError: false,
    });
  } else
  {
    res.status(401).send({
      message: 'Wrong E-mail or password',
      hasError: true,
  });
  }
 
});
  } catch (error){
    console.log(error)
    res.status(401).send({
      message: 'Wrong E-mail or password',
      hasError: true,
  });
  }
}


export {createUser,Login};
