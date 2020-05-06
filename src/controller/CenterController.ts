
import  { Request, Response } from "express";

import { responseData } from "../utils/responseData";
import { Center } from "../entity/Center";
import { CenterService } from "../Service/CenterService";
// import { ICompany } from './ICompany';

export class CenterController{


    public async save(req: Request, res: Response) {

   
        let center: Center = req.body;
    
        try {
          console.log("save");
          let result =  await new CenterService(Center).save(center);
          // 
          return res.status(201).json(responseData(result, null)).send();
        
    
        } catch (error) {         
            return res.status(500).json(responseData(null, error)).send();
        }
      
      }
    
      public async delete (req: Request, res: Response) {
        let id = req.params.id;
    
        try {
            let result = new CenterService(Center).delete(parseInt(id));
            return res.status(201).json(responseData(result, null)).send();
        } catch (error) {
            return res.status(500).json(responseData(null, error)).send();
        }
    }
    
      public async update(req: Request, res: Response) {
          // Get the ID from the url
          const id = req.params.id;
    
          try {
    
              let result = new CenterService(Center).update(parseInt(id),  req.body)
              return res.status(201).json(responseData(result, null)).send();
              //return res.status(200).json(result);
    
          } catch (error) {         
              return res.status(500).json(responseData(null, error)).send();
          }
          
      }
    
      public async get(req: Request, res: Response) {
           
        try {
            // role as typeof object
            let center: Center = await  new CenterService(Center).get();
            return res.status(200).json(responseData(center, null)).send();
    
        } catch (error) {
            return res.status(500).json(responseData(null, error)).send();
        }
      }
    
      public async getById(req: Request, res:Response) {
        let id = parseInt(req.params.id);
    
        try {
            let center: Center = await new CenterService(Center).getById(id);
            return res.status(200).json(responseData(center, null)).send();
    
        } catch (error) {
            //console.log("Error number " , error)
            return res.status(500).json(responseData(null, error.message)).send()
        }
      }
}
