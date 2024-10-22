import { inject, injectable } from "inversify";

import { AuthenticateUser } from "@/core/contexts/auth/application/AuthenticateUser";
import { TYPES } from "@/core/config/types";
import type TokenRepository from "@/core/contexts/auth/domain/TokenRepository";

@injectable()
class AuthenticateUserHandler {
  @inject(TYPES.TokenRepository)
  private tokenRepository!: TokenRepository;

  public async execute(user: AuthenticateUser): Promise<void> {
    this.tokenRepository.setToken("mitoken");
  }
}

export default AuthenticateUserHandler;
