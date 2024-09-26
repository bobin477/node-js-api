import User from '~/models/schemas/User.schema'
import databaseServices from '~/services/database.services'
import { InsertOneResult } from 'mongodb'

class UsersServices {
  constructor() {}

  async register(payload: { email: string; password: string }) {
    const { email, password } = payload
    return await databaseServices.users.insertOne(new User({ email, password }))
  }
}

export const userService = new UsersServices()
