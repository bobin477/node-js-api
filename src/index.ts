import express, { NextFunction, Request, Response } from 'express'
import userRoute from './routes/users.routes'
import databaseService from '~/services/database.services'
import { defaultErrorHandle } from '~/middlewares/errorMiddlewares'
const app = express()
const port = 3001
//run database
databaseService.connect()

app.use(express.json())

//route
app.use('/user', userRoute)
//handler errors
app.use(defaultErrorHandle)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
