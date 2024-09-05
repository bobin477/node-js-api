import { Request } from 'express'
import User from '~/models/schemas/user.schemas'
import { TokenPayload } from './models/request/user.requests'
declare module 'express' {
  interface Request {
    user?: User
    decoded_authorization?: TokenPayload
    decoded_refresh_token?: TokenPayload
  }
}
