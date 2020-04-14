import {
    getManager, ObjectType, EntitySchema, getRepository, Entity} from "typeorm";
import { Company } from "../entity/Company";
import { threadId } from "worker_threads";

 
export abstract  class  GenericController<T>{

    entity:  EntitySchema<T>

    constructor(entity:  EntitySchema<T>) {
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
    public async get(){
      
        try {
           console.log("Role Entity: ", this.entity);
           let repository  = getRepository(this.entity);
           let data = await repository.find();

        } catch (error) {
            console.log(error);
            throw new Error(error);
        }        
    }

    public async getById(id: number) {

        try {           

            let repository =  getManager().getRepository(this.entity);
            let data  = await repository.findOneOrFail(id);
            return data;

        } catch (error) {
            //console.log(error);
            throw new Error(error);
        }
        
    }
}