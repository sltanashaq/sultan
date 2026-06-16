import mongoose from 'mongoose';
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    age: {
        type: String,
        required: false,
    },
        s: {
        type: String,
        required: false,
    },
            nn: {
        type: String,
        required: false,
    },
},{
    timestamps: true
});
  
export default  mongoose.model('users', UserSchema);