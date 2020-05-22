import express from "express"
import Database from "./Database/Database"
import userController from "./Controller/UserController"
import hobbieController from "./Controller/HobbieController";

class Server {
  app: express.Application
  database: Database
  constructor(){
    this.app = express()
    this.database = new Database()
  }

  route(){
    this.app.get('/', (req: express.Request, res: express.Response) => {
      res.send('API TypeORM Example')
    })

    this.app.post('/user', userController.store)
    this.app.get('/user', userController.index)
    this.app.post('/hobbie', hobbieController.store)
  }
  init() {
    this.database.Connection()
    this.app.listen(3333)
    console.log('Server listen on http://localhost:3333')
  }
}

export default Server

