import express from 'express'
import usersRoute from '~/routes/users.routes'
import databaseServices from '~/services/database.services'

const app = express()
const port = 3001
//run database

app.use(express.json())
//route
app.use('/users', usersRoute)
//handler errors

databaseServices.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
