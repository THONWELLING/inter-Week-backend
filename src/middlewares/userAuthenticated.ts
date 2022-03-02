import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import authConfig from "../config/auth";

import AppError from "../shared/error/AppError";

interface ITokenPayload {
  firstName: string;
  lastName: string;
  iat: number;
  exp: number;
  sub: string;
}

export default function userAuthentication (req: Request, res: Response, next: NextFunction  ): void {

  //VALIDAÇÃO DO TOKEN JWT

  const authHeader = req.headers.authorization;

  if(!authHeader) {
    throw new AppError('Token Não Enviado', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, authConfig.jwt.secret)
    
    const {sub, firstName, lastName} = decoded  as ITokenPayload

    req.user = {
      id: sub,
      firstName,
      lastName
    }

    return next()

  } catch(error) {
    throw new AppError('Token Inválido Ou Expirado', 401)
  }
}