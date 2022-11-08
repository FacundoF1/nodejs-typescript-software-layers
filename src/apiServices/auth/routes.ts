import express from '@awaitjs/express';
import controller from './controllers';
// import { expressCacheMiddleware } from '../../middleware/cache';

const { LoginHandler } = controller;
const router = express.Router();

router.postAsync('/login', LoginHandler);

export default router;