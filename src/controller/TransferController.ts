import { Request, Response } from 'express'
import { TransferService } from "../Service/TransferService";
import { Transfer } from "../entity/Transfer";
import { responseData } from "../utils/responseData";

export class TransferController {

  // save
  public async save(req: Request, res: Response) {

    const transfer: Transfer = req.body
    
    try {

      const result = await new TransferService(Transfer).save(transfer);
      return res.status(201).json(responseData(result, null)).send();

    } catch (error) {

      return res.status(500).json(responseData(null, error)).send();
      
    }
  }

  // update

  // delete

  // getAll

  // getById

}