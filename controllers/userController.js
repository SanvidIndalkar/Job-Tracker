import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Job from "../models/JobModel.js";


export const getCurrentUser = async (req, res) => {
    let user = await User.findOne({_id: req.user.userId});
    user = user.toJSON();
    res.status(StatusCodes.OK).json(user);
}

export const getApplicationStatus = async (req, res, next) => {
    const users = await User.countDocuments();
    const jobs = await Job.countDocuments();
    res.status(StatusCodes.OK).json({users, jobs});
}

export const updateUser = (req, res) => {
    const obj = {...req.body};
    delete obj.password;
    const updatedUser = User.findByIdAndUpdate(req.user.userId,obj);
    res.status(StatusCodes.OK).json({msg: 'Update user'})
}