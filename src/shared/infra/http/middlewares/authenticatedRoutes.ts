import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "../../../errors/AppError";

interface IPayload {
  sub: string;
}

export async function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const { authorization } = request.headers;
  const { JWT_SECRET } = process.env;

  if (!authorization) {
    throw new AppError("Token missing!");
  }

  const [, token] = authorization.split(" ");

  try {
    const { sub: user_id } = verify(token, JWT_SECRET) as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User doesn't exists!");
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new AppError("Invalid token!");
  }
}
