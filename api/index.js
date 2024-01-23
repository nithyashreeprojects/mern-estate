import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const mongoose = require('mongoose');

mongoose
    .connect("mongodb+srv://nithyashree:nithyashree@mern-estate.r0jv8na.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });


const app = express();

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
    }
);
