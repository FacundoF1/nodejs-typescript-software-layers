import { Request, Response } from 'express';
import { CreateUser } from './create';
import { DeleteUser } from './delete';
import { UpdateUser } from './update';
import { GetUser, GetUsers, GetUserBy } from './read';

export default {
  DeleteUser: async (req: Request, res: Response) => await new DeleteUser(req, res).handleRequest(),
  CreateUser: async (req: Request, res: Response) => await new CreateUser(req, res).handleRequest(),
  UpdateUser: async (req: Request, res: Response) => await new UpdateUser(req, res).handleRequest(),
  GetUser: async (req: Request, res: Response) => await new GetUser(req, res).handleRequest(),
  GetUsers: async (req: Request, res: Response) => await new GetUsers(req, res).handleRequest(),
  GetUserBy: async (req: Request, res: Response) => await new GetUserBy(req, res).handleRequest(),
}
