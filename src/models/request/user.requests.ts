import { JwtPayload } from 'jsonwebtoken'
import { TokenType } from '~/constants/enum'

export interface LoginReqBody {
  email: string
  password: string
}

export interface VerifiedEmailReqBody {
  email_verify_token: string
}

export interface RegisterReqBody {
  name: string
  email: string
  password: string
  date_of_birth: Date
  confirm_password: string
}

export interface LogoutReqBody {
  refresh_token: string
}

export interface TokenPayload extends JwtPayload {
  user_id: string
  token_type: TokenType
}
