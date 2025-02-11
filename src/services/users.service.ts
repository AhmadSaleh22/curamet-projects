import { UserInterface } from '../models/interfaces';
import User from '../models/userModels/user.model';

export const createUser = async (userData: UserInterface) => {
  try {
    console.log('userData', userData);

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email: userData.email } });

    if (existingUser) {
      // Throw an error if the user already exists
      throw new Error('User already exists');
    }

    // If no existing user, create a new user
    const newUser = await User.create(userData);
    console.log(newUser, 'has been created');
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error; // Propagate the error upwards
  }
};

export const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.error('Error getting users:', error);
    throw error; // Propagate the error upwards
  }
};
