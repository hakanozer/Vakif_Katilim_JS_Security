import mongoose from "mongoose";
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type: String},
    email: {type: String, unique: true},
    password:{type: String} 
})

export const userModel = mongoose.model('user', userSchema)