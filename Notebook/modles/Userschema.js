import mongoose from "mongoose";


const Userschema = new mongoose.Schema({
    name: { type: String, required: true  },
    email: { type: String, required: true ,unique:true},
    password: { type: String, required: true }
});

const UserModel=mongoose.model('User',Userschema);
UserModel.createIndexes();
export default UserModel;