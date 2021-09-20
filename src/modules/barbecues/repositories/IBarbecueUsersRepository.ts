import { IAddParticipantDTO } from "../dtos/IAddParticipantDTO";
import { BarbecueUsers } from "../infra/typeorm/entities/BarbecueUsers";

interface IBarbecueUsersRepository {
  addParticipant(data: IAddParticipantDTO): Promise<void>;
  removeParticipant(id: string): Promise<void>;
  findParticipant(user_id: string, barbecue_id: string): Promise<BarbecueUsers>;
  listParticipants(barbecue_id: string): Promise<BarbecueUsers[]>;
  updatePayment(id: string): Promise<void>;
}

export { IBarbecueUsersRepository };
