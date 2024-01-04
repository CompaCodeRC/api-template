import { Router } from 'express';
const router = Router();

import * as Controllers from '../controllers/admin.controllers';
import VerifyToken from '../middlewares/verify_token';
import Permissions from '../middlewares/permissions';

router.get('/', VerifyToken, Permissions(['admin']), Controllers.general.status);
router.post('/login', Controllers.auth.login);

export default router;