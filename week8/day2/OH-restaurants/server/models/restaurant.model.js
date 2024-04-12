import { Schema, model } from "mongoose";

const RestaurantSchema = new Schema({
    name:{
        type:String,
        required:[true, 'name is required'],
    },
    cuisine:{
        type:String,
        required:[true, 'cuisine is required'],
    },
    location:{
        type:String,
        required:[true, 'location is required'],
    },
    rating:{
        type:Number,
        min:[1, 'rating must be between 1 and 5'],
        max:[5, 'rating must be between 1 and 5'],
        required:[true, 'rating is required'],
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User', // ref should match the name of the model you're referencing
        required:[true, 'userId is required']
    }
}, {timestamps:true})

const Restaurant = model('Restaurant', RestaurantSchema);
export default Restaurant;