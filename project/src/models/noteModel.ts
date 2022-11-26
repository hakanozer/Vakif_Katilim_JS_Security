import mongoose from "mongoose";
const Schema = mongoose.Schema

const noteSchema = new Schema({
    title:  { type: String },
    detail: { type: String },
    userID: { type: String }
 })

export const noteModel = mongoose.model('note', noteSchema)