import { Container } from "inversify";
import { TYPES } from "@/core/config/types";

import type HttpConnector from "@/core/contexts/shared/infrastructure/http/HttpConnector";
import FetchHttpConnector from "@/core/contexts/shared/infrastructure/http/FetchHttpConnector";

export const registerSharedDependencies = (container: Container) => {
  container
    .bind<HttpConnector>(TYPES.HttpConnector)
    .to(FetchHttpConnector)
    .inSingletonScope();
};
