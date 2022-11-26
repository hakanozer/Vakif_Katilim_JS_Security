import express from 'express'
import bodyParser from 'body-parser'
import mongoSanitize from 'express-mongo-sanitize'
const app = express()

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
app.use('/api/v1', [
    userRestController
])

const port = 8080
app.listen(port, ()=> {
    console.log("http://localhost:"+port)
})