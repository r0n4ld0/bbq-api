import { Request, Response } from "express";
import { container } from "tsyringe";

import { RemoveParticipantUseCase } from "./RemoveParticipantUseCase";

class RemoveParticipantController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const removeParticipantUseCase = container.resolve(RemoveParticipantUseCase);

    await removeParticipantUseCase.execute(id);

    return response.status(204).send();
  }
}

export { RemoveParticipantController };
