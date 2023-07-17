import jwt from "jsonwebtoken";

import { IUsers } from "../interfaces";

function Token(user:IUsers | null, time:string): string{
     
     const token = jwt.sign(
          {
               admin: user?.admin
          },
          process.env.SECRET_KEY!,
          {    
               expiresIn: time,
               subject:  user?.id.toString(),
          }
     )

     return token
}

export { Token }