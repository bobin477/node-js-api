import { NextFunction, Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { ObjectId } from 'mongodb'
import { UserVerifyStatus } from '~/constants/enum'
import { HTTPSTATUS } from '~/constants/httpStatus'
import { USERS_MESSAGES } from '~/constants/message'
import { LoginReqBody, LogoutReqBody, RegisterReqBody, TokenPayload } from '~/models/request/user.requests'
import User from '~/models/schemas/user.schemas'
import databaseService from '~/services/database.services'
import { userService } from '~/services/users.services'

export const loginController = async (
  request: Request<ParamsDictionary, any, LoginReqBody>,
  response: Response,
  next: NextFunction
) => {
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

export const emailVerifyController = async (req: Request, res: Response, next: NextFunction) => {
  const { user_id } = req.decoded_email_verify_token as TokenPayload
  const user = await databaseService.users.findOne({
    _id: new ObjectId(user_id)
  })
  if (!user) {
    return res.status(HTTPSTATUS.NOT_FOUND).json({
      message: USERS_MESSAGES.USER_NOT_FOUND
    })
  }

  if (user.email_verify_token === '') {
    return res.json({
      message: USERS_MESSAGES.EMAIL_ALREADY_VERIFIED_BEFORE
    })
  }
  const result = await userService.verifyEmail(user_id)
  return res.json({
    message: USERS_MESSAGES.EMAIL_VERIFY_SUCCESS,
    result
  })
}

export const resendVerifyEmailController = async (req: Request, res: Response, next: NextFunction) => {
  const { user_id } = req.decoded_authorization as TokenPayload
  const user = await databaseService.users.findOne({
    _id: new ObjectId(user_id)
  })

  if (!user) {
    return res.status(HTTPSTATUS.NOT_FOUND).json({
      message: USERS_MESSAGES.USER_NOT_FOUND
    })
  }

  if (user.verify === UserVerifyStatus.Verified) {
    return res.json({
      message: USERS_MESSAGES.EMAIL_ALREADY_VERIFIED_BEFORE
    })
  }

  const result = await userService.resendVerify(user_id)

  return res.json({
    result
  })
}
