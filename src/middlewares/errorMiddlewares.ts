import { NextFunction, Request, Response } from 'express'
import { omit } from 'lodash'
import { HTTPSTATUS } from '~/constants/httpStatus'

export const defaultErrorHandle = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || HTTPSTATUS.INTERNAL_SERVER_ERROR).json(omit(err, ['status']))
}
