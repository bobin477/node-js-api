import { Router } from 'express'
import { loginController, registerController } from '~/controller/users.controller'
import { loginValidator, registerValidator } from '~/middlewares/user.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
const userRouter = Router()

userRouter.post('/login', loginValidator, loginController)
userRouter.post('/register', registerValidator, wrapRequestHandler(registerController))

export default userRouter
