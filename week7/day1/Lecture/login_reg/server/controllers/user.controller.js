import User from "../models/user.model.js";
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try{
        const newUser = await User.create(req.body)
        const userToken = jwt.sign(
            {userId:newUser._id, username:newUser.username},
            process.env.SECRET_KEY
            )
        console.log(userToken);
        res.cookie('userToken', userToken)
        return res.status(201).json(newUser)
    }
    catch(err){
        console.log('ERROR', err);
        return res.status(500).json(err)
    }
}