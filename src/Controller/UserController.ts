import { Request, Response } from 'express'
import { getConnection, getManager } from "typeorm";
import { User } from "../Database/entity/User"

class UserController {

  async store(req: Request, res: Response){
    /*let user = new User()
    user.name = "Vitoria Lopes Diogo"
    user.age = "17";
    user.hobbie = "Programação"

    user = await getManager().save(user)
    return res.json(user)*/

    const user = await getConnection()
                      .createQueryBuilder()
                      .insert()
                      .into(User)
                      .values({
                        name: 'Vitor da Silva Pires Bezerra',
                        age: '16'
                      }).execute()

    return res.json({ id: user.identifiers[0].id })


  }

  async index(req: Request, res: Response){
    const user = await getConnection().getRepository(User).find({ relations: ['hobbie'] })
    return res.json(user)
  }

}

const userController = new UserController()
export default userController;