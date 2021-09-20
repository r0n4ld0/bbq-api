import { inject, injectable } from "tsyringe";

import { IBarbecueUsersRepository } from "../../repositories/IBarbecueUsersRepository";

@injectable()
class RemoveParticipantUseCase {
  constructor(
    @inject("BarbecueUsersRepository")
    private barbecueUsersRepository: IBarbecueUsersRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.barbecueUsersRepository.removeParticipant(id);
  }
}

export { RemoveParticipantUseCase };
