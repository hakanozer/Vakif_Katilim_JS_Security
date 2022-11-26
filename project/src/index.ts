import express from 'express'
import bodyParser from 'body-parser'
import mongoSanitize from 'express-mongo-sanitize'
import * as dotenv from 'dotenv'
dotenv.config()
import session from 'express-session'
const app = express()

// session config
declare module 'express-session' {
    interface SessionData {
        userID:string
    }
}
const sessionConfig = {
    secret: 'appSession',
    resave: false,
    saveUninitialized: true,
}
app.use(session(sessionConfig))

// body-parser config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// mongoSanitize config
//app.use(mongoSanitize());
app.use(
    mongoSanitize({
        onSanitize: ({ req, key }) => {
            //console.warn(`This request[${key}] is sanitized`, req);
            throw new Error("SQL Attack");
        },
    }),
  );

// api import
import { userRestController } from './restcontrollers/userRestController'
import { noteRestController } from './restcontrollers/noteRestController'
app.use('/api/v1', [
    userRestController,
    noteRestController
])

const port = 8080
app.listen(port, ()=> {
    console.log("http://localhost:"+port)
})