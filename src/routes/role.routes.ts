import { Router } from "express";
import { RoleController } from "../controllers/RoleController";
import { RoleService } from "../services/RoleService";
const router = Router();

console.log('RoleRoute');

let roleService = new RoleService();

router.route('/role')    
    .post(roleService.save)
    .get(new RoleService().get);

router.route('/role/:id')
    .get(roleService.getById);



export default router;