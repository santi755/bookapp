import { injectable } from "inversify";

import { AuthenticateUser } from "@/core/contexts/AuthContext/application/AuthenticateUser";

@injectable()
class AuthenticateUserHandler {
  public async execute(user: AuthenticateUser): Promise<void> {
    console.log("AuthenticateUserHandler.execute => ", user);
  }
}

export default AuthenticateUserHandler;
