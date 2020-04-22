
import { Role } from "../entity/Role";
import { GenericController } from "../controllers/GenericController"

export class RoleController extends GenericController<Role>{

  public async getWithUser() {

    console.log("Repository: ", this.repository);
    let data = await this.repository.find({ relations: ["user"] });
    return data;
  }
}


