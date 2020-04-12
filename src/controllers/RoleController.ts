
import {  getManager } from "typeorm";

import { Role } from "../entity/Role";

export class RoleController{


    public async save(data: object) {

        console.log("RoleController.save()");
       
        try {

            // get a post repository to perform operations with post
            
            let roleRepository = getManager().getRepository(Role);

            let role = roleRepository.create(data);
    
            return await roleRepository.save(role);
        
        } catch (error) {
            throw new error;
            
            
            //return res.status(500).json("{error: Ha ocurrido un error}");
        }

    }

    public async get() {
        console.log("RoleController.get()");
        
        try {
            console.log("angtes roleRepository");
            let roleRepository = getManager().getRepository(Role);
            return await  roleRepository.findAndCount()            

        } catch (error) {
            console.log(error);
            throw new Error(error);
        }        
    }

    public async getById(id: number) {
        console.log("RoleController.getById()");

        try {           
            let roleRepository =  getManager().getRepository(Role);
            let role: Role = await roleRepository.findOneOrFail(id);
            return role;
        } catch (error) {
            //console.log(error);
            throw new Error(error);
        }
        

    }

}


