interface ICreateBarbecueDTO {
  id?: string;
  date: Date;
  description: string;
  observation?: string;
  value_with_drinks: number;
  value_without_drinks: number;
  user_id: string;
}

export { ICreateBarbecueDTO };
