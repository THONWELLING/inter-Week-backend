import {  Router } from "express";


const userRouter = Router()

  userRouter.post('/signin', (request, response) => {
    return response.send('Entre Com Usuário e senha')
  })
  userRouter.post('/signup', (request, response) => {
    return response.send('Fazendo o Cadastro')
  })

export default userRouter