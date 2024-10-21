import { Container } from "inversify";
import { TYPES } from "@/core/config/types";

import type TokenRepository from "@/core/contexts/auth/domain/TokenRepository";
import ExpoTokenRepository from "@/core/contexts/auth/infrastructure/repositories/ExpoTokenRepository";

import AuthenticateUserHandler from "@/core/contexts/auth/application/AuthenticateUserHandler";
import CheckUserLoggedInHandler from "@/core/contexts/auth/application/CheckUserLoggedInHandler";

export const registerAuthDependencies = (container: Container) => {
  container
    .bind<TokenRepository>(TYPES.TokenRepository)
    .to(ExpoTokenRepository)
    .inSingletonScope();

  container
    .bind<AuthenticateUserHandler>(TYPES.AuthenticateUserHandler)
    .to(AuthenticateUserHandler);

  container
    .bind<CheckUserLoggedInHandler>(TYPES.CheckUserLoggedInHandler)
    .to(CheckUserLoggedInHandler);
};
