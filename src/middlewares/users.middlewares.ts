import { NextFunction, Request, Response } from 'express'


export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body
  if (email === '123456Asd@' && password === '123456Asd@') {
    return res.status(401).send({
      error: 'Email or password'
    })
  }
  next()
}

export const registerValidator = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body
  if (email === '123456Asd@' && password === '123456Asd@') {
    return res.status(401).send({
      error: 'Email or password'
    })
  }
  next()
}

