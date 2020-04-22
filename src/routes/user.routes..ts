import { Router } from "express";

import { UserService } from "../services/UserService";
const router = Router();

console.log('UserRoute');

let userService = new UserService();

router.route('/user')    
    .post(userService.save)
    //.get(roleService.get);

// router.route('/role/:id')
//     .get(roleService.getById)
//     .put(roleService.update);

// router.route("/role/getWithUser")
//     .get(roleService.getWithUser);

export default router;