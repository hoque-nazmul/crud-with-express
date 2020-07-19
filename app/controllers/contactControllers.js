const Contact = require('./../models/Contact')

exports.getAllContacts = (req, res) => {
    Contact.find()
        .then(data => {
            res.render('index', { data, errors: {} });
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

    const errors = {}

    if (!name) {
        errors.name = "Please, Provide your Name";
    }
    if (!email) {
        errors.email = "Please, Provide your Email";
    }
    if (!phone) {
        errors.phone = "Please, Provide your Phone";
    }
    let isError = Object.keys(errors).length > 0;

    if (isError) {
        Contact.find()
            .then(data => {
                return res.render('index', { data, errors });
            })
            .catch(err => {
                console.log(err);
                return res.json({
                    error: "Error Ocurred!"
                })
            })
    } else {
        const contact = new Contact({
            name,
            email,
            phone
        })
        contact.save()
            .then(dt => {
                Contact.find()
                    .then(data => {
                        return res.render('index', { data, errors: {} })
                    })
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({
                    error: "Error is Ocurred!"
                })
            })
    }
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
    Contact.findOneAndDelete({ _id: id })
        .then(dt => {
            Contact.find()
                .then(data => {
                    return res.render('index', { data, errors: {} })
                })
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                error: "Error is Ocurred!"
            })
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({
                error: "Error is Occured!"
            });
        })
}
