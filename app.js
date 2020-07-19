const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

// Set Template Engine
app.set('view engine', 'ejs');

// Middleware
// for hanling request data
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// MongoDB Connection String
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tamdy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
const port = process.env.PORT;


// Home Router
app.get('/', (req, res) => {
    res.json({
        message: 'welcome'
    });
});

// Connect with Mongoose
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(port || 4000, () => {
            console.log(`Server is Listening at ${port}`);
        });
    })
    .catch(err => {
        console.log(err);
        res.json({
            error: "Mongo Error Occured!"
        })
    })
