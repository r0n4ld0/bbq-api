import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { barbecueRoutes } from "./barbecues.routes";


const router = Router();

router.use("/sessions", authenticateRoutes);
router.use("/users", usersRoutes);
router.use("/barbecues", barbecueRoutes);

export { router };
