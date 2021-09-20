import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateBarbecueUseCase } from "./CreateBarbecueUseCase";

class CreateBarbecueController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      date,
      description,
      observation,
      value_with_drinks,
      value_without_drinks,
    } = request.body;
    const { id } = request.user;

    const createBarbecueUseCase = container.resolve(CreateBarbecueUseCase);
    await createBarbecueUseCase.execute({
      date,
      description,
      observation,
      value_with_drinks,
      value_without_drinks,
      user_id: id,
    });

    return response.status(201).send();
  }
}

export { CreateBarbecueController };
