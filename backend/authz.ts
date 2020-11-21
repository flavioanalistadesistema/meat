import {Request, Response} from 'express'
import * as jwt from 'jsonwebtoken'

import {authenticationPassword} from './api-config'

export const handleAuthorization = (req: Request, resp: Response, next)=> {
  const token = extractToken(req)
  if (!token) {
    resp.setHeader('WWW-Authenticate', 'Bearer token_type="JWT')
    resp.status(401).json({menssage: 'Você precisa authenticar'})
  } else {
    jwt.verify(token, authenticationPassword.secret, (error, decoded)=> {
      if (decoded) {
        next()
      }else{
        resp.status(401).json({mensage: "Não autorizado"})
      }
    })
  }
}

function extractToken(req: Request): string {
  let token = undefined
  if (req.headers && req.headers.authorization) {
    const parts: string[] = req.headers.authorization.split(' ')
    if (parts.length === 2 && parts[0] === 'Bearer') {
      token = parts[1]
    }
  }
  return token
}
