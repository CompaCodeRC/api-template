import {Router} from 'express';
const router = Router();

import * as Controllers from '../controllers/user.controllers';
import verify_token from '../middlewares/verify_token';
import { UpDisk } from '../utils/upload';

router.get('/', verify_token, Controllers.general.user);
router.post('/test_upload', verify_token, UpDisk.fields([{name: 'demo', maxCount: 1}]), Controllers.general.test_upload);

export default router;