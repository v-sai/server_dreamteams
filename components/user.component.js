import USER from "../models/user.model.js";

export const GET_ALL_USERS = async(req,res)=>{
    const ALL_USERS = await USER.find({});
    res.status(200).json({users:ALL_USERS})
}

export const GET_SINGLE_USER = async(req,res)=>{
    const {USER_ID} = req.params;
    const foundUser = await USER.find({_id:USER_ID})
    res.status(200).json({user:foundUser})
}

export const ADD_USER = async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        res.status(400).json({message:"Name,Email,Password required"})
    }
    const newUser = await USER.create({name,email,password});
    res.status(201).json({user:newUser})
}

export const DELETE_USER = async(req,res)=>{
    const {USER_ID} = req.params;
    const foundUser = await USER.findById(USER_ID);
    console.log(foundUser);
    if(foundUser.length < 1){
        res.status(404).json({message:`user not found with id ${USER_ID}`});
    }
    const removedUser = await USER.deleteOne({_id:USER_ID});
    res.status(200).json({user:removedUser});
}

export const DELETE_ALL_USERS = async(req,res)=>{
    await USER.deleteMany({});
    res.status(200).json({message:"deleted all users"});

}