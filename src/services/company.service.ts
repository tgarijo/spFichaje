import { getManager, EntityManager, EntitySchema, Repository } from "typeorm";
import  { Request, Response } from "express";
import { Company } from "../entity/Company";
import { CompanyController } from '../controllers/CompanyController'
// import { ICompany } from './ICompany';

export class CompanyService {

    //const postRepository = getManager().getRepository(Company);
    
    // private repositoryCompany: Repository<Company> 
    
    // constructor(private req: Request){
    //     this.repositoryCompany = getManager().getRepository(Company);
        
    // }

    public async save( req: Request, res: Response) {   
        try {

            let result =  await new CompanyController().save(req.body);
            return res.status(200).json(result);

        } catch (error) {         

            return res.status(400).json({
                error: error.message,
                data: null
            })
        }
    }

    public async get( req: Request, res: Response) {
        try {
            let result =  await new CompanyController().get();
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({
                error: error.message,
                data: null
            })
        }
    }
}
