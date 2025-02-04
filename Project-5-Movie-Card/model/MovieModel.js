const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price :{
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
    
})
const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie

