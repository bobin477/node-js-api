import User from '~/models/schemas/user.schemas'
import databaseService from './database.serives'

class UsersService {
  constructor() {}

  async register(payload: { email: string; password: string }) {
    const { email, password } = payload
    const result = await databaseService.users.insertOne(new User({ email, password }))
    return result
  }
}

export const userService = new UsersService()
