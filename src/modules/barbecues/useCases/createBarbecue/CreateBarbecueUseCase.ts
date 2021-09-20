import { inject, injectable } from "tsyringe";
import { parseISO, isAfter } from "date-fns";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateBarbecueDTO } from "../../dtos/ICreateBarbecueDTO";
import { IBarbecuesRepository } from "../../repositories/IBarbecuesRepository";

@injectable()
class CreateBarbecueUseCase {
  constructor(
    @inject("BarbecuesRepository")
    private barbecuesRepository: IBarbecuesRepository
  ) {}
  async execute({
    date,
    description,
    observation,
    value_with_drinks,
    value_without_drinks,
    user_id,
  }: ICreateBarbecueDTO): Promise<void> {
    const parsedDate = parseISO(
      date.toLocaleString("pt-br", {
        timeZone: "America/Sao_Paulo",
      })
    );

    if (!isAfter(parsedDate, new Date())) {
      throw new AppError("Date cannot be past.");
    }

    await this.barbecuesRepository.create({
      date: parsedDate,
      description,
      observation,
      value_with_drinks,
      value_without_drinks,
      user_id,
    });
  }
}

export { CreateBarbecueUseCase };
