import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { validate } from 'class-validator';
import { User } from  '../entity/User';
import config from '../config/config';

export class AuthController {
    static login = async (req: Request, res: Response) => {
        let { username, password } = req.body;
        if (!(username && password)) {
            res.status(400).json({
                error: "Not user and password",
                data: null
            }).send();
        }

        // Get user from database
        let  userRepository = getRepository(User);
        let user: User = new User();
        try {
            user = await userRepository.findOneOrFail({ where: { username }});
        } catch (error) {
            res.status(401).json({
                error: "Problems user",
                data: null
            }).send();
        }
        // Check if encrypted password match
        if(!user.checkIfUnencryptedPasswordIsValid(password)) {
            res.status(401).json({
                error: "Problems user",
                data: null
            }).send();
            return;            
        }

            //Sing JWT, valifd for 1 hour
        let token =jwt.sign(
            {userId: user.id, username: user.username},
            config.jwtSecret,
            { expiresIn: "1h"}
        );
        // Send token
        res.send(token);
    }

    static changePassword = async (req: Request, res: Response) => {

        // Get ID from jwt
        const id = res.locals.jwtPayload.userId;

        // Get parameters from the body
        const { oldPassword, newPassword } = req.body;
        if(!(oldPassword && newPassword)) {
            res.status(400).json({
                error: "Problems change Password",
                data: null
            }).send();
        }

        // Get user from database
        const userRepository = getRepository(User);
        let user: User;

        try {
            user = await userRepository.findOneOrFail(id);
        } catch (id) {
            res.status(401).json({
                error: "Error change password",
                data: null
            }).send();
        }

        if(!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
            res.status(401).json({
                error: "Error change password",
                data: null
            }).send();
            return;
        }

        // Validate de model (password lenght)
        user.password = newPassword;
        const error =  await validate(user);
        if (error.length > 0) {
            res.status(400).json({
                error,
                data: null
            }).send();
            return;
        }
        // Hash the new password and save
        user.hashPassword();
        let todo = userRepository.save(user);

        res.status(204).json({
            error: null,
            data: todo
        }).send();
    }
}    
