import { Request, Response } from "express";
import {  getManager, Repository } from "typeorm";

import { Role } from "../entity/Role";

export class RoleController{


    public async save(req: Request, res: Response) {

        console.log("RoleController.save()");

        try {

            // get a post repository to perform operations with post
            
            let roleRepository = getManager().getRepository(Role);

            let role = roleRepository.create(req.body);
    
            await roleRepository.save(role);
        
            return res.status(200).json(roleRepository.getId)
        
        } catch (error) {
            console.log(error);
            return res.status(500).json("{error: Ha ocurrido un error}");
        }

    }

    public async get(req: Request, res: Response) {
        console.log("RoleController.get()");
        
        try {

            let roleRepository = getManager().getRepository(Role);
            let todos = await  roleRepository.findAndCount()
            return res.status(200).json({error: null, data: todos});
            

        } catch (error) {
            console.log(error);
            return res.status(500).json("{error: Ha ocurrido un error}");
        }        
    }

    public async getById(req: Request, res: Response) {
        console.log("RoleController.getById()");

        try {           

            let roleRepository =  getManager().getRepository(Role);
                       
            let id = parseInt(req.params.id);
            console.log(id);
            
            return res.status(201).json(await roleRepository.findOne(id));
            
        } catch (error) {
            console.log(error);
            return res.status(500).json("{error: Ha ocurrido un error}");
            
        }
        

    }

}


