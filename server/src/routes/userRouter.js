import { userController } from '../controllers/user.controllers.js';

export async function userRouter(app) {
  app.get('/users', userController.getUsers);
  app.delete('/users/:id', userController.deleteUser);
  app.post('/users', userController.createUser);
  app.put('/users/:id', userController.updateUser);
}
