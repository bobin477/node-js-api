import { MongoClient } from 'mongodb'
import { config } from 'dotenv'
config()

const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@tweet.gr5vi.mongodb.net/?retryWrites=true&w=majority&appName=Tweet`

export class DatabaseService {
  private client: MongoClient
  constructor() {
    this.client = new MongoClient(uri)
  }

  async connect() {
    try {
      await this.client.connect()
      await this.client.db('admin').command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } finally {
      await this.client.close()
    }
  }
}

const databaseService = new DatabaseService()
export default databaseService
