import express from 'express';
import { lists,createTask,updateTask,deleteTask } from '../controller/controller.js';

const router = express.Router();
router.get('/',(req,res)=>{
    res.send('homepage')
});
router.get('/list',lists);
router.post('/create',createTask);

router.put('/update/:id',updateTask);

router.delete('/delete/:id',deleteTask);

export default router;



