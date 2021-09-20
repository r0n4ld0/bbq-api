import { ICreateBarbecueDTO } from "../dtos/ICreateBarbecueDTO";
import { Barbecue } from "../infra/typeorm/entities/Barbecue";

interface IBarbecuesRepository {
  create(data: ICreateBarbecueDTO): Promise<void>;
  list(): Promise<Barbecue[]>;
  findById(id: string): Promise<Barbecue>;
}

export { IBarbecuesRepository };
