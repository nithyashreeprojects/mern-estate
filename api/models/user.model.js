import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
            get: function() {
                return (this._password) ? this._password : '';
            },
            // set a function to hash the password before saving to the database
            set: function(password) {
                this._password = bcrypt.hashSync(password, 10);
            }
        }
    },{ timestamps: true});

    const User = mongoose.model('User',userSchema);

    export default User;