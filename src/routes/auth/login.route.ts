import { Router } from 'express';

import LoginCtrl from '../../controllers/auth/login.ctrl';

import { validateAuth } from '../../middleware/validations/auth/login.middleware';

const router = Router();
const loginCtrl = new LoginCtrl;

router.post('/', validateAuth, loginCtrl.auth);

export default router;