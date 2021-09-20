import { Router } from "express";

import { CreateBarbecueController } from "../../../../modules/barbecues/useCases/createBarbecue/CreateBarbecueController";
import { ListBarbecuesController } from "../../../../modules/barbecues/useCases/listBarbecues/ListBarbecuesController";
import { AddParticipantController } from "../../../../modules/barbecues/useCases/addParticipant/AddParticipantController";
import { RemoveParticipantController } from "../../../../modules/barbecues/useCases/removeParticipant/RemoveParticipantController";
import { ListParticipantsController } from "../../../../modules/barbecues/useCases/listParticipants/ListParticipantsController";
import { UpdatePaymentController } from "../../../../modules/barbecues/useCases/updatePayment/UpdatePaymentController";

import { isAuthenticated } from "../middlewares/authenticatedRoutes";

const barbecueRoutes = Router();

const createBarbecueController = new CreateBarbecueController();
const listBarbecuesController = new ListBarbecuesController();
const addParticipantController = new AddParticipantController();
const listParticipantsController = new ListParticipantsController();
const removeParticipantController = new RemoveParticipantController();
const updatePaymentController = new UpdatePaymentController();

barbecueRoutes.post("/", isAuthenticated, createBarbecueController.handle);
barbecueRoutes.get("/", isAuthenticated, listBarbecuesController.handle);

barbecueRoutes.post("/participants", isAuthenticated, addParticipantController.handle);
barbecueRoutes.delete("/participants/:id", isAuthenticated, removeParticipantController.handle);
barbecueRoutes.get("/participants/:barbecue_id", isAuthenticated, listParticipantsController.handle);
barbecueRoutes.patch("/participants/:id", isAuthenticated, updatePaymentController.handle);

export { barbecueRoutes };
