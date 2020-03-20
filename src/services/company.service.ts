import { getManager, EntityManager, EntitySchema, Repository } from "typeorm";
import express, { Request } from "express";
import { Company } from "../entity/Company";

export class CompanyService {

    //const postRepository = getManager().getRepository(Company);
    
    private repositoryCompany: Repository<Company> 
    
    constructor(private req: Request){
        this.repositoryCompany = getManager().getRepository(Company);
        
    }

    public save(req: Request){
        this.repositoryCompany.save()
    }

}
