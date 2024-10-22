import { Container } from "inversify";

import { registerAuthDependencies } from "@/core/config/dependencies/auth.config";
import { registerSharedDependencies } from "@/core/config/dependencies/shared.config";

const container = new Container();

registerAuthDependencies(container);
registerSharedDependencies(container);

export default container;
