import { Router } from "express";

import { RoleController} from "../controller/RoleController";
const router = Router();

console.log('RoleRoute');

let roleController = new RoleController();

router.route('/role')    
    .post(roleController.save)
    .get(roleController.get);

router.route('/role/:id')
    .get(roleController.getById)
    .put(roleController.update)
    .delete(roleController.delete);


router.route("/role-getWithUser")
    .get(roleController.getWithUser );

export default router;