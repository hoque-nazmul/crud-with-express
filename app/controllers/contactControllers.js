const Contact = require('./../models/Contact')

exports.getAllContacts = (req, res) => {
    Contact.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({
                error: "Error is Occured!"
            });
        })
}

exports.getSingleContact = (req, res) => {
    const id = req.params.id;
    Contact.findById({ _id: id })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: "Error is Ocurred!"
            });
        })
}

exports.createContact = (req, res) => {
    const { name, email, phone } = req.body;
    const contact = new Contact({
        name,
        email,
        phone
    })
    contact.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: "Error is Ocurred!"
            })
        })
}

exports.updateContact = (req, res) => {
    const { name, email, phone } = req.body;
    const id = req.params.id;
    Contact.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                name, email, phone
            }
        },
        { new: true }
    )
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: "Error Occured!"
            })
        })
}

exports.deleteContact = (req, res) => {
    const id = req.params.id;
    Contact.findOneAndDelete({_id: id})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: "Error is Occured!"
            });
        })
}
