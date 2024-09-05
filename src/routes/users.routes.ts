import { Router } from 'express'
import {
  loginController,
  registerController,
  logoutController,
  emailVerifyController,
  resendVerifyEmailController
} from '~/controller/users.controller'
import {
  accessTokenValidator,
  emailVerifyTokenValidator,
  loginValidator,
  refreshTokenValidator,
  registerValidator
} from '~/middlewares/user.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
const userRouter = Router()

userRouter.post('/login', loginValidator, wrapRequestHandler(loginController))
userRouter.post('/register', registerValidator, wrapRequestHandler(registerController))
userRouter.post('/logout', accessTokenValidator, refreshTokenValidator, wrapRequestHandler(logoutController))
userRouter.post('/verify-email', emailVerifyTokenValidator, wrapRequestHandler(emailVerifyController))
userRouter.post('/resend-verify-email', accessTokenValidator, wrapRequestHandler(resendVerifyEmailController))

export default userRouter
