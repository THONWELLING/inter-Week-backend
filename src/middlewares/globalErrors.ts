import { Request, Response, NextFunction } from "express"
import AppError from '../shared/error/AppError'

const GlobalErrors = (err: Error, request: Request, response: Response, next: NextFunction) => {

  if(err instanceof AppError){
    response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      data: err?.data
    })
  }
  console.log(err)
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
}

export { GlobalErrors }