import {Router} from 'express';
const router = Router();

import * as Controllers from '../controllers/auth.controllers';

router.post('/login', Controllers.login);

export default router;