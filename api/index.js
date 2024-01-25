import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import  userRouter from './routes/user.route.js';

dotenv.config();

mongoose
    .connect("mongodb+srv://nithyashree:nithyashree@mern-estate.r0jv8na.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log('You Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

//const express = require('express');
const app = express();
app.get('/test', (req, res) => {
    res.json({
        message: 'You did it. Congrats !!',
    });
  });

app.use("/api/user", userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use("/api/user", userRouter);


  