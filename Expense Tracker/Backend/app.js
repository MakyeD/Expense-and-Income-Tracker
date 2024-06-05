//Reads JS files and return export obj to const
const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs');
const app = express();

require('dotenv').config()

const PORT = process.env.PORT

//middlewares

/*configures middleware used by the routes of the Express 
HTTP server object*/
app.use(express.json());
app.use(cors())

//Returns an array with all file names/objects in directory
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('You are listening to port:', PORT);
    })
}

server()