import { Router } from "express";

import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserContoller";
import { ListUsersController } from "../../../../modules/accounts/useCases/listUsers/ListUsersController";

import { isAuthenticated } from "../middlewares/authenticatedRoutes";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", isAuthenticated, listUsersController.handle);

export { usersRoutes };
