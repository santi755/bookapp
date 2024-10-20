import { injectable } from "inversify";
import Constants from "expo-constants";

import { AuthenticateUser } from "@/core/contexts/AuthContext/application/AuthenticateUser";

@injectable()
class AuthenticateUserHandler {
  public async execute(user: AuthenticateUser): Promise<void> {
    const apiUrl = Constants.expoConfig?.extra?.apiUrl;
    console.log("AuthenticateUserHandler.execute => ", { user, apiUrl });
  }
}

export default AuthenticateUserHandler;
