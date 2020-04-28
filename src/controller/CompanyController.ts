import { getManager, EntityManager, EntitySchema, Repository } from "typeorm";
import  { Request, Response } from "express";
import { Company } from "../entity/Company";
import { CompanyService } from '../Service/CompanyService'
// import { ICompany } from './ICompany';

export class  CompanyController{

    //const postRepository = getManager().getRepository(Company);
    
    // private repositoryCompany: Repository<Company> 
    
    // constructor(private req: Request){
    //     this.repositoryCompany = getManager().getRepository(Company);
        
    // }

    public async save( req: Request, res: Response) {   
        try {

            let result =  await new CompanyService().save(req.body);
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
            let result =  await new CompanyService().get();
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({
                error: error.message,
                data: null
            })
        }
    }
}
