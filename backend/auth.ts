import {Request, Response} from 'express'
import {User, users} from './users'
import {authenticationPassword} from './api-config'

import * as jwt from 'jsonwebtoken'

export const handleAuthentication = (req: Request, resp: Response)=> {
  const user: User = req.body
  if (isValid(user)) {
    const dbUser = users[user.email]
    const token = jwt.sign({sub: dbUser.email, iss: 'meat-api'}, authenticationPassword.secret)
    return resp.json({name: dbUser.name, email: dbUser.email, acessToken: token})

  } else {
    return resp.status(403).json("Dados invalido")
  }
}

function isValid(user: User): boolean {
  if (!user) {
    return false
  }
  const dbUser = users[user.email]
  return dbUser !== undefined && dbUser.match(user)
}
