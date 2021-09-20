import { inject, injectable } from "tsyringe";

import { IBarbecueUsersRepository } from "../../repositories/IBarbecueUsersRepository";

@injectable()
class UpdatePaymentUseCase {
  constructor(
    @inject("BarbecueUsersRepository")
    private barbecueUsersRepository: IBarbecueUsersRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.barbecueUsersRepository.updatePayment(id);
  }
}

export { UpdatePaymentUseCase };
