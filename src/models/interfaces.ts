import { InferCreationAttributes } from "sequelize";
import User from "./userModels/user.model";

export interface UserInterface extends InferCreationAttributes<User> {
    username: string;
    email: string;
    password: string;
    role: string;
}