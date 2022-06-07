import {Router} from 'express';
const router = Router();

import * as Controllers from '../controllers/user.controllers';
import verify_token from '../middlewares/verify_token';

router.get('/', verify_token, Controllers.user);

export default router;