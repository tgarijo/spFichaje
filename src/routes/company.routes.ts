import { Router } from "express";
import { CompanyController } from "../controller/CompanyController";

let companyController = new CompanyController();

const router = Router();

console.log('companyRoute');

router.route('/company')    
    .post(companyController.save)
    .get(companyController.get);

router.route('/company/:id')
    .get(companyController.getById)
    .put(companyController.update)
    .delete(companyController.delete);
    

export default router;