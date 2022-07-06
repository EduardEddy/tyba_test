import mongoose, { model, Schema } from 'mongoose';

const RecordSchame: Schema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    petition:{
        type: String, 
        required: true
    },
    data:{
        type:String,
        required: true
    }
});

export const Record = model('Record', RecordSchame);