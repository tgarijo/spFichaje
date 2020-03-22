import { Router } from "express";
import express, { Application } from 'express';
import { indexWelcome } from "../controllers/index.controller";
import companyRouter from './company.routes';
const router = Router();



export class indexRouter {

    private app: Application;

    constructor (App: Application){
        this.app = App;
    }
    public setRouter(){
        this.app.use(companyRouter)
    }

}
/*
router.route('/')
    .get(indexWelcome);
    
router.route('/company',companyRouter.route);
*/

export default router;