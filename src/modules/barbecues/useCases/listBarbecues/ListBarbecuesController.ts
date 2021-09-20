import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListBarbecuesUseCase } from "./ListBarbecuesUseCase";

class ListBarbecuesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listBarbecuesUseCase = container.resolve(ListBarbecuesUseCase);

    const listBarbecues = await listBarbecuesUseCase.execute();

    return response.json(listBarbecues);
  }
}

export { ListBarbecuesController };
