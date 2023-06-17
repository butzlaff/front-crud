import { prisma } from '../lib/prisma.js';

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    return res.status(404).send({ error: 'Users not found' });
  } finally {
    await prisma.$disconnect();
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    return { message: 'User deleted successfully' };
  } catch (error) {
    return res.status(404).send({ error: 'User not found' });
  } finally {
    await prisma.$disconnect();
  }
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(404).send({ error: 'Invalid data' });
  }
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return user;
  } catch (error) {
    return res.status(404).send({ error: 'E-mail already used' });
  } finally {
    await prisma.$disconnect();
  }
};

const updateUser = async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  console.log(id);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(404).send({ error: 'Invalid data' });
  }
  try {
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        email,
        password,
      },
    });
    return user;
  } catch (error) {
    return res.status(404).send({ error: 'User not found' });
  } finally {
    await prisma.$disconnect();
  }
};

export const userController = { getUsers, deleteUser, createUser, updateUser };
