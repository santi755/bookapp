import { injectable } from "inversify";
import * as SecureStore from "expo-secure-store";

import Token from "@/core/contexts/auth/domain/Token";
import TokenRepository from "@/core/contexts/auth/domain/TokenRepository";

export const TOKEN_KEY = "token";
export const REFRESH_TOKEN_KEY = "refresh_token";
export const REFRESH_TOKEN_EXPIRATION_KEY = "refresh_token_expiration";

@injectable()
export default class ExpoTokenRepository implements TokenRepository {
  public async getToken(): Promise<Token | null> {
    try {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      const refreshToken = await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);
      const refreshTokenExpiration = await SecureStore.getItemAsync(
        REFRESH_TOKEN_EXPIRATION_KEY
      );

      if (!token || !refreshToken || !refreshTokenExpiration) {
        throw new Error("Token no encontrado"); // TODO: crear excepcion
      }

      return {
        token,
        refresh_token: refreshToken,
        refresh_token_expiration: parseInt(refreshTokenExpiration),
      };
    } catch (error) {
      console.error("Error al obtener el token del SecureStore", error);
      return null;
    }
  }

  public async setToken(token: Token): Promise<void> {
    try {
      await SecureStore.setItemAsync(TOKEN_KEY, token.token);
      await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, token.refresh_token);
      await SecureStore.setItemAsync(
        REFRESH_TOKEN_EXPIRATION_KEY,
        token.refresh_token_expiration.toString()
      );
    } catch (error) {
      console.error("Error al guardar el token en el SecureStore", error);
    }
  }

  public async removeToken(): Promise<void> {
    try {
      await SecureStore.deleteItemAsync(TOKEN_KEY);
      await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
      await SecureStore.deleteItemAsync(REFRESH_TOKEN_EXPIRATION_KEY);
    } catch (error) {
      console.error("Error al eliminar el token del SecureStore", error);
    }
  }
}
