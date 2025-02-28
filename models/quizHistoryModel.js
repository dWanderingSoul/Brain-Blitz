const mongoose = require('mongoose');

const quizHistorySchema = new mongoose.Schema({
    score: { 
        type: Number, 
        required: true 
    },
    totalCorrectQuestions: { 
        type: Number, 
        required: true 
    },
    totalIncorrectQuestions: { 
        type: Number, 
        required: true 
    },
    questions: { 
        type: Array, 
        required: true
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }
}, {timestamps: true});

const quizHistoryModel = mongoose.model('QuizHistory', quizHistorySchema);

module.exports = quizHistoryModel;

