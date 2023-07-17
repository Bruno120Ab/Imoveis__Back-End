import { z } from "zod";

import { usersRequestSchema, usersResponseSchema, usersSchema, usersUpdateSchema } from "../schemas/users.schema";

export type IUsers = z.infer<typeof usersSchema>;

export type IUsersRequest = z.infer<typeof usersRequestSchema>;

export type IUsersResponse = z.infer<typeof usersResponseSchema>;

export type IUsersUpdate = z.infer<typeof usersUpdateSchema>;



