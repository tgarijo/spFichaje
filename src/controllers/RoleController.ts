


import { Role } from "../entity/Role";
import { GenericController } from "../controllers/GenericController"

export class RoleController extends GenericController<Role>{

  
   
    // public async save(data: object) {

    //     console.log("RoleController.save()");
       
    //     try {

    //         // get a post repository to perform operations with post
            
    //         let roleRepository = getManager().getRepository(Role);

    //         let role = roleRepository.create(data);
    
    //         return await roleRepository.save(role);
        
    //     } catch (error) {
    //         throw new error;
            
            
    //         //return res.status(500).json("{error: Ha ocurrido un error}");
    //     }

    // }

  

    // public async getById(id: number) {
    //     console.log("RoleController.getById()");

    //     try {           
    //         let roleRepository =  getManager().getRepository(Role);
    //         let role: Role = await roleRepository.findOneOrFail(id);
    //         return role;
    //     } catch (error) {
    //         //console.log(error);
    //         throw new Error(error);
    //     }
        

    //}

}


