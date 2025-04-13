import express from 'express'
 import connectDB from './src/database/database.js';
import cors from 'cors'
import dotenv from 'dotenv'
import router from './src/routes/router.js'


const app = express();
app.use(express.json());
app.use(cors());

dotenv.config()
const port = process.env.PORT;

// app.get('/',(req,res)=>{
//     res.send('homepage')
// })

//will create a router here
app.use('/api',router)

//server running
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
  
})