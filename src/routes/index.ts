import express, { Request, Response } from 'express';
import users from "@apiServices/users/routes";
import auth from '@apiServices/auth/routes';
import { Monitor } from '@decorators/systemCounter';

const router = express.Router();
router.use('/users', users);
router.use('/auth', auth);
router.get('/systemInfo', async (req: Request, res: Response) => res.json(Monitor.printInstances()));

export default router;
