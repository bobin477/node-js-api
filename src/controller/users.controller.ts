import { Request, Response } from 'express'

export const loginController = (request: Request, response: Response) => {
  const { email, password } = request.body

  if (email === 'email@gmail.com' && password === '123456') {
    response.json({
      message: 'login success'
    })
  } else {
    response.status(400).json({
      message: 'Email or password is correct'
    })
  }
}
