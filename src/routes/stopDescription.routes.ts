import { Router } from "express";
import { StopDescriptionController } from "../controller/StopDescriptionController";


const router = Router();

console.log('stopdescription Router');

let stopDescriptionController = new StopDescriptionController();

router.route('/stopDescription')    
    .post(stopDescriptionController.save)
    .get(stopDescriptionController.get);

router.route('/stopdescription/:id')
    .get(stopDescriptionController.getById)
    .put(stopDescriptionController.update)
    .delete(stopDescriptionController.delete);

export default router;