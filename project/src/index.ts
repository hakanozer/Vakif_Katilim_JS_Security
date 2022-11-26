import express from 'express'
const app = express()

// api import
import { userRestController } from './restcontrollers/userRestController'
app.use('/api/v1', [
    userRestController
])

const port = 8080
app.listen(port, ()=> {
    console.log("http://localhost:"+port)
})