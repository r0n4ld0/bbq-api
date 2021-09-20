import { inject, injectable } from "tsyringe";
import { Barbecue } from "../../infra/typeorm/entities/Barbecue";

import { IBarbecuesRepository } from "../../repositories/IBarbecuesRepository";

@injectable()
class ListBarbecuesUseCase {
  constructor(
    @inject("BarbecuesRepository")
    private barbecuesRepository: IBarbecuesRepository
  ) {}
  async execute(): Promise<Barbecue[]> {
    return this.barbecuesRepository.list();
  }
}

export { ListBarbecuesUseCase };
