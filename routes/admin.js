const express = require('express');
const quizModel = require('../models/quizModel');
const router = express.Router();
const verifyAuth = require('../middleware/verifyAuth');
const roleAllowed = require('../middleware/roleBasedAuth');


router.use(verifyAuth);

router.use(roleAllowed(['admins']));

/* GET home page. */
router.post('/quiz', async function(req, res, next) {

    const{question, questionNumber, optionA, optionB, optionC, optionD, correctOption} = req.body;

    await quizModel.create({question, questionNumber, optionA, optionB, optionC, optionD, correctOption});

    res.status(201).send({
        message: 'Quiz created successfully'
    });
});


router.get('/quiz-by-id/:id', async function(req, res, next) {
    const {id} = req.params;

    const quizList = await quizModel.findById(id);

    res.status(201).send({quizList});
});

// Define your admin routes here
router.get('/', (req, res) => {
    res.send('Admin route');
});

module.exports = router; 

