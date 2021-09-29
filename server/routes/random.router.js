require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
    axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=&rating=g`)
        .then(response => {
            res.send(response.data);
        }).catch( error => {
            res.sendStatus(500);
        })
});


module.exports = router;