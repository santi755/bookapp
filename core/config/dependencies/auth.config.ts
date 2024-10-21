import { Container } from "inversify";
import { TYPES } from "@/core/config/types";

import type TokenRepository from "@/core/contexts/auth/domain/TokenRepository";
import InMemoryTokenRepository from "@/core/contexts/auth/infrastructure/repositories/InMemoryTokenRepository";

import AuthenticateUserHandler from "@/core/contexts/auth/application/AuthenticateUserHandler";

export const registerAuthDependencies = (container: Container) => {
  container
    .bind<TokenRepository>(TYPES.TokenRepository)
    .to(InMemoryTokenRepository)
    .inSingletonScope();

  container
    .bind<AuthenticateUserHandler>(TYPES.AuthenticateUserHandler)
    .to(AuthenticateUserHandler);
};
