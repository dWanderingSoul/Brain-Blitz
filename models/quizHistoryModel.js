const mongoose = require('mongoose');

const quizHistorySchema = new mongoose.Schema({
    score: { 
        type: Number, 
        required: true 
    },
    questions: { 
        type: Array, 
        required: true
    }
}, {timestamps: true});

const QuizHistory = mongoose.model('QuizHistory', quizHistorySchema);

module.exports = QuizHistory;

