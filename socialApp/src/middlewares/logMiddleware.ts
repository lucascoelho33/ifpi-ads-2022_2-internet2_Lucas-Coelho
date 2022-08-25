import { NextFunction, Request, Response} from "express";

export const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const method = req.method
    console.log(`LOG ${Date.now()} - ${method} ${req.originalURL}`)
    return next()
}