import { Router } from "express";

import { RoleService } from "../services/RoleService";
const router = Router();

console.log('RoleRoute');

let roleService = new RoleService();

router.route('/role')    
    .post(roleService.save)
    .get(roleService.get);
    

router.route('/role/:id')
    .get(roleService.getById)
    .put(roleService.update);



export default router;