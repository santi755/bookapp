export default interface TokenRepository {
  GetToken(): Promise<string>;
  SetToken(token: string): Promise<void>;
  DeleteToken(): Promise<void>;
}
