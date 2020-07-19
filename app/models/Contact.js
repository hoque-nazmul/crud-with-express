const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        maxlength: 15,
        minlength: 6
    }
})

const Contact = model("Contact", contactSchema);

module.exports = Contact;