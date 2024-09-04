import express from 'express'
import { ValidationChain, validationResult } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/lib/middlewares/schema'
import { HTTPSTATUS } from '~/constants/httpStatus'
import { EntityError, ErrorWithStatus } from '~/models/Error'

export const validate = (validations: RunnableValidationChains<ValidationChain>) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    await validations.run(req)
    const error = validationResult(req)

    if (error.isEmpty()) {
      return next()
    }

    const errorObj = error.mapped()
    const entityError = new EntityError({ errors: {} })
    for (const key in errorObj) {
      const { msg } = errorObj[key]
      if (msg instanceof ErrorWithStatus && msg.status !== HTTPSTATUS.UNPROCESSABLE_ENTITY) {
        return next(msg)
      }
      entityError.errors[key] = errorObj[key]
    }

    next(entityError)
  }
}
