import { getManager } from "typeorm";
import { IGenericService } from './IService/IGenericService';

// Solve problematic about object is a object or a fucntion
// typeof Entity is a function
export type ObjectType<T> = { new (): T } | Function;
 
export abstract class  GenericService<T> implements IGenericService{

    protected repository: any;
  
    constructor(type: ObjectType<T>){
        this.repository  = getManager().getRepository(type);
    }

    protected getRepository() : any {
        return this.repository;
    }
    public async update(id: number, data: object){

        try {
            let getDataById: Object = await this.getById(id);

            // Copy object properties from source to target
            let UpdateData : Object = Object.assign(getDataById, data);

            // Remove this code because is validate by hooks on entity file
            //let  error = await validate(UpdateData);
            // if(error.length > 0) throw new Error(error.toString()); 
            
           return await this.save(UpdateData);

        } catch (error) {
            throw new Error(error);
        }

    }

    public async delete(id: number): Promise<any> {
     
        console.log("ID: ", id);
        
        try {
            return await this.repository.delete(id);
        } catch (error) {
            throw new Error (error);
        }
       
    }

    public async save(data: object) {
        try {

            let saveData  = this.repository.create(data);
    
            return await this.repository.save(saveData);
        
        } catch (error) {
            throw new Error (error);
        }
    }
   
    public async get(){
      
        try {       

            let data = await this.repository.find();
            return data;

        } catch (error) {          
            throw new Error(error);
        }        
    }

    public async getById(id: number) {

        try {           

            let data  = await this.repository.findOneOrFail(id);
            return data;

        } catch (error) {
            console.error("Error Message:", error.message);
            throw new Error(error);
        }
        
    }
}