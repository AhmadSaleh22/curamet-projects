import { Request, Response } from "express";
import { Worker } from "worker_threads";

export const getBlockingController = async (req: Request, res: Response): Promise<void> => {
    const worker = new Worker(`../worker/worker.ts`, { workerData: null });

    worker.on('message', (message) => {
        res.status(200).send(`Blocking route: ${message}`);
    });

    worker.on('error', (error) => {
        res.status(500).send(`Blocking route error: ${error.message}`);
    });
}