import { userModel } from "../models/userModel"
import { db } from "../utils/db"
import {decrypt, encrypt} from '../utils/util'

export const userRegister = async ( name: string, email: string, password: string ) => {
    await db
    password = encrypt(password)
    return await userModel.create({name, email, password })
}

export const userLogin = async (email:string ) => {
    await db
    return await userModel.findOne({email})
}