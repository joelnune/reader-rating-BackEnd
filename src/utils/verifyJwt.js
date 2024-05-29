import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config()
 const verifyJwt = (req,res,next)=>{
    const token = req.headers['x-access-token']
    jwt.verify(token,process.env.SECRET,(err,decoded)=> {
        if (err) return res.status(401).end()
            next();
    })
    
}

export default verifyJwt