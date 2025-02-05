import { Router } from 'express';
import { createUserController } from '../controllers/users.controller';

const router = Router();
router.post('/', createUserController); // FIXED: Removed extra `/users`

export default router;
