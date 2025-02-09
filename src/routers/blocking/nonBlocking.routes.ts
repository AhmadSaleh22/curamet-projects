import { Router } from "express";
import { getNonBlockingController } from "../../controllers/blocking/nonBlocking.controller";

const router = Router();

router.get('/non-blocking', getNonBlockingController);

export default router;