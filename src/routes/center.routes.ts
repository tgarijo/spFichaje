import { Router } from "express";
import { CenterController } from "../controller/CenterController";


const router = Router();

console.log('CenterRoute');

let centerController = new CenterController();

router.route('/center')    
    .post(centerController.save)
    .get(centerController.get);

router.route('/center/:id')
    .get(centerController.getById)
    .put(centerController.update)
    .delete(centerController.delete);

export default router;