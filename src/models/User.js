import mongoose from "mongoose";
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: String,
    googleId: String
});

const User = mongoose.model('user', UserSchema);


export default User; 