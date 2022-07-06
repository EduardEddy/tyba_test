import { Router } from 'express';

import { RestaurantCtrl } from '../../controllers/restaurant/restaurant.ctrl'; 
import AuthUserMiddleware from '../../middleware/auth/auth_user';

const router = Router();
const restCtrl = new RestaurantCtrl;
const authUser = new AuthUserMiddleware;

router.post('/', authUser.verifyAuth, restCtrl.getInfo);

export default router;