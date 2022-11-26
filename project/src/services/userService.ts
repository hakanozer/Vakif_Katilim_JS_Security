import { userModel } from "../models/userModel"
import { db } from "../utils/db"

export const userRegister = async ( name: string, email: string, password: string ) => {
    await db
    return await userModel.create({name, email, password})
}