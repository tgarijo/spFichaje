import { Router } from "express";

import { UserController } from "../controller/UserController";
import { checkJwt } from "../middlewares/checkJwt";
const router = Router();

console.log('UserRoute');

let userController = new UserController();

router.route('/user')    
    .post(userController.save)
    .get(userController.get);

router.route('/auth-user/:id'  ).get([checkJwt],  userController.getById);

router.route('/user/:id')
.get(userController.getById)
.put(userController.update)
.delete(userController.delete);

router.route('/getalldata/:id')
    .get(userController.getAllData);
    
export default router;