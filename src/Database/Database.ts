import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Hobbie } from "./entity/Hobbie";

class Database {
  Connection(){
    createConnection({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [
        User,
        Hobbie
      ],
      synchronize: true,
      logging: false
    })
  }
}

export default Database;