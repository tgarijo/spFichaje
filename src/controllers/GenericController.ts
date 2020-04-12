import {
    getManager, EntitySchema, EntityManager
} from "typeorm";
import { Company } from "../entity/Company";

 
export  class  GenericController{

    private entity: EntityManager;

    constructor (entity: EntityManager ) {
        this.entity = entity;
    }

    public async save(data: object) {
        try {

            let repository = getManager().getRepository(Company);

            let saveData = repository.create(data);
    
            return await repository.save(saveData);
        
        } catch (error) {
            throw new error;
        }
    }
    public async get() {
        
        try {
         
            let repository  = getManager().getRepository(Company);
            return await  repository.findAndCount()            

        } catch (error) {
            console.log(error);
            throw new Error(error);
        }        
    }

    public async getById(id: number) {

        try {           

            let repository =  getManager().getRepository(Company);
            let data  = await repository.findOneOrFail(id);
            return data;

        } catch (error) {
            //console.log(error);
            throw new Error(error);
        }
        
    }
}