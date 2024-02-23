import { NextFunction, Request, Response } from "express"
import { CustomErrorBase } from "../errors/CustomErrorBase"

const errorHandler = (
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction) => {

    if (error instanceof CustomErrorBase) {
        return response.status(error.status).json({
            success: false,
            status: error.status,
            message: error.message
        })
    }

    return response.status(500).json({
        success: false,
        status: 500,
        message: error.message
    })
}

export {
    errorHandler
}
