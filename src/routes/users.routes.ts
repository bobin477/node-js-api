import { Router } from 'express'
import { loginController, registerController } from '~/controller/users.controller'
import { loginValidator } from '~/middlewares/user.middlewares'
const userRouter = Router()

userRouter.post('/login', loginValidator, loginController)
userRouter.post('/register', registerController)

// userRouter.post('/register', registerController)

export default userRouter
