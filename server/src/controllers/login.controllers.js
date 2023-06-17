import { prisma } from '../lib/prisma.js';

const getLogin = async (req, res) => {
  const { email, password } = req.params;
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (user.password !== password) {
      return res.status(404).send({ error: 'Invalid password' });
    }
    return user;
  } catch (error) {
    return res.status(404).send({ error: 'User not found' });
  } finally {
    await prisma.$disconnect();
  }
};

export const loginController = { getLogin };
