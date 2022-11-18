import { Request, Response } from 'express';
import { createUser } from './create';
import { deleteUser } from './delete';
import { updateUser } from './update';
import { getUser, getUsers, postUserForBody } from './get';

const DeleteUser = (req: Request, res: Response) => deleteUser(req, res);
const CreateUser = (req: Request, res: Response) => createUser(req, res);
const UpdateUser = (req: Request, res: Response) => updateUser(req, res);
const GetUser = (req: Request, res: Response) => getUser(req, res);
const GetUsers = (req: Request, res: Response) => getUsers(req, res);
const PostUserForBody = (req: Request, res: Response) => postUserForBody(req, res);

export default {
  DeleteUser,
  CreateUser,
  UpdateUser,
  GetUser,
  GetUsers,
  PostUserForBody,
}
