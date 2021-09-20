import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePaymentUseCase } from "./UpdatePaymentUseCase";

class UpdatePaymentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const updatePaymentUseCase = container.resolve(UpdatePaymentUseCase);

    await updatePaymentUseCase.execute(id);

    return response.status(204).send();
  }
}

export { UpdatePaymentController };
