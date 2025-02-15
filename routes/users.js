const express = require('express');
const router = express.Router();
const verifyAuth = require('../middleware/verifyAuth');
const quizHistoryModel = require('../models/quizHistoryModel');
const roleAllowed = require('../middleware/roleBasedAuth');

router.use(verifyAuth);

router.use(roleAllowed(['users']));


/*GET users listing */
router.get('/quiz/:quizNumber', async function(req, res, next) {

   const {quizNumber} = req.params;
   const quiz= await quizModel.findOne({questionNumber});
   
   res.json({quiz});


});
router.post('/answer-a-question', async function(req, res, next) {
    const {quiz, optionChosen} = req.body;

    await activeQuizModel.create({quiz,optionChosen,user: req.userDetails.userId});

    res.send
    ({message: 'Answer recorded'});

});
router.post('/mark-quiz', async function(req, res, next) {

    const activeQuiz= await activeQuizModel.find({user: req.userDetails.userId}).populate('quiz', 'questionNumber');

    let totalMarks= 0;
    let totalAnsweredQuestions= activeQuiz.length;
    let totalCorrectQuestions= 0;
    let totalIncorrectQuestions= 0;

    for(let question of activeQuiz){
        if(question.quiz.correctOption===question.optionChosen){
            totalMarks+=10;
            totalCorrectQuestions +=10;
        }
        else{
            totalIncorrectQuestions+=1;
        }
    }
    await quizHistoryModel.create({score:totalMarks, totalCorrectQuestions, totalIncorrectQuestions,questions:activeQuiz, user: req.userDetails.userId});
   
    await activeQuizModel.deleteMany({user: req.userDetails.userId});

    
    res.send({
        totalMarks,
        totalAnsweredQuestions,
        totalCorrectQuestions,
        totalIncorrectQuestions
    });

    

    const percentage= (totalQuestions/activeQuiz.length)*100;

    await quizHistoryModel.create({user: req.userDetails.userId, quiz: activeQuiz, totalQuestions});
    
    
    
});

// Define your routes here
router.get('/', (req, res) => {
    res.send('Users route');
});

module.exports = router;



