import { Request, Response } from 'express';
import { RoleController } from '../controllers/RoleController';
import { Role } from '../entity/Role';
import { EntitySchema, Entity } from 'typeorm';

export class RoleService {

  
    public async save( req: Request, res: Response) {   
        // try {

        //     let result =  await new RoleController().save(req.body);
        //     return res.status(200).json(result);

        // } catch (error) {         

        //     return res.status(400).json({
        //         error: error.message,
        //         data: null
        //     })
        // }
    }

    public async get(req: Request, res: Response) {
        console.log("RoleService.get()");
        //let roleController = new RoleController(Role);
        
        try {

            let todos = await  new RoleController(Role).get();
            return res.status(200).json({
                error: null, 
                data: todos
            });
        } catch (error) {
            return res.status(500).json({
                error: error.message,
                data: null
            });
        }
    }

    public async getById(req: Request, res:Response) {
        let id = parseInt(req.params.id);
        console.log(id);
        try {
            let role = await new RoleController(Role).getById(id);
            return res.status(200).json({
                error:null,
                data: role
            }).send();

        } catch (error) {
            console.log("Error number " , error)
            return res.status(500).json({
                error: error.message,
                data:null
            }).send()
        }
    }
}