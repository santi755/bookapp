import { injectable } from "inversify";

import { TokenRepository } from "@/core/contexts/auth/domain/TokenRepository";

@injectable()
export default class InMemoryTokenRepository implements TokenRepository {
  private token: string | null = null;

  public async GetToken(): Promise<string> {
    return this.token ?? "";
  }

  public async SetToken(token: string): Promise<void> {
    console.log("El token es: ", token);
    this.token = token;
  }

  public async DeleteToken(): Promise<void> {
    this.token = null;
  }
}
