import { Request, Response } from 'express';
import { RoleService } from '../Service/RoleService';
import { Role } from '../entity/Role';
import { responseData } from '../utils/responseData';


export class RoleController {

    public async save( req: Request, res: Response) {   
        try {

            let result =  await new RoleService(Role).save(req.body);
            // 
            return res.status(201).json(responseData(result, null)).send();
            //return res.status(200).json(result);

        } catch (error) {         
            return res.status(500).json(responseData(null, error)).send();
        }
    }

    public async delete (req: Request, res: Response) {
        let id = req.params.id;

        try {
            let result = new RoleService(Role).delete(parseInt(id));
            return res.status(201).json(responseData(result, null)).send();
        } catch (error) {
            return res.status(500).json(responseData(null, error)).send();
        }
    }
    public async update(req: Request, res: Response) {
        // Get the ID from the url
        const id = req.params.id;

        try {

            let result = new RoleService(Role).update(parseInt(id),  req.body)
            return res.status(201).json(responseData(result, null)).send();
            //return res.status(200).json(result);

        } catch (error) {         
            return res.status(500).json(responseData(null, error)).send();
        }
        
    };
    
    public async get(req: Request, res: Response) {
       
        try {
            // role as typeof object
            let role: Role = await  new RoleService(Role).get();
            return res.status(200).json(responseData(role, null)).send();

        } catch (error) {
            return res.status(500).json(responseData(null, error)).send();
        }
    }

    public async getById(req: Request, res:Response) {
        let id = parseInt(req.params.id);
 
        try {
            let role : Role = await new RoleService(Role).getById(id);
            return res.status(200).json(responseData(role, null)).send();

        } catch (error) {
            //console.log("Error number " , error)
            return res.status(500).json(responseData(null, error.message)).send()
        }
    }

    public async getWithUser(req: Request, res:Response) {
        try {
            let role: Role = await new RoleService(Role).getWithUser()
            return res.status(200).json(responseData(role, null)).send();

        } catch (error) {
            //console.log("Error number " , error)
            return res.status(500).json(responseData(null, error.message)).send()
        }
        
    }
}