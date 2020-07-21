import { Router } from "express";
import { Application } from 'express';
import { indexWelcome } from "../controller/index.controller";
import companyRouter from './company.routes';
import roleRouter from './role.routes';
import userRouter from './user.routes.'
import centerRouter from './center.routes'
import stopDescriptionRouter from './stopDescription.routes'
import authRouter from './authRouter';

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
        this.app.use(centerRouter);
        this.app.use(stopDescriptionRouter);
        this.app.use(authRouter);
        
    }
}

export default router;