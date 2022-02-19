/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line
const single = (resource) => ({
  id: resource._id,
  username: resource.username,
  email: resource.email,
});

const multiple = (resources) => resources.map((resource) => single(resource));

export = {
  single,
  multiple,
};
