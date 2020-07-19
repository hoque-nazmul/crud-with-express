const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();



app.get('/', (req, res) => {
    res.json({
        message: 'welcome'
    });
});
const port = process.env.PORT;
app.listen(port || 4000, () => {
    console.log("Server Listening...");
});