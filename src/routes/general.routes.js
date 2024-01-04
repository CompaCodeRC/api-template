import { Router } from 'express';
const router = Router();

import * as Controllers from '../controllers/general.controllers';

router.get('/', Controllers.status);

export default router;