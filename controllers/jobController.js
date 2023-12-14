import Job from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';

//Get All Jobs
export const getAllJobs =  async (req,res)=>{
    const jobs = await Job.find({createdBy:req.user.userId});
    res.status(StatusCodes.OK).json({jobs});
}

//Create Job 
export const createJob = async (req,res)=>{
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({job});
}

//Get Single Job
export const getJob = async (req,res)=>{
    const {id} = req.params;
    const singleJob = await Job.findById(id);
    res.status(StatusCodes.OK).send({singleJob});
}

//Edit Job
export const updateJob = async (req,res)=>{
    const {id} = req.params;
    const singleJob = await Job.findByIdAndUpdate(id,req.body, {
        new: true
    })
    res.status(StatusCodes.OK).send({msg: 'job modified',singleJob});
}

//Delete Job
export const deleteJob = async (req,res)=>{
    const {id} = req.params;
    const job = await Job.findByIdAndDelete(id);
    res.status(StatusCodes.OK).json({msg: 'job deleted', job})
}
