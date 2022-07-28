const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hi There')
});

//get all of the books in the database
app.get('/get', (req, res) => {
    res.send("hi i am nikhil from get request")
    })



app.listen('3001', () => {console.log("Hey") })

