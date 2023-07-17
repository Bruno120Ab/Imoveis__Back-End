import createToken from '../controllers/login.controllers';

import { Router } from 'express';

import { ensureUser } from '../middlewares';

import { usersLoginSchema } from '../schemas/users.schema';

const loginRoutes: Router = Router();

loginRoutes.post('', ensureUser(usersLoginSchema), createToken)

export default loginRoutes;