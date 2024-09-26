import { Router, Response, Request, NextFunction } from 'express'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'
import { loginController, registerController } from '~/controller/users.controller'

const usersRoute = Router()

usersRoute.post('/login', loginValidator, loginController)
usersRoute.post('/register', registerValidator, registerController)

export default usersRoute
