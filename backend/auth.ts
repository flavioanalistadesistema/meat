import {Request, Response} from 'express'
import {User, users} from './users'

export const handleAuthentication = (req: Request, resp: Response)=> {
  const user: User = req.body
  if (isValid(user)) {
    const dbUser: User = users[user.email]
    return resp.json({name: dbUser.name, email: dbUser.email})

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
