import request from 'supertest';
import express, { Application } from 'express';
import { getUsersController } from './users.controller';
import { getUsers } from '../services/users.service';

jest.mock('../services/users.service');

const app: Application = express();
app.use(express.json());
app.get('/users', getUsersController);

describe('getUsersController', () => {
    it('should return 200 and users list when users are retrieved successfully', async () => {
        const mockUsers = [
            {
                id: 1,
                username: "ahmadsaleh1009",
                email: "dev.2ahmadsale321@example.com",
                password: "admin123",
                role: "admin",
                createdAt: "2025-02-09T12:49:07.000Z",
                updatedAt: "2025-02-09T12:49:07.000Z"
            }
        ];
        (getUsers as jest.Mock).mockResolvedValue(mockUsers);

        const response = await request(app).get('/users');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            message: 'Users retrieved successfully',
            users: mockUsers
        });
    });

    it('should return 500 when there is an error retrieving users', async () => {
        (getUsers as jest.Mock).mockRejectedValue(new Error('Internal Server Error'));

        const response = await request(app).get('/users');

        expect(response.status).toBe(500);
        expect(response.body).toEqual({
            message: 'Internal Server Error',
            error: 'Internal Server Error'
        });
    });
});