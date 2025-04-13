import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const mongoUrl = process.env.MONGO_URL;

const connectDB = 
mongoose.connect(mongoUrl)
    .then(()=>{console.log(`database connected successfully`)})
    .catch(()=>{console.log(`error connecting`)})



export default connectDB;