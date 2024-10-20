import { Container } from "inversify";

import { registerAuthDependencies } from "@/core/config/dependencies/auth.config";

const container = new Container();

registerAuthDependencies(container);

export default container;
