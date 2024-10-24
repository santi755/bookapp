import { inject, injectable } from "inversify";
import { TYPES } from "@/core/config/types";

import UserRepository from "@/core/contexts/auth/domain/UserRepository";
import HttpConnector from "@/core/contexts/shared/infrastructure/http/HttpConnector";
import Token from "@/core/contexts/auth/domain/Token";

@injectable()
export default class FetchUserRepository implements UserRepository {
  @inject(TYPES.HttpConnector)
  private httpConnector!: HttpConnector;

  public async LogIn(email: string, password: string): Promise<Token> {
    const body = { email, password };
    const token = await this.httpConnector.post<Token>(
      "/api/auth/login",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return token;
  }
}
