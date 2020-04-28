import { Router } from "express";

import { UserController } from "../controller/UserController";
const router = Router();

console.log('UserRoute');

let userController = new UserController();

router.route('/user')    
    .post(userController.save)
    .get(userController.get);

    router.route('/user/:id')
    .get(userController.getById)
    .put(userController.update);

export default router;