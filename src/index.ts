import express, { NextFunction, Request, Response } from 'express'
import usersRoute from '~/routes/users.routes'


const app = express()
const port = 3001
//run database

app.use(express.json())

//route
app.use('/users', usersRoute)
//handler errors

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
