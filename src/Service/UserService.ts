
import { User } from '../entity/User';
import { GenericService } from './GenericService';

export class UserService extends GenericService<User>{

  public async getAllDataUser(id: number) {

    console.log("id: ", id)
    try {

      const data = await this.repository.find({
        where:{id},
        relations: ["center", "center.company"]
       
        
      });

      return data;

    } catch (error) {
      throw new Error(error);
    }

  }

}