import express from 'express'
import { noteModel } from '../models/noteModel'
import { IRest } from '../utils/IRest'
import { decrypt, encrypt } from '../utils/util'
export const noteRestController = express.Router()

noteRestController.post('/noteSave', (req, res) => {
    const sendItem: IRest = {
        status: false,
        result: undefined
    }
    if ( req.session.userID ) {
        const userID = req.session.userID
        const title = encrypt(req.body.title)
        const detail = encrypt(req.body.detail)
        noteModel.create({title, detail, userID }).then(noteItem => {
            sendItem.status = true
            sendItem.result = noteItem
            res.status(200).json(sendItem)
        })
    }else{
        sendItem.result = 'Login Fail, plase login'
        res.status(401).json(sendItem)
    }
})


noteRestController.get('/noteList', (req, res) => {
    const sendItem: IRest = {
        status: false,
        result: undefined
    }
    if ( req.session.userID ) {
        const userID = req.session.userID
        noteModel.find({userID}).then(arr => {
            for (let i = 0; i < arr.length; i++) {
                arr[i].title = decrypt(arr[i].title!)
                arr[i].detail = decrypt(arr[i].detail!)
            }
            sendItem.status = true
            sendItem.result = arr
            res.status(200).json(sendItem)
        })

    }else{
        sendItem.result = 'Login Fail, plase login'
        res.status(401).json(sendItem)
    }
})