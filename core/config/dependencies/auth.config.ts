import { Container } from "inversify";
import { TYPES } from "@/core/config/types";

import type { TokenRepository } from "@/core/contexts/AuthContext/domain/TokenRepository";
import InMemoryTokenRepository from "@/core/contexts/AuthContext/infrastructure/repositories/InMemoryTokenRepository";

export const registerAuthDependencies = (container: Container) => {
  container
    .bind<TokenRepository>(TYPES.TokenRepository)
    .to(InMemoryTokenRepository);
};
