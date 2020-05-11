import { getManager, EntityManager, EntitySchema, Repository } from "typeorm";
import  { Request, Response } from "express";
import { Company } from "../entity/Company";
import { CompanyService } from '../Service/CompanyService'
import { responseData } from "../utils/responseData";
// import { ICompany } from './ICompany';

export class  CompanyController{


    public async save(req: Request, res: Response) {

   
        const  company: Company = req.body;
    
        try {
          console.log("save");
          const  result =  await new CompanyService(Company).save(company);
          // 
          return res.status(201).json(responseData(result, null)).send();
        
    
        } catch (error) {         
            return res.status(500).json(responseData(null, error)).send();
        }
      
      }
    
      public async delete (req: Request, res: Response) {
        let id = req.params.id;
    
        try {
            let result = new CompanyService(Company).delete(parseInt(id));
            return res.status(201).json(responseData(result, null)).send();
        } catch (error) {
            return res.status(500).json(responseData(null, error)).send();
        }
    }
    
      public async update(req: Request, res: Response) {
          // Get the ID from the url
          const id = req.params.id;
    
          try {
    
              let result = new CompanyService(Company).update(parseInt(id),  req.body)
              return res.status(201).json(responseData(result, null)).send();
              //return res.status(200).json(result);
    
          } catch (error) {         
              return res.status(500).json(responseData(null, error)).send();
          }
          
      }
    
      public async get(req: Request, res: Response) {
           
        try {
            // role as typeof object
            let company: Company = await  new CompanyService(Company).get();
            return res.status(200).json(responseData(company, null)).send();
    
        } catch (error) {
            return res.status(500).json(responseData(null, error)).send();
        }
      }
    
      public async getById(req: Request, res:Response) {
        let id = parseInt(req.params.id);
    
        try {
            let company: Company = await new CompanyService(Company).getById(id);
            return res.status(200).json(responseData(company, null)).send();
    
        } catch (error) {
            //console.log("Error number " , error)
            return res.status(500).json(responseData(null, error.message)).send()
        }
      }
}
