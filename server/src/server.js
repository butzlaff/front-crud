import fastify from 'fastify';

const app = fastify();

app.get('/', async (request, reply) => {
  return { name: 'hello world' };
});

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('Server is running on port 3333');
});
