import { Request, Response } from "express";
import { container } from "tsyringe";

import { AddParticipantUseCase } from "./AddParticipantUseCase";

class AddParticipantController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id, barbecue_id, value, is_paid } = request.body;

    const addParticipantUseCase = container.resolve(AddParticipantUseCase);

    await addParticipantUseCase.execute({
      user_id,
      barbecue_id,
      value,
      is_paid,
    });

    return response.status(201).send();
  }
}

export { AddParticipantController };
