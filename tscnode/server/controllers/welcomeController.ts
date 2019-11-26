import { Router } from "express";
const router:Router=Router();
router.get('/welcome',(req,res)=>{
    res.send('welcome')
})

export const welcomeController:Router=router