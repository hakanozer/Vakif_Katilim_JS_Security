import express from 'express'
import { userRegister } from '../services/userService'
import { IRest } from '../utils/IRest'
export const userRestController = express.Router()

userRestController.post('/register', async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    const sendItem:IRest = {
        status: false,
        result: undefined
    }

   await userRegister(name, email, password).then(userItem => {
        if (userItem) {
            sendItem.status = true
            sendItem.result = userItem
            res.json(sendItem)
        }else {
            sendItem.result = userItem
            res.status(400).json(sendItem)
        }
    }).catch(err => {
        sendItem.result = err.message
        res.status(400).json(sendItem)
    })
})