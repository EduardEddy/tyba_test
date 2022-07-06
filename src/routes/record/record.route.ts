import { Router } from 'express';

import { RecordCtrl } from '../../controllers/record/record.ctrl';

const router = Router();
const recordCtrl = new RecordCtrl;

router.get('/', recordCtrl.get );

export default router;