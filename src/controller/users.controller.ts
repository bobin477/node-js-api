import { NextFunction, Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterReqBody } from '~/models/request/user.requests'
import { userService } from '~/services/users.services'

export const loginController = (request: Request, response: Response) => {
  const { email, password } = request.body

  if (email === 'email@gmail.com' && password === '123456') {
    response.json({
      message: 'login success'
    })
  }

  return response.status(400).json({
    error: 'login fail'
  })
}

export const registerController = async (
  request: Request<ParamsDictionary, any, RegisterReqBody>,
  response: Response,
  next: NextFunction
) => {
  const result = await userService.register(request.body)
  return response.json({
    result
  })
}
