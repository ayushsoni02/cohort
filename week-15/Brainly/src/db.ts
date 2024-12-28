import mongoose from "mongoose";
const Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://ayush:Ayush%40mongo@cluster0.lazem.mongodb.net/Brainly_app');



const UserSchema = new Schema({
  
    username: {type: String,unique:true},
    password: String,
});

export const userModel = mongoose.model('users', UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,  
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    type: String,
    userId:{type:mongoose.Types.ObjectId, ref:'users',required:true}
});

export const ContentModel = mongoose.model('contents', ContentSchema);

const tagSchema = new Schema({
    
    title:String,
});

export const tagModel = mongoose.model('tags', tagSchema);

const LinkSchema = new Schema({
    hash:String,
    userId:{type:mongoose.Types.ObjectId, ref:'User',required:true},
});

 export const linkModel = mongoose.model('links', LinkSchema);

