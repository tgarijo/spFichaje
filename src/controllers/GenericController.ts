import {
    getManager, EntitySchema, getRepository, Entity, BaseEntity, Repository} from "typeorm";
import { Company } from "../entity/Company";
import { threadId } from "worker_threads";
import e from "express";

export type ObjectType<T> = { new (): T } | Function;
 
export abstract  class  GenericController<T>{

    private repository: any;

    constructor(type: ObjectType<T>){
        this.repository  = getManager().getRepository(type);
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
           
            let data = await this.repository.find();

            return data;

        } catch (error) {
            console.log(error);
            throw new Error(error);
        }        
    }

    public async getById(id: number) {

        try {           

            let data  = await this.repository.findOneOrFail(id);
            return data;

        } catch (error) {
            //console.log(error);
            throw new Error(error);
        }
        
    }
}