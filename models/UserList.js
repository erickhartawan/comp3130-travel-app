const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MyListSchema = new Schema({
    id:{
        type: Number,
    },
    title:{
        type:String,
    },
    subtitle:{
        type: String,
    },
    rating:{
        type: String
    },
    state:{
        type: String
    },
    image:{
        type: String
    },
    description:{
        type: String
    },

})

module.exports = UserList = mongoose.model('myList', MyListSchema,"UserList")