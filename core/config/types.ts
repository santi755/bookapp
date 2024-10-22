export const TYPES = {
  TokenRepository: Symbol.for("TokenRepository"),
  UserRepository: Symbol.for("UserRepository"),

  AuthenticateUserHandler: Symbol.for("AuthenticateUserHandler"),
  CheckUserLoggedInHandler: Symbol.for("CheckUserLoggedInHandler"),

  HttpConnector: Symbol.for("HttpConnector"),
};
