//Esse dto é uma tipagem dos dados que um usuário precisa para fazer um cadastro /criar uma conta 



export interface UserSignup {
  firstName: string
  lastName: string
  email: string
  password: string
}