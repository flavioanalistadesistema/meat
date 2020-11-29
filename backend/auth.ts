import { Response, Request } from 'express'
import { User, users } from './users'

export const handleAuthentication = (req: Request, resp: Response) => {
  const user: User = req.body
  if (isValid(user)) {
    const dbUser = users[user.email]
    resp.status(200).json({ mensage: `Bem vindo Sr. ${dbUser.name}` })

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
