import { Router } from 'express';

import { UserCtrl } from '../../controllers/user/user.ctrl';
import { validateCreate } from '../../middleware/validations/user/create.middleware';

const router = Router();
const userCtrl = new UserCtrl;

router.post('/', validateCreate, userCtrl.create);

export default router;