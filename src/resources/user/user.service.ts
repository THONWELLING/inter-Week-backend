import { getRepository } from 'typeorm'
import  md5 from 'crypto-js/md5'
import { User } from '../../entity/User'

import { UserSignIn }from './dtos/user.signin.dtos'
import { UserSignUp }from './dtos/user.signup.dtos'
import AppError from '../../shared/error/AppError'

export default class UserService {
  async signin(user: UserSignIn) {
    const userRepositiry = getRepository(User)
    
    const {email, password} = user
    const passwordHash =md5(password).toString()

    const existUser = await userRepositiry.findOne({where: {email, password}})
    if(!existUser) {
      throw new AppError('User Not Found', 401)
    }
    return existUser
  }

  async signup(user: UserSignUp) {

  }

}