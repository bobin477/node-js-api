import { Router, Response, Request, NextFunction } from 'express'

export const loginController = (req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Login Successful'
  })
}
