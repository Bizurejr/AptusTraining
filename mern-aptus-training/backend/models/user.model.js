const mongoose = require('mongoose'); //first we reuire mangoose

const userSchema = new Schema ({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
},{
    //so we know when it was created and modified
    timestamps:true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;