import express from 'express';
import users from '../apiServices/users/routes';
import auth from '../apiServices/auth/routes';
import { Monitor } from '../decorators/systemCounter';

const router = express.Router();
router.use('/users', users);
router.use('/auth', auth);
router.use('/systemInfo', async (req, res) => res.json(Monitor.printInstances()));

export default router;
