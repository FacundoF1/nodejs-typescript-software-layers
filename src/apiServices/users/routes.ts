import express from '@awaitjs/express';
import middleware from '@software-layes/middleware';
import controllers from './controllers';
// import { expressCacheMiddleware } from '../../middleware/cache';
const { opertaionAuthorized } = middleware;

const { getUsers, getUser, deleteUser, updateUser, createUser, postUserForBody } = controllers;
const router = express.Router();
// expressCacheMiddleware,
router.getAsync('/', getUsers);
router.postAsync('/', createUser);
router.getAsync('/:id', opertaionAuthorized, getUser);
router.postAsync('/body', postUserForBody);
router.patchAsync('/:id', updateUser);
router.deleteAsync('/:id', deleteUser);

export default router;
