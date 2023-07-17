import { z } from "zod";

import { usersLoginSchema } from "../schemas/users.schema";

export type IUserLogin = z.infer<typeof usersLoginSchema>;
