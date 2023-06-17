import fastify from 'fastify';
import cors from '@fastify/cors';
import { loginRouter } from './routes/loginRouter.js';

const app = fastify();

app.register(cors, {
  origin: ['http://localhost:5173'],
});

app.register(loginRouter);

app.setErrorHandler((error, req, res) => {
  console.log(error);
  res.status(500).send({ error: 'Something went wrong' });
});

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('Server is running on port 3333');
});
