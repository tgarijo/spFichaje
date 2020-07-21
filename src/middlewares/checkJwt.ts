import { Request, Response, NextFunction} from 'express'
import * as jwt from 'jsonwebtoken';
import config from '../config/config';
import { responseData } from '../utils/responseData';

export const  checkJwt = (req: Request, res: Response, next: NextFunction) => {

    //Get de jwt tocken from the head
    const token = <string>req.headers["auth"];
    let jwtPayload;

    try {
        jwtPayload = <any>jwt.verify(token, config.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    } catch (error) {
         //If token is not valid, respond with 401 (unauthorized)
        return res.status(401).json(responseData(null, 'unauthorized')).send();
    }

    const { userId, username} = jwtPayload;
    const newToken = jwt.sign({ userId, username}, config.jwtSecret, {
        expiresIn: "1h"
    })
    res.setHeader("token", newToken);

    next();

}