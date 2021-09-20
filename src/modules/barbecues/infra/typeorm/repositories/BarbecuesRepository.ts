import { getRepository, Repository } from "typeorm";
import { ICreateBarbecueDTO } from "../../../dtos/ICreateBarbecueDTO";
import { IBarbecuesRepository } from "../../../repositories/IBarbecuesRepository";
import { Barbecue } from "../entities/Barbecue";
import { format } from "date-fns";

class BarbecuesRepository implements IBarbecuesRepository {
  private repository: Repository<Barbecue>;

  constructor() {
    this.repository = getRepository(Barbecue);
  }

  async create({
    date,
    description,
    observation,
    user_id,
    value_with_drinks,
    value_without_drinks,
  }: ICreateBarbecueDTO): Promise<void> {
    const barbecue = this.repository.create({
      date,
      description,
      observation,
      user_id,
      value_with_drinks,
      value_without_drinks,
    });

    await this.repository.save(barbecue);
  }

  async list(): Promise<Barbecue[]> {
    return await this.repository
      .createQueryBuilder("barbecues")
      .select([
        "barbecues.id id",
        "date",
        "description",
        "count(barbecueUsers.user_id) total_participants",
        "COALESCE(sum(barbecueUsers.value),0) amount",
      ])
      .leftJoin(
        "barbecue_users",
        "barbecueUsers",
        "barbecueUsers.barbecue_id = barbecues.id"
      )
      .where("barbecues.date >= :date", {
        date: format(new Date(), "YYY-MM-dd"),
      })
      .groupBy("barbecues.id, date, description")
      .orderBy("date")
      .getRawMany();
  }

  async findById(id: string): Promise<Barbecue> {
    return this.repository.findOne(id);
  }
}

export { BarbecuesRepository };
