import express from 'express'
import userRoute from './routes/users.routes'
import databaseService from '~/services/database.serives'
const app = express()
const port = 3001

app.use(express.json())

//run database
databaseService.connect()

//route
app.use('/user', userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
