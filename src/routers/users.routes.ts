import { Router } from 'express';
import { createUserController, getUsersController } from '../controllers/users.controller';

const router = Router();
router.post('/', createUserController); // FIXED: Removed extra `/users`
router.get('/users', getUsersController);

export default router;
