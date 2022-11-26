import express from 'express'
import { userLogin, userRegister } from '../services/userService'
import { IRest } from '../utils/IRest'
import { decrypt } from '../utils/util'
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


userRestController.post('/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const sendItem:IRest = {
        status: false,
        result: undefined
    }
    await userLogin(email).then(userItem => {
        if (userItem) {
            sendItem.status = true
            sendItem.result = userItem
            const plainPass = decrypt(userItem.password!)
            if (plainPass === password) {
                req.session.userID = userItem.id
                res.status(200).json(sendItem)
            }else {
                sendItem.result = 'email or password not valid'
                res.status(400).json(sendItem)
            }
        }else {
            sendItem.result = 'email or password not valid'
            res.status(400).json(sendItem)
        }
    })
})