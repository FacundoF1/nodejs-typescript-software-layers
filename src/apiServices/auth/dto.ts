import { SessionToken } from './model';

const single = (resource: SessionToken): SessionToken => ({
  tokenId: resource.tokenId,
  username: resource.username,
  valid: resource.valid,
  expirationTime: resource.expirationTime,
  accessRights: resource.accessRights
});

const multiple = (resources) => resources.map((resource) => single(resource));

export {
  single,
  multiple,
};
