import { inject, injectable } from "inversify";

import { TYPES } from "@/core/config/types";
import type TokenRepository from "@/core/contexts/auth/domain/TokenRepository";

@injectable()
class CheckUserLoggedInHandler {
  @inject(TYPES.TokenRepository)
  private tokenRepository!: TokenRepository;

  public async execute(): Promise<void> {
    const token = await this.tokenRepository.getToken();

    if (token) {
      console.log("El token es: ", token);
    } else {
      console.log("No hay token");
    }
  }
}

export default CheckUserLoggedInHandler;
