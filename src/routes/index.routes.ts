import { Router } from "express";
import express, { Application } from 'express';
import { indexWelcome } from "../controllers/index.controller";
import companyRouter from './company.routes';
const router = Router();



export class indexRouter {

    private App: Application;

    constructor (App: Application){
        this.App = App;
    }
    public setRouter(){
        this.App.use(companyRouter)
    }

}
/*
router.route('/')
    .get(indexWelcome);
    
router.route('/company',companyRouter.route);
*/

export default router;