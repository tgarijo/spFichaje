import { Router } from "express";
import { CompanyController } from "../controller/CompanyController";

let companyController = new CompanyController();

const router = Router();

console.log('companyRoute');

router.route('/company')    
    // .post( new CompanyController.save())
    // .get( new CompanyController.get);

router.route('/company/:id')
    // .get(new CompanyController().getById);

    
    

export default router;