var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usersModel = require('../models/usersModel');

var router = express.Router();

/* GET home page. */
router.post('/register', async function(req, res, next) {
    const { fullName, email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    await usersModel.create({
         fullName, email, password: hashedPassword
    });

    res.status(201).send({
        message: 'Created'
    })

});

router.post('/login', async function(req, res, next) {
    const { email, password } = req.body;

   //BELOW ARE THE METHODS FOR FINDING, UPDATING AND DELETING DATA FROM THE DATABASE AS QUERY METHODS/QUERIES
    //find, findOne, findById, findOneAndUpdate, findOneAndDelete, findByIdAndUpdate, findByIdAndDelete, findOneAndUpdate, findOneAndDelete
    // updatemany, updateOne, updateMany, deleteOne, deleteMany, countDocuments, 
    // distinct, aggregate

    const userDetails = await usersModel.findOne({ email });

    if(!userDetails) {
        res.status(404).send({
            message: 'User not found'
        });
        return;
    }
    const passwordMatch = bcrypt.compareSync(password, userDetails.password);

    if(!passwordMatch) {
        res.status(401).send({
            message: 'Invalid Details'
        });
        return;
    }

    const token = jwt.sign({
        userId: userDetails._id,
        fullName: userDetails.fullName,
        email: userDetails.email,
        password: userDetails.password,
        role: userDetails.role
    }, process.env.AUTH_SECRET, { expiresIn: '1h' });

    res.send({
        message: 'Logged in successfully',
        userDetails: {
            fullName: userDetails.fullName,
            email: userDetails.email,
            role: userDetails.role
        },
        token: token
    });
});



module.exports = router;

