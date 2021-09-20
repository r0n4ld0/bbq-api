import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListParticipantsUseCase } from "./ListParticipantsUseCase";

class ListParticipantsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { barbecue_id } = request.params;
    const listParticipantsUseCase = container.resolve(ListParticipantsUseCase);

    const listParticipants = await listParticipantsUseCase.execute(barbecue_id);

    return response.json(listParticipants);
  }
}

export { ListParticipantsController };
