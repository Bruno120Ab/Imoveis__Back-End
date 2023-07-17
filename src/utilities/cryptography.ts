import * as criptografia from "bcryptjs";

import { IUsersRequest } from "../interfaces/users.interface";

async function encrypt(data: IUsersRequest): Promise<IUsersRequest> {
     data.password = await criptografia.hash(data.password, 10);

     return data
}

async function comparePassword(dataUser:IUsersRequest, dataDb:IUsersRequest): Promise<boolean> {
     
     const comparePassword = await criptografia.compare(
          dataUser.password,  
          dataDb.password
     );
     
     console.log(comparePassword);

     return comparePassword
}

export { encrypt, comparePassword }