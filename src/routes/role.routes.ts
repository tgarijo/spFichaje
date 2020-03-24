import { Router } from "express";
import { RoleController } from "../controllers/RoleController";

const router = Router();

console.log('RoleRoute');

router.route('/role')    
    .post( new RoleController().save)
    .get( new RoleController().get);

router.route('/role/:id')
    .get(new RoleController().getById);



export default router;