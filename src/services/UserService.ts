
import{ Request, Response  } from 'express'
import { UserController } from '../controllers/UserController';
import { User } from '../entity/User';
import { responseData } from '../utils/responseData';
export class UserService {

  public async save(req: Request, res: Response) {

   
    let user: User = req.body;

    try {
      console.log("save");
      let result =  await new UserController(User).save(user);
      // 
      return res.status(201).json(responseData(result, null)).send();
      //return res.status(200).json(result);

  } catch (error) {         
      return res.status(500).json(responseData(null, error)).send();
  }
  
  }
}
  // let { username, password, role } = req.body;

  //   user.username = username;
  //   user.password = password;
  //   user.role = role;

    // Validate if paramaters are ok
//     const error = await validate(user);
//     if(error.length > 0) {
//         res.status(400).json({
//             error: "Error Validate parameters",
//             data: null
//         });
//         return
//     }
//     // Try to save. if fails, the username is already in use
//     const userRepository = getRepository(User);
//     try {
//         await userRepository.save(user);            
//     } catch (error) {
//         res.status(409).json({
//             error: "username already in use",
//             data: null
//         });
//         return;
//     }

//     //If all ok, send 201 response
//     res.status(203).json({
//         error: null,
//         data: "User create"
//     }).send();
// }
