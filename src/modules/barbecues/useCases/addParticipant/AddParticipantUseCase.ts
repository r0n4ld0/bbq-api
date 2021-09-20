import { inject, injectable } from "tsyringe";
import { isBefore } from "date-fns";

import { AppError } from "../../../../shared/errors/AppError";
import { IAddParticipantDTO } from "../../dtos/IAddParticipantDTO";
import { IBarbecueUsersRepository } from "../../repositories/IBarbecueUsersRepository";
import { IBarbecuesRepository } from "../../repositories/IBarbecuesRepository";
import { IUsersRepository } from "../../../accounts/repositories/IUsersRepository";

@injectable()
class AddParticipantUseCase {
  constructor(
    @inject("BarbecueUsersRepository")
    private barbecueUsersRepository: IBarbecueUsersRepository,

    @inject("BarbecuesRepository")
    private barbecuesRepository: IBarbecuesRepository,

    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    user_id,
    barbecue_id,
    value,
    is_paid,
  }: IAddParticipantDTO): Promise<void> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError("User not found!");
    }

    const barbecueExists = await this.barbecuesRepository.findById(barbecue_id);

    if (!barbecueExists) {
      throw new AppError("Barbecue not found!");
    }

    if (isBefore(barbecueExists.date, new Date())) {
      throw new AppError("Barbecue date has passed!");
    }

    const isAlreadyParticipant = await this.barbecueUsersRepository.findParticipant(
      user_id,
      barbecue_id
    );

    if (isAlreadyParticipant) {
      throw new AppError("User is already participating in the barbecue.");
    }

    await this.barbecueUsersRepository.addParticipant({
      user_id,
      barbecue_id,
      value,
      is_paid,
    });
  }
}

export { AddParticipantUseCase };
