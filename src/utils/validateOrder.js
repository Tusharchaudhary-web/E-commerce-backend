const validator = require('validator');

const validateOrder = (req, res, next) => {
    const { firstName, lastName, address } = req.body;

    if (!firstName) {
        return res.status(400).json({ message: 'firstName is required' });
    }
    else {
        if (!validator.isAlpha(firstName, "en-US", { ignore: " `.-" })) {
            return res.status(400).json({ message: 'firstName should contain characters only' });
        }
        else if (firstName.length < 3 || firstName.length > 30) {
            return res.status(400).json({ message: 'firstName should be between 3 and 30 characters' });
        }
    }


    if (!lastName) {
        return res.status(400).json({ message: 'lastName is required' });
    }
    else {
        if (!validator.isAlpha(lastName, "en-US", { ignore: " `.-" })) {
            return res.status(400).json({ message: 'lastName should contain characters only' });
        }
        else if (lastName.length < 3 || lastName.length > 30) {
            return res.status(400).json({ message: 'lastName should be between 3 and 30 characters' });
        }
    }

    if (!address) {
        return res.status(400).json({ message: 'Address is required' });
    }
    else if (address.length < 5 || address.length > 100) {
        return res.status(400).json({ message: 'Address should be between 5 and 100 characters' });
    }

    next();

}

module.exports = validateOrder;