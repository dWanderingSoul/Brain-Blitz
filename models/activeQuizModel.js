const mongoose = require('mongoose');

const activeQuizSchema = new mongoose.Schema({
    quiz: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Quiz', 
        required: true 
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    optionChosen: { 
        type: String, 
        enum: ["optionA", "optionB", "optionC", "optionD"],
        required: true
    }
}, {timestamps: true});

const activeQuizModel = mongoose.model('activeQuiz', activeQuizSchema);

module.exports = activeQuizModel;

