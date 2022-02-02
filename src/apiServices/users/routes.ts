import express from '@awaitjs/express';
import controllers from './controllers';
// import { expressCacheMiddleware } from '../../middleware/cache';

const { getUsers, getUser, deleteUser, updateUser, createUser } = controllers;
const router = express.Router();

router.getAsync('/', getUsers);
router.postAsync('/', createUser);
router.getAsync('/:id', getUser);
router.patchAsync('/:id', updateUser);
router.deleteAsync('/:id', deleteUser);

export default router;
