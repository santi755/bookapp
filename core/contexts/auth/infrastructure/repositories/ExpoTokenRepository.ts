import { injectable } from "inversify";
import * as SecureStore from "expo-secure-store";

import TokenRepository from "@/core/contexts/auth/domain/TokenRepository";

export const TOKEN_KEY = "token";

@injectable()
export default class InMemoryTokenRepository implements TokenRepository {
  public async getToken(): Promise<string | null> {
    try {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      return token;
    } catch (error) {
      console.error("Error al obtener el token del SecureStore", error);
      return null;
    }
  }

  public async setToken(token: string): Promise<void> {
    try {
      await SecureStore.setItemAsync(TOKEN_KEY, token);
    } catch (error) {
      console.error("Error al guardar el token en el SecureStore", error);
    }
  }

  public async removeToken(): Promise<void> {
    try {
      await SecureStore.deleteItemAsync(TOKEN_KEY);
    } catch (error) {
      console.error("Error al eliminar el token del SecureStore", error);
    }
  }
}
