import { inject, injectable } from "inversify";

import { AuthenticateUser } from "@/core/contexts/auth/application/AuthenticateUser";
import { TYPES } from "@/core/config/types";
import type TokenRepository from "@/core/contexts/auth/domain/TokenRepository";
import type UserRepository from "@/core/contexts/auth/domain/UserRepository";

@injectable()
class AuthenticateUserHandler {
  @inject(TYPES.TokenRepository)
  private tokenRepository!: TokenRepository;

  @inject(TYPES.UserRepository)
  private userRepository!: UserRepository;

  public async execute(user: AuthenticateUser): Promise<void> {
    const token = await this.userRepository.LogIn(user.email, user.password);
    this.tokenRepository.setToken(token.token);
  }
}

export default AuthenticateUserHandler;
