import { Router } from "express";
import express, { Application } from 'express';
import { indexWelcome } from "../controllers/index.controller";
import companyRouter from './company.routes';
import roleRouter from './role.routes';
import userRouter from './user.routes.'
const router = Router();



export class indexRouter {

    private app: Application;

    constructor (App: Application){
        this.app = App;
    }

    // Setting routes
    public setRouter(){
        this.app.use(companyRouter);
        this.app.use(roleRouter);
        this.app.use(userRouter);
        
    }
}

export default router;