import { NextFunction, Request, Response } from "express";

type AsyncAction = (request: Request, response: Response) => Promise<void>;

const wrapAction = (action: AsyncAction) => async (request: Request, response: Response, next: NextFunction) => {
    try {
        await action(request, response)
    } catch (error) {
        next(error)
    }
}

export {
    wrapAction
};

