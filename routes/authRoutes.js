import express from "express";
import { registerUser, authUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", async(req , res)=>{
    try{
        const {name,email,password} = req.body;

        //dummy response

        res.json({msg:"Register route works",user:{name,email}})
    }catch(err){
        res.status(500).json({msg:"server error"})
    }
});
router.post("/login", authUser);

export default router;

