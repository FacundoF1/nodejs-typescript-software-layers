import userModel from './model';
import userDto from './dto';
import {
  Request,
  Response
} from 'express';
import { systemDecorator } from '../../decorators';
import { IncomingMessage } from 'http';
const { countInstances } = systemDecorator;

@countInstances
class getUsers {

  async handler(req: Request | any, res: Response) {
    console.log(res.locals);
    const page = parseInt((req.query.page || 0).toString(), 10);
    const limit = parseInt((req.query.limit || 10).toString(), 10);

    const users = await userModel.getUsers(page, limit);
    const { user } = req;

    return res.send(userDto.multiple(users, user)).end();
  }

}

@countInstances
class getUser {

  async handler(req: Request | any, res: Response) {
    const user = await userModel.getUser(req.params.id);
    if (!user) return res.sendStatus(404);

    return res.send(userDto.single(user, req.user)).end();
  }

}

@countInstances
class createUser {

  async handler(req: Request | any, res: Response) {
    if (!req.body.username) return res.sendStatus(400);
    if (!req.body.password) return res.sendStatus(400);
    if (!req.body.email) return res.sendStatus(400);

    const users = await userModel.createUser({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    return res.send(userDto.single(users, req.user)).end();
  }

}

@countInstances
class updateUser {

  async handler(req: Request | any, res: Response | any) {

    if (!req.body.username) return res.sendStatus(400);
    if (!req.body.email) return res.sendStatus(400);
    const user = await userModel.getUser(req.params.id);
    if (!user) return res.sendStatus(404);

    await userModel.updateUser(req.params.id, {
      username: req.body.username,
      email: req.body.email,
    });

    return res.sendStatus(204).end();
  }

}

@countInstances
class deleteUser {
  async handler(req: IncomingMessage | any, res: Response) {
    await userModel.deleteUser(req.param.id);
    return res.sendStatus(204).end();
  }
}

export default {
  deleteUser: async (req: IncomingMessage | any, res: Response | any) => await new deleteUser().handler(req, res),
  createUser: async (req: IncomingMessage | any, res: Response | any) => await new createUser().handler(req, res),
  updateUser: async (req: IncomingMessage | any, res: Response | any) => await new updateUser().handler(req, res),
  getUser: async (req: IncomingMessage | any, res: Response | any) => await new getUser().handler(req, res),
  getUsers: async (req: IncomingMessage | any, res: Response | any) => await new getUsers().handler(req, res)
}
