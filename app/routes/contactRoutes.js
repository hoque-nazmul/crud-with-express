const contactRoute = require('express').Router();
const { 
    getAllContacts,
    getSingleContact,
    createContact,
    updateContact,
    deleteContact
 } = require('./../controllers/contactControllers')

contactRoute.get('/', getAllContacts)
contactRoute.get('/:id', getSingleContact)
contactRoute.post('/', createContact)
contactRoute.put('/:id', updateContact)
contactRoute.get('/delete/:id', deleteContact)

module.exports = contactRoute;