import jwt from "jsonwebtoken"
import { catchAsyncError } from "./catchAsyncError.js"
import ErrorHandler from "../utils/errorHanlder.js";
import { User } from "../models/User.js";

export const isAutheticated= catchAsyncError(async (req,res,next)=>{
        const {token}=req.cookies;

        if(!token) return next(new ErrorHandler("Not Logged In ",401));
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        req.user=await User.findById(decoded._id);
        next();
})

