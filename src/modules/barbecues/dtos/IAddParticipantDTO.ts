interface IAddParticipantDTO {
  id?: string;
  user_id: string;
  barbecue_id: string;
  value: number;
  is_paid: boolean;
}

export { IAddParticipantDTO };
