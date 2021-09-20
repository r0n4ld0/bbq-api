import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

import { BarbecuesRepository } from "../../modules/barbecues/infra/typeorm/repositories/BarbecuesRepository";
import { IBarbecuesRepository } from "../../modules/barbecues/repositories/IBarbecuesRepository";

import { BarbecueUsersRepository } from "../../modules/barbecues/infra/typeorm/repositories/BarbecueUsersRepository";
import { IBarbecueUsersRepository } from "../../modules/barbecues/repositories/IBarbecueUsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IBarbecuesRepository>(
  "BarbecuesRepository",
  BarbecuesRepository
);

container.registerSingleton<IBarbecueUsersRepository>(
  "BarbecueUsersRepository",
  BarbecueUsersRepository
);
