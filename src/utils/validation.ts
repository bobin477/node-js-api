import express from 'express'
import { body, ValidationChain, validationResult } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/lib/middlewares/schema'

// can be reused by many routes
export const validate = (validations: RunnableValidationChains<ValidationChain>) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    await validations.run(req)
    const error = validationResult(req)
    if (error.isEmpty()) {
      return next()
    }
    console.log(error)
    res.status(400).json({
      error: error.mapped()
    })
  }
}
