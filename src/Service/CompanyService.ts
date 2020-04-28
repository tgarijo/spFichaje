
import { Company } from "../entity/Company";

import { getManager } from "typeorm";

export class CompanyService {

  
    public async save(data: object) {

        try {

            let repository = getManager().getRepository(Company);

            let saveData = repository.create(data);
             await repository.save(saveData)

        } catch (error) {
            throw new Error(error);
        }
    }
    public async get() {

        try {
            
            let repository = getManager().getRepository(Company);
            return await  repository.findAndCount()            

        } catch (error) {
            console.log(error);
            throw new Error(error);
        }   
    }

    public async getById(id: number) {

        try {           
            let repository =  getManager().getRepository(Company);
            let company: Company = await repository.findOneOrFail(id);
            return company;
            
        } catch (error) {
            //console.log(error);
            throw new Error(error);
        }
        

    }

}

//export async function companyController(req: Request, res: Response) {}
