import mongoose from 'mongoose';
const {Schema, model} = mongoose;
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    username: {type: String, default: null},
    avatar: {type: String, default: null},
    email: {type: String, required: true},
    password: {type: String, required: true},
    ip_address: {type: String, default: null},
    country: {type: String, default: null},
    registered: {type: Date, default: Date.now}
}, {
    timestamps: true,
    versionKey: false
});

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

export default model('user', userSchema);