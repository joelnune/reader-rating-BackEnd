import dotenv from 'dotenv';
import bcrypt from 'bcrypt'
import User from "../models/userModel.js";
import jwt from "jsonwebtoken"

dotenv.config();

const createUser  =  async(req,res) => {
console.log("Creating User...")

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
  const myUser = User
  const mySecret = process.env.SECRET
  const userExist = await User.exists({ userEmail: data.userEmail });
  if (!userExist)
  return res.status(401).send({ message: "Wrong e-mail or password" });

  const getUser = await myUser.find({userEmail: data.userEmail}).exec();
  const userHash = getUser[0].passwd
  const inputPasswd = data.passwd
 
  bcrypt.compare(inputPasswd, userHash, function(err, result) {
    if (result) {
      console.log("Correct Password")
      
      const token = jwt.sign({userId: getUser[0].userId},mySecret,{expiresIn:3600})
      res.status(200).json({
        status: 'Login successful',
        token
    });
  } else
  {
    res.status(401).send({
      message: 'Wrong E-mail or password',
      hasError: false,
  });
  }
 
});
  } catch (error){
    console.log(error)
    res.status(500).send({
      message: 'Something goes wrong in the request',
      hasError: true,
  });
  }
}


export {createUser,Login};
