import { Router } from 'express'
import { loginController, registerController } from '~/controller/users.controller'
import { loginValidator, registerValidator } from '~/middlewares/user.middlewares'
const userRouter = Router()

userRouter.post('/login', loginValidator, loginController)
userRouter.post('/register', registerValidator, registerController)

export default userRouter
