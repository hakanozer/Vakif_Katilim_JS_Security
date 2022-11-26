import express from 'express'
import bodyParser from 'body-parser'
const app = express()

// body-parser config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// api import
import { userRestController } from './restcontrollers/userRestController'
app.use('/api/v1', [
    userRestController
])

const port = 8080
app.listen(port, ()=> {
    console.log("http://localhost:"+port)
})