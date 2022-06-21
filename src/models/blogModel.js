const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema( {
    title: {
        type: String, 
        required: true
    },
    body:{
        type: String,
        required: true
    },
    authorId:{
        type:ObjectId, 
        ref:author1
    },
    tags:{
        type: Array,
    },
    category:{
        type:[],
        required:true
    },
    subcategory: {
        type:[]},
    isDeleted: {
     type:Boolean,
     default: false},
    isPublished: {
     type:Boolean,
     default: false
    }

}, { timestamps: true });


module.exports = mongoose.model('blog', blogSchema) 