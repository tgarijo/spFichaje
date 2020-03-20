import { Request, Response } from "express";
import {  getManager, Repository } from "typeorm";

import { Company } from "../entity/Company";

export class CompanyController{

    //companyRepository: Repository<Company>;

    //private companyRepository = new  Repository<Company>();

    constructor() {
       
        //this.companyRepository = getManager().getRepository(Company);
    }

    public async save(req: Request, res: Response) {

        console.log("CompanyController.save()");

        try {

            // get a post repository to perform operations with post
            let companyRepository = getManager().getRepository(Company);

            let company = companyRepository.create(req.body);
    
            await companyRepository.save(company);
        
            return res.status(200).json(companyRepository.getId)
        
        } catch (error) {
            console.log(error);
            return res.status(500).json("{error: Ha ocurrido un error}");
        }

    }

    public async get(req: Request, res: Response) {
        console.log("CompanyController.get()");
        
        try {

            let companyRepository = getManager().getRepository(Company);
            return res.status(200).json(await  companyRepository.findAndCount());

        } catch (error) {
            console.log(error);
            return res.status(500).json("{error: Ha ocurrido un error}");
        }        
    }

    public async getById(req: Request, res: Response) {
        console.log("CompanyController.getById()");

        try {           

            let companyRepository =  getManager().getRepository(Company);
                       
            let id = parseInt(req.params.id);
            console.log(id);
            
            return res.status(201).json(await companyRepository.findOne(id));
        } catch (error) {

            
        }
        

    }

}

export async function companyController(req: Request, res: Response) {

    
   


}