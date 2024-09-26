import { Router, Response, Request, NextFunction } from 'express'
import { loginValidator } from '~/middlewares/users.middlewares'
import { loginController } from '~/services/users.services'

const usersRoute = Router()

usersRoute.post('/login', loginValidator, loginController)

export default usersRoute
