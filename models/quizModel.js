const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    question: { 
        type: String, 
        required: true 
    },
    questionNumber: {
        type: Number,
        unique: true,
        required: true
    },
    optionA: { 
        type: String, 
        required: true,
        
    },
    optionB: { 
        type: String, 
        required: true,
        
    },  
    optionC: { 
        type: String, 
        required: true,
    
    },
    optionD: { 
        type: String, 
        required: true,
       
    },
    correctOption: {
        type: String,
        enum: ["optionA", "optionB", "optionC", "optionD"],
        default: 'optionA',
        required: true,
    },
    password: {
        type: String,
        enum: ["user", "admin"],
        default: 'user'
    },
 
}, {timestamps: true});

const quizModel = mongoose.model('Quiz', quizSchema);

module.exports = quizModel;

