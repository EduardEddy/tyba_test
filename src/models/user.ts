import mongoose, { model, Schema } from 'mongoose';

const UserSchame: Schema = new Schema({
    name:{
        type: String, 
        required: true
    },
    last_name:{
        type: String, 
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String, 
        required: true
    },
});

export const User = model('User', UserSchame);