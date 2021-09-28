require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const randomRouter = require('./routes/random.router');
const { default: axios } = require('axios');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/random', randomRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});

app.get('/giphy', (req,res) => {
axios.get('/gihttps://api.giphy.com/v1/gifs/random?api_key=ErC6fczObj4srp6cMPEQjlMMEB6k8hLA&tag=&rating=gphy')
    .then(response => {
        res.send(response.data);
    }).catch(error => {
        res.sendStatus(500);
    })
});