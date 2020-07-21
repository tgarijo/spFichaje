import { Router } from 'express';

import { AuthController }  from '../controller/AuthController';

import { checkJwt } from '../middlewares/checkJwt';

const router = Router();


//let authController  = new AuthController();
// Login


router.post('/login', AuthController.login);

export default router;