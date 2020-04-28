
import { User } from '../entity/User';
import { GenericService } from './GenericService';

export class UserService extends GenericService<User>{

    // public async getAll(req: Request, res: Response){
    //     const userRepository = getRepository(User);
    //     const users = await userRepository.find({
    //         select: ["id", "username", "roleId"]
    //     });

    //     res.status(200).json({
    //         error: null,
    //         data: users
    //     }).send;
    // }
    
    // public async getOneById(req: Request, res: Response) {
    //     //Get the mId from the url
    //     const id: number = parseInt(req.params.id);

    //     // Get user from database
    //     const userRepository = getRepository(User);
        
    //     try {
    //         const user  = await userRepository.findOneOrFail(id, {
    //             select: ["id", "username", "roleId"]
    //         });
    //     } catch (error) {
    //         res.status(404).json({
    //             error: "Error User ",
    //             data: null
    //         });
    //     }
    // }

    // public async save(req: Request, res: Response) {

    //     let { username, password, role } = req.body;
    //     let user = new User();
    //     user.username = username;
    //     user.password = password;
    //     user.role = role;

    //     // Validate if paramaters are ok
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

    // public async editUser(req: Request, res: Response) {
    //     // Get the ID from the url
    //     const id = req.params.id;

    //     // Get values from the body
    //     const { username, role } = req.body;

    //     //Try to find user on database
    //     const userRepository = getRepository(User);

    //     let user;

    //     try {
    //         user = await userRepository.findOneOrFail(id);
    //     } catch (error) {
    //         res.status(404).json({
    //             error,
    //             data: null
    //         }).send()
    //         return;
    //     }

    //     user.username = username;
    //     user.role = role;
    //     const error = await validate(user);
    //     if(error.length > 0) {
    //         res.status(400).json({
    //             error,
    //             data: null
    //         }).send();
    //         return;
    //     }

    //     // Try oto safe, if fails, that means username already in use
    //     try {
    //         await userRepository.save(user);
    //     } catch (error) {
    //         res.status(409).json({
    //             error,
    //             data: null
    //         }).send();
    //         return;
    //     }
    //     // After all send 204 (no content, but accept) response
    //     res.status(204).json({
    //         error: null,
    //         data: null
    //     }).send();
    // };

    // public async deleteUser (req: Request, res: Response){
    //     //Get the ID from the url
    //     const id = req.params.id;

    //     const userRepository = getRepository(User);

    //     let user: User;

    //     try {
    //         user =  await userRepository.findOneOrFail(id);
    //     } catch (error) {
    //         res.status(404).json({
    //             error: 'Problem witnh user',
    //             data: null
    //         }).send();
    //         return;
    //     }
    //     let todo = userRepository.delete(id);

    //     // After all send a 204
    //     res.status(204).json({
    //         error: null,
    //         data: todo

    //     }).send()
    // }
}