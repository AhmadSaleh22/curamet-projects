import { Request, Response } from "express";
import { UserInterface } from "../models/interfaces";
import { createUser } from "../services/users.service";

export const createUserController = async (req: Request, res: Response): Promise<void> => {
    console.log("Request body:", req.body);
    try {
        const userData: UserInterface = req.body;
        const newUser = await createUser(userData);
        console.log("New user created:", newUser);
        res.status(201).send({
            message: "User created successfully",
            user: newUser
        });
    } catch (error : any) {
        console.error("Error creating user:", error);
        
        if (error.message === "User already exists") {
            res.status(403).send({
                message: "User already exists"
            });
        }

        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        });
    }
}
