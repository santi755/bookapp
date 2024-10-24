import Token from "@/core/contexts/auth/domain/Token";
export default interface TokenRepository {
  getToken(): Promise<Token | null>;
  setToken(token: Token): Promise<void>;
  removeToken(): Promise<void>;
}
