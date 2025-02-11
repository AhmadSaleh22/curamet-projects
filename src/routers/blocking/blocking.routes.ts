import { Router } from 'express';
import { getBlockingController } from '../../controllers/blocking/blocking.controller';

const router = Router();

router.get('/blocking', getBlockingController);

export default router;
