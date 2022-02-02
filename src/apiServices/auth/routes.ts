import express from '@awaitjs/express';
import controller from './controller';
// import { expressCacheMiddleware } from '../../middleware/cache';

const { LoginHandler } = controller;
const router = express.Router();

router.postAsync('/login', LoginHandler);

export default router;