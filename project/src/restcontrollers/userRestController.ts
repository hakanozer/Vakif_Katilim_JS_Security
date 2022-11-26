import express from 'express'
export const userRestController = express.Router()

userRestController.get('/', (req, res) => {
    const sendItem = {
       status: true,
       result: 'RestApi Success' 
    }
    res.status(200).json(sendItem)
})