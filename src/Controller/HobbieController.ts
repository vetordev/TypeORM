import { Request, Response } from 'express'
import { getConnection } from "typeorm";
import { Hobbie } from "../Database/entity/Hobbie";

class HobbieController {

  async store(req: Request, res: Response){
    const hobbie = await getConnection()
                          .createQueryBuilder()
                          .insert()
                          .into(Hobbie)
                          .values({
                            name: 'Programação',
                            user: 1
                          }).execute()

    return res.json({id: hobbie.identifiers[0].id})
  }

}

const hobbieController = new HobbieController()
export default hobbieController;