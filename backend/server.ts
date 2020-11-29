import * as jsonServer from 'json-server'
import { Express, Response, Request } from 'express'

import * as fs from 'fs'
import * as https from 'https'

import { handleAuthentication } from './auth'

const server: Express = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

/*erro 400 - indicado ma formação no request*/
/*erro 401 - indicado quando tenta acessar recurso protegido e nao esta mandand informação de identificação ANONIMO
  mensage: você não esta authorizado
  header: mande sua utorização neste esquema
*/
/*erro 403 -
  autenticação invalida
  autenticação valida mas não tem autorização para acessar aquele recurso
  executa lógica da aplicação e a logica falha
*/


// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// middlewares para login
server.post('/login', handleAuthentication)

// Use default router
server.use(router)


// cetification https
const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem')
}

https.createServer(options, server).listen(3001, () => {
  console.log('JSON Server is running on https://localhost3001')
})
