import { Response, Request } from 'express';

export const getNonBlockingController = async (req: Request, res: Response): Promise<void> => {
  res.status(200).send('Non-blocking route');
};
