import {Router} from 'express';
import { sample_foods, sample_tags, sample_users } from "../data"
import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import { User, UserModel } from '../src/models/user.model';

const router  = Router();

router.get("/seed", asyncHandler(
  async (req, res) => {
     const usersCount = await UserModel.countDocuments();
     if(usersCount> 0){
       res.send("Seed is already done!");
       return;
     }

     await UserModel.create(sample_users);
     res.send("Seed Is Done!");
 }
 ))



router.post("/login", (req,res) => {
  //const body = req.body;
  const {email, password} = req.body;
  const user = sample_users.find(user => user.email === email && user.password == password)
  if(user){
    res.send(generateTokenResponse(user))
  }else{
    res.status(400).send("username or password is not valid")
  }
})



const generateTokenResponse =  (user:any)=>{
  const token = jwt.sign({
    email:user.email, isAdmin:user.isAdmin
  },"EcommOnlineFood", {
    expiresIn:"30d"
  });
  user.token = token;
  return user;
}

export default router;
