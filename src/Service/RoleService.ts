
import { Role } from "../entity/Role";
import { GenericService } from "./GenericService"
import { IGenericService } from "./IService/IGenericService";

export class RoleService extends GenericService<Role> implements IGenericService{

  // Metodo que saca los Roles y los usuarios
  public async getWithUser() {

    try {       

        let data = await this.repository.find({ relations: ["user"] });
        return data;

    } catch (error) {          
        throw new Error(error);
    }
  }
}