
import{ Request, Response  } from 'express'
import { UserService } from '../Service/UserService';
import { User } from '../entity/User';
import { responseData } from '../utils/responseData';

export class UserController {

  public async save(req: Request, res: Response) {

   
    let user: User = req.body;

    try {
      console.log("save");
      let result =  await new UserService(User).save(user);
      // 
      return res.status(201).json(responseData(result, null)).send();
    

    } catch (error) {         
        return res.status(500).json(responseData(null, error)).send();
    }
  
  }

  public async delete (req: Request, res: Response) {
    let id = req.params.id;

    try {
        let result = new UserService(User).delete(parseInt(id));
        return res.status(201).json(responseData(result, null)).send();
    } catch (error) {
        return res.status(500).json(responseData(null, error)).send();
    }
}

  public async update(req: Request, res: Response) {
      // Get the ID from the url
      const id = req.params.id;

      try {

          let result = new UserService(User).update(parseInt(id),  req.body)
          return res.status(201).json(responseData(result, null)).send();
          //return res.status(200).json(result);

      } catch (error) {         
          return res.status(500).json(responseData(null, error)).send();
      }
      
  }

  public async get(req: Request, res: Response) {
       
    try {
        // role as typeof object
        let role: User = await  new UserService(User).get();
        return res.status(200).json(responseData(role, null)).send();

    } catch (error) {
        return res.status(500).json(responseData(null, error)).send();
    }
  }

  public async getById(req: Request, res:Response) {
    let id = parseInt(req.params.id);

    try {
        let role : User = await new UserService(User).getById(id);
        return res.status(200).json(responseData(role, null)).send();

    } catch (error) {
        //console.log("Error number " , error)
        return res.status(500).json(responseData(null, error.message)).send()
    }
  }

  public async getAllData(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const user : User = await new UserService(User).getAllDataUser(id);
      return res.status(200).json(responseData(user, null)).send();
    
    } catch (error) {
      return res.status(500).json(responseData(null, error.message)).send()
    }
  }
}

  
