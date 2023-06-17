import { loginController } from '../controllers/login.controllers.js';

export async function loginRouter(app) {
  app.get('/users/:email/:password', loginController.getLogin);
}
