import { Router } from 'express'

const userRouter = Router()

userRouter.post('/signin', (req, res) => {
  return res.send('Entrando Com o Usuário')
})

userRouter.post('/signin', (req, res) => {
  return res.send('Criando Com o Usuário')
})

export default userRouter