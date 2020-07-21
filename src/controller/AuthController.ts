import { Request, Response } from 'express';

import config from '../config/config';
import * as jwt from 'jsonwebtoken';
import { validate } from 'class-validator';

import { responseData } from "../utils/responseData";
import { User } from  '../entity/User';
import { UserService } from '../Service/UserService';




export class AuthController {

    public static async login (req: Request, res: Response)  {

        let dataRequest: User = req.body;

        if (!(dataRequest.username && dataRequest.password)) {
            return res.status(401).json(responseData(null, 'Data Login')).send();
        }

        let user = new User();
        user.password = dataRequest.password;

        try {
            
            let result   =  await new UserService(User).getUserByUsername(dataRequest.username);

            // Check if encrypted password match
            if(!user.checkIfUnencryptedPasswordIsValid(result[0].password)) {
                return res.status(401).json(responseData(null, 'Data Login')).send();     
        }
        } catch (error) {
            return res.status(500).json(responseData(null, error)).send();
        }
        

        //Sing JWT, valifd for 1 hour
        let token =jwt.sign(
            {userId: user.id, username: user.username},
            config.jwtSecret,
            { expiresIn: "1h"}
        );

        return res.status(201).json(responseData(token, null)).send();
    }

    // static changePassword = async (req: Request, res: Response) => {

    //     // Get ID from jwt
    //     const id = res.locals.jwtPayload.userId;

    //     // Get parameters from the body
    //     const { oldPassword, newPassword } = req.body;
    //     if(!(oldPassword && newPassword)) {
    //         res.status(400).json({
    //             error: "Problems change Password",
    //             data: null
    //         }).send();
    //     }

    //     // Get user from database
    //     const userRepository = getRepository(User);
    //     let user: User;

    //     try {
    //         user = await userRepository.findOneOrFail(id);
    //     } catch (id) {
    //         res.status(401).json({
    //             error: "Error change password",
    //             data: null
    //         }).send();
    //     }

    //     if(!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
    //         res.status(401).json({
    //             error: "Error change password",
    //             data: null
    //         }).send();
    //         return;
    //     }

    //     // Validate de model (password lenght)
    //     user.password = newPassword;
    //     const error =  await validate(user);
    //     if (error.length > 0) {
    //         res.status(400).json({
    //             error,
    //             data: null
    //         }).send();
    //         return;
    //     }
    //     // Hash the new password and save
    //     user.hashPassword();
    //     let todo = userRepository.save(user);

    //     res.status(204).json({
    //         error: null,
    //         data: todo
    //     }).send();
    // }
}    
