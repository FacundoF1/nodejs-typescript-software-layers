import { Request, Response } from 'express';
import { createUser } from './create';
import { deleteUser } from './delete';
import { updateUser } from './update';
import { getUser, getUsers, postUserForBody } from './get';

export default {
  deleteUser: async (req: Request | any, res: Response | any) => await new deleteUser(req, res).handleRequest(),
  createUser: async (req: Request | any, res: Response | any) => await new createUser(req, res).handleRequest(),
  updateUser: async (req: Request | any, res: Response | any) => await new updateUser(req, res).handleRequest(),
  getUser: async (req: Request | any, res: Response | any) => await new getUser(req, res).handleRequest(),
  getUsers: async (req: Request | any, res: Response | any) => await new getUsers(req, res).handleRequest(),
  postUserForBody: async (req: Request | any, res: Response | any) => await new postUserForBody(req, res).handleRequest(),
}
