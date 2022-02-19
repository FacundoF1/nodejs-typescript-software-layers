import express from '@awaitjs/express';
import controllers from './controllers';
import { redisMiddleware } from '../../middleware/cache';

const { getUsers, getUser, deleteUser, updateUser, createUser, postUserForBody } = controllers;
const router = express.Router();

router.getAsync('/', redisMiddleware, getUsers);
router.postAsync('/', createUser);
router.getAsync('/:id', getUser);
router.postAsync('/body', postUserForBody);
router.patchAsync('/:id', updateUser);
router.deleteAsync('/:id', deleteUser);

export default router;
