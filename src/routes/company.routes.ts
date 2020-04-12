import { Router } from "express";
import { CompanyController } from "../controllers/CompanyController";

import { CompanyService } from '../services/company.service'
import { Company } from "../entity/Company";

const router = Router();

console.log('companyRoute');

router.route('/company')    
    .post( new CompanyController().save)
    .get( new CompanyService().get);

router.route('/company/:id')
    .get(new CompanyController().getById);

    
    

export default router;