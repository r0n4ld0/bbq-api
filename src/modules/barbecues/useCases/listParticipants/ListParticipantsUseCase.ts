import { inject, injectable } from "tsyringe";
import { BarbecueUsers } from "../../infra/typeorm/entities/BarbecueUsers";

import { IBarbecueUsersRepository } from "../../repositories/IBarbecueUsersRepository";

@injectable()
class ListParticipantsUseCase {
  constructor(
    @inject("BarbecueUsersRepository")
    private barbecueUsersRepository: IBarbecueUsersRepository
  ) {}
  async execute(barbecue_id: string): Promise<BarbecueUsers[]> {
    return this.barbecueUsersRepository.listParticipants(barbecue_id);
  }
}

export { ListParticipantsUseCase };
