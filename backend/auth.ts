import { Response, Request } from 'express'
import { User, users } from './users'

import * as  Jwt from 'jsonwebtoken'
import { apiConfig } from './api.config'

export const handleAuthentication = (req: Request, resp: Response) => {
  const user: User = req.body
  if (isValid(user)) {
    const dbUser = users[user.email]
    const token = Jwt.sign({ sub: dbUser.email, ass: 'meat-api' }, apiConfig.secret)
    resp.status(200).json({ email: dbUser.email, name: dbUser.name, accesToken: token })

  } else {
    resp.status(403).json({ mensage: "Dados inválidos" })
  }
}

function isValid(user: User): boolean {
  if (!user) {
    return false
  }
  const dbUser = users[user.email]
  return dbUser !== undefined && dbUser.match(user)
}
