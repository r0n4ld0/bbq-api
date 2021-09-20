import { getRepository, Repository } from "typeorm";
import { IAddParticipantDTO } from "../../../dtos/IAddParticipantDTO";
import { IBarbecueUsersRepository } from "../../../repositories/IBarbecueUsersRepository";
import { BarbecueUsers } from "../entities/BarbecueUsers";

class BarbecueUsersRepository implements IBarbecueUsersRepository {
  private repository: Repository<BarbecueUsers>;

  constructor() {
    this.repository = getRepository(BarbecueUsers);
  }
  async addParticipant({
    user_id,
    barbecue_id,
    value,
    is_paid,
  }: IAddParticipantDTO): Promise<void> {
    const barbecueUser = this.repository.create({
      user_id,
      barbecue_id,
      value,
      is_paid,
    });

    await this.repository.save(barbecueUser);
  }

  async removeParticipant(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async listParticipants(barbecue_id: string): Promise<BarbecueUsers[]> {
    return await this.repository
      .createQueryBuilder("barbecueUsers")
      .select([
        "barbecueUsers.id id",
        "barbecueUsers.value value_paid",
        "barbecueUsers.is_paid is_paid",
        "user.name name_user",
      ])
      .innerJoin("users", "user", "barbecueUsers.user_id = user.id")
      .where("barbecueUsers.barbecue_id = :barbecue_id", { barbecue_id })
      .getRawMany();
  }

  async findParticipant(
    user_id: string,
    barbecue_id: string
  ): Promise<BarbecueUsers> {
    return this.repository.findOne({
      where: [{ user_id, barbecue_id }],
    });
  }

  async updatePayment(id: string): Promise<void> {
    await this.repository.update(id, { is_paid: true });
  }
}

export { BarbecueUsersRepository };
