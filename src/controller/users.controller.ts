import { NextFunction, Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { ObjectId } from 'mongodb'
import { USERS_MESSAGES } from '~/constants/message'
import { LogoutReqBody, RegisterReqBody } from '~/models/request/user.requests'
import User from '~/models/schemas/user.schemas'
import { userService } from '~/services/users.services'

export const loginController = async (request: Request, response: Response) => {
  const user = request.user as User
  const user_id = user._id as ObjectId
  const result = await userService.login(user_id.toString())
  return response.json({
    message: USERS_MESSAGES.LOGIN_SUCCESS,
    result
  })
}

export const registerController = async (
  request: Request<ParamsDictionary, any, RegisterReqBody>,
  response: Response,
  next: NextFunction
) => {
  const result = await userService.register(request.body)

  return response.json({
    result,
    message: USERS_MESSAGES.REGISTER_SUCCESS
  })
}

export const logoutController = async (
  request: Request<ParamsDictionary, any, LogoutReqBody>,
  response: Response,
  next: NextFunction
) => {
  const { refresh_token } = request.body
  console.log(refresh_token)
  const result = await userService.logout(refresh_token)

  return response.json({
    result
  })
}
