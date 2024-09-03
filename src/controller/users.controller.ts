import { Request, Response } from 'express'
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

export const registerController = async (request: Request, response: Response) => {
  const { email, password } = request.body

  try {
    const result = await userService.register({ email, password })
    return response.json({
      result,
      message: 'Register success'
    })
  } catch (error) {
    return response.status(400).json({
      error: error,
      message: 'Register fail'
    })
  }
}
