import { Request, Response } from 'express';
import { UserInterface } from '../models/interfaces';
import { createUser, getUsers } from '../services/users.service';

export const createUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData: UserInterface = req.body;
    const newUser = await createUser(userData);
    console.log('New user created:', newUser);
    res.status(201).send({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (error: unknown) {
    if (error instanceof Error && error.message === 'User already exists') {
      res.status(403).send({
        message: 'User already exists',
      });
    } else {
      res.status(500).send({
        message: 'Internal Server Error',
        error: 'An unknown error occurred',
      });
    }
  }
};

export const getUsersController = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getUsers();
    res.status(200).json({
      message: 'Users retrieved successfully',
      users: users,
    });
  } catch (error: unknown) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error instanceof Error ? error.message : 'An unknown error occurred',
    });
  }
};
